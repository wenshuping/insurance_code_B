const API_BASE = (import.meta as any).env?.VITE_API_BASE_URL || 'http://127.0.0.1:4000';

type ReqInit = RequestInit & { bodyJson?: unknown };

async function request<T>(path: string, init: ReqInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'x-actor-type': 'agent',
    'x-actor-id': '8001',
    'x-tenant-id': '1',
    'x-team-id': '1',
    ...(init.headers as Record<string, string>),
  };
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers,
    body: init.bodyJson === undefined ? init.body : JSON.stringify(init.bodyJson),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error((data as any)?.message || `HTTP_${res.status}`);
    (err as any).code = (data as any)?.code || `HTTP_${res.status}`;
    throw err;
  }
  return data as T;
}

export type BCustomer = {
  id: number;
  name: string;
  mobile: string;
  ownerUserId: number;
  tenantId: number;
  orgId: number;
  teamId: number;
};

export type BOrder = {
  id: number;
  customerId: number;
  productName: string;
  status: string;
  fulfillmentStatus: string;
  paymentStatus: string;
  pointsAmount: number;
  orderNo: string;
};

type TrackPayload = {
  event: string;
  properties?: Record<string, unknown>;
};

export const bApi = {
  customers: () => request<{ list: BCustomer[] }>('/api/b/customers'),
  orders: () => request<{ list: BOrder[] }>('/api/b/orders'),
  writeoff: (id: number, token = '') => request<{ ok: boolean }>(`/api/b/orders/${id}/writeoff`, { method: 'POST', bodyJson: { token } }),
};

export function trackEvent(payload: TrackPayload): Promise<{ ok: boolean }> {
  return request<{ ok: boolean }>('/api/track/events', {
    method: 'POST',
    headers: {
      'x-client-source': 'b-web',
      'x-client-path': typeof window === 'undefined' ? '' : window.location.pathname,
    },
    bodyJson: payload,
  });
}
