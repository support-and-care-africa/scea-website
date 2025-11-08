import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, LucideIcon, Mail, Twitter } from "lucide-react"

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/chapters", label: "Chapters" },
  { href: "/blog", label: "Stories" },
  { href: "/contact", label: "Contact" },
]

const chapters = [
  { href: "/chapters/nairobi", label: "Nairobi, Kenya" },
  { href: "/chapters/kampala", label: "Kampala, Uganda" },
  { href: "/chapters/dar-es-salaam", label: "Dar es Salaam, Tanzania" },
  { href: "/chapters/kigali", label: "Kigali, Rwanda" },
  { href: "/chapters/addis-ababa", label: "Addis Ababa, Ethiopia" },
]

const contactChannels: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "https://github.com/", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com/", label: "X (Twitter)", icon: Twitter },
  { href: "mailto:hello@supportandcareea.org", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-background text-foreground dark:bg-secondary dark:text-secondary-foreground">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/10 to-secondary/70 dark:via-primary/5 dark:to-secondary/80" />
      <div className="absolute inset-0 -z-10 opacity-40 dark:opacity-60" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(157,213,253,0.22), transparent 45%), radial-gradient(circle at 80% 0%, rgba(93,186,159,0.12), transparent 55%)" }} />
      <div className="border-y border-border/40 bg-white/70 backdrop-blur-xl dark:border-border/60 dark:bg-secondary/50">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 lg:px-8">
          <div className="rounded-3xl border border-border/40 bg-surface-strong p-8 text-foreground shadow-soft backdrop-blur-xl dark:border-border/60 dark:bg-background/95 dark:text-secondary-foreground sm:p-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:text-primary-foreground">
                  Stay in the Loop
                </span>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Receive monthly insights from East Africa&apos;s open source champions.
                </h2>
                <p className="text-sm text-muted-foreground">
                  Newsletters, curated opportunities, and early invitations to events across our regional chapters.
                </p>
              </div>
              <form className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
                <input
                  type="email"
                  placeholder="you@email.com"
                className="h-12 w-full rounded-2xl border border-border/40 bg-background/90 px-4 text-sm text-foreground shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-border/60 dark:bg-background/80 sm:w-72"
                />
                <button
                  type="submit"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-accent px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-smooth hover:shadow-primary/40"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="grid gap-12 text-muted-foreground md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 text-foreground">
              <Link href="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 via-primary/30 to-accent/25">
                  <Image src="/logo.png" alt="Support & Care For East Africa" width={28} height={28} className="h-7 w-7" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-[0.3em] text-muted-foreground">Support & Care</span>
                  <span className="text-sm font-semibold text-foreground">For East Africa</span>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground">
                We nurture resilient open source communities across East Africa through mentorship, funding, and global
                collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Explore</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-muted-foreground transition-smooth hover:text-foreground"
                    >
                      <span className="text-xs text-primary/60 transition-smooth group-hover:translate-x-1 group-hover:text-primary">
                        →
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Chapters</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {chapters.map((chapter) => (
                  <li key={chapter.href}>
                    <Link
                      href={chapter.href}
                      className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 text-muted-foreground transition-smooth hover:text-foreground"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60 transition-smooth group-hover:bg-primary"></span>
                      {chapter.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {contactChannels.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 rounded-2xl border border-border/40 bg-background/80 px-3 py-2 text-sm text-muted-foreground transition-smooth hover:border-primary/40 hover:text-foreground dark:border-border/50 dark:bg-background/70"
                  >
                    <Icon size={16} className="text-primary transition-smooth group-hover:scale-110" />
                    {label}
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                hello@supportandcareea.org <br />
                +254 (0)700 000 000
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-xs text-muted-foreground sm:flex-row dark:border-border/50">
            <p>&copy; {new Date().getFullYear()} Support & Care For East Africa. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-foreground transition-smooth">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-smooth">
                Terms
              </Link>
              <Link href="/code-of-conduct" className="hover:text-foreground transition-smooth">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
