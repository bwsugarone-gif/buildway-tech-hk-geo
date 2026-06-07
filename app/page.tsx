import type { Metadata } from "next";
import * as motion from "framer-motion/client";
import AssessmentForm from "../components/AssessmentForm";
import { 
  Timer, 
  Zap, 
  MessageSquare, 
  Database, 
  ShieldCheck, 
  BarChart3,
  Search,
  LayoutDashboard,
  Coins,
  Users,
  ArrowRight
} from "lucide-react";

const companyName = "Buildway Tech (HK) Limited";
const siteUrl = "http://localhost:3000";
const siteTitle =
  "Buildway Tech (HK) Limited | 香港中小企 AI 數碼化顧問 | 節省行政工作";
const siteDescription =
  "Buildway Tech (HK) Limited 為香港中小企老闆提供 AI 數碼化顧問服務，透過 AI 助理、公司資料中心及知識庫，每日節省 2-4 小時重複行政工作。";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: companyName,
  keywords: [
    "Buildway Tech (HK) Limited",
    "香港中小企 AI",
    "香港 AI 自動化",
    "AI 報價系統",
    "AI 客戶管理",
    "AI 文件整理",
    "AI 出糧系統",
    "香港公司數碼化",
    "SME AI automation Hong Kong",
    "Buildway Tech HK",
    "AI 助理",
    "公司知識庫",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "zh_HK",
    siteName: companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  other: {
    "geo.region": "HK",
    "geo.placename": "Hong Kong",
    "business:contact_data:country_name": "Hong Kong",
  },
};

const resultCards = [
  { title: "每日慳返 2-4 小時", icon: Timer, desc: "自動化重複行政工作，讓老闆專注業務發展。", pattern: "bg-tech-grid" },
  { title: "報價速度提升 5 倍", icon: Zap, desc: "AI 助理秒速生成初步報價，搶先贏得客戶。", pattern: "bg-tech-circuit" },
  { title: "WhatsApp 自動回覆", icon: MessageSquare, desc: "24/7 AI 客服處理查詢，不漏掉任何潛在生意。", pattern: "bg-tech-network" },
  { title: "文件集中管理", icon: Database, desc: "所有合約、收據自動歸檔，隨時隨地一搜即得。", pattern: "bg-tech-flow" },
  { title: "減少人手出錯", icon: ShieldCheck, desc: "由 AI 處理計算與比對，避免人為疏忽導致損失。", pattern: "bg-tech-circuit" },
  { title: "老闆即時掌握數據", icon: BarChart3, desc: "Dashboard 一眼睇晒營運指標，決策更有根據。", pattern: "bg-tech-grid" },
];

const serviceCards = [
  { title: "AI 報價助理", icon: Zap, desc: "過往資料整理成模型，快速生成精準報價單。", pattern: "bg-tech-circuit" },
  { title: "AI 客戶跟進", icon: Users, desc: "自動提醒與紀錄客戶狀態，提升轉化率與服務感。", pattern: "bg-tech-network" },
  { title: "AI 文件整理", icon: Search, desc: "自動分類 PDF 與相片，把紙張資料數碼化存檔。", pattern: "bg-tech-flow" },
  { title: "AI 出糧系統", icon: Coins, desc: "自動核對工紙、OT 與強積金，簡化後勤流程。", pattern: "bg-tech-grid" },
  { title: "公司資料中心", icon: Database, desc: "集中管理項目與客戶資料，告別 Excel 與散亂對話。", pattern: "bg-tech-network" },
  { title: "老闆 Dashboard", icon: LayoutDashboard, desc: "將複雜數據視覺化，助您掌握公司健康狀況。", pattern: "bg-tech-grid" },
];

const cases = [
  { company: "裝修工程公司", title: "由 WhatsApp 紀錄到 AI 自動報價", result: "報價時間由 3 日縮短至 5 分鐘" },
  { company: "保險代理團隊", title: "AI 產品助理：秒查保單細節", result: "團隊每日節省 2 小時查閱時間" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: companyName,
  legalName: companyName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Buildway Tech (HK) Limited provides AI digitalization consulting services for Hong Kong SMEs.",
  areaServed: { "@type": "AdministrativeArea", name: "Hong Kong" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: companyName,
  url: siteUrl,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: companyName, item: siteUrl },
  ],
};

