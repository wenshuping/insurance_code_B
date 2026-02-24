import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Search,
  Megaphone,
  FileEdit,
  FileText,
  Scan,
  Users,
  BadgeCheck,
  ReceiptText,
  TrendingUp,
  Gift,
  LineChart,
  User,
  Briefcase,
  UserPlus,
  Bell,
  SlidersHorizontal,
  ChevronDown,
  MessageCircle,
  Tag,
  Plus,
  ArrowLeft,
  MoreVertical,
  Edit2,
  Save,
  GraduationCap,
  Gamepad2,
  CalendarCheck,
  ShoppingBasket,
  Filter,
  X,
  Sparkles,
  PlayCircle,
  Eye,
  Share2,
  MoreHorizontal,
  Wrench,
  Edit,
  PlusCircle,
  ArrowUpDown,
  Trash2,
  PartyPopper,
  TimerOff,
  LayoutDashboard,
  Activity,
  Settings,
  Camera,
  Contact2,
  ChevronRight,
  Lock,
  ShieldCheck,
  HelpCircle,
  Info,
  LogOut,
  HelpCircle as HelpOutline,
  CheckCircle2,
  Smartphone,
  ShieldAlert,
  Image as ImageIcon,
  QrCode,
  Flashlight,
  Keyboard,
  FileText as FileTextIcon,
  BriefcaseMedical,
  Car
} from 'lucide-react';

const CUSTOMERS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    intent: 3,
    tags: [
      { text: '高潜力', color: 'text-primary bg-primary/10' },
      { text: '人寿保险', color: 'text-emerald-600 bg-emerald-500/10' }
    ],
    activity: '2小时前完成了人寿保险课程'
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    intent: 1,
    tags: [
      { text: '养老规划', color: 'text-amber-600 bg-amber-500/10' },
      { text: 'VIP', color: 'text-slate-600 bg-slate-100' }
    ],
    activity: '下载了保单手册'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    intent: 2,
    tags: [
      { text: '新线索', color: 'text-purple-600 bg-purple-500/10' },
      { text: '车险', color: 'text-primary bg-primary/10' }
    ],
    activity: '留言咨询续保事宜'
  },
  {
    id: 4,
    name: 'David Thompson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    intent: 0,
    tags: [
      { text: '忠诚客户', color: 'text-slate-600 bg-slate-100' }
    ],
    activity: '昨日已收到最近一笔款项'
  }
];

const CONTENT_ITEMS = [
  {
    id: 1,
    title: '重疾险配置指南：避坑指南与实用案例分享',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=200&auto=format&fit=crop',
    status: '已发布',
    type: 'article',
    views: '1,280',
    shares: '456',
    order: 1
  },
  {
    id: 2,
    title: '保险理赔实操手册：3分钟看懂理赔流程',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=200&auto=format&fit=crop',
    status: '已发布',
    type: 'video',
    duration: '03:45',
    views: '892',
    shares: '112',
    order: 2
  }
];

const ACTIVITY_ITEMS = [
  {
    id: 1,
    title: '养老金规划测试',
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=400&auto=format&fit=crop',
    status: '已发布',
    participants: '1.2k',
    shares: '450',
    order: 1
  },
  {
    id: 2,
    title: '风险测评游戏',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop',
    status: '已发布',
    participants: '800',
    shares: '120',
    order: 2
  },
  {
    id: 3,
    title: '开单大礼包抽奖',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=400&auto=format&fit=crop',
    status: '未发布',
    participants: '0',
    shares: '0',
    order: 3
  }
];

const MALL_PRODUCTS = [
  {
    id: 1,
    title: '高端智能手表 Series 8',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=200&auto=format&fit=crop',
    order: 1
  },
  {
    id: 2,
    title: '降噪无线耳机 Pro',
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=200&auto=format&fit=crop',
    order: 2
  }
];

const MALL_ACTIVITIES = [
  {
    id: 1,
    title: '双十一积分倍增计划',
    icon: PartyPopper,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/10',
    order: 1,
    active: true
  },
  {
    id: 2,
    title: '新会员专享礼包 (已结束)',
    icon: TimerOff,
    iconColor: 'text-slate-500',
    iconBg: 'bg-slate-200',
    order: 2,
    active: false
  }
];

