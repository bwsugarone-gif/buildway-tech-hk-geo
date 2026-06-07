import { Metadata } from "next";
import * as motion from "framer-motion/client";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Building2, 
  BarChart, 
  Rocket, 
  FileSearch, 
  MessageSquare, 
  History, 
  AlertTriangle, 
  Lightbulb, 
  Zap,
  Bot
} from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

const caseData: Record<string, any> = {
  "poc-doc-search": {
    company: "Buildway Tech Internal POC",
    title: "POC Case 1：工程文件語義搜尋系統",
    result: "成功實現跨項目、跨格式的精確資料檢索",
    industry: "技術驗證 / 文件管理",
    problem: "工程公司面臨海量的 Site Instruction (SI)、RFI 與測試報告，傳統基於文件名的搜尋完全無法應對。當老闆需要查閱「三年前某個項目的防水補漏方案」時，員工往往需要耗費數天翻查硬碟，甚至最終無功而返。這不僅是效率問題，更是嚴重的合約風險。",
    traditional: "依靠人工記憶與簡單的文件夾分類。員工需逐一打開 PDF 預覽內容，或在 WhatsApp 群組中嘗試輸入不確定的關鍵字。資料檢索成功率極其依賴資深員工的個人記憶，缺乏系統性的傳承。",
    aiMethod: "導入 RAG (檢索增強生成) 架構。首先通過工程專用的 OCR 模型對舊有掃描件進行高精度識別，隨後將文本向量化存入知識庫。系統建立了一個對話式介面，允許用戶使用自然語言（如廣東話）描述需求，由 AI Agent 在背後進行語義匹配與資料提取。",
    testResult: "在包含 5,000 份混合格式（PDF、JPG、Docx）的測試數據庫中，AI 能在 5 秒內精確定位到包含特定技術細節的文件。對於模糊查詢（如「查返同滲漏有關嘅 SI」），系統的召回率達到了 94%，顯著優於傳統關鍵字搜尋的 30%。",
    limitations: "目前的 OCR 對於極度模糊、受潮或沾有泥水的原始紙本文件仍有識別誤差。此外，對於手繪草圖中的非文字標註理解尚處於初級階段，需要人工輔助標籤。",
    nextStep: "下一步將開發多模態模型，嘗試讓 AI 直接理解工程圖則 (Shop Drawing) 中的幾何結構與空間關係，實現「以圖搜圖」的進階功能。"
  },
  "poc-quotation-assistant": {
    company: "Buildway Tech Internal POC",
    title: "POC Case 2：WhatsApp 報價助理",
    result: "初步驗證「對話即報價」的自動化流轉",
    industry: "技術驗證 / 商業自動化",
    problem: "中小企老闆在度尺或巡場後，往往需要回到寫字樓對著電腦錄入數據，才能產出一份初步報價單。這段「數據時差」常導致客戶流失。老闆需要一種能隨時隨地、透過最熟悉的工具（WhatsApp）就能調用成本庫並生成專業草稿的方法。",
    traditional: "老闆手寫筆記或錄音，傳給文員，文員入 Excel，核對最新物料價錢，整個過程通常需要 24-48 小時，且過程中極易出現輸入錯誤或單價過時的問題。",
    aiMethod: "開發基於 WhatsApp Business API 的 AI Agent。老闆只需發送一段語音或文字（如：A座單位度尺，客廳地台 300 呎用馬可波羅磚，牆身乳膠漆...），AI 會自動提取「工序、數量、物料」實體，並通過 MCP 協議即時連結後台的物料成本資料庫，自動計算總價並產出標準化報價草稿。",
    testResult: "測試顯示，從發送 WhatsApp 訊息到 AI 返回完整報價草稿，平均耗時 12 秒。計算準確率在結構化輸入下達到 100%。AI 甚至能主動提示「該物料近期升價 15%」，提醒老闆調整邊際利潤。",
    limitations: "對於非標準化的奇特工程需求（如「幫我整到好似尋晚電視見到果種風格」），AI 難以直接對應庫存物料，仍需人工介入定義。此外，語音轉文字在嘈雜地盤環境下的識別率有待進一步優化。",
    nextStep: "計劃加入圖像辨識報價，讓老闆拍下損毀位置，AI 自動建議維修清單並關聯過往類似項目的報價方案。"
  },
  "poc-site-diary": {
    company: "Buildway Tech Internal POC",
    title: "POC Case 3：Site Diary 自動化助手",
    result: "成功將地盤日誌記錄時間縮短 80%",
    industry: "技術驗證 / 現場管理",
    problem: "Site Diary 是工程最重要但最受管工厭惡的任務。每日收工後，管工需回想今日出勤人數、天氣、主要工序與事故。這類「回憶式」記錄往往不準確，且容易出現斷層，導致日後面對索償 (Claim) 時缺乏強大的證據支持。",
    traditional: "管工在筆記簿草草記錄，或依賴 WhatsApp 群組的碎料。每晚花費 30-45 分鐘在電腦前填寫電子表格，過程枯燥且容易產生漏報、錯報現象。",
    aiMethod: "實施「隨手記」策略。管工在地盤巡查期間，隨時發送照片或短錄音至 AI 助手。AI 會自動提取時間、位置、工種人數等關鍵元數據。到下午 5 點，AI Agent 會自動匯總全日資訊，對比天文台數據填充天氣，產出一份當日地盤日誌草稿，管工只需在手機上確認即可。",
    testResult: "在為期一個月的內部測試中，管工平均每日只需花費 3 分鐘進行覆核，Site Diary 填寫完成率從 65% 提升至 100%。記錄的細節量（相片證據、具體工序）比純人手記錄增加了 3 倍，極大增強了資料的法律背書能力。",
    limitations: "目前系統對分判商工人的精確姓名辨識仍需預設清單，對於突發加入的臨時工友辨識度較低。同時，系統對於多個地盤同時運作時的數據歸類邏輯仍需細化。",
    nextStep: "研發自動化進度比對功能，將 AI 生成的 Site Diary 直接與 MS Project 進度表對接，自動計算項目是否偏離關鍵路徑 (Critical Path)。"
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = caseData[slug];
  
  return {
    title: item ? `${item.title} | Buildway Tech` : "內容整理中",
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
        <a href="/cases" className="inline-flex items-center gap-2 text-blue-600 font-bold mb-12 hover:opacity-80 transition group">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" /> 返回案例列表
        </a>

        {item ? (
          <article>
            <div className="mb-16 pb-12 border-b border-slate-100">
              <div className="flex items-center gap-3 text-blue-600 font-bold uppercase tracking-[0.2em] mb-6">
                <Rocket size={20} /> {item.company}
              </div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight sm:text-6xl italic">
                {item.title}
              </h1>
              <div className="inline-flex items-center gap-4 rounded-2xl bg-blue-50 px-8 py-5 border border-blue-100 shadow-sm text-blue-700">
                <CheckCircle2 size={28} />
                <span className="text-xl font-bold">核心成果：{item.result}</span>
              </div>
            </div>

            <div className="space-y-20">
              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <AlertTriangle size={24} className="text-red-500" /> 1. 面臨問題
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {item.problem}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <History size={24} className="text-slate-400" /> 2. 傳統做法
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {item.traditional}
                </p>
              </section>

              <section className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <Zap size={24} className="text-blue-600" /> 3. AI 實施方案
                </h3>
                <p className="text-xl text-slate-700 leading-relaxed">
                  {item.aiMethod}
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <BarChart size={24} className="text-green-600" /> 4. 測試結果
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed font-medium bg-green-50/50 p-8 rounded-3xl border border-green-100">
                  {item.testResult}
                </p>
              </section>

              <section className="border-t border-slate-100 pt-12">
                <div className="grid gap-12 lg:grid-cols-2">
                   <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <AlertTriangle size={20} className="text-amber-500" /> 技術限制
                      </h4>
                      <p className="text-lg text-slate-500 leading-relaxed">
                        {item.limitations}
                      </p>
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Lightbulb size={20} className="text-blue-500" /> 下一步發展
                      </h4>
                      <p className="text-lg text-slate-500 leading-relaxed">
                        {item.nextStep}
                      </p>
                   </div>
                </div>
              </section>
            </div>

            <div className="mt-24 p-12 rounded-[3rem] bg-slate-900 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-tech-grid opacity-10" />
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-6">想將此 POC 應用到您的企業場景？</h3>
                <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">我們的顧問可以為您提供詳細的技術堆棧與實施路徑諮詢。</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/#assessment" className="rounded-full bg-blue-600 px-10 py-4 font-bold text-white hover:bg-blue-700 transition shadow-xl">
                    申請技術評估
                  </a>
                  <a href="https://wa.me/85212345678" className="rounded-full bg-white/10 px-10 py-4 font-bold text-white border border-white/20 hover:bg-white/20 transition backdrop-blur-md">
                    獲取實施細節
                  </a>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">內容整理中</h1>
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
