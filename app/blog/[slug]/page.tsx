import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { ArrowLeft, Clock, User, CheckCircle2, ChevronRight, MessageSquare, AlertCircle } from "lucide-react";

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
  },
  "site-foreman-ai-automation": {
    title: "香港地盤管工如何利用 AI 減少實際工作量：從文書重災區到自動化轉型",
    date: "2026-06-12",
    author: "Buildway Tech 創辦人",
    category: "實戰教學",
    content: "這是一篇由前地盤管工親自撰寫的 AI 自動化落地指南，深入探討如何利用 AI Agent 解決 Site Diary、工紙及收貨紙等繁瑣文書工作。",
    fullContent: true // Flag to render the long-form content below
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData[slug];
  
  return {
    title: post ? `${post.title} | Buildway Tech` : "內容整理中",
    description: post ? (post.content || "了解 Buildway Tech 如何協助香港中小企實現 AI 自動化。") : "我們正在為您準備更多 AI 數碼化資訊。",
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
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Buildway Tech (HK) Limited"
    }
  } : null;

  const faqJsonLd = slug === "site-foreman-ai-automation" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "AI 真的能識別手寫工紙嗎？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "目前的 AI OCR 技術結合大型語言模型（LLM），對於清晰的手寫字已有超過 90% 的準確率。即使是潦草的字跡，AI 也能根據上下文（例如工人姓名清單、常見工序）進行智能校對，顯著減少人工輸入量。"
        }
      },
      {
        "@type": "Question",
        "name": "地盤訊號不好，還能使用 AI 系統嗎？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "系統支援離線拍攝或延時上傳。管工可以在地盤內先完成拍攝記錄，當回到有訊號的辦公室或貨櫃時，系統會自動在背景進行 AI 分析與整理，不影響前線工作節奏。"
        }
      }
    ]
  } : null;

  return (
    <main className="min-h-screen bg-white py-24 px-5 sm:px-8 lg:px-12">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      
      <div className="mx-auto max-w-4xl">
        <a href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-12 hover:opacity-80 transition group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" /> 返回專欄列表
        </a>

        {post ? (
          <article>
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-bold text-blue-600 uppercase tracking-widest border border-blue-100">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <Clock size={16} />
                  <time>{post.date}</time>
                </div>
              </div>
              
              <h1 className="text-4xl font-extrabold text-slate-900 mb-10 leading-tight sm:text-6xl">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 pb-12 border-b border-slate-100">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                  <User size={24} />
                </div>
                <div>
                   <p className="font-bold text-slate-900 text-lg">{post.author}</p>
                   <p className="text-sm text-slate-500">AI 自動化顧問 & 前地盤管理人員</p>
                </div>
              </div>
            </header>

            <div className="prose prose-xl prose-blue max-w-none text-slate-600 leading-relaxed space-y-12">
              {post.fullContent ? (
                <>
                  <section className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <AlertCircle size={80} className="text-blue-600" />
                    </div>
                    <p className="text-xl font-bold text-blue-900 mb-4 relative z-10">前言：我的地盤回憶錄</p>
                    <p className="relative z-10 text-slate-700 italic">
                      「當我仲做緊地盤管工嗰陣，每日最驚嘅唔係巡地盤，而係返去寫字樓對住嗰疊好似山咁高嘅工紙同收貨紙。」
                    </p>
                  </section>

                  <p>
                    在香港做建築工程，地盤管理講究的是「快、準、狠」。但現實中，管工（Foreman）的工作往往被無窮無盡的「文書作業」所綁架。每日收工後，你是否還在貨櫃辦公室裡，對著分判商交來的模糊 WhatsApp 照片逐一輸入 Excel？是否還在為了準備一份 Site Diary 而翻查一整天的通訊紀錄？
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">一、地盤文書的「四大重災區」</h2>
                  <p>
                    為什麼地盤數碼化這麼難？因為地盤數據是「碎」的。從收貨紙、工紙到安全巡查紀錄，每一項都充滿了手寫字、泥水污漬和不標準的表達。
                  </p>
                  <ul className="space-y-4">
                    <li><strong>工紙 (Time Sheets)：</strong>分判商工人幾點開工、幾點放工、有無 OT？WhatsApp 收圖後，月底核對簡直是災難。</li>
                    <li><strong>收貨紙 (Delivery Notes)：</strong>英泥、石矢、鋼筋幾時到？有無簽名？文件往往在地盤傳閱中遺失。</li>
                    <li><strong>Site Diary (地盤日誌)：</strong>今日天氣、工人人數、工序進度。往往要靠記憶力或翻查 WhatsApp 群組來「作」一份。</li>
                    <li><strong>巡查紀錄 (Safety/QA)：</strong>發現違規或缺陷，影相後要返去寫字樓整理成報告。</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">二、工作流程深度對比：以前 vs 現在 vs AI 增強</h2>
                  
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-inner">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                      <div className="p-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-6">以前 (傳統紙本)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-red-500 text-lg">✗</span> 手寫登記，容易遺失</li>
                          <li className="flex gap-2"><span className="text-red-500 text-lg">✗</span> 月底人手輸入，耗時數日</li>
                          <li className="flex gap-2"><span className="text-red-500 text-lg">✗</span> 數據延遲，老闆睇唔清</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white">
                        <h4 className="font-bold text-blue-600 uppercase tracking-widest mb-6">現在 (初階數碼化)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-blue-500 text-lg">!</span> WhatsApp 影相傳回公司</li>
                          <li className="flex gap-2"><span className="text-blue-500 text-lg">!</span> 文員對住電話「打字」輸入</li>
                          <li className="flex gap-2"><span className="text-blue-500 text-lg">!</span> 群組訊息被洗掉，難以追溯</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-blue-600 text-white">
                        <h4 className="font-bold text-blue-100 uppercase tracking-widest mb-6">AI 協助 (Buildway 方案)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-green-300 text-lg">✓</span> 影相即自動 OCR 提取數據</li>
                          <li className="flex gap-2"><span className="text-green-300 text-lg">✓</span> AI 自動分類、核對與計算</li>
                          <li className="flex gap-2"><span className="text-green-300 text-lg">✓</span> 實時生成 Site Diary 報告</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">三、AI Agent 如何實地執行？</h2>
                  <p>
                    在 Buildway Tech 的方案中，我們不要求工人去下載新 App，因為那不現實。我們利用的是大家最熟悉的 <strong>WhatsApp</strong>。
                  </p>
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">自動化收貨流程</h4>
                        <p className="text-lg">收貨後拍張照傳到指定 WhatsApp。AI 會自動辨識供應商、物料名稱、數量，並核對採購單 (PO)。如果數量不對，AI 會即時在 WhatsApp 提醒管工「唔好簽住，數量同 PO 唔夾」。</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">語音 Site Diary 助手</h4>
                        <p className="text-lg">管工巡完地盤，只需對著 WhatsApp 講一段廣東話錄音：「今日 A 地盤泥水開工 4 人，下晝落大雨停左兩粒鐘，B 區防水層搞掂咗。」AI 會自動將語音轉文字，結合當日天氣數據，直接生成一份專業的 Site Diary PDF 給老闆簽名。</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">分判商管理與提醒</h4>
                        <p className="text-lg">AI 透過對話紀錄追蹤每個工序的進度。如果某項工作超過了預定期限，AI Agent 會主動詢問管工，並根據管工回覆自動向相關分判商發出友善提醒，無需老闆親自催促。</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">四、給老闆與管工的建議</h2>
                  <p>
                    轉向 AI 自動化並不是要取代管工的經驗，而是要解放管工的雙手。當數據不再是死板的紙張，而是隨時可在 Dashboard 查閱的資產時，老闆能更精準地控制成本，管工也能準時放工陪屋企人。
                  </p>
                  <p>
                    <strong>Buildway Tech 的經驗告訴我們：</strong>數碼化成功的關鍵不在於買了多貴的軟體，而在於系統是否能無縫嵌入現有的「地盤生態」。
                  </p>

                  <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white my-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-20" />
                    <div className="relative z-10">
                       <h3 className="text-3xl font-bold mb-6">想將地盤行政工作量減少 70%？</h3>
                       <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                         我們提供為香港工程公司量身打造的 AI 評估方案，從您現有的 WhatsApp 工作流開始升級。
                       </p>
                       <div className="flex flex-col sm:flex-row gap-4">
                         <a href="/#assessment" className="rounded-full bg-blue-600 px-10 py-4 font-bold hover:bg-blue-700 transition shadow-xl text-center">
                           申請免費現場評估
                         </a>
                         <a href="https://wa.me/85212345678" className="rounded-full bg-white/10 px-10 py-4 font-bold border border-white/20 hover:bg-white/20 transition backdrop-blur-md flex items-center justify-center gap-2">
                           <MessageSquare size={20} /> 創辦人諮詢
                         </a>
                       </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="space-y-8 pt-12 border-t border-slate-100">
                    <h3 className="text-3xl font-bold text-slate-900">常見問題 (FAQ)</h3>
                    <div className="grid gap-6">
                       <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                          <h4 className="font-bold text-slate-900 mb-3 text-lg">Q1: AI 真的能識別手寫工紙嗎？</h4>
                          <p>目前的 AI OCR 技術結合大型語言模型（LLM），對於清晰的手寫字已有超過 90% 的準確率。即使是潦草的字跡，AI 也能根據上下文進行智能校對，顯著減少人工輸入量。</p>
                       </div>
                       <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                          <h4 className="font-bold text-slate-900 mb-3 text-lg">Q2: 地盤訊號不好，還能使用 AI 系統嗎？</h4>
                          <p>系統支援離線拍攝或延時上傳。管工可以在地盤內先完成拍攝記錄，當回到有訊號的辦公室或貨櫃時，系統會自動在背景進行 AI 分析與整理，不影響前線工作節奏。</p>
                       </div>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-xl font-medium text-slate-800 mb-8">
                  {post.content}
                </p>
              )}
              
              {!post.fullContent && (
                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 text-center my-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">想了解如何將此方案應用到您的公司？</h3>
                  <p className="mb-8">我們的 AI 顧問可以為您提供 15 分鐘免費電話諮詢。</p>
                  <a href="/#assessment" className="inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-xl hover:bg-blue-700 transition">
                    立即預約 AI 評估
                  </a>
                </div>
              )}
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