function SwipeableCard({ customer, onOpenTags }: { customer: typeof CUSTOMERS[0], onOpenTags: () => void }) {
  return (
    <div className="relative rounded-xl border border-slate-200 shadow-sm bg-slate-50 overflow-hidden">
      {/* Background Actions */}
      <div className="absolute inset-y-0 right-0 flex items-center justify-end px-4 gap-3">
        <button 
          onClick={onOpenTags}
          className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          <Tag className="w-5 h-5" />
        </button>
        <button className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors">
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Foreground Content */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -110, right: 0 }}
        dragElastic={0.1}
        className="relative bg-white p-4 flex items-start gap-3 z-10 rounded-xl cursor-grab active:cursor-grabbing border-r border-slate-100"
      >
        <div className="relative w-14 h-14 shrink-0 rounded-full bg-slate-200 overflow-hidden border-2 border-white">
          <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover pointer-events-none" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-semibold text-slate-900 truncate">{customer.name}</h3>
            <span className="text-sm shrink-0">{'🔥'.repeat(customer.intent)}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {customer.tags.map((tag, idx) => (
              <span key={idx} className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${tag.color}`}>
                {tag.text}
              </span>
            ))}
          </div>
          <p className="mt-2 text-sm text-slate-500 line-clamp-1 italic">"{customer.activity}"</p>
        </div>
      </motion.div>
    </div>
  );
}

function HomeView({ onOpenPolicyEntry, onOpenScanVerification }: { onOpenPolicyEntry: () => void, onOpenScanVerification: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-slate-200 shrink-0">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">工作台</h1>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
            <Search className="w-5 h-5 text-slate-600" />
          </button>
          <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6 pb-32 overflow-y-auto">
        {/* Dashboard Cards */}
        <section>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">客户总数</p>
              <p className="text-2xl font-bold mt-1 text-slate-900">1,240</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">今日活跃</p>
              <p className="text-2xl font-bold mt-1 text-primary">42</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-3 right-3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">高意向</p>
              <p className="text-2xl font-bold mt-1 text-slate-900">8</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">待办任务</p>
              <p className="text-2xl font-bold mt-1 text-slate-900">5</p>
            </div>
          </div>

          {/* Sparkline Chart */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-sm font-medium text-slate-500">7日客户活跃趋势</p>
                <p className="text-xl font-bold text-green-600 mt-1">+12.5%</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">近7天</span>
              </div>
            </div>
            <div className="h-16 w-full">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 60" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1152d4" stopOpacity="0.2"></stop>
                    <stop offset="100%" stopColor="#1152d4" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,45 Q40,10 80,35 T160,25 T240,45 T320,15 T400,30 V60 H0 Z" fill="url(#chartGradient)"></path>
                <path d="M0,45 Q40,10 80,35 T160,25 T240,45 T320,15 T400,30" fill="none" stroke="#1152d4" strokeLinecap="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <div className="flex justify-between mt-2 px-1">
              <span className="text-[10px] text-slate-400 font-bold">周一</span>
              <span className="text-[10px] text-slate-400 font-bold">周三</span>
              <span className="text-[10px] text-slate-400 font-bold">周五</span>
              <span className="text-[10px] text-slate-400 font-bold">周日</span>
            </div>
          </div>
        </section>

        {/* Efficiency Tools */}
        <section>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 px-1">效率工具</h2>
          <div className="flex justify-between px-2">
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 group-active:scale-95 transition-transform">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-700">新建推送</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-primary flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
                <FileEdit className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-700">创建活动</span>
            </button>
            <button onClick={onOpenPolicyEntry} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-primary flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-700">录入保单</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-primary flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
                <Scan className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-slate-700">扫一扫</span>
            </button>
          </div>
        </section>

        {/* Core Navigation */}
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-3 gap-y-6">
            <button className="flex flex-col items-center gap-2 group">
              <Users className="w-7 h-7 text-primary group-active:scale-95 transition-transform" />
              <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">客户管理</span>
            </button>
            <button onClick={onOpenScanVerification} className="flex flex-col items-center gap-2 group">
              <BadgeCheck className="w-7 h-7 text-indigo-500 group-active:scale-95 transition-transform" />
              <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">核销</span>
            </button>
            <button className="flex flex-col items-center gap-2 group">
              <ReceiptText className="w-7 h-7 text-blue-400 group-active:scale-95 transition-transform" />
              <span className="text-[11px] font-bold text-slate-700 text-center leading-tight">客户订单</span>
            </button>
          </div>
        </section>

        {/* Smart Dynamic Flow */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1 mb-1">
            <h2 className="text-sm font-bold text-slate-500 uppercase tracking-widest">智能提醒</h2>
            <button className="text-xs font-bold text-primary hover:text-primary/80 transition-colors">查看全部</button>
          </div>
          
          <div className="space-y-3">
            {/* Alert 1 */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    客户李阿姨 
                    <span className="text-[10px] text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded font-bold">高潜养老</span>
                  </p>
                  <span className="text-[10px] text-slate-400">2m ago</span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">刚刚完成了《养老金规划》课程学习，建议您立即跟进沟通。</p>
                <button className="mt-3 w-full py-2 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary/20 transition-colors">立即跟进</button>
              </div>
            </div>

            {/* Alert 2 */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-sm text-slate-900">王先生</p>
                  <span className="text-[10px] text-slate-400">1h ago</span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">为家人添加了保障成员，请核实详情。</p>
                <button className="mt-3 w-full py-2 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors">查看家庭成员</button>
              </div>
            </div>

            {/* Alert 3 */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-sm text-slate-900">赵女士</p>
                  <span className="text-[10px] text-slate-400">3h ago</span>
                </div>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">兑换了五常大米权益，积分已更新。</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function CustomersView({ onOpenProfile, onOpenTags }: { onOpenProfile: () => void, onOpenTags: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <header className="flex flex-col gap-4 p-4 pb-2 bg-white border-b border-slate-200 sticky top-0 z-10 shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">客户库</h1>
          <div className="flex gap-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <UserPlus className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="搜索客户姓名或保单..." 
              className="w-full h-11 pl-10 pr-4 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-primary text-sm placeholder:text-slate-500 outline-none"
            />
          </div>
          <button className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4">
          <button className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-primary text-white px-4 text-xs font-semibold">
            标签 <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-slate-100 text-slate-700 px-4 text-xs font-medium">
            意向度 <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-slate-100 text-slate-700 px-4 text-xs font-medium">
            互动 <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center gap-1 rounded-full bg-slate-100 text-slate-700 px-4 text-xs font-medium">
            等级 <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </header>

      {/* Customer List */}
      <main className="flex-1 overflow-y-auto p-4 space-y-3 pb-32">
        {CUSTOMERS.map(customer => (
          <SwipeableCard key={customer.id} customer={customer} onOpenTags={onOpenTags} />
        ))}
      </main>

      {/* Floating Action Button */}
      <button 
        onClick={onOpenProfile}
        className="absolute bottom-24 right-6 w-14 h-14 rounded-full bg-primary text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20"
      >
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}

function CustomerProfileView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light z-50 absolute inset-0">
      {/* Header Navigation */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 shrink-0">
        <div className="flex items-center justify-between px-4 h-16">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </button>
          <h1 className="text-lg font-bold text-slate-900">客户档案</h1>
          <button className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 text-slate-700" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 pb-32">
        {/* 1. Profile Card */}
        <section className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" 
                alt="Johnathan Doe" 
                className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Johnathan Doe</h2>
              <p className="text-sm text-slate-500">High Net Worth • Client since 2021</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs font-semibold px-3 py-1 bg-primary text-white rounded-full">活跃</span>
                <button className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full flex items-center gap-1">
                  <Edit2 className="w-3 h-3" /> 编辑
                </button>
              </div>
            </div>
          </div>
          
          {/* Private Note Box */}
          <div className="relative">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">业务员私有备注</label>
            <div className="relative group">
              <textarea 
                className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 min-h-[100px] transition-all resize-none outline-none text-slate-700" 
                placeholder="Add internal notes..."
                defaultValue="客户表示有兴趣在下季度扩大财富投资组合。偏好下午会议。儿子将于9月开始上大学。"
              ></textarea>
              <div className="absolute top-2 right-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <Save className="w-5 h-5" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Insurance Needs Radar Chart */}
        <section className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">保险需求分析</h3>
          <div className="relative aspect-square w-full max-w-[280px] mx-auto flex items-center justify-center rounded-full" style={{ background: 'radial-gradient(circle, rgba(17,82,212,0.05) 0%, rgba(255,255,255,0) 70%)' }}>
            <svg className="w-full h-full transform -rotate-18" viewBox="0 0 100 100">
              <polygon fill="none" stroke="#e2e8f0" strokeWidth="0.5" points="50,10 88,38 74,82 26,82 12,38"></polygon>
              <polygon fill="none" stroke="#e2e8f0" strokeWidth="0.5" points="50,20 78,41 68,74 32,74 22,41"></polygon>
              <polygon fill="none" stroke="#e2e8f0" strokeWidth="0.5" points="50,30 69,44 62,66 38,66 31,44"></polygon>
              <polygon fill="rgba(17,82,212,0.2)" stroke="#1152d4" strokeWidth="2" points="50,20 80,42 65,75 40,60 25,45"></polygon>
              <circle cx="50" cy="20" r="1.5" fill="#1152d4"></circle>
              <circle cx="80" cy="42" r="1.5" fill="#1152d4"></circle>
              <circle cx="65" cy="75" r="1.5" fill="#1152d4"></circle>
              <circle cx="40" cy="60" r="1.5" fill="#1152d4"></circle>
              <circle cx="25" cy="45" r="1.5" fill="#1152d4"></circle>
            </svg>
            <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-700">健康</span>
            <span className="absolute top-[35%] right-0 text-[10px] font-bold text-slate-700">人寿</span>
            <span className="absolute bottom-4 right-8 text-[10px] font-bold text-slate-700">养老</span>
            <span className="absolute bottom-4 left-8 text-[10px] font-bold text-slate-700">财富</span>
            <span className="absolute top-[35%] left-0 text-[10px] font-bold text-slate-700">意外</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-[10px] uppercase font-bold text-primary">保障缺口</p>
              <p className="text-lg font-bold text-primary mt-0.5">高</p>
              <p className="text-[10px] text-slate-500 mt-1">养老组合</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
              <p className="text-[10px] uppercase font-bold text-green-600">保障完善</p>
              <p className="text-lg font-bold text-green-600 mt-0.5">人寿</p>
              <p className="text-[10px] text-slate-500 mt-1">95% 保额上限</p>
            </div>
          </div>
        </section>

        {/* 3. Interaction Timeline */}
        <section className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">互动轨迹</h3>
            <button className="text-primary text-xs font-semibold">查看全部</button>
          </div>
          <div className="space-y-6 relative ml-2">
            {/* Timeline Line Background */}
            <div className="absolute left-[15px] top-8 bottom-8 w-0.5 bg-slate-100"></div>
            
            <div className="flex gap-4 relative">
              <div className="z-10 bg-primary/20 text-primary w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="flex-1 pb-2">
                <p className="text-sm font-semibold text-slate-900">已完成：养老规划课程</p>
                <p className="text-xs text-slate-500 mb-2 mt-0.5">最终得分：80% • 2小时前</p>
                <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="z-10 bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <Gamepad2 className="w-4 h-4" />
              </div>
              <div className="flex-1 pb-2">
                <p className="text-sm font-semibold text-slate-900">参与了风险迷宫游戏</p>
                <p className="text-xs text-slate-500 mt-0.5">得分：95/100 • 昨天</p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="z-10 bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <CalendarCheck className="w-4 h-4" />
              </div>
              <div className="flex-1 pb-2">
                <p className="text-sm font-semibold text-slate-900">每日签到：连续5天</p>
                <p className="text-xs text-slate-500 mt-0.5">获得+10积分奖励 • 2天前</p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="z-10 bg-slate-100 text-slate-600 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <ShoppingBasket className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">兑换：5kg 茉莉香米</p>
                <p className="text-xs text-slate-500 mt-0.5">订单号 #INS-9921 • 3天前</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Tag Management */}
        <section className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">标签与画像</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">VIP等级</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">养老意向</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">传承线索</span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">马拉松爱好者</span>
            <button className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 5. Points History */}
        <section className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="font-bold text-slate-900">积分流水</h3>
              <p className="text-xs text-slate-500 mt-0.5">当前余额: 2,450 pts</p>
            </div>
            <button className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-600">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-slate-400 uppercase tracking-wider border-b border-slate-50">
                <tr>
                  <th className="pb-3 font-semibold">活动</th>
                  <th className="pb-3 font-semibold text-right">积分</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr>
                  <td className="py-3">
                    <p className="font-medium text-slate-900">课程完成</p>
                    <p className="text-xs text-slate-400 mt-0.5">养老 101</p>
                  </td>
                  <td className="py-3 text-right text-green-600 font-bold">+50</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <p className="font-medium text-slate-900">礼券兑换</p>
                    <p className="text-xs text-slate-400 mt-0.5">生活用品</p>
                  </td>
                  <td className="py-3 text-right text-slate-900 font-bold">-200</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <p className="font-medium text-slate-900">风险迷宫游戏</p>
                    <p className="text-xs text-slate-400 mt-0.5">每周成就</p>
                  </td>
                  <td className="py-3 text-right text-green-600 font-bold">+100</td>
                </tr>
                <tr>
                  <td className="py-3">
                    <p className="font-medium text-slate-900">每日登录</p>
                    <p className="text-xs text-slate-400 mt-0.5">5天连签奖励</p>
                  </td>
                  <td className="py-3 text-right text-green-600 font-bold">+10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function TagEditorView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light z-50 absolute inset-0">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-primary/10 shrink-0">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={onBack} className="flex items-center justify-center p-2 rounded-full hover:bg-primary/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </button>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">编辑标签</h1>
          <button className="text-primary font-bold px-4 py-2 hover:bg-primary/10 rounded-lg transition-colors">保存</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-24">
        {/* Selected Tags Section */}
        <section className="p-4 bg-white mb-2">
          <h2 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">已选标签</h2>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm shadow-primary/20">
              VIP
              <X className="w-4 h-4 cursor-pointer" />
            </div>
            <div className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm shadow-primary/20">
              高潜力
              <X className="w-4 h-4 cursor-pointer" />
            </div>
            <div className="flex items-center gap-1 bg-primary text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm shadow-primary/20">
              重疾险意向
              <X className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-10 pr-4 py-3 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-sm outline-none" 
              placeholder="搜索标签..." 
            />
          </div>
        </div>

        {/* Recommended Tags (AI Suggested) */}
        <section className="px-4 py-4">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-sm font-bold text-slate-800">推荐标签 (AI)</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">
              养老规划
            </button>
            <button className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">
              教育金需求
            </button>
            <button className="bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-all">
              高净值
            </button>
          </div>
        </section>

        {/* Tag Library Categories */}
        <div className="space-y-6 mt-4 px-4">
          {/* Category: Customer Intent */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-primary rounded-full"></span>
              意向程度
            </h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">强意向</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">中等意向</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">观望中</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">无意向</button>
            </div>
          </section>

          {/* Category: Product Interest */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-primary rounded-full"></span>
              产品意向
            </h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">医疗险</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">年金险</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">家庭财产险</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">意外险</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">定期寿险</button>
            </div>
          </section>

          {/* Category: Family Status */}
          <section>
            <h3 className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-primary rounded-full"></span>
              家庭情况
            </h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">单身贵族</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">新婚夫妇</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">三口之家</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">二胎家庭</button>
              <button className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-sm hover:bg-slate-200 transition-colors">退休生活</button>
            </div>
          </section>
        </div>

        {/* Custom Tag Input */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200">
          <div className="max-w-md mx-auto flex items-center gap-3">
            <div className="flex-1 relative">
              <input 
                type="text" 
                className="w-full pl-4 pr-10 py-3 bg-slate-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary shadow-inner outline-none" 
                placeholder="添加自定义标签..." 
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center p-1.5 bg-primary text-white rounded-lg">
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ToolsView() {
  const [activeSubTab, setActiveSubTab] = useState('activities');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header Section */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shrink-0">
        <div className="flex items-center px-4 py-3">
          <h1 className="flex-1 text-center text-lg font-bold text-slate-900">获客工具</h1>
        </div>
        
        {/* Top Navigation Tabs */}
        <div className="flex px-4 border-b border-slate-100">
          <button 
            onClick={() => setActiveSubTab('content')}
            className={`flex-1 py-3 text-center text-sm transition-colors ${activeSubTab === 'content' ? 'font-bold text-primary border-b-2 border-primary' : 'font-medium text-slate-500 hover:text-primary'}`}
          >
            内容管理
          </button>
          <button 
            onClick={() => setActiveSubTab('activities')}
            className={`flex-1 py-3 text-center text-sm transition-colors ${activeSubTab === 'activities' ? 'font-bold text-primary border-b-2 border-primary' : 'font-medium text-slate-500 hover:text-primary'}`}
          >
            活动配置
          </button>
          <button 
            onClick={() => setActiveSubTab('mall')}
            className={`flex-1 py-3 text-center text-sm transition-colors ${activeSubTab === 'mall' ? 'font-bold text-primary border-b-2 border-primary' : 'font-medium text-slate-500 hover:text-primary'}`}
          >
            积分商城
          </button>
        </div>

        {/* Filters */}
        {activeSubTab !== 'mall' && (
          <div className="bg-white px-4 py-3 border-b border-slate-100">
            <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar">
              <span className="text-xs font-medium text-slate-400 whitespace-nowrap mr-1">状态:</span>
              <button className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">全部</button>
              <button className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">已发布</button>
              <button className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">未发布</button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 overflow-y-auto p-4 pb-32 space-y-4">
        {activeSubTab === 'content' && (
          <>
            {CONTENT_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                <div className="flex gap-3">
                  <div 
                    className="w-24 h-24 rounded-lg bg-cover bg-center shrink-0 relative" 
                    style={{ backgroundImage: `url('${item.image}')` }}
                  >
                    {item.type === 'video' ? (
                      <>
                        <span className="absolute top-1 left-1 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                          <PlayCircle className="w-3 h-3" />视频
                        </span>
                        <span className="absolute bottom-1 right-1 bg-black/50 text-white text-[10px] px-1 rounded">{item.duration}</span>
                      </>
                    ) : (
                      <span className="absolute top-1 left-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">{item.status}</span>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm leading-tight line-clamp-2 text-slate-900">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {item.views}</span>
                        <span className="flex items-center gap-1"><Share2 className="w-3 h-3" /> {item.shares}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                        <span className="text-[10px] text-slate-500">排序:</span>
                        <input 
                          type="number" 
                          defaultValue={item.order} 
                          className="w-8 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0 outline-none" 
                        />
                      </div>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {activeSubTab === 'activities' && (
          <>
            {ACTIVITY_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                <div 
                  className="relative h-40 w-full bg-slate-200" 
                  style={{ backgroundImage: `url('${item.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className={`absolute top-3 right-3 text-white px-2 py-0.5 rounded-lg text-xs font-medium ${item.status === '已发布' ? 'bg-primary' : 'bg-slate-400'}`}>
                    {item.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-3 text-slate-900">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{item.participants} 参与</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        <span>{item.shares} 分享</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded text-xs border border-slate-100">
                        <span className="text-slate-400">排序:</span>
                        <input 
                          type="number" 
                          defaultValue={item.order} 
                          className="w-6 bg-transparent border-none p-0 text-xs font-bold text-primary focus:ring-0 outline-none text-center" 
                        />
                      </div>
                      <button className="flex items-center gap-1 text-primary text-sm font-medium hover:text-primary/80 transition-colors">
                        <Edit className="w-4 h-4" />
                        编辑
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {activeSubTab === 'mall' && (
          <div className="space-y-6">
            {/* Product Shelf Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                  <span className="w-1 h-5 bg-primary rounded-full"></span>
                  商品货架
                </h2>
                <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:bg-primary/10 px-2 py-1 rounded-lg transition-colors">
                  <PlusCircle className="w-4 h-4" />
                  添加商品
                </button>
              </div>
              <div className="space-y-3">
                {MALL_PRODUCTS.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <div 
                      className="h-14 w-14 rounded-lg bg-slate-100 flex-shrink-0 bg-cover bg-center" 
                      style={{ backgroundImage: `url('${product.image}')` }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate text-slate-900">{product.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-slate-500">排序:</span>
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">{product.order}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="text-slate-400 hover:text-primary transition-colors">
                        <ArrowUpDown className="w-5 h-5" />
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <div className="h-2 bg-slate-50 border-y border-slate-100 -mx-4"></div>

            {/* Activity Shelf Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
                  <span className="w-1 h-5 bg-primary rounded-full"></span>
                  活动货架
                </h2>
                <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:bg-primary/10 px-2 py-1 rounded-lg transition-colors">
                  <PlusCircle className="w-4 h-4" />
                  添加活动
                </button>
              </div>
              <div className="space-y-3">
                {MALL_ACTIVITIES.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className={`flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm ${!activity.active ? 'opacity-60' : ''}`}>
                      <div className={`h-14 w-14 rounded-lg ${activity.iconBg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${activity.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold truncate ${!activity.active ? 'text-slate-500' : 'text-slate-900'}`}>{activity.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-400">排序:</span>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${activity.active ? 'text-primary bg-primary/10' : 'text-slate-500 bg-slate-100'}`}>
                            {activity.order}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Empty State Hint */}
              <div className="mt-6 p-6 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center">
                <LayoutDashboard className="w-10 h-10 text-slate-300 mb-2" />
                <p className="text-sm text-slate-400">拖动列表项可快速调整显示顺序</p>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Floating Action Button or Bottom Action Bar */}
      {activeSubTab === 'mall' ? (
        <div className="absolute bottom-[4.5rem] left-0 right-0 bg-white/90 backdrop-blur-md p-4 border-t border-slate-200 flex gap-3 z-40">
          <button className="flex-1 h-12 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
            预览商城
          </button>
          <button className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">
            保存配置
          </button>
        </div>
      ) : (
        <button className="absolute right-6 bottom-24 z-40 bg-primary text-white w-14 h-14 rounded-full shadow-lg shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform">
          <Plus className="w-8 h-8" />
        </button>
      )}
    </div>
  );
}

function AnalyticsView() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shrink-0">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="w-10"></div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">数据中心</h1>
          <div className="w-10 flex justify-end">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border border-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Sub-navigation */}
        <div className="flex px-4 gap-6 overflow-x-auto hide-scrollbar">
          <button className="border-b-2 border-primary py-3 text-primary text-sm font-bold whitespace-nowrap">客户概览</button>
          <button className="border-b-2 border-transparent py-3 text-slate-500 text-sm font-medium whitespace-nowrap">内容效果</button>
          <button className="border-b-2 border-transparent py-3 text-slate-500 text-sm font-medium whitespace-nowrap">活动效果</button>
          <button className="border-b-2 border-transparent py-3 text-slate-500 text-sm font-medium whitespace-nowrap">签到分析</button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-6 pb-32">
        {/* Section 1: 客户概览 */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900">客户概览</h2>
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">最近30天</span>
          </div>
          
          {/* Line Chart: 客户增长趋势 */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <div className="mb-4">
              <p className="text-sm text-slate-500">客户增长趋势</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-slate-900">12,840</span>
                <span className="text-emerald-500 text-sm font-medium">+12.5%</span>
              </div>
            </div>
            <div className="h-40 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1152d4" stopOpacity="0.2"></stop>
                    <stop offset="100%" stopColor="#1152d4" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path d="M0,120 Q50,110 80,60 T160,80 T240,30 T320,50 T400,20 L400,150 L0,150 Z" fill="url(#chartGradient2)"></path>
                <path d="M0,120 Q50,110 80,60 T160,80 T240,30 T320,50 T400,20" fill="none" stroke="#1152d4" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
              <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium">
                <span>05-01</span><span>05-10</span><span>05-20</span><span>05-30</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {/* Bar Chart: 客户标签分布 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-4">客户标签分布</p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-700"><span>高价值客户</span><span>45%</span></div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-700"><span>潜在意向</span><span>30%</span></div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary/60 h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-slate-700"><span>新获客</span><span>15%</span></div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary/40 h-full rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heat Map Placeholder: 客户活跃时段 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-4">客户活跃时段 (7x24h)</p>
              <div className="grid grid-cols-12 gap-1">
                {/* Simplified Heatmap visualization */}
                <div className="col-span-12 grid grid-cols-12 gap-1">
                  <div className="aspect-square bg-primary/10 rounded-sm"></div>
                  <div className="aspect-square bg-primary/20 rounded-sm"></div>
                  <div className="aspect-square bg-primary/5 rounded-sm"></div>
                  <div className="aspect-square bg-primary/40 rounded-sm"></div>
                  <div className="aspect-square bg-primary/80 rounded-sm"></div>
                  <div className="aspect-square bg-primary/90 rounded-sm"></div>
                  <div className="aspect-square bg-primary/60 rounded-sm"></div>
                  <div className="aspect-square bg-primary/30 rounded-sm"></div>
                  <div className="aspect-square bg-primary/10 rounded-sm"></div>
                  <div className="aspect-square bg-primary/5 rounded-sm"></div>
                  <div className="aspect-square bg-primary/20 rounded-sm"></div>
                  <div className="aspect-square bg-primary/10 rounded-sm"></div>
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-1 mt-1">
                  <div className="aspect-square bg-primary/5 rounded-sm"></div>
                  <div className="aspect-square bg-primary/10 rounded-sm"></div>
                  <div className="aspect-square bg-primary/30 rounded-sm"></div>
                  <div className="aspect-square bg-primary/60 rounded-sm"></div>
                  <div className="aspect-square bg-primary/100 rounded-sm"></div>
                  <div className="aspect-square bg-primary/90 rounded-sm"></div>
                  <div className="aspect-square bg-primary/70 rounded-sm"></div>
                  <div className="aspect-square bg-primary/40 rounded-sm"></div>
                  <div className="aspect-square bg-primary/20 rounded-sm"></div>
                  <div className="aspect-square bg-primary/5 rounded-sm"></div>
                  <div className="aspect-square bg-primary/5 rounded-sm"></div>
                  <div className="aspect-square bg-primary/10 rounded-sm"></div>
                </div>
              </div>
              <div className="flex justify-between mt-3 text-[10px] text-slate-400">
                <span>00:00</span><span>12:00</span><span>23:59</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 内容效果分析 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">内容效果分析</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-sm font-bold text-slate-900">Top 10 内容效果</span>
              <button className="text-primary text-xs font-medium hover:text-primary/80">查看全部</button>
            </div>
            <div className="p-4 space-y-5">
              {/* Data Row 1 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium truncate w-40 text-slate-900">2024年家庭保障规划指南</span>
                  <span className="text-xs text-slate-400">发送: 1,240</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] text-slate-400">打开率 68%</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] text-slate-400">完读率 42%</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Data Row 2 */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium truncate w-40 text-slate-900">重疾险新规深度解析</span>
                  <span className="text-xs text-slate-400">发送: 980</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] text-slate-400">打开率 54%</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: '54%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-[10px] text-slate-400">完读率 31%</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '31%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 活动效果分析 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">活动效果分析</h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase font-bold">
                  <tr>
                    <th className="px-4 py-3 whitespace-nowrap">活动名称</th>
                    <th className="px-4 py-3 whitespace-nowrap">参与人数</th>
                    <th className="px-4 py-3 whitespace-nowrap">人均次数</th>
                    <th className="px-4 py-3 whitespace-nowrap">分享率</th>
                    <th className="px-4 py-3 whitespace-nowrap">积分成本</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">六一亲子嘉年华</td>
                    <td className="px-4 py-4 text-slate-700">425</td>
                    <td className="px-4 py-4 text-slate-700">2.4</td>
                    <td className="px-4 py-4 text-primary font-medium">12%</td>
                    <td className="px-4 py-4 text-slate-500">2,100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">端午安康抽奖</td>
                    <td className="px-4 py-4 text-slate-700">1,120</td>
                    <td className="px-4 py-4 text-slate-700">1.8</td>
                    <td className="px-4 py-4 text-primary font-medium">28%</td>
                    <td className="px-4 py-4 text-slate-500">5,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-medium text-slate-900">养生讲座线上版</td>
                    <td className="px-4 py-4 text-slate-700">186</td>
                    <td className="px-4 py-4 text-slate-700">1.2</td>
                    <td className="px-4 py-4 text-primary font-medium">5%</td>
                    <td className="px-4 py-4 text-slate-500">800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 4: 签到深度分析 */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">签到深度分析</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Radar Chart Visual: 签到习惯 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-4">签到习惯 (周几最活跃)</p>
              <div className="flex items-center justify-center py-4">
                <div className="relative w-40 h-40 border border-slate-200 rounded-full flex items-center justify-center">
                  {/* Simple SVG Radar visualization */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-slate-200" cx="50" cy="50" fill="none" r="40" stroke="currentColor" strokeDasharray="2 2"></circle>
                    <circle className="text-slate-200" cx="50" cy="50" fill="none" r="25" stroke="currentColor" strokeDasharray="2 2"></circle>
                    <polygon fill="rgba(17, 82, 212, 0.2)" points="50,10 85,35 75,75 50,90 25,75 15,35" stroke="#1152d4" strokeWidth="2"></polygon>
                  </svg>
                  <span className="absolute -top-2 text-[10px] font-bold text-slate-700">周一</span>
                  <span className="absolute -right-2 text-[10px] font-bold text-slate-700">周三</span>
                  <span className="absolute -bottom-2 text-[10px] font-bold text-slate-700">周五</span>
                  <span className="absolute -left-2 text-[10px] font-bold text-slate-700">周日</span>
                </div>
              </div>
            </div>
            
            {/* Warning List: 断签预警客户 */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <p className="text-sm text-slate-500 mb-4">断签预警客户</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
                      alt="User" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">张美琳</p>
                      <p className="text-[10px] text-slate-400">已断签 2天</p>
                    </div>
                  </div>
                  <button className="text-xs bg-primary text-white px-3 py-1 rounded-full font-medium hover:bg-primary/90 transition-colors">去提醒</button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" 
                      alt="User" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">李建国</p>
                      <p className="text-[10px] text-slate-400">已断签 3天</p>
                    </div>
                  </div>
                  <button className="text-xs bg-primary text-white px-3 py-1 rounded-full font-medium hover:bg-primary/90 transition-colors">去提醒</button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" 
                      alt="User" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-bold text-slate-900">王小明</p>
                      <p className="text-[10px] text-slate-400">已断签 1天</p>
                    </div>
                  </div>
                  <button className="text-xs bg-primary text-white px-3 py-1 rounded-full font-medium hover:bg-primary/90 transition-colors">去提醒</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProfileView() {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white">
      {/* Header / Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">个人中心</h1>
        <button className="text-slate-500 hover:text-primary transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>
      
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Profile Info Section */}
        <div className="px-6 py-8 flex flex-col items-center text-center">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full border-4 border-primary/10 overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
                alt="User Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg border-2 border-white">
              <Camera className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-slate-900">张三</h2>
              <button className="text-primary/60 hover:text-primary transition-colors">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <p className="text-slate-500 text-sm font-medium">工号：9527 | 华东销售中心</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="px-6 mb-8">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-700">个人简介</span>
              <span className="text-xs text-slate-400">0/200</span>
            </div>
            <textarea 
              className="w-full bg-transparent border-none p-0 focus:ring-0 text-sm text-slate-600 resize-none placeholder:text-slate-400 outline-none" 
              maxLength={200} 
              placeholder="简单介绍一下你自己吧..." 
              rows={3}
            ></textarea>
          </div>
        </div>

        {/* Business Card Entry */}
        <div className="px-6 mb-8">
          <button className="w-full flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all group">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg text-primary">
                <Contact2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-bold text-slate-800">电子名片</p>
                <p className="text-xs text-primary/70">快速分享您的职业信息</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Settings List */}
        <div className="px-6 space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">核心设置</div>
          
          <button className="w-full flex items-center justify-between py-4 border-b border-slate-50 hover:px-2 transition-all">
            <div className="flex items-center gap-4">
              <Lock className="w-5 h-5 text-slate-400" />
              <span className="text-[15px] font-medium text-slate-700">账号安全</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
          
          <button className="w-full flex items-center justify-between py-4 border-b border-slate-50 hover:px-2 transition-all">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-5 h-5 text-slate-400" />
              <span className="text-[15px] font-medium text-slate-700">隐私设置</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
          
          <button className="w-full flex items-center justify-between py-4 border-b border-slate-50 hover:px-2 transition-all">
            <div className="flex items-center gap-4">
              <HelpCircle className="w-5 h-5 text-slate-400" />
              <span className="text-[15px] font-medium text-slate-700">帮助与反馈</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
          
          <button className="w-full flex items-center justify-between py-4 border-b border-slate-50 hover:px-2 transition-all">
            <div className="flex items-center gap-4">
              <Info className="w-5 h-5 text-slate-400" />
              <span className="text-[15px] font-medium text-slate-700">关于我们</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300" />
          </button>
        </div>

        {/* Logout Button */}
        <div className="px-6 mt-10">
          <button className="w-full py-3.5 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
            <LogOut className="w-5 h-5" />
            退出登录
          </button>
        </div>
      </div>
    </div>
  );
}

function PolicyEntryView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light z-50 absolute inset-0">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shrink-0">
        <button onClick={onBack} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-700" />
        </button>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">上传保单</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors">
          <HelpOutline className="w-6 h-6 text-slate-700" />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-32">
        {/* OCR Scanning Section */}
        <section className="p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">拍照自动识别</h2>
            <p className="text-slate-500 text-sm mt-1">系统将自动提取保单关键信息，省时省力</p>
          </div>
          <div className="relative group cursor-pointer">
            <div className="w-full aspect-[16/9] rounded-xl border-2 border-dashed border-primary/40 bg-white flex flex-col items-center justify-center gap-3 overflow-hidden transition-all hover:border-primary active:scale-[0.98]">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                <Camera className="w-10 h-10" />
              </div>
              <span className="text-lg font-bold text-primary">点击拍照上传</span>
              <p className="text-sm text-slate-400">支持纸质保单拍照或相册图片</p>
              
              {/* Decorative Corners */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-slate-400 text-sm font-medium">或 手动输入详情</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
        </div>

        {/* Manual Form Section */}
        <form className="p-4 space-y-6">
          {/* Basic Info */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-slate-700">保险公司</span>
                <div className="relative">
                  <select className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary appearance-none px-4 pr-10 h-14 text-lg outline-none">
                    <option value="">请选择保险公司</option>
                    <option>中国平安保险</option>
                    <option>中国人寿保险</option>
                    <option>太平洋保险</option>
                    <option>友邦保险</option>
                    <option>其他</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-6 h-6" />
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-slate-700">保险名称</span>
                <input className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary px-4 h-14 text-lg outline-none" placeholder="输入保单上的险种全称" type="text" />
              </label>
            </div>
          </div>

          {/* Person Info */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-700">投保人</span>
              <input className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary px-4 h-14 text-lg outline-none" placeholder="姓名" type="text" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-700">被保险人</span>
              <input className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary px-4 h-14 text-lg outline-none" placeholder="姓名" type="text" />
            </label>
          </div>

          {/* Temporal Info */}
          <div className="space-y-4">
            <label className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-700">投保时间</span>
              <div className="relative">
                <input className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary px-4 h-14 text-lg outline-none" type="date" />
              </div>
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-slate-700">缴费期间</span>
                <div className="relative">
                  <select className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary appearance-none px-4 pr-10 h-14 text-lg outline-none">
                    <option>趸交</option>
                    <option>5年交</option>
                    <option>10年交</option>
                    <option>20年交</option>
                    <option>30年交</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-base font-bold text-slate-700">保障期间</span>
                <div className="relative">
                  <select className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary appearance-none px-4 pr-10 h-14 text-lg outline-none">
                    <option>终身</option>
                    <option>20年</option>
                    <option>30年</option>
                    <option>至70岁</option>
                    <option>至80岁</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 w-5 h-5" />
                </div>
              </label>
            </div>
          </div>

          {/* Financial Info */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-700">保额 (元)</span>
              <input className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary px-4 h-14 text-lg font-semibold outline-none" placeholder="0.00" type="number" />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-700">首期保费 (元)</span>
              <input className="w-full rounded-xl border-slate-200 bg-white focus:border-primary focus:ring-primary px-4 h-14 text-lg font-semibold outline-none" placeholder="0.00" type="number" />
            </label>
          </div>
        </form>
      </main>

      {/* Fixed Bottom Action Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
        <div className="p-4 max-w-md mx-auto">
          <button className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-transform active:scale-95">
            <CheckCircle2 className="w-6 h-6" />
            确认并提交
          </button>
          <p className="text-center text-[10px] text-slate-400 mt-3 px-4 italic">提交即代表您同意《保单托管服务协议》及《隐私条款》</p>
        </div>
      </div>
    </div>
  );
}

function ScanVerificationView({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light z-50 absolute inset-0">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-10 shrink-0">
        <button onClick={onBack} className="flex w-10 h-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors">
          <ArrowLeft className="w-6 h-6 text-slate-900" />
        </button>
        <h1 className="text-lg font-bold flex-1 text-center pr-10 text-slate-900">核销中心</h1>
      </header>

      {/* Main Content (Scanner Area) */}
      <main className="flex-1 flex flex-col overflow-y-auto pb-32">
        {/* Scanner Container */}
        <div className="relative aspect-square w-full bg-slate-900 overflow-hidden flex items-center justify-center shrink-0">
          {/* Camera Feed Mockup */}
          <div 
            className="absolute inset-0 opacity-40 bg-cover bg-center" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop')` }}
          ></div>
          
          {/* Scan Overlay */}
          <div className="relative z-10 w-64 h-64 border-2 border-white/20 rounded-lg">
            {/* Corners */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-primary rounded-tl-lg"></div>
            <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-primary rounded-tr-lg"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-primary rounded-bl-lg"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-primary rounded-br-lg"></div>
            
            {/* Scan Line (Animated with CSS in a real app, static here) */}
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent top-1/2 shadow-[0_0_8px_#1152d4]"></div>
          </div>
          
          {/* Scanner Controls Overlay */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-8 z-20">
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-primary transition-colors">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-white/80">相册</span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <QrCode className="w-8 h-8" />
              </div>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-primary transition-colors">
                <Flashlight className="w-6 h-6" />
              </div>
              <span className="text-[10px] text-white/80">手电筒</span>
            </button>
          </div>
          <p className="absolute top-10 w-full text-center text-white/70 text-sm px-10">将核销二维码/条形码放入框内即可自动扫描</p>
        </div>

        {/* Manual Input Button */}
        <div className="px-4 py-6 shrink-0">
          <button className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 rounded-xl text-primary font-semibold transition-colors">
            <Keyboard className="w-5 h-5" />
            <span>手动输入核销码</span>
          </button>
        </div>

        {/* Recent Records */}
        <div className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900">最近核销记录</h3>
            <button className="text-primary text-sm font-medium">查看更多</button>
          </div>
          <div className="space-y-3">
            {/* Record Item 1 */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FileTextIcon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-slate-900 truncate">张晓明</p>
                  <span className="text-[10px] text-slate-400">刚刚</span>
                </div>
                <p className="text-sm text-slate-500 truncate">体检礼券 - 铂金会员专属</p>
              </div>
              <div className="text-right">
                <span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold">已核销</span>
              </div>
            </div>
            
            {/* Record Item 2 */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <BriefcaseMedical className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-slate-900 truncate">李佳慧</p>
                  <span className="text-[10px] text-slate-400">10:45</span>
                </div>
                <p className="text-sm text-slate-500 truncate">口腔护理套餐 B</p>
              </div>
              <div className="text-right">
                <span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold">已核销</span>
              </div>
            </div>
            
            {/* Record Item 3 */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm opacity-70">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Car className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="font-bold text-slate-900 truncate">王建国</p>
                  <span className="text-[10px] text-slate-400">昨天</span>
                </div>
                <p className="text-sm text-slate-500 truncate">机场接送券 - 商务通</p>
              </div>
              <div className="text-right">
                <span className="inline-flex px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold">已核销</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function LoginView({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light z-50 absolute inset-0">
      <div className="flex items-center p-4 pb-2 justify-between">
        <div className="w-10">
          <ArrowLeft className="w-6 h-6 text-slate-900 cursor-pointer" />
        </div>
        <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight flex-1 text-center">保险经纪人办公中心</h2>
        <div className="w-10"></div>
      </div>
      
      <div className="flex flex-col px-6 pt-12 pb-8">
        <h1 className="text-slate-900 tracking-tight text-3xl font-bold leading-tight">欢迎登录</h1>
        <p className="text-slate-500 mt-2 text-sm">专业、高效的经纪人移动展业平台</p>
      </div>
      
      <div className="flex flex-col gap-6 px-6 py-4 max-w-md mx-auto w-full">
        <div className="flex flex-col w-full">
          <p className="text-slate-800 text-sm font-semibold leading-normal pb-2">手机号</p>
          <div className="relative flex items-center">
            <Smartphone className="absolute left-4 text-slate-400 w-5 h-5" />
            <input 
              className="flex w-full rounded-xl text-slate-900 border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary h-14 pl-12 pr-4 text-base font-normal placeholder:text-slate-400 outline-none" 
              placeholder="请输入手机号" 
              type="tel"
            />
          </div>
        </div>
        
        <div className="flex flex-col w-full">
          <p className="text-slate-800 text-sm font-semibold leading-normal pb-2">验证码</p>
          <div className="flex w-full items-stretch gap-2">
            <div className="relative flex-1">
              <ShieldAlert className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                className="flex w-full rounded-xl text-slate-900 border border-slate-200 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary h-14 pl-12 pr-4 text-base font-normal placeholder:text-slate-400 outline-none" 
                placeholder="请输入验证码" 
                type="number"
              />
            </div>
            <button className="flex items-center justify-center rounded-xl px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold whitespace-nowrap min-w-[100px]">
              获取验证码
            </button>
          </div>
        </div>
        
        <div className="flex flex-col pt-4">
          <button 
            onClick={onLogin}
            className="flex w-full cursor-pointer items-center justify-center rounded-xl h-14 px-5 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
          >
            登 录
          </button>
        </div>
        
        <div className="flex items-center justify-between text-sm mt-2">
          <button className="text-slate-500 hover:text-primary transition-colors">密码登录</button>
          <button className="text-slate-500 hover:text-primary transition-colors">忘记密码？</button>
        </div>
      </div>
      
      <div className="mt-auto flex flex-col items-center px-8 py-8 w-full">
        <label className="flex items-start gap-2 cursor-pointer">
          <input 
            defaultChecked 
            className="mt-1 rounded border-slate-300 text-primary focus:ring-primary" 
            type="checkbox"
          />
          <span className="text-xs text-slate-500 leading-relaxed text-center">
            我已阅读并同意
            <button className="text-primary font-medium">《用户服务协议》</button>
            、
            <button className="text-primary font-medium">《隐私政策》</button>
            以及
            <button className="text-primary font-medium">《保险代理合同》</button>
          </span>
        </label>
        <div className="mt-4 text-[10px] text-slate-400">
          Powered by Insurance WorkCenter v3.4.0
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon: Icon, label, isActive, onClick }: { icon: any, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-colors ${isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-600'}`}
    >
      <Icon className={`w-6 h-6 ${isActive ? 'fill-primary/20' : ''}`} />
      <span className={`text-[10px] ${isActive ? 'font-bold' : 'font-medium'}`}>{label}</span>
    </button>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [showTagEditor, setShowTagEditor] = useState(false);
  const [showPolicyEntry, setShowPolicyEntry] = useState(false);
  const [showScanVerification, setShowScanVerification] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto bg-background-light min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        <LoginView onLogin={() => setIsLoggedIn(true)} />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-background-light min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
      {showProfile ? (
        <CustomerProfileView onBack={() => setShowProfile(false)} />
      ) : showTagEditor ? (
        <TagEditorView onBack={() => setShowTagEditor(false)} />
      ) : showPolicyEntry ? (
        <PolicyEntryView onBack={() => setShowPolicyEntry(false)} />
      ) : showScanVerification ? (
        <ScanVerificationView onBack={() => setShowScanVerification(false)} />
      ) : (
        <>
          {activeTab === 'home' && <HomeView onOpenPolicyEntry={() => setShowPolicyEntry(true)} onOpenScanVerification={() => setShowScanVerification(true)} />}
          {activeTab === 'customers' && <CustomersView onOpenProfile={() => setShowProfile(true)} onOpenTags={() => setShowTagEditor(true)} />}
          {activeTab === 'tools' && <ToolsView />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'profile' && <ProfileView />}
          {activeTab !== 'home' && activeTab !== 'customers' && activeTab !== 'tools' && activeTab !== 'analytics' && activeTab !== 'profile' && (
            <div className="flex-1 flex items-center justify-center text-slate-400">
              <p>页面开发中...</p>
            </div>
          )}
          
          {/* Bottom Navigation */}
          <nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex justify-around items-center z-50 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <NavItem icon={Briefcase} label="工作台" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavItem icon={Users} label="客户库" isActive={activeTab === 'customers'} onClick={() => setActiveTab('customers')} />
            <NavItem icon={Wrench} label="获客工具" isActive={activeTab === 'tools'} onClick={() => setActiveTab('tools')} />
            <NavItem icon={LineChart} label="决策" isActive={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')} />
            <NavItem icon={User} label="我的" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
          </nav>
        </>
      )}
    </div>
  );
}
