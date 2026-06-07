import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { ArrowLeft, Clock, User, CheckCircle2, ChevronRight, MessageSquare, AlertCircle, CloudRain, Search, ShieldCheck, History, Mic } from "lucide-react";

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
    fullContent: true 
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
        "name": "如何證明天雨停工以申請 EOT？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI 助理會自動將您在 WhatsApp 紀錄的落雨時間、現場拍照、位置數據與天文台當日報表進行自動化對比整理。月底時只需一鍵，即可生成完整的「天雨延期證明文件包」，作為索償或合約延期的堅實證據。"
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
                   <p className="text-sm text-slate-500">前地盤管工 & AI 自動化顧問</p>
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
                    <p className="text-xl font-bold text-blue-900 mb-4 relative z-10">前言：地盤人的真心話</p>
                    <p className="relative z-10 text-slate-700 italic">
                      「當我仲做緊地盤管工嗰陣，每日最辛苦嘅唔係巡地盤，而係夜晚返去寫字樓對住嗰疊山咁高嘅工紙同收貨紙。我就喺嗰陣諗，點解 2026 年仲要用人手做呢啲野？」
                    </p>
                  </section>

                  <p>
                    在香港做建築工程，管工（Foreman）的工作往往被無窮無盡的「文書作業」所綁架。每日收工後，你是否還在貨櫃辦公室裡，對著判頭交來的模糊 WhatsApp 照片逐一輸入 Excel？這篇文章不談深奧科技，只談如何用 AI 幫你「收工」。
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">一、地盤文書的「四大重災區」</h2>
                  <p>
                    為什麼地盤數碼化這麼難？因為地盤數據是「碎」的，而且充滿了手寫字、泥水污漬。
                  </p>
                  <ul className="space-y-4">
                    <li><strong>工紙 (Time Sheets)：</strong>判頭工人幾點開工、有無 OT？月底核對簡直是災難。</li>
                    <li><strong>收貨紙 (Delivery Notes)：</strong>英泥、石矢、鋼筋幾時到？有無簽名？文件往往在地盤傳閱中遺失。</li>
                    <li><strong>Site Diary (地盤日誌)：</strong>今日天氣、工序進度。往往要靠記憶力翻查 WhatsApp 群組來「作」一份。</li>
                    <li><strong>巡查紀錄 (Safety/QA)：</strong>發現缺陷，影相後要返去寫字樓整理成報告，最怕老闆突然查返三個月前嘅相。</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100 italic">二、管工最頭痛的 5 個真實場景</h2>

                  {/* Scenario 1 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <CloudRain className="text-blue-600" /> 場景 1：落雨停工點 Claim 錢？
                    </h3>
                    <p className="mb-6">
                      下雨不是最大問題，證明「當時正在下雨」才是最煩的。為了申請天雨延期 (EOT)，管工要現場拍照、記時間、留 WhatsApp 訊息。
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <p className="font-bold text-blue-900 mb-2">AI 協助方式：</p>
                      <p className="text-blue-800">
                        只需在 WhatsApp 傳一張落雨相或錄音，AI 會自動抓取照片的 GPS 位置與時間，並同步對比當日天文台數據。月底自動整理成「天雨記錄包」，老闆一鍵即可向客戶提交索償依據。
                      </p>
                    </div>
                  </div>

                  {/* Scenario 2 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <History className="text-blue-600" /> 場景 2：找回「消失」的紀錄
                    </h3>
                    <p className="mb-4">
                      呢類問題通常唔會預早通知你，好多時老闆係突然問：
                    </p>
                    <ul className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-6 space-y-2 italic text-slate-700">
                      <li>「上個月果倉石矢幾時落？」</li>
                      <li>「石矢期夠未？」</li>
                      <li>「磚仔幾時送去 Lab？」</li>
                      <li>「試壓報告出咗未？」</li>
                      <li>「幾時可以拆板？」</li>
                      <li>「A座17樓防水有冇影相記錄？」</li>
                      <li>「上星期落雨停工有冇證明？」</li>
                    </ul>
                    <p className="mb-6">
                      於是管工又要翻 WhatsApp、翻相簿、翻收貨紙、翻 Site Diary、翻試壓報告、翻施工記錄。有時搵資料用嘅時間，仲多過做工程本身。
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <p className="font-bold text-blue-900 mb-2">AI 協助方式：</p>
                      <p className="text-blue-800">
                        AI 會將所有傳過嘅相、語音、收貨紙自動打 Tag 分類。您只需用對話問 AI：「搵返 A 座 17 樓防水相」或者「查返 A1 倉落石矢時間」，資料、時間、地點紀錄即時出現，唔使再翻幾個月前嘅 WhatsApp 紀錄。
                      </p>
                    </div>
                  </div>

                  {/* Scenario 3 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <ShieldCheck className="text-blue-600" /> 場景 3：師傅有無跟圖則做？
                    </h3>
                    <p className="mb-6">
                      問題不只是完成工作，而是有無依照施工方案（Method Statement）進行。例如鋼筋紮法、防水工序是否正確。
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <p className="font-bold text-blue-900 mb-2">AI 協助方式：</p>
                      <p className="text-blue-800">
                        AI 助理能比對現場照片與原有的施工方案及檢查表。如果發現工序偏差（例如防水層塗抹不均），會及早提醒管工，避免日後返工拆除的大額損失。
                      </p>
                    </div>
                  </div>

                  {/* Scenario 4 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Search className="text-blue-600" /> 場景 4：出糧核對與延誤責任
                    </h3>
                    <p className="mb-6">
                      OT 計算與停工紀錄最容易產生爭議。判頭話開左 10 個人，但現場紀錄可能只有 8 個。
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <p className="font-bold text-blue-900 mb-2">AI 協助方式：</p>
                      <p className="text-blue-800">
                        AI 自動整理工紙、打卡記錄與相片時間。月底出糧時，系統會自動產出對比表，顯示哪些時段有爭議，作為與分判商核對的最終依據。
                      </p>
                    </div>
                  </div>

                  {/* Scenario 5 */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <Mic className="text-blue-600" /> 場景 5：唔想打字，錄音得唔得？
                    </h3>
                    <p className="mb-6">
                      香港管工在地盤巡查時，單手拿手機已經很忙，根本沒空長時間打字輸入。
                    </p>
                    <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                      <p className="font-bold text-blue-900 mb-2">AI 協助方式：</p>
                      <p className="text-blue-800">
                        直接用 WhatsApp 錄音：「A座17樓泥水批盪搞掂」、「收左兩車石仔」。AI 會自動將語音轉成文字，並整理進當日的 Site Diary 內，連字都唔使打。
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">三、工作流程深度對比</h2>
                  
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-inner">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                      <div className="p-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-6 text-sm">以前 (傳統紙本)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-red-500 text-lg">✗</span> 手寫登記，容易濕水損壞</li>
                          <li className="flex gap-2"><span className="text-red-500 text-lg">✗</span> 月底人手入 Excel，對數到凌晨</li>
                          <li className="flex gap-2"><span className="text-red-500 text-lg">✗</span> 索償 (Claim) 證據散亂，難以追討</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white">
                        <h4 className="font-bold text-blue-600 uppercase tracking-widest mb-6 text-sm">現在 (WhatsApp 影相)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-blue-500 text-lg">!</span> 影相傳回公司，資料留在電話</li>
                          <li className="flex gap-2"><span className="text-blue-500 text-lg">!</span> 文員依然要對住手機螢幕輸資料</li>
                          <li className="flex gap-2"><span className="text-blue-500 text-lg">!</span> 訊息太多，三個月後一定搵唔返</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-blue-600 text-white">
                        <h4 className="font-bold text-blue-100 uppercase tracking-widest mb-6 text-sm">AI 協助 (Buildway 方案)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-green-300 text-lg">✓</span> 影相即自動提取數據</li>
                          <li className="flex gap-2"><span className="text-green-300 text-lg">✓</span> AI 自動與合約、天文台對比</li>
                          <li className="flex gap-2"><span className="text-green-300 text-lg">✓</span> 實時生成專業 PDF 報告</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">四、給老闆與管工的真心建議</h2>
                  <p>
                    轉向 AI 自動化並不是要取代人的經驗。相反，是因為管工的經驗太寶貴，不應該浪費在輸入 Excel 或搵收貨紙上。
                  </p>
                  <p>
                    <strong>Buildway Tech 的經驗：</strong>真正的數碼化，是不會要求工人改變習慣。如果他習慣用 WhatsApp，我們就讓 AI 住進他的 WhatsApp 裡。
                  </p>

                  <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white my-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-20" />
                    <div className="relative z-10">
                       <h3 className="text-3xl font-bold mb-6">想將地盤行政工作量減少 70%？</h3>
                       <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                         我們提供為香港工程公司量身打造的實地 AI 評估。
                       </p>
                       <div className="flex flex-col sm:flex-row gap-4">
                         <a href="/#assessment" className="rounded-full bg-blue-600 px-10 py-4 font-bold hover:bg-blue-700 transition shadow-xl text-center">
                           預約免費現場演示
                         </a>
                         <a href="https://wa.me/85212345678" className="rounded-full bg-white/10 px-10 py-4 font-bold border border-white/20 hover:bg-white/20 transition backdrop-blur-md flex items-center justify-center gap-2">
                           <MessageSquare size={20} /> 直接與創辦人對話
                         </a>
                       </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="space-y-8 pt-12 border-t border-slate-100">
                    <h3 className="text-3xl font-bold text-slate-900">常見問題 (FAQ)</h3>
                    <div className="grid gap-6">
                       <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                          <h4 className="font-bold text-slate-900 mb-3 text-lg">Q: AI 真的能識別手寫工紙嗎？</h4>
                          <p>是的。目前的技術對清晰手寫字準確率極高。即使是潦草的字跡，AI 也能根據您的工人清單進行智能匹配。</p>
                       </div>
                       <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                          <h4 className="font-bold text-slate-900 mb-3 text-lg">Q: 如何證明天雨停工以申請 EOT？</h4>
                          <p>AI 助理會自動將您在 WhatsApp 紀錄的落雨時間、現場拍照、位置數據與天文台當日報表進行對比。月底只需一鍵，即可生成完整的「天雨證明包」，作為索償證據。</p>
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
