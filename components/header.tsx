"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/chapters", label: "Chapters" },
  { href: "/blog", label: "Stories" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isDark = resolvedTheme === "dark"

  return (
    <header className="sticky top-6 z-50 mb-8 flex justify-center px-4">
      <div className="relative w-full max-w-6xl">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/15 via-accent/10 to-transparent blur-xl"></div>
        <nav className="relative flex items-center justify-between rounded-3xl border border-border/60 bg-background/90 px-5 py-3 shadow-[0_20px_50px_-25px_rgba(7,8,45,0.45)] backdrop-blur-xl">
          <Link href="/" className="flex items-center gap-2 transition-smooth hover:opacity-90">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/30 to-accent/30 shadow-inner">
              <Image
                src="/logo.png"
                alt="Support & Care For East Africa"
                width={28}
                height={28}
                className="h-7 w-7 animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/30" />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Support & Care</span>
              <span className="text-sm font-semibold text-foreground">For East Africa</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative rounded-2xl px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/25 to-accent/25 backdrop-blur-lg"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/60 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-foreground"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={isDark ? "dark" : "light"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                    className="grid place-items-center"
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            )}
            <Link
              href="/get-involved"
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-smooth hover:shadow-xl hover:shadow-primary/40"
            >
              <span>Join the Movement</span>
              <motion.span
                aria-hidden
                className="grid h-6 w-6 place-items-center rounded-xl bg-primary-foreground/15 text-primary-foreground"
                initial={{ x: 0 }}
                whileHover={{ x: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                →
              </motion.span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/60 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-foreground"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/60 text-muted-foreground transition-smooth hover:border-primary/50 hover:text-foreground"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isMenuOpen ? "close" : "open"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="grid place-items-center"
                >
                  {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mt-4 flex flex-col gap-2 rounded-3xl border border-border/60 bg-background/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-smooth ${
                      isActive
                        ? "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground"
                        : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Explore</span>
                  </Link>
                )
              })}

              <Link
                href="/get-involved"
                className="mt-2 flex items-center justify-between rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-accent px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-smooth hover:shadow-primary/40"
              >
                <span>Join the Movement</span>
                <span className="text-lg">→</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
