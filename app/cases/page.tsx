import * as motion from "framer-motion/client";
import { Building2, Shield, Rocket, ArrowRight, CheckCircle2 } from "lucide-react";

const cases = [
  {
    slug: "poc-doc-search",
    company: "Buildway Tech Internal POC",
    title: "POC Case 1：工程文件語義搜尋系統",
    result: "成功實現跨項目、跨格式的精確資料檢索",
    icon: Building2,
  },
  {
    slug: "poc-quotation-assistant",
    company: "Buildway Tech Internal POC",
    title: "POC Case 2：WhatsApp 報價助理",
    result: "初步驗證「對話即報價」的自動化流轉",
    icon: Rocket,
  },
  {
    slug: "poc-site-diary",
    company: "Buildway Tech Internal POC",
    title: "POC Case 3：Site Diary 自動化助手",
    result: "成功將地盤日誌記錄時間縮短 80%",
    icon: Shield,
  },
];

export default function CasesPage() {
  return (
    <main className="flex-grow px-5 py-24 sm:px-8 lg:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
            Success Stories
          </p>
          <h1 className="text-4xl font-bold text-slate-900 sm:text-6xl">
            成功案例
          </h1>
          <p className="mt-8 text-xl text-slate-500 leading-relaxed">
            看 AI 如何在真實的香港中小企營運中創造價值，從繁瑣行政中解救老闆。
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group grid overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 transition hover:shadow-2xl hover:border-blue-100 md:grid-cols-[1fr_2fr]"
            >
              <div className="flex items-center justify-center bg-white p-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-tech-circuit" />
                <item.icon size={80} className="text-blue-600 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center p-10 sm:p-16">
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">{item.company}</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 leading-tight group-hover:text-blue-600 transition">
                  <a href={`/cases/${item.slug}`}>{item.title}</a>
                </h2>
                <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-6 py-4 border border-slate-100 shadow-sm mb-10">
                  <CheckCircle2 size={24} className="text-blue-600" />
                  <span className="text-lg font-bold text-slate-700">成果：{item.result}</span>
                </div>
                <a
                  href={`/cases/${item.slug}`}
                  className="inline-flex items-center gap-2 font-bold text-blue-600 group/link text-lg"
                >
                  查看詳細方案
                  <ArrowRight size={20} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
