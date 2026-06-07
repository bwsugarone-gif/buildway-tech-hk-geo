import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { ArrowLeft, CheckCircle2, Building2, BarChart, Rocket } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const caseData: Record<string, any> = {
  "construction-admin-automation": {
    company: "某大型建築工程公司",
    title: "由 WhatsApp 紀錄到 AI 自動化管理：營運效率提升 600%",
    result: "項目跟進時間由平均 3 天縮短至 5 分鐘",
    industry: "建築工程",
    challenge: "過往依靠人手翻查 WhatsApp 對話與 Excel 成本表，導致跟進週期長且容易出錯。",
    solution: "建立企業級 AI 助理，自動提取歷史數據並生成即時進度報告與分析。",
  },
  "insurance-team-crm": {
    company: "保險代理團隊 (50人)",
    title: "AI 產品助理：秒查保單細節，顯著提升客戶滿意度",
    result: "團隊每日節省 2 小時重複性諮詢時間",
    industry: "保險理財",
    challenge: "產品條款繁瑣，新員工難以快速準確回覆客戶查詢，影響服務專業度。",
    solution: "建立團隊共享 AI 知識庫，透過 WhatsApp 實現秒級條款查詢。",
  },
  "renovation-quotation-ai": {
    company: "精品室內設計公司",
    title: "AI 報價系統：自動核對物料與人工，搶先贏得訂單",
    result: "報價生成速度由 3 日縮短至 3 分鐘",
    industry: "室內設計",
    challenge: "報價過程繁複，需人手計算大量物料價格，容易流失時效敏感的客戶。",
    solution: "導入 AI 報價助理，自動化核對成本庫並生成標準化報價單。",
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseData[slug];
  
  return {
    title: item ? `${item.title} | Buildway Tech` : "案例整理中",
    description: item ? item.result : "了解 Buildway Tech 如何協助香港中小企實現 AI 自動化。",
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const item = caseData[slug];

  const jsonLd = item ? {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": item.title,
    "description": item.result,
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
      
      <div className="mx-auto max-w-4xl">
        <a href="/cases" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-12 hover:opacity-80 transition">
          <ArrowLeft size={20} /> 返回案例列表
        </a>

        {item ? (
          <article>
            <div className="mb-12">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest mb-6">
                <Building2 size={20} /> {item.industry}
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-8 leading-tight sm:text-6xl">
                {item.title}
              </h1>
              <div className="inline-flex items-center gap-4 rounded-2xl bg-green-50 px-8 py-5 border border-green-100 shadow-sm text-green-700">
                <CheckCircle2 size={28} />
                <span className="text-xl font-bold">核心成果：{item.result}</span>
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 mt-16">
              <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <BarChart size={20} className="text-blue-600" /> 面臨挑戰
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {item.challenge}
                </p>
              </div>
              <div className="bg-blue-50 rounded-3xl p-10 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <Rocket size={20} className="text-blue-600" /> AI 解決方案
                </h3>
                <p className="text-lg text-blue-800 leading-relaxed opacity-80">
                  {item.solution}
                </p>
              </div>
            </div>

            <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">想獲得類似的自動化成果？</h3>
                <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">我們的專家可為您提供專屬的數碼化建議，立即聯絡我們。</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/#assessment" className="rounded-full bg-blue-600 px-10 py-4 font-bold text-white hover:bg-blue-700 transition">
                    免費 AI 評估
                  </a>
                  <a href="https://wa.me/85212345678" className="rounded-full bg-white/10 px-10 py-4 font-bold text-white border border-white/20 hover:bg-white/20 transition backdrop-blur-md">
                    WhatsApp 諮詢
                  </a>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">案例整理中</h1>
            <p className="text-slate-500 mb-10">我們正在準備此案例的詳細報告，請稍後再回來查看。</p>
            <a href="/cases" className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-xl hover:bg-blue-700 transition">
              查看其他案例
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
