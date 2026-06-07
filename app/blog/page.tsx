import * as motion from "framer-motion/client";
import { FileText, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "sme-ai-automation-2026",
    title: "2026 年香港中小企 AI 自動化指南：從 WhatsApp 開始",
    excerpt: "探討如何利用企業級 AI 助理優化 WhatsApp 溝通，在不編寫程式碼的情況下將行政效率提升 50% 以上。",
    date: "2026-06-05",
    category: "行業趨勢",
  },
  {
    slug: "whatsapp-ai-crm",
    title: "WhatsApp 結合 AI CRM：中小企如何實現客戶自動跟進？",
    excerpt: "深入分析 AI 如何透過 WhatsApp 進行即時查詢與智能分析，建立無縫的客戶關係管理系統。",
    date: "2026-06-01",
    category: "技術解讀",
  },
  {
    slug: "ai-document-automation",
    title: "告別紙張辦公：中小企如何利用 AI 實現文件自動化整理？",
    excerpt: "實戰教學：透過 AI 整合 PDF、收據與合約數據，大幅減少人手輸入時間與錯誤率。",
    date: "2026-05-28",
    category: "實戰教學",
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