const faqs = [
  {
    question: "AI 是否會取代員工？",
    answer: "不會。AI 的目標是處理重複行政工作，讓員工專注於客戶跟進與業務決策，提升整體人均產值。",
  },
  {
    question: "小公司是否適合用 AI？",
    answer: "非常適合。AI 能以極低成本模擬 2-3 名行政人員的工作量，特別能解決中小企人手不足的問題。",
  },
  {
    question: "公司資料很亂可以開始嗎？",
    answer: "可以。我們的第一步就是幫您建立「公司資料中心」，將散亂的文件與對話有系統地數碼化。",
  },
  {
    question: "是否一定要一次過做完整系統？",
    answer: "不需要。我們可以由最痛的環節（例如報價或跟進）開始，見效後再逐步擴展到其他流程。",
  },
  {
    question: "如何開始免費 AI 評估？",
    answer: "只需填寫下方的表單，我們的顧問會分析您的行業痛點，並提供一份初步的數碼化建議報告。",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function HeroNetworkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_10%,rgba(59,130,246,0.12),transparent_34%),radial-gradient(circle_at_15%_35%,rgba(14,165,233,0.08),transparent_28%)]" />
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <span className="hero-particle hero-particle-one" />
      <span className="hero-particle hero-particle-two" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white text-slate-950">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="relative isolate px-5 py-24 sm:px-8 lg:px-12 overflow-hidden border-b border-slate-100 bg-white">
        <HeroNetworkBackground />
        <div className="relative mx-auto max-w-7xl flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700"
          >
            AI Agent & Automation Consultant
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl text-slate-900"
          >
            讓公司每日節省<br />2-4 小時行政工作
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-500 sm:text-2xl"
          >
            打造企業級 AI 自動化流程，將 WhatsApp、文件與公司資料<br className="hidden md:block" />轉化為核心資產，實現數碼化高效管理。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#assessment" className="rounded-full bg-blue-600 px-10 py-5 font-bold text-white shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all hover:scale-105">
              立即免費評估
            </a>
            <a href="#services" className="rounded-full border border-slate-200 bg-white px-10 py-5 font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-all">
              查看解決方案
            </a>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section id="value" className="px-5 py-24 sm:px-8 lg:px-12 bg-slate-50/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Business Results</p>
            <h2 className="text-3xl font-bold sm:text-5xl text-slate-900">我負責帶來</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resultCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative group overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition hover:shadow-2xl hover:border-blue-400 ${card.pattern}`}
              >
                <div className="relative z-10">
                  <card.icon size={48} color="#2563eb" strokeWidth={1.5} />
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-slate-500 leading-relaxed text-lg">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-tech-grid" />
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-500 mb-4">Success Stories</p>
              <h2 className="text-3xl font-bold sm:text-5xl text-white">真實落地案例</h2>
            </div>
            <a href="/cases" className="text-blue-400 font-bold text-lg hover:text-blue-300 transition flex items-center gap-2 group">
              查看更多案例 <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <div key={item.title} className="group relative rounded-3xl bg-white/5 p-10 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition bg-tech-circuit" />
                <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4 relative z-10">{item.company}</p>
                <h3 className="text-2xl font-bold text-white leading-tight mb-8 relative z-10">{item.title}</h3>
                <div className="relative z-10 inline-flex items-center gap-3 rounded-full bg-blue-500/20 px-6 py-3 text-base font-bold text-blue-300 border border-blue-500/30">
                  成果：{item.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-5 py-24 sm:px-8 lg:px-12 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Core Services</p>
            <h2 className="text-3xl font-bold sm:text-5xl text-slate-900">AI 助理與自動化方案</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service, i) => (
              <div key={service.title} className={`relative group rounded-3xl border border-slate-100 bg-slate-50 p-10 hover:bg-white hover:border-blue-400 transition shadow-sm overflow-hidden ${service.pattern}`}>
                <div className="relative z-10">
                  <service.icon size={48} color="#2563eb" strokeWidth={1.5} className="transition-transform group-hover:scale-110" />
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-4 text-slate-500 leading-relaxed text-lg">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-5 py-24 sm:px-8 lg:px-12 bg-slate-50/30 border-t border-slate-100 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Questions</p>
            <h2 className="text-3xl font-bold sm:text-5xl text-slate-900">常見問題</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{faq.question}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-slate-50 py-24 border-t border-slate-100">
        <AssessmentForm />
      </div>

      {/* Contact CTA */}
      <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[3rem] bg-blue-600 p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-tech-circuit" />
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl font-bold sm:text-6xl text-white mb-8">準備好邁向 AI 自動化？</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">立即聯絡我們的顧問，為您的企業量身打造專屬 AI 助理流程。</p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row w-full sm:w-auto">
              <a href="mailto:hello@buildway.tech" className="rounded-full bg-white px-12 py-5 font-bold text-blue-600 text-lg transition hover:bg-slate-100 shadow-xl">
                電郵諮詢
              </a>
              <a href="https://wa.me/85212345678" className="rounded-full bg-slate-900 px-12 py-5 font-bold text-white text-lg transition hover:bg-slate-800 shadow-xl flex items-center justify-center gap-2">
                <MessageSquare size={20} /> WhatsApp 預約
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
