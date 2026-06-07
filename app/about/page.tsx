import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { 
  HardHat, 
  Code2, 
  Bot, 
  Search, 
  Lightbulb,
  CheckCircle2,
  Cpu
} from "lucide-react";

export const metadata: Metadata = {
  title: "關於我們 | Buildway Tech (HK) Limited",
  description: "了解 Buildway Tech 創辦人的背景。從香港地盤管理到 AI 自動化專家，我們致力於協助中小企實現數碼化轉型。",
};

const focusAreas = [
  { title: "AI Agent", desc: "開發能自主處理行政工序的數碼助理。" },
  { title: "GEO / SEO / AEO", desc: "確保公司資訊能在 AI 搜尋時代脫穎而出。" },
  { title: "中小企數碼化", desc: "將傳統流程轉化為高效、自動化的現代系統。" },
];

const expertise = [
  "實際開發企業級 CRM 系統",
  "RAG (公司 AI 知識庫) 實戰落地",
  "ERP (核心資料中心) 架構設計",
  "Agent System 代理人工作流開發",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-5 py-24 sm:px-8 lg:px-12 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-tech-grid" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Founder's Story</p>
              <h1 className="text-4xl font-bold text-slate-900 sm:text-6xl mb-8 leading-tight">
                從地盤前線到<br />AI 自動化專家
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Buildway Tech 創辦人深耕香港建築工程界多年，深知傳統行業在管理上的痛點。我們不是在賣冷冰冰的軟體，而是在分享一種更聰明的工作方式。
              </p>
              <div className="flex flex-wrap gap-4">
                 {expertise.map((item) => (
                   <div key={item} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">
                     <CheckCircle2 size={16} className="text-blue-600" /> {item}
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-[3rem] bg-white border border-slate-100 shadow-2xl flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 bg-tech-circuit opacity-5" />
               <Cpu size={200} className="text-blue-600 opacity-20 group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
               <div className="absolute bottom-10 left-10 right-10 p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl text-white">
                  <p className="font-bold text-xl mb-1">創辦人</p>
                  <p className="text-blue-400 font-medium">香港建築工程從業者 & AI 開發者</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold sm:text-5xl text-slate-900">核心專注領域</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-200 transition shadow-sm hover:shadow-xl">
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">{area.title}</h3>
                 <p className="text-lg text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Content */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 border-t border-slate-100">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-xl prose-slate">
            <h3 className="text-3xl font-bold mb-10 text-slate-900">為什麼建立 Buildway Tech？</h3>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              我的職業生涯始於繁重、瑣碎的地盤管理工作。每天面對無數的 WhatsApp 查詢、重複的報價計算、以及永遠理不完的文件與紀錄。
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              這種「低效勞動」不僅耗費了大量行政成本，更讓老闆無法即時掌握真實的營運數據。當我開始接觸 AI 與自動化技術後，我發現這些問題是可以被完美解決的。
            </p>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              我建立了 Buildway Tech，目標很簡單：協助香港的中小企老闆們，利用 AI Agent、RAG 與系統化管理，把那每天「消失」的 2-4 小時行政時間搶回來。
            </p>
            
            <div className="p-12 rounded-[2.5rem] bg-blue-600 text-white text-center shadow-2xl">
               <h4 className="text-2xl font-bold mb-6">「讓技術服務於場景，讓 AI 成為老闆最得力的助手。」</h4>
               <a href="/#assessment" className="inline-block mt-4 rounded-full bg-white text-blue-600 px-10 py-4 font-bold hover:bg-slate-100 transition shadow-lg">
                 與我分享您的痛點
               </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
