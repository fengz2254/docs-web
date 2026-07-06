import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  ChevronDown,
  Sun,
  Moon,
  Menu,
  FileText,
  Rocket,
  Users,
  Settings,
  CreditCard,
  Video,
  MonitorPlay,
  Megaphone,
  UserCheck,
  Wifi,
  History,
  ShieldCheck,
  Command,
  ArrowUpRight,
  Info,
  CheckCircle2,
  Image as ImageIcon,
  MousePointerClick,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';

// --- Type Definitions ---
type NavItemProps = {
  title: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  isExpanded?: boolean;
  children?: string[];
  activeChildIndex?: number;
};

// --- Sub-Components ---

const NavItem = ({ title, icon, isActive, isExpanded, children, activeChildIndex }: NavItemProps) => {
  const [expanded, setExpanded] = useState(isExpanded || false);

  return (
    <div className="mb-1.5">
      <button
        onClick={() => children && setExpanded(!expanded)}
        className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-xl transition-all duration-200 group ${
          isActive
            ? 'bg-gradient-to-r from-teal-50 to-emerald-50/30 dark:from-teal-900/30 dark:to-emerald-900/20 text-teal-700 dark:text-teal-400 font-semibold shadow-[0_1px_3px_rgba(20,184,166,0.05)] border border-teal-100/50 dark:border-teal-800/30'
            : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200 border border-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className={`transition-colors duration-200 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-300'}`}>
              {icon}
            </span>
          )}
          <span>{title}</span>
        </div>
        {children && (
          <span className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''} ${isActive ? 'text-teal-500 dark:text-teal-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400'}`}>
            <ChevronDown size={14} strokeWidth={2.5} />
          </span>
        )}
      </button>

      {/* Nested Children */}
      <AnimatePresence initial={false}>
        {children && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-1.5 ml-4 border-l-2 border-slate-100 dark:border-slate-800 pl-3 py-0.5 space-y-1">
              {children.map((child, idx) => {
                const isChildActive = activeChildIndex === idx;
                return (
                  <a
                    key={idx}
                    href="#"
                    className={`block px-3 py-1.5 text-sm rounded-lg transition-colors relative before:absolute before:inset-y-0 before:-left-[14px] before:w-[2px] before:transition-colors ${
                      isChildActive
                        ? 'bg-teal-50/60 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 font-semibold before:bg-teal-500 dark:before:bg-teal-400'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 before:bg-transparent hover:before:bg-slate-300 dark:hover:before:bg-slate-600'
                    }`}
                  >
                    {child}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StepSection = ({ number, title, children }: { number: number; title: string; children: React.ReactNode }) => (
  <div className="relative pl-10 sm:pl-14 mb-16 group">
    {/* Step Number Indicator */}
    <div className="absolute left-0 top-0.5 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-400 text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-lg shadow-teal-500/20 dark:shadow-teal-900/30 group-hover:scale-110 transition-transform duration-300">
      {number}
    </div>
    
    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
      {title}
    </h2>
    <div className="text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
      {children}
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className={`flex h-screen overflow-hidden font-sans antialiased bg-[#FAFAFA] dark:bg-slate-950 ${isDarkMode ? 'dark' : ''}`}>
      
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-200 dark:from-teal-900/30 to-transparent blur-[100px] rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light dark:mix-blend-overlay dark:opacity-10"></div>
      </div>

      <div className="flex w-full h-full relative z-10">
        
        {/* --- Left Sidebar --- */}
        <aside
          className={`${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 z-40 w-72 bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-r border-slate-200/60 dark:border-slate-800/60 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.2)]`}
        >
          {/* Logo Area */}
          <div className="h-20 flex items-center px-6 shrink-0 relative">
            <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent"></div>
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-teal-500/20 dark:shadow-teal-900/30 group-hover:shadow-teal-500/40 dark:group-hover:shadow-teal-900/50 transition-all duration-300 group-hover:-translate-y-0.5">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[17px] font-extrabold text-slate-800 dark:text-slate-100 tracking-tight leading-tight">魔果云课</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 tracking-wide">帮助中心</span>
              </div>
            </a>
          </div>

          {/* Navigation Area */}
          <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
            <nav className="space-y-0.5">
              <NavItem
                title="快速上手"
                icon={<Rocket size={18} />}
                isActive={true}
                isExpanded={true}
                activeChildIndex={0}
                children={[
                  "创建课程操作指引",
                  "添加课时操作指引",
                  "上传点播课操作指引",
                  "创建直播课程操作指引",
                  "创建兑换码操作指引"
                ]}
              />
              <NavItem title="创作者入驻" icon={<UserCheck size={18} />} />
              <NavItem title="机构管理" icon={<Settings size={18} />} />
              
              <div className="my-5 flex items-center px-4">
                <div className="h-px w-full bg-slate-100 dark:bg-slate-800/50"></div>
              </div>
              
              <NavItem title="交易与结算" icon={<CreditCard size={18} />} />
              
              <NavItem 
                title="课程内容" 
                icon={<FileText size={18} />} 
                isExpanded={true}
                children={[
                  "课程管理",
                  "小班课创建与管理",
                  "开启直播教学",
                  "直播回放管理",
                  "课程转播",
                  "课程表功能",
                  "素材管理"
                ]}
              />
              
              <NavItem title="教务运营" icon={<Users size={18} />} />
              <NavItem title="直播上课" icon={<Video size={18} />} />
              <NavItem title="营销工具" icon={<Megaphone size={18} />} />
              <NavItem title="账号与购课" icon={<MonitorPlay size={18} />} />
              <NavItem title="听课与网络" icon={<Wifi size={18} />} />
              
              <div className="my-5 flex items-center px-4">
                <div className="h-px w-full bg-slate-100 dark:bg-slate-800/50"></div>
              </div>
              
              <NavItem title="功能更新日志" icon={<History size={18} />} />
              <NavItem title="协议条款" icon={<ShieldCheck size={18} />} />
            </nav>
          </div>
          
          {/* Bottom Profile/Status Area */}
          <div className="p-4 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/30">
            <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-sm">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                系统运行正常
              </span>
              <ArrowUpRight size={14} className="text-slate-400 dark:text-slate-500" />
            </button>
          </div>
        </aside>

        {/* --- Main Content Area --- */}
        <div className="flex-1 flex flex-col min-w-0 relative">
          
          {/* Header */}
          <header className="h-20 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30 transition-all duration-300 backdrop-blur-xl bg-[#FAFAFA]/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2 -ml-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu size={20} />
              </button>
              
              {/* Premium Search Bar */}
              <div className="hidden sm:flex items-center relative group">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 group-focus-within:text-teal-500 dark:group-focus-within:text-teal-400 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="搜索文档、问题..." 
                  className="pl-10 pr-16 py-2.5 w-80 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl text-sm shadow-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:focus:ring-teal-500/20 focus:border-teal-500 dark:focus:border-teal-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-700 dark:text-slate-200"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none gap-1">
                  <kbd className="inline-flex items-center justify-center font-sans text-[11px] font-medium text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-1.5 h-5 shadow-[0_1px_0_rgba(0,0,0,0.05)]">
                    <Command size={10} className="mr-0.5" /> K
                  </kbd>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <a href="#" className="text-teal-600 dark:text-teal-400 relative py-1">
                  机构指南
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-8 h-[3px] bg-teal-500 dark:bg-teal-400 rounded-t-full"></span>
                </a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">学员帮助</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">功能更新</a>
              </nav>
              
              <div className="flex items-center gap-4 pl-8 border-l border-slate-200/80 dark:border-slate-800/80">
                <button 
                  className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <span className="sr-only">Toggle dark mode</span>
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 dark:from-slate-700 dark:to-slate-600 text-white font-medium text-xs shadow-md shadow-slate-900/10 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  YZ
                </button>
              </div>
            </div>
          </header>

          {/* Content Scrollable Area */}
          <div className="flex-1 overflow-y-auto w-full scroll-smooth">
            <div className="max-w-[1200px] mx-auto flex w-full">
              
              {/* Article */}
              <main className="flex-1 px-6 py-12 lg:px-12 xl:px-16 max-w-4xl">
                
                {/* Breadcrumbs */}
                <nav className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-8 font-medium">
                  <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">首页</a>
                  <ChevronRightIcon size={14} className="mx-2 text-slate-300 dark:text-slate-600" />
                  <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">快速上手</a>
                  <ChevronRightIcon size={14} className="mx-2 text-slate-300 dark:text-slate-600" />
                  <span className="text-teal-600 dark:text-teal-400">创建课程操作指引</span>
                </nav>

                {/* Header Section */}
                <div className="mb-12">
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
                      创建课程操作指引
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                      本文面向机构老师 / 管理员，手把手指导如何在管理后台创建一门课程。所有步骤与字段均对照当前后台真实界面。
                    </p>
                  </motion.div>
                </div>

                <motion.article 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="relative"
                >
                  
                  {/* Callout: 前置准备 */}
                  <motion.div variants={itemVariants} className="mb-16">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 dark:from-blue-900/20 dark:to-indigo-900/10 border border-blue-100 dark:border-blue-900/30 p-6 sm:p-8">
                      <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10">
                        <Info size={120} />
                      </div>
                      <div className="relative z-10">
                        <h2 className="text-lg font-bold text-blue-900 dark:text-blue-300 flex items-center gap-2 mb-4">
                          <Info size={20} className="text-blue-600 dark:text-blue-400" />
                          前置准备
                        </h2>
                        <ul className="space-y-3">
                          {[
                            "拥有机构管理员或老师账号，已登录管理后台",
                            "准备好课程信息：名称、封面图（建议比例 16:9）、简介、价格",
                            "想清楚课程类型：大班课或小班课（注意：「点播」是课时类型，不是课程类型 —— 点播课时在课程创建后再添加）"
                          ].map((text, i) => (
                            <li key={i} className="flex gap-3 text-blue-800/80 dark:text-blue-200/80 leading-relaxed text-[15px]">
                              <CheckCircle2 size={18} className="text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
                              <span>{text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  {/* Steps Content */}
                  <div className="relative">
                    {/* Continuous Line for Steps */}
                    <div className="absolute left-[13px] sm:left-[17px] top-10 bottom-10 w-0.5 bg-gradient-to-b from-teal-200 via-teal-100 dark:from-teal-800/50 dark:via-teal-900/30 to-transparent -z-10"></div>

                    {/* Step 1 */}
                    <motion.div variants={itemVariants}>
                      <StepSection number={1} title="进入课程管理">
                        <p className="text-[15px]">
                          登录后台后，点击左侧菜单 <strong className="text-slate-900 dark:text-slate-100 font-semibold bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">教学管理 → 课程管理</strong>，进入课程列表页，点击右上角 <strong className="text-teal-700 dark:text-teal-300 font-semibold bg-teal-50 dark:bg-teal-900/30 px-1.5 py-0.5 rounded border border-teal-100 dark:border-teal-800/50">创建课程</strong> 按钮。
                        </p>
                        
                        {/* Beautiful Image Placeholder (Mocking the UI dashboard) */}
                        <div className="mt-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 p-2 sm:p-3 shadow-sm">
                          <div className="rounded-xl overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm flex flex-col relative aspect-[16/10] sm:aspect-[21/9]">
                            {/* Fake Browser Header */}
                            <div className="h-10 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center px-4 gap-2 shrink-0">
                              <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                              </div>
                              <div className="mx-auto w-1/3 h-5 bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">admin.moguoyun.com</span>
                              </div>
                            </div>
                            
                            {/* Fake App Layout */}
                            <div className="flex-1 flex bg-slate-50/30 dark:bg-slate-900/30 relative">
                              {/* Fake Sidebar */}
                              <div className="w-16 sm:w-32 border-r border-slate-100 dark:border-slate-800 h-full p-3 hidden xs:block">
                                <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded mb-4"></div>
                                <div className="space-y-2">
                                  <div className="h-3 w-full bg-teal-100 dark:bg-teal-900/50 rounded"></div>
                                  <div className="h-3 w-4/5 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                  <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                                </div>
                              </div>
                              {/* Fake Main Area */}
                              <div className="flex-1 p-4 sm:p-6 flex flex-col relative">
                                <div className="flex justify-between items-center mb-6">
                                  <div className="h-5 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                  {/* Highlighted Create Button */}
                                  <div className="h-7 w-24 bg-teal-500 rounded-md shadow-sm shadow-teal-500/20 dark:shadow-teal-900/30 relative flex items-center justify-center">
                                    <span className="text-white text-[10px] font-bold">创建课程</span>
                                    {/* Pulse effect */}
                                    <div className="absolute -inset-1 rounded-lg border-2 border-teal-400 animate-ping opacity-20 pointer-events-none"></div>
                                    
                                    {/* Cursor hint */}
                                    <motion.div 
                                      initial={{ opacity: 0, x: 20, y: 20 }}
                                      animate={{ opacity: 1, x: 5, y: 5 }}
                                      transition={{ delay: 1, duration: 0.5 }}
                                      className="absolute -right-3 -bottom-4 text-slate-800 dark:text-slate-200 drop-shadow-md z-10"
                                    >
                                      <MousePointerClick size={20} className="fill-white dark:fill-slate-800" />
                                    </motion.div>
                                  </div>
                                </div>
                                {/* Fake Table */}
                                <div className="flex-1 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                                  <div className="h-10 border-b border-slate-50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-800/30"></div>
                                  <div className="p-4 space-y-3">
                                    <div className="flex gap-4 items-center">
                                      <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 shrink-0"></div>
                                      <div className="space-y-2 flex-1">
                                        <div className="h-3 w-1/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-2 w-1/4 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                      </div>
                                    </div>
                                    <div className="flex gap-4 items-center opacity-50">
                                      <div className="w-10 h-10 rounded bg-slate-100 dark:bg-slate-800 shrink-0"></div>
                                      <div className="space-y-2 flex-1">
                                        <div className="h-3 w-1/4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="h-2 w-1/5 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Overlay placeholder text */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-white/5 dark:bg-slate-950/5 backdrop-blur-[1px]">
                              <div className="bg-white/90 dark:bg-slate-900/90 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                                <ImageIcon size={16} /> 课程管理界面示意图
                              </div>
                            </div>
                          </div>
                        </div>
                      </StepSection>
                    </motion.div>

                    {/* Step 2 */}
                    <motion.div variants={itemVariants}>
                      <StepSection number={2} title="填写基本信息">
                        <p className="text-[15px] mb-4">
                          创建课程分两步，第一步是填写「基本信息」。带 <span className="text-red-500 dark:text-red-400 font-bold">*</span> 的均为必填项：
                        </p>
                        
                        <div className="bg-slate-50/80 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800/80 p-5 sm:p-6 space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 items-start">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 pt-1">
                              <span className="text-red-500 dark:text-red-400">*</span> 课程名称
                            </div>
                            <div className="text-[15px] text-slate-600 dark:text-slate-400">
                              不超过 50 个字符。建议包含课程核心主题与适合人群，例如：<span className="text-slate-900 dark:text-slate-200 font-medium bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">2026 高级 UI 设计系统班</span>。
                            </div>
                          </div>
                          
                          <div className="h-px bg-slate-200/60 dark:bg-slate-800/60 w-full my-2"></div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 items-start">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 pt-1">
                              <span className="text-red-500 dark:text-red-400">*</span> 课程封面
                            </div>
                            <div className="text-[15px] text-slate-600 dark:text-slate-400">
                              建议尺寸 <span className="font-mono text-sm bg-slate-200/60 dark:bg-slate-800/80 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300">800x450</span>（16:9 比例），支持 JPG / PNG 格式，大小不超过 5MB。
                            </div>
                          </div>
                          
                          <div className="h-px bg-slate-200/60 dark:bg-slate-800/60 w-full my-2"></div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 items-start">
                            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1 pt-1">
                              课程简介
                            </div>
                            <div className="text-[15px] text-slate-600 dark:text-slate-400">
                              选填。支持富文本编辑，您可以插入图片、修改排版，以图文并茂的形式向学员展示课程亮点。
                            </div>
                          </div>
                        </div>
                      </StepSection>
                    </motion.div>

                  </div>
                </motion.article>
                
                {/* Footer */}
                <footer className="mt-20 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">© 2026 魔果云课. 探索无界学习。</p>
                  </div>
                  <div className="flex gap-6">
                    <a href="#" className="text-sm text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium">上一篇：快速上手指引</a>
                    <a href="#" className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors font-medium flex items-center gap-1">下一篇：添加课时 <ChevronRightIcon size={14}/></a>
                  </div>
                </footer>
              </main>

              {/* --- Right Sidebar (TOC) --- */}
              <aside className="hidden xl:block w-72 shrink-0 py-16 px-8 relative">
                <div className="sticky top-32">
                  <h4 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Command size={12} /> 本页目录
                  </h4>
                  <nav className="relative">
                    {/* Active Indicator Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800">
                      <motion.div 
                        className="absolute left-0 top-0 w-0.5 h-8 bg-teal-500 dark:bg-teal-400 rounded-full"
                        layoutId="activeSectionTOC"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    </div>
                    
                    <div className="space-y-1 pl-4">
                      <a href="#" className="block py-1.5 text-[13px] font-semibold text-teal-600 dark:text-teal-400 transition-colors">
                        前置准备
                      </a>
                      <a href="#" className="block py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        第一步：进入课程管理
                      </a>
                      <a href="#" className="block py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        第二步：填写基本信息
                      </a>
                      <a href="#" className="block py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        第三步：设置商品信息
                      </a>
                      <a href="#" className="block py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        课程类型说明
                      </a>
                      <a href="#" className="block py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        注意事项
                      </a>
                      <a href="#" className="block py-1.5 text-[13px] font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">
                        创建完成后：添加课时
                      </a>
                    </div>
                  </nav>

                  {/* Promo widget */}
                  <div className="mt-12 bg-slate-50 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 rounded-2xl p-5 text-slate-800 dark:text-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                        <Users size={16} />
                      </div>
                      <h5 className="font-bold text-sm">遇到问题？</h5>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-4 leading-relaxed">如果您在操作中遇到任何困难，可以随时联系专属客服获取帮助。</p>
                    <button className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl py-2 text-sm font-semibold shadow-sm hover:border-teal-300 dark:hover:border-teal-700 hover:text-teal-600 dark:hover:text-teal-400 transition-all">
                      联系在线客服
                    </button>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 dark:bg-slate-900/80 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
