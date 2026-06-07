import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare, 
  AlertCircle, 
  CloudRain, 
  Search, 
  ShieldCheck, 
  History, 
  Mic,
  Calculator,
  FileText,
  Receipt,
  Users,
  Calendar,
  Wallet,
  Clock3,
  BarChart3,
  Zap,
  TrendingUp,
  Coins,
  Cpu,
  Link2,
  FileSearch,
  HardHat,
  FileWarning,
  Box,
  Image as ImageIcon
} from "lucide-react";

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
    title: "OCR + WhatsApp + CRM + MCP：香港中小企 AI 自動化實戰指南 (含 ROI 分析)",
    date: "2026-06-08",
    author: "Buildway AI Team",
    category: "實戰教學",
    content: "這是一篇為老闆而寫的自動化指南：從一個 WhatsApp 查詢開始，展示 AI 如何串聯公司所有系統並帶來真實的回報。",
    fullContent: true
  },
  "renovation-ai-quotation": {
    title: "裝修公司如何利用 AI 做報價？實現分鐘級準確報價的關鍵",
    date: "2026-06-05",
    author: "Buildway AI Team",
    category: "實戰教學",
    content: "分享室內設計與裝修工程如何整合歷史成本庫，利用 AI 助理快速生成專業初步報價單。",
  },
  "engineering-doc-automation": {
    title: "工程公司最值錢的不是圖紙，而是紀錄：有文件不代表搵得到",
    date: "2026-06-16",
    author: "Buildway AI Team",
    category: "行業深度",
    content: "為什麼工程公司總是找不到三年前的 SI 或 Lab Report？這篇文章探討如何利用 AI 建立公司的「第二大腦」，將塵封的文件變回有價值的資產。",
    fullContent: true
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
  },
  "sme-boss-time-waste": {
    title: "香港中小企老闆每日最浪費時間的事：AI 如何處理文書、會計及後勤工作？",
    date: "2026-06-14",
    author: "Buildway AI Team",
    category: "戰略分析",
    content: "這篇文章深入探討香港中小企老闆在行政雜務上的隱形成本，並展示 AI 如何透過 10 個真實場景解放老闆的時間。",
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
      "@type": post.author === "Buildway Tech 創辦人" ? "Person" : "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Buildway Tech (HK) Limited"
    }
  } : null;

  const faqDataMap: Record<string, any[]> = {
    "site-foreman-ai-automation": [
      {
        question: "AI 真的能識別手寫工紙嗎？",
        answer: "目前的 AI OCR 技術結合大型語言模型（LLM），對於清晰的手寫字已有超過 90% 的準確率。即使是潦草的字跡，AI 也能根據上下文（例如工人姓名清單、常見工序）進行智能校對，顯著減少人工輸入量。"
      },
      {
        question: "如何證明天雨停工以申請 EOT？",
        answer: "AI 助理會自動將您在 WhatsApp 紀錄的落雨時間、現場拍照、位置數據與天文台當日報表進行自動化對比整理。月底時只需一鍵，即可生成完整的「天雨延期證明文件包」，作為索償或合約延期的堅實證據。"
      }
    ],
    "sme-boss-time-waste": [
      {
        question: "導入這些 AI 系統會否很貴？",
        answer: "我們會根據中小企的實際需求進行階梯式部署。通常首個自動化流程（例如收據處理或自動對數）的成本遠低於請一個全職文員，且能 24/7 運作，投資回報率 (ROI) 非常明顯。"
      },
      {
        question: "現有的舊會計系統能接駁 AI 嗎？",
        answer: "可以。透過我們提供的 MCP (Model Context Protocol) 技術，AI 可以像人類一樣「讀取」並「寫入」您的現有 Excel 或舊版資料庫，無需您更換整套系統。"
      }
    ],
    "whatsapp-crm-value": [
      {
        question: "我的客戶資料放在 AI 系統安全嗎？",
        answer: "安全性是 B2B 系統的底線。我們採用企業級加密與資料隔離技術，您的客戶資料與商業機密不會被用於訓練公共 AI 模型。同時，所有自動化流程均可設置「人工審核」關卡，確保發出的訊息 100% 準確。"
      },
      {
        question: "如果我的 CRM 是舊版系統，還能對接嗎？",
        answer: "這正是 MCP 技術的優勢。無論您的資料是在傳統資料庫、特定的 ERP 軟體還是多個 Excel 表格中，我們都能建立連接層，讓 AI 能夠即時調用這些數據。"
      }
    ],
    "engineering-doc-automation": [
      {
        question: "掃描文件這麼多，AI 真的找得到嗎？",
        answer: "AI 不只是做「關鍵字搜尋」。透過 RAG (檢索增強生成) 技術，AI 能理解您的意圖。即使您忘記了文件編號，只需問「上次 A1 倉漏水係點處理？」，AI 就能根據內容語義找出相關的 SI 與 Photo Record。"
      },
      {
        question: "舊圖紙與手寫紀錄也能辨識嗎？",
        answer: "是的。我們採用高精度的工程專用 OCR 模型，能辨識圖紙上的標註、蓋章，以及地盤巡查表上的手寫簽名與備註，將這些「死數據」激活成可搜尋的資產。"
      }
    ]
  };

  const faqJsonLd = faqDataMap[slug] ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqDataMap[slug].map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      }
    }))
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
                   <p className="text-sm text-slate-500">
                     {post.author === "Buildway Tech 創辦人" ? "前地盤管理 & AI 自動化顧問" : "Buildway AI 實戰專家團隊"}
                   </p>
                </div>
              </div>
            </header>

            <div className="prose prose-xl prose-blue max-w-none text-slate-600 leading-relaxed space-y-12">
              {slug === "site-foreman-ai-automation" && (
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
                    <li><strong>Site Diary (地盤日誌)：</strong>今日天氣、工人人數、工序進度。往往要靠記憶力翻查 WhatsApp 群組來「作」一份。</li>
                    <li><strong>巡查紀錄 (Safety/QA)：</strong>發現缺陷，影相後要返去寫字樓整理成報告，最怕老闆突然查返三個月前嘅相。</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100 italic">二、管工最頭痛的 5 個真實場景</h2>

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

                  <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <History className="text-blue-600" /> 場景 2：找回「消失」的紀錄
                    </h3>
                    <p className="mb-4">
                      呢類問題通常唔會預早通知你，好多時老闆係突然問：
                    </p>
                    <ul className="bg-slate-50 rounded-2xl p-6 border border-blue-100 mb-6 space-y-2 italic text-slate-700">
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
                </>
              )}

              {slug === "sme-boss-time-waste" && (
                <>
                  <section className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-10" />
                    <div className="relative z-10">
                      <p className="text-blue-400 font-bold uppercase tracking-widest mb-4">SME Executive Report</p>
                      <h2 className="text-3xl font-bold mb-6">老闆的「時間小偷」</h2>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        香港中小企老闆最寶貴的資產是時間，但現實中，大部分老闆每天有 60% 以上的時間浪費在「對數」、「追單」同「處理後勤雜務」上。
                      </p>
                    </div>
                  </section>

                  <p>
                    我們訪談過超過 50 位不同行業的香港老闆，發現大家不約而同地面對同一個困境：生意做得愈大，行政雜務就愈多。原本應該去「搵生意」的時間，全部變成了「幫文員做野」。
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">10 個正在燃燒您時間的行政場景</h2>

                  <div className="grid gap-6">
                    {[
                      { title: "對數 (Account Settlement)", icon: Calculator, desc: "以前要逐張單對住銀行 Statement 入數；現在文員影張相，AI 自動比對金額與對帳單，異常自動提醒。" },
                      { title: "Invoice 發票處理", icon: FileText, desc: "以前月底要對住 Excel 逐個客打單；現在 AI 根據 WhatsApp 交易紀錄自動生成草稿，老闆確認後一鍵發出。" },
                      { title: "收據 (Receipts) 管理", icon: Receipt, desc: "以前師傅、司機將收據塞到成車都係；現在隨手影相傳 WhatsApp，AI 自動提取日期、金額、商戶並分類入帳。" },
                      { title: "MPF 強積金申報", icon: ShieldCheck, desc: "以前要人工計算供款並填表；現在 AI 自動根據出糧紀錄算出供款額，並自動產出匯入檔。" },
                      { title: "OT 加班計算", icon: Clock3, desc: "以前要對住 WhatsApp 紀錄一條條數；現在 AI 自動從對話中抓取 OT 字眼，對比打卡數據自動累計。" },
                      { title: "出糧 (Payroll) 核對", icon: Wallet, desc: "以前月底「爆數」出糧最驚計錯；現在 AI 整合工資、OT、假項，產出明細對比表供老闆最後審核。" },
                      { title: "員工請假管理", icon: Calendar, desc: "以前 WhatsApp 答完唔記得扣假；現在員工在 WhatsApp 提問，AI 助理自動查假、自動紀錄、自動更新餘額。" },
                      { title: "排更 (Rostering) 優化", icon: Users, desc: "以前對住個排更表排到頭都大；現在 AI 根據員工偏好與過往數據，自動產出最優排更建議。" },
                      { title: "報價 (Quoting) 響應", icon: Zap, desc: "以前回個初步報價要等幾日；現在對話問 AI，它自動從過往資料庫抓取最新價格，3 分鐘出到初步建議。" },
                      { title: "WhatsApp 客戶紀錄", icon: MessageSquare, desc: "以前對話留在員工手機，離職就帶走；現在 AI 自動整理 WhatsApp 內容進 CRM，所有跟進細節永久保留。" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 p-8 rounded-3xl border border-slate-100 bg-white hover:border-blue-200 transition shadow-sm group">
                        <div className="h-14 w-14 shrink-0 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <item.icon size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                           <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">深度流程解析：以前 vs 現在 vs AI 協助</h2>
                  
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-inner">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                      <div className="p-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-6 text-sm">以前 (人工收集)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span>1.</span> 員工收集紙本收據</li>
                          <li className="flex gap-2"><span>2.</span> 月底黏在報銷單上</li>
                          <li className="flex gap-2"><span>3.</span> 老闆逐張單對數簽名</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white">
                        <h4 className="font-bold text-blue-600 uppercase tracking-widest mb-6 text-sm">現在 (拍照傳送)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span>1.</span> 員工拍照傳 WhatsApp</li>
                          <li className="flex gap-2"><span>2.</span> 文員對住手機看相片入 Excel</li>
                          <li className="flex gap-2"><span>3.</span> 資料往往在中途遺失</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-blue-600 text-white">
                        <h4 className="font-bold text-blue-100 uppercase tracking-widest mb-6 text-sm">AI 協助 (自動入帳)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span>✓</span> 影相傳給 AI 助理</li>
                          <li className="flex gap-2"><span>✓</span> AI 秒讀數據並分類入帳</li>
                          <li className="flex gap-2"><span>✓</span> 老闆 Dashboard 實時顯示開支</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {slug === "whatsapp-crm-value" && (
                <>
                  <section className="bg-blue-50/50 p-10 rounded-[2.5rem] border border-blue-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <MessageSquare size={120} className="text-blue-600" />
                    </div>
                    <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">Automation Case Study</p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">當您的客戶在 WhatsApp 傳來一張照片...</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      這不是科幻小說，而是 Buildway Tech 正在為香港中小企落地的真實場景。想像一下，客戶拍下一個零件或一份手稿，您的 AI 助理能在 10 秒內給出專業回覆。
                    </p>
                  </section>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">一、實戰場景：從「相片」到「即時報價」</h2>
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-inner my-12">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                      <div className="p-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-6 text-sm">以前 (純人手)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-red-500">✗</span> 文員收到相，唔識分型號</li>
                          <li className="flex gap-2"><span className="text-red-500">✗</span> 傳給師傅，師傅忙緊未睇</li>
                          <li className="flex gap-2"><span className="text-red-500">✗</span> 4 小時後才回覆，客已找別家</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white">
                        <h4 className="font-bold text-blue-600 uppercase tracking-widest mb-6 text-sm">現在 (半數碼化)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span>!</span> 影相傳入公司群組</li>
                          <li className="flex gap-2"><span>!</span> 文員翻查舊 Excel 報價表</li>
                          <li className="flex gap-2"><span>!</span> 1 小時後回覆，依然太慢</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-blue-600 text-white">
                        <h4 className="font-bold text-blue-100 uppercase tracking-widest mb-6 text-sm">AI 自動化協助</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-green-300">✓</span> AI 自動辨識照片中零件型號</li>
                          <li className="flex gap-2"><span className="text-green-300">✓</span> 自動連線公司庫存與成本庫</li>
                          <li className="flex gap-2"><span className="text-green-300">✓</span> 10 秒內草擬回覆，老闆只需確認</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">二、背後的技術英雄 (老闆易明版)</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm">
                       <Search size={32} className="text-blue-600 mb-4" />
                       <h4 className="text-xl font-bold text-slate-900 mb-2">OCR (讀圖高手)</h4>
                       <p className="text-slate-500">負責「睇」相片同文件，將手寫字或產品型號轉化為電腦讀得明的文字。</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm">
                       <Users size={32} className="text-blue-600 mb-4" />
                       <h4 className="text-xl font-bold text-slate-900 mb-2">CRM (記性最好的秘書)</h4>
                       <p className="text-slate-500">儲存所有客戶歷史。AI 會查返：「呢位客上次買左咩？有無特別折扣？」</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm">
                       <Link2 size={32} className="text-blue-600 mb-4" />
                       <h4 className="text-xl font-bold text-slate-900 mb-2">MCP (萬能插頭)</h4>
                       <p className="text-slate-500">橋樑技術，讓 AI 能夠即時查閱您的 Excel、庫存軟體或舊系統，唔使搬資料。</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm">
                       <Cpu size={32} className="text-blue-600 mb-4" />
                       <h4 className="text-xl font-bold text-slate-900 mb-2">AI Agent (全能助理)</h4>
                       <p className="text-slate-500">大腦角色。它決定：先用 OCR 睇圖，再經 MCP 查庫存，最後在 WhatsApp 回覆。</p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">三、真實 ROI 分析：這是一筆投資還是開支？</h2>
                  <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-tech-grid opacity-10" />
                    <div className="relative z-10 grid gap-12 md:grid-cols-2">
                       <div className="space-y-6">
                          <h4 className="text-2xl font-bold flex items-center gap-2"><TrendingUp className="text-green-400" /> 效率數據 (SME 估算)</h4>
                          <ul className="space-y-4 opacity-90 text-lg">
                             <li className="flex justify-between"><span>每日節省時間：</span> <span className="font-bold text-green-400">2.5 小時</span></li>
                             <li className="flex justify-between"><span>每月節省時間：</span> <span className="font-bold text-green-400">55 小時</span></li>
                             <li className="flex justify-between"><span>人工成本估算：</span> <span className="font-bold text-green-400">HK$100 - $250 / hr</span></li>
                             <li className="flex justify-between"><span>每月隱形節省：</span> <span className="font-bold text-green-400">HK$5,500 - $13,750</span></li>
                          </ul>
                       </div>
                       <div className="p-8 rounded-3xl bg-white/10 border border-white/20 flex flex-col justify-center text-center">
                          <p className="text-blue-300 font-bold uppercase tracking-widest mb-4">Payback Period</p>
                          <p className="text-5xl font-extrabold mb-4">4 - 7 個月</p>
                          <p className="text-lg opacity-80 font-medium italic">「不到半年，系統節省的人工與時間即可抵消開發成本。」</p>
                       </div>
                    </div>
                  </div>
                </>
              )}

              {slug === "engineering-doc-automation" && (
                <>
                  <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <FileSearch size={140} className="text-blue-600" />
                    </div>
                    <p className="text-blue-600 font-bold uppercase tracking-widest mb-4">Engineering Authority</p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">有文件，不代表搵得到</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                      工程公司最值錢的不是圖紙，而是紀錄。但當老闆突然要查三年前某個地盤的關鍵資料時，往往是噩夢的開始。
                    </p>
                    <div className="flex items-center gap-2 text-slate-500 font-medium italic border-l-4 border-blue-600 pl-4">
                       「老陳，搵返三年前 X 項目果份防水測試報告出黎，客戶話而家漏水要我地孭旗。」
                    </div>
                  </section>

                  <p>
                    這句話，相信很多工程界老闆、PM 甚至管工都聽過。問題通常不是我們沒有做那份文件，而是那份文件現在靜靜地躺在寫字樓某個角落的文件夾裡，或者埋藏在幾萬條 WhatsApp 紀錄的深處。
                  </p>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">一、工程紀錄的「失蹤名單」</h2>
                  <p>
                    為什麼我們總是在找資料上浪費時間？因為一個工程涉及的紀錄實在太散：
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { title: "Site Instruction (SI)", icon: FileText },
                      { title: "RFI (諮詢便條)", icon: MessageSquare },
                      { title: "Method Statement", icon: ShieldCheck },
                      { title: "Material Submission", icon: Box },
                      { title: "Shop Drawing", icon: Calculator },
                      { title: "Inspection Record", icon: CheckCircle2 },
                      { title: "Photo Record", icon: ImageIcon },
                      { title: "Testing Report", icon: History },
                      { title: "Lab Report (試壓報告)", icon: BarChart3 },
                      { title: "Site Diary (地盤日誌)", icon: Clock },
                      { title: "WhatsApp Record", icon: MessageSquare },
                    ].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 bg-white">
                        <doc.icon size={18} className="text-blue-600" />
                        <span className="font-bold text-slate-700 text-sm">{doc.title}</span>
                      </div>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">二、工作流程深度對比：搵資料的代價</h2>
                  
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-inner my-12">
                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                      <div className="p-8">
                        <h4 className="font-bold text-slate-500 uppercase tracking-widest mb-6 text-sm">傳統做法 (憑記憶)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-red-500">✗</span> 逐個櫃翻查紙本文件</li>
                          <li className="flex gap-2"><span className="text-red-500">✗</span> 在 WhatsApp Search 關鍵字 (常因訊息太多而失靈)</li>
                          <li className="flex gap-2"><span className="text-red-500">✗</span> 耗時 2-3 天，甚至最後找不到</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-white">
                        <h4 className="font-bold text-blue-600 uppercase tracking-widest mb-6 text-sm">初階數碼化 (雲端硬碟)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span>!</span> 檔案名格式不一</li>
                          <li className="flex gap-2"><span>!</span> 影相文件名是「IMG_2021...」完全無法識別內容</li>
                          <li className="flex gap-2"><span>!</span> 仍需逐個 Folder 點開來看</li>
                        </ul>
                      </div>
                      <div className="p-8 bg-blue-600 text-white">
                        <h4 className="font-bold text-blue-100 uppercase tracking-widest mb-6 text-sm">AI 增強 (Buildway 方案)</h4>
                        <ul className="space-y-4 text-sm font-medium">
                          <li className="flex gap-2"><span className="text-green-300">✓</span> AI 自動理解 PDF、相片與對話內容</li>
                          <li className="flex gap-2"><span className="text-green-300">✓</span> 語義搜尋：問 AI「搵返防水紀錄」即可找出所有相關相與報告</li>
                          <li className="flex gap-2"><span className="text-green-300">✓</span> 30 秒內精確定位</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">三、AI 如何變回公司的「資產活字典」？</h2>
                  <p>
                    我們利用三項核心技術，解決「搵唔到資料」的問題：
                  </p>
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm">1</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">深度 OCR：讀懂每一張收貨紙與試壓報告</h4>
                        <p className="text-lg">不只是掃描，而是提取。AI 會自動辨識文件中的「項目編號」、「分掛判商」、「批核日期」與「檢測結果」，並自動打標籤。</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm">2</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">RAG 知識庫：賦予 AI 公司的專屬記憶</h4>
                        <p className="text-lg">我们将公司歷年來的所有 Site Instruction、RFI、Method Statement 餵給 AI。當您問問題時，AI 會翻查這些真實紀錄來回答，並附上文件連結。</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="h-12 w-12 shrink-0 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xl shadow-sm">3</div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xl mb-2">AI Agent：您的 24/7 資料管理員</h4>
                        <p className="text-lg">Agent 會在背景工作：當 WhatsApp 群組傳來一張新的 Inspection Record 時，它自動將其分類、重命名並歸檔，確保系統永遠是最新的。</p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-900 pt-8 border-t border-slate-100">總結：紀錄是您應對爭議的唯一防盾</h2>
                  <p>
                    工程界常說：「口講無憑，睇紀錄。」但如果紀錄找不回來，跟沒有紀錄其實沒有分別。將「死文件」活化成「隨時可查的知識資產」，是現代工程公司在激烈競爭中生存的唯一出路。
                  </p>

                  <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white my-20 text-center shadow-2xl relative overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-tech-grid opacity-20" />
                    <div className="relative z-10">
                       <h3 className="text-3xl font-bold mb-6 text-white">想在 30 秒內搵返三年前的地盤資料？</h3>
                       <p className="text-xl text-blue-100 mb-10 opacity-90">
                         我們可以協助您將現有的舊硬碟、文件夾資料進行 AI 結構化處理。
                       </p>
                       <div className="flex flex-col sm:flex-row justify-center gap-4">
                         <a href="/#assessment" className="rounded-full bg-blue-600 px-10 py-4 font-bold hover:bg-blue-700 transition shadow-xl">
                           預約資料數碼化評估
                         </a>
                         <a href="https://wa.me/85212345678" className="rounded-full bg-white/10 px-10 py-4 font-bold border border-white/20 hover:bg-white/20 transition backdrop-blur-md flex items-center justify-center gap-2">
                           <MessageSquare size={20} /> 直接諮詢顧問
                         </a>
                       </div>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div className="space-y-8 pt-12 border-t border-slate-100">
                    <h3 className="text-3xl font-bold text-slate-900">常見問題 (FAQ)</h3>
                    <div className="grid gap-6">
                       {faqDataMap["engineering-doc-automation"].map((f, i) => (
                         <div key={i} className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">Q: {f.question}</h4>
                            <p>{f.answer}</p>
                         </div>
                       ))}
                    </div>
                  </div>
                </>
              )}

              {/* Default Placeholder Rendering for other posts */}
              {!post.fullContent && (
                <>
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
                </>
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
