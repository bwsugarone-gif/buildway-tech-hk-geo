"use client";

import { motion } from "framer-motion";
import { MessageSquare, CheckCircle2, User, Bot, Paperclip, Send } from "lucide-react";

interface ChatMessage {
  role: "user" | "ai";
  content: string | React.ReactNode;
  type?: "text" | "image" | "voice";
}

interface DemoItem {
  id: string;
  title: string;
  desc: string;
  messages: ChatMessage[];
}

const demos: DemoItem[] = [
  {
    id: "delivery",
    title: "WhatsApp 收貨紙助手",
    desc: "影相傳入 WhatsApp，AI 自動核對採購單 (PO) 並入帳。",
    messages: [
      { role: "user", type: "image", content: "📷 [收貨紙相片：20 噸鋼筋]" },
      { role: "ai", content: "✅ 已辨識：20 噸 16mm 鋼筋\n供應商：建材供應有限公司\n核對結果：與 PO #2026-045 相符\n已自動更新項目成本紀錄。" },
    ],
  },
  {
    id: "rain",
    title: "天雨索償助手",
    desc: "自動紀錄停工時間與天氣數據，作為 EOT 索償證據。",
    messages: [
      { role: "user", content: "落大雨停工，而家 2:30 PM。" },
      { role: "ai", content: "☔ 已紀錄停工時間。\nGPS 位置：A 地盤 B 區\n已同步天文台當刻黃色暴雨警告訊號。\n記錄已儲存至「天雨紀錄包」，供月底申請 EOT 使用。" },
    ],
  },
  {
    id: "search",
    title: "工程紀錄搜尋助手",
    desc: "用廣東話搵返幾年前嘅任何文件或對話。",
    messages: [
      { role: "user", content: "搵返三年前 X 地盤份防水測試報告。" },
      { role: "ai", content: "🔍 搵到喇！\n編號：SI-2023-089\n日期：2023-05-12\n內容：關於 17 樓天台防水層滲漏修補方案\n[點擊開啟 PDF 檔案]" },
    ],
  },
  {
    id: "diary",
    title: "Site Diary 助理",
    desc: "管工錄音，AI 自動生成地盤日誌草稿。",
    messages: [
      { role: "user", type: "voice", content: "🎤 錄音中：今日 12 人泥水，3 人雜工..." },
      { role: "ai", content: "📝 已生成 Site Diary 草稿：\n出勤：15 人\n進度：A 座室內批盪完成 80%\n天氣：多雲短暫時間有陽光\n請在手機點擊確認即可提交。" },
    ],
  },
];

export default function DemoGallery() {
  return (
    <section className="px-5 py-24 sm:px-8 lg:px-12 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Product Demos</p>
          <h2 className="text-3xl font-bold sm:text-5xl text-slate-900 mb-6">實戰演示：AI 如何協助您工作</h2>
          <p className="text-xl text-slate-500">將複雜技術轉化為直觀的 WhatsApp 交互體驗。</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {demos.map((demo) => (
            <div key={demo.id} className="flex flex-col gap-8 p-10 rounded-[3rem] border border-slate-100 bg-slate-50 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
              <div className="absolute inset-0 bg-tech-grid opacity-5 group-hover:opacity-10 transition-opacity" />
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{demo.title}</h3>
                <p className="text-lg text-slate-500 mb-8">{demo.desc}</p>
                
                {/* Mobile Mockup */}
                <div className="mx-auto w-full max-w-[320px] aspect-[9/18.5] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">
                  {/* Status Bar */}
                  <div className="h-6 w-full px-6 flex justify-between items-center text-[10px] text-white opacity-60">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                       <div className="w-3 h-2 bg-white rounded-sm" />
                       <div className="w-4 h-2 bg-white rounded-sm" />
                    </div>
                  </div>
                  
                  {/* WhatsApp Header */}
                  <div className="bg-slate-800 p-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-none">Buildway AI 助理</p>
                      <p className="text-[10px] text-green-400 mt-1">線上</p>
                    </div>
                  </div>

                  {/* Chat Content */}
                  <div className="flex-grow p-4 flex flex-col gap-3 overflow-y-auto bg-[#e5ddd5]">
                    {demo.messages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.4 }}
                        className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm relative ${
                          msg.role === "user" 
                            ? "bg-[#dcf8c6] self-end rounded-tr-none" 
                            : "bg-white self-start rounded-tl-none"
                        }`}
                      >
                        <p className="whitespace-pre-line text-slate-800 leading-relaxed font-medium">
                          {msg.content}
                        </p>
                        <span className="text-[10px] opacity-40 float-right mt-1 ml-2">9:41</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Input Bar */}
                  <div className="bg-slate-100 p-3 flex items-center gap-2">
                    <Paperclip size={18} className="text-slate-400" />
                    <div className="flex-grow h-8 bg-white rounded-full border border-slate-200" />
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      <Send size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
