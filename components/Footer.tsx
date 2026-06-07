import Image from "next/image";

const companyName = "Buildway Tech (HK) Limited";

const sitemap = [
  {
    title: "服務與解決方案",
    links: [
      { label: "AI 報價助理", href: "/#services" },
      { label: "AI 文件整理", href: "/#services" },
      { label: "AI 出糧系統", href: "/#services" },
      { label: "公司資料中心", href: "/#services" },
    ],
  },
  {
    title: "探索更多",
    links: [
      { label: "關於我們", href: "/about" },
      { label: "成功案例", href: "/cases" },
      { label: "AI 專欄文章", href: "/blog" },
      { label: "常見問題", href: "/#faq" },
    ],
  },
  {
    title: "聯絡資訊",
    links: [
      { label: "電郵諮詢", href: "mailto:hello@buildway.tech" },
      { label: "WhatsApp 預約", href: "https://wa.me/85212345678" },
      { label: "免費 AI 評估", href: "/#assessment" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white/65 px-5 py-16 backdrop-blur sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={`${companyName} logo`}
                width={120}
                height={40}
                className="h-8 w-auto shrink-0 object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Buildway Tech
              </span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-slate-600">
              專注為香港中小企提供 AI 數碼化顧問服務，透過自動化流程與公司知識庫提升管理效率，讓老闆節省行政時間。
            </p>
            <div className="flex gap-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {sitemap.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition hover:text-blue-700"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-blue-50 pt-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6 sm:mt-0">
            <a href="#" className="text-xs text-slate-500 hover:text-slate-900">
              私隱政策
            </a>
            <a href="#" className="text-xs text-slate-500 hover:text-slate-900">
              使用條款
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
