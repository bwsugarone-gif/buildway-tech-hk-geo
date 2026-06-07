import * as motion from "framer-motion/client";
import { FileText, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "site-foreman-ai-automation",
    title: "香港地盤管工如何利用 AI 減少實際工作量：從文書重災區到自動化轉型",
    excerpt: "前地盤管工分享：如何利用 AI Agent 解決 Site Diary、工紙及收貨紙等繁瑣文書工作，搶回每天消失的 2 小時。",
    date: "2026-06-12",
    category: "實戰教學",
  },
  {
    slug: "start-sme-ai-automation",
    title: "香港中小企如何開始 AI 自動化？從核心痛點切入",
    excerpt: "探討中小企實現數碼化轉型的第一步，如何選擇高回報、低成本的 AI 自動化場景進行嘗試。",
    date: "2026-06-10",
    category: "行業趨勢",
  },
  {
    slug: "whatsapp-crm-value",
    title: "WhatsApp CRM 值不值得做？分析溝通與管理的投資回報",
    excerpt: "深入對比傳統管理與 AI 輔助的 WhatsApp CRM 系統，如何有效解決資料散亂與客戶跟進不力的問題。",
    date: "2026-06-08",
    category: "技術解讀",
  },
  {
    slug: "renovation-ai-quotation",
    title: "裝修公司如何利用 AI 做報價？實現分鐘級準確報價的關鍵",
    excerpt: "分享室內設計與裝修工程如何整合歷史成本庫，利用 AI 助理快速生成專業初步報價單。",
    date: "2026-06-05",
    category: "實戰教學",
  },
  {
    slug: "engineering-doc-automation",
    title: "工程公司文件管理自動化：從紙張到 AI 智能檢索的轉型路徑",
    excerpt: "探討地盤文件、合約與工紙如何透過 OCR 與 RAG 技術轉化為可搜尋、可分析的企業知識資產。",
    date: "2026-06-02",
    category: "實戰教學",
  },
  {
    slug: "insurance-team-crm-compare",
    title: "保險代理團隊 CRM 系統比較：為什麼通用型工具不再足夠？",
    excerpt: "分析保險團隊在跟進客戶時的獨特需求，以及 AI 助理在保單細節查詢與自動化排程中的優勢。",
    date: "2026-05-30",
    category: "行業趨勢",
  },
];

export default function BlogPage() {
  return (
    <main className="flex-grow px-5 py-24 sm:px-8 lg:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
            AI Insights
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-6xl">
            AI 數碼化專欄
          </h1>
          <p className="mt-8 text-xl text-slate-500 leading-relaxed">
            為香港中小企決策者提供的 AI 轉型深度分析與實踐指南。
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-white"
            >
              <div className="aspect-[16/9] w-full bg-slate-50 rounded-2xl border border-slate-100 mb-8 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 opacity-5 bg-tech-grid" />
                 <FileText size={64} className="text-blue-600/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <Clock size={14} />
                    <time>{post.date}</time>
                  </div>
                </div>
                <h2 className="text-2xl font-bold leading-snug text-slate-900 mb-4 group-hover:text-blue-600 transition">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                <p className="text-lg leading-relaxed text-slate-500 mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-blue-600 group/link"
                >
                  閱讀全文
                  <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
