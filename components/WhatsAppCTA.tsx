"use client";

import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4"
        >
          <div className="relative group">
            <div className="absolute -left-40 top-1/2 -translate-y-1/2 hidden group-hover:block transition-all">
               <div className="bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
                 免費 AI 諮詢 👋
               </div>
            </div>
            
            <a
              href="https://wa.me/85212345678" // Placeholder WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
            >
              <MessageCircle size={24} className="fill-current" />
              <span className="font-bold hidden sm:inline">免費 AI 諮詢</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
