"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Briefcase, 
  ShoppingBag, 
  GraduationCap, 
  Truck, 
  Layers,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

const industries = [
  { id: "eng", label: "裝修 / 工程", icon: Building2 },
  { id: "pro", label: "保險 / 專業服務", icon: Briefcase },
  { id: "retail", label: "餐飲 / 零售", icon: ShoppingBag },
  { id: "edu", label: "教育 / 培訓", icon: GraduationCap },
  { id: "log", label: "物流 / 製造", icon: Truck },
  { id: "other", label: "其他", icon: Layers },
];

const painPoints = [
  "報價太慢 / 容易出錯",
  "文件、WhatsApp 紀錄太散亂",
  "漏跟進客戶 / 管理混亂",
  "人手出糧、工紙整理太煩",
  "老闆睇唔清公司即時狀況",
];

export default function AssessmentForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    industry: "",
    pains: [] as string[],
    name: "",
    phone: "",
    company: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[3rem] border border-blue-100 bg-white p-12 text-center shadow-2xl"
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100">
            <CheckCircle2 size={40} />
          </div>
          <h3 className="text-3xl font-bold text-slate-900">評估表單已成功提交！</h3>
          <p className="mt-6 text-xl text-slate-600">我們的 AI 顧問將在 24 小時內分析您的資料，並透過 WhatsApp/電郵聯絡您。</p>
          <button
            onClick={() => {setSubmitted(false); setStep(1); setFormData({ industry: "", pains: [], name: "", phone: "", company: "" });}}
            className="mt-10 rounded-full bg-blue-600 px-10 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
          >
            返回首頁
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section id="assessment" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12 bg-white">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
            AI Potential Analysis
          </p>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-5xl">
            免費 AI 潛力評估
          </h2>
          <p className="mt-6 text-lg text-slate-500">
            只需 1 分鐘，找出您公司最值得 AI 化的環節。
          </p>
        </div>

        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/50 shadow-xl relative">
          <div className="absolute top-0 left-0 h-1.5 bg-blue-100 w-full">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: "33.33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <form onSubmit={handleSubmit} className="p-8 sm:p-16">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">1</span>
                    您公司的行業類別
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {industries.map((item) => (
                      <label 
                        key={item.id} 
                        className={`group flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all ${
                          formData.industry === item.label 
                            ? "border-blue-600 bg-white shadow-lg ring-1 ring-blue-600" 
                            : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="industry" 
                          value={item.label} 
                          className="hidden" 
                          onChange={(e) => setFormData({...formData, industry: e.target.value})}
                          required 
                        />
                        <item.icon size={24} className={formData.industry === item.label ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"} />
                        <span className={`font-bold ${formData.industry === item.label ? "text-blue-700" : "text-slate-700"}`}>{item.label}</span>
                      </label>
                    ))}
                  </div>
                  <button 
                    type="button" 
                    disabled={!formData.industry}
                    onClick={nextStep} 
                    className="mt-12 w-full rounded-2xl bg-blue-600 py-5 font-bold text-white shadow-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
                  >
                    下一步 <ChevronRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">2</span>
                    目前最頭痛的行政工作 (可多選)
                  </h3>
                  <div className="space-y-3">
                    {painPoints.map((pain) => (
                      <label 
                        key={pain} 
                        className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition-all ${
                          formData.pains.includes(pain)
                            ? "border-blue-600 bg-white shadow-md ring-1 ring-blue-600"
                            : "border-slate-200 bg-white hover:border-blue-300"
                        }`}
                      >
                        <input 
                          type="checkbox" 
                          className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          checked={formData.pains.includes(pain)}
                          onChange={(e) => {
                            const newPains = e.target.checked 
                              ? [...formData.pains, pain]
                              : formData.pains.filter(p => p !== pain);
                            setFormData({...formData, pains: newPains});
                          }}
                        />
                        <span className={`font-bold ${formData.pains.includes(pain) ? "text-blue-700" : "text-slate-700"}`}>{pain}</span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-12 flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 rounded-2xl border border-slate-200 bg-white py-5 font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
                      <ChevronLeft size={20} /> 返回
                    </button>
                    <button 
                      type="button" 
                      onClick={nextStep} 
                      disabled={formData.pains.length === 0}
                      className="flex-[2] rounded-2xl bg-blue-600 py-5 font-bold text-white shadow-xl hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                    >
                      最後一步 <ChevronRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm text-white">3</span>
                    聯絡資訊
                  </h3>
                  <div className="space-y-6">
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">負責人姓名</label>
                      <input 
                        type="text" 
                        className="w-full rounded-2xl border border-slate-200 bg-white p-5 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                        placeholder="例如：陳先生"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">WhatsApp 電話</label>
                      <input 
                        type="tel" 
                        className="w-full rounded-2xl border border-slate-200 bg-white p-5 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                        placeholder="例如：9123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="relative">
                      <label className="block text-sm font-bold text-slate-500 mb-2 uppercase tracking-widest">公司名稱 (選填)</label>
                      <input 
                        type="text" 
                        className="w-full rounded-2xl border border-slate-200 bg-white p-5 outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-sm"
                        placeholder="例如：Buildway Tech"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <button type="button" onClick={prevStep} className="flex-1 rounded-2xl border border-slate-200 bg-white py-5 font-bold text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2">
                      <ChevronLeft size={20} /> 返回
                    </button>
                    <button 
                      type="submit" 
                      disabled={loading || !formData.name || !formData.phone}
                      className="flex-[2] rounded-2xl bg-blue-600 py-5 font-bold text-white shadow-xl hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? "提交中..." : "提交免費評估"} <CheckCircle2 size={20} />
                    </button>
                  </div>
                  <div className="mt-6 flex items-start gap-2 text-slate-400">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <p className="text-xs">
                      提交即代表同意我們聯絡您提供 AI 顧問建議。您的資料將受 SSL 加密及私隱政策保護。
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
