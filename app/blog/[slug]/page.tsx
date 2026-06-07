import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const blogData: Record<string, any> = {
  "start-sme-ai-automation": {
    title: "香港中小企如何開始 AI 自動化？從核心痛點切入",
    date: "2026-06-10",
    author: "Buildway AI Team",
    category: "行業趨勢",
    content: "探討中小企實現數碼化轉型的第一步，如何選擇高回報、低成本的 AI 自動化場景進行嘗試。",
  },
  "whatsapp-crm-value": {
    title: "WhatsApp CRM 值不值得做？分析溝通與管理的投資回報",
    date: "2026-06-08",
    author: "Buildway AI Team",
    category: "技術解讀",
    content: "深入對比傳統管理與 AI 輔助的 WhatsApp CRM 系統，如何有效解決資料散亂與客戶跟進不力的問題。",
  },
  "renovation-ai-quotation": {
    title: "裝修公司如何利用 AI 做報價？實現分鐘級準確報價的關鍵",
    date: "2026-06-05",
    author: "Buildway AI Team",
    category: "實戰教學",
    content: "分享室內設計與裝修工程如何整合歷史成本庫，利用 AI 助理快速生成專業初步報價單。",
  },
  "engineering-doc-automation": {
    title: "工程公司文件管理自動化：從紙張到 AI 智能檢索的轉型路徑",
    date: "2026-06-02",
    author: "Buildway AI Team",
    category: "實戰教學",
    content: "探討地盤文件、合約與工紙如何透過 OCR 與 RAG 技術轉化為可搜尋、可分析的企業知識資產。",
  },
  "insurance-team-crm-compare": {
    title: "保險代理團隊 CRM 系統比較：為什麼通用型工具不再足夠？",
    date: "2026-05-30",
    author: "Buildway AI Team",
    category: "行業趨勢",
    content: "分析保險團隊在跟進客戶時的獨特需求，以及 AI 助理在保單細節查詢與自動化排程中的優勢。",
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  
  return {
    title: post ? `${post.title} | Buildway Tech` : "內容整理中",
    description: post ? post.content.substring(0, 150) : "我們正在為您準備更多 AI 數碼化資訊。",
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogData[slug];

  const jsonLd = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Buildway Tech"
    }
  } : null;

  return (
    <main className="min-h-screen bg-white py-24 px-5 sm:px-8 lg:px-12">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      <div className="mx-auto max-w-3xl">
        <a href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-12 hover:opacity-80 transition">
          <ArrowLeft size={20} /> 返回專欄列表
        </a>

        {post ? (
          <article>
            <div className="flex items-center gap-4 mb-8">
              <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600 uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                <Clock size={16} />
                <time>{post.date}</time>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-10 leading-tight sm:text-5xl">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 mb-12 pb-8 border-b border-slate-100">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                <User size={20} className="text-slate-400" />
              </div>
              <span className="font-bold text-slate-700">{post.author}</span>
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-slate-600 leading-relaxed">
              <p className="text-xl font-medium text-slate-800 mb-8">
                {post.content}
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center my-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">想了解如何將此方案應用到您的公司？</h3>
                <p className="mb-8">我們的 AI 顧問可以為您提供 15 分鐘免費電話諮詢。</p>
                <a href="/#assessment" className="inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-xl hover:bg-blue-700 transition">
                  立即預約 AI 評估
                </a>
              </div>
            </div>
          </article>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">內容整理中</h1>
            <p className="text-slate-500 mb-10">我們正在撰寫這篇文章，請稍後再回來查看。</p>
            <a href="/blog" className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-xl hover:bg-blue-700 transition">
              查看其他文章
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
