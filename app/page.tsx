import Link from "next/link"
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Globe,
  HeartPulse,
  Layers,
  Mic,
  Sparkle,
  Users,
  Zap,
} from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const impactStats = [
  {
    value: "1,800+",
    label: "Developers aligned with open source missions",
    description: "Across Nairobi, Kampala, Kigali, Dar es Salaam, and Addis Ababa.",
  },
  {
    value: "120+",
    label: "Projects mentored & funded",
    description: "From civic-tech to developer tooling innovations made in East Africa.",
  },
  {
    value: "72%",
    label: "Members shipping OSS monthly",
    description: "Consistent contributions tracked across GitHub, GitLab, and Codeberg.",
  },
]

const focusAreas = [
  {
    icon: Zap,
    title: "Momentum Labs",
    description: "Rapidly prototype, stress-test, and scale community-driven solutions with global engineering mentors.",
    badge: "Capacity Building",
  },
  {
    icon: Globe,
    title: "Chapter Coalitions",
    description: "Regional fellowships activating local hubs with shared tooling, resources, and group sprints.",
    badge: "Network",
  },
  {
    icon: BookOpen,
    title: "Open Source Academy",
    description: "Zero-to-hero learning paths, maintainership clinics, and governance playbooks for OSS teams.",
    badge: "Learning",
  },
  {
    icon: Users,
    title: "Community Stewardship",
    description: "Peer mentorship, pastoral care, and psychosocial support for long-term contributor wellbeing.",
    badge: "Care",
  },
]

const stories = [
  {
    title: "Nairobi Maintainers Circle",
    description: "Local maintainers united to revive five civic-tech projects with municipal data streams.",
    region: "Kenya",
  },
  {
    title: "Kigali AI Commons",
    description: "Community-led governance guidelines shaping how AI tooling lands in public institutions.",
    region: "Rwanda",
  },
  {
    title: "Kampala FOSS Residency",
    description: "Six-week residency pairing public health orgs with OSS engineers for emergency response systems.",
    region: "Uganda",
  },
  {
    title: "Dar es Salaam Coastal Hackweek",
    description: "Open hardware teams building IoT sensors for sustainable fisheries and coastline protection.",
    region: "Tanzania",
  },
]

const milestones = [
  {
    year: "2021",
    title: "Listening Tours Launched",
    description: "We began with seven open circles across East Africa to surface the gaps in contributor care.",
  },
  {
    year: "2022",
    title: "Chapter Ecosystem Fund",
    description: "Our micro-grant program backed 43 grassroots projects and 18 maintainer stipends.",
  },
  {
    year: "2023",
    title: "Regional Summit",
    description: "Over 500 builders convened in Nairobi to ship cross-border collaborations and shared roadmaps.",
  },
  {
    year: "2024",
    title: "Global Alliances",
    description: "Partnerships with foundations unlocked new research residencies and sustainability pilots.",
  },
]

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden pt-4">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_20%_20%,rgba(157,213,253,0.28),transparent_55%)]" />
          <div className="absolute inset-x-0 top-36 -z-10 h-[360px] bg-[radial-gradient(circle_at_80%_10%,rgba(93,186,159,0.28),transparent_60%)]" />
          <div className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"400\" height=\"400\" viewBox=\"0 0 400 400\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg opacity=\"0.4\"%3E%3Cpath d=\"M400 0H0V400\" stroke=\"rgba(255,255,255,0.08)\"/%3E%3Cpath d=\"M0 0L400 400\" stroke=\"rgba(255,255,255,0.05)\"/%3E%3C/g%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-24 pt-12 text-secondary-foreground lg:px-8 lg:pb-32 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
              <div className="space-y-8 text-foreground dark:text-white">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                  Nurturing Open Source Souls
          </div>
                <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground dark:text-white sm:text-5xl md:text-6xl">
                  Modern infrastructure for East Africa&apos;s open source caretakers.
              </h1>
                <p className="max-w-xl text-pretty text-base text-muted-foreground dark:text-white/75 sm:text-lg">
                  Support & Care is the allyship framework powering sustainable contributor journeys. We invest in
                  wellbeing, financial resilience, and intentional collaboration so builders can lead with courage across
                  the continent.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/get-involved"
                    className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
                >
                    Become a Catalyst
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/about"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:border-primary/40 hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:border-white dark:hover:bg-white/10"
                >
                    Explore the Manifesto
                    <ArrowUpRight size={16} />
                </Link>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 dark:bg-white/10">
                    <Sparkle size={14} />
                    Community Funds
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 dark:bg-white/10">
                    <Mic size={14} />
                    Maintainer Clinics
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 dark:bg-white/10">
                    <HeartPulse size={14} />
                    Wellbeing Pods
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/40 via-white/20 to-transparent blur-3xl dark:from-white/10 dark:via-white/5" />
                <div className="relative overflow-hidden rounded-[2.25rem] border border-border/60 bg-surface-strong backdrop-blur-3xl dark:border-white/15 dark:bg-white/10">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent)]" />
                  <div className="absolute inset-0 opacity-80 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"140\" height=\"140\" viewBox=\"0 0 140 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 140L140 0\" stroke=\"rgba(255,255,255,0.12)\"/%3E%3C/svg%3E')" }} />
                  <div className="relative space-y-8 p-8 text-foreground dark:text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold uppercase tracking-[0.35em] text-muted-foreground dark:text-white/70">
                        Chapter Health
                      </span>
                      <span className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground dark:border-white/20 dark:text-white/70">
                        Live
                      </span>
                    </div>
                    <div className="grid gap-4 text-muted-foreground dark:text-white/70">
                      {["Momentum", "Care Index", "Collaboration", "Sustainability"].map((label, idx) => (
                        <div key={label} className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>{label}</span>
                            <span>{90 - idx * 12}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-primary/10 dark:bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary dark:from-white"
                              style={{ width: `${90 - idx * 12}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid gap-3 rounded-2xl border border-border/60 bg-surface p-4 text-muted-foreground dark:border-white/10 dark:bg-secondary/30 dark:text-white/80">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em]">
                        <span>New Support Tickets</span>
                        <span>Inside</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          "Grant pipeline for youth-led AI tools",
                          "Mentor roster refresh for Kigali",
                          "Wellness retreat follow-ups",
                        ].map((item, idx) => (
                          <div key={item} className="flex items-start gap-3 text-sm">
                            <span className="grid h-6 w-6 place-items-center rounded-xl bg-white/10 text-xs">{idx + 1}</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="rounded-3xl border border-border/60 bg-card/70 p-10 shadow-[0_25px_60px_-30px_rgba(7,8,45,0.35)] backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-transparent px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-primary-foreground">
                Impact Signals
              </div>
              <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">
                We hold space for sustainable impact, not burnout.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                Through fellowships, wellbeing pods, and co-created strategy sprints, we ensure each chapter moves beyond
                transactional contributions toward long-term collective care.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  4x increase in cross-chapter collaborations within 12 months.
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Maintainer stipends extended to 37 long-term community projects.
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary" />
                  Psychological safety check-ins embedded into every sprint ritual.
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {impactStats.map(({ value, label, description }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 shadow-lg transition-smooth hover:-translate-y-1 hover:shadow-[0_25px_60px_-30px_rgba(7,8,45,0.35)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <span className="text-4xl font-semibold text-primary">{value}</span>
                    <h3 className="text-sm font-semibold text-foreground">{label}</h3>
                    <p className="text-sm text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                  Programs
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Our focus areas</h2>
                <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                  Each initiative is designed with trauma-informed facilitation, research-backed governance, and deep
                  community buy-in.
                </p>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground transition-smooth hover:border-primary/40 hover:text-foreground"
              >
                All Programs
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {focusAreas.map(({ icon: Icon, title, description, badge }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 shadow-[0_20px_45px_-30px_rgba(7,8,45,0.45)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_40px_65px_-30px_rgba(7,8,45,0.55)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                        {badge}
                      </div>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <Icon size={22} />
                      </span>
                    </div>
                  <div>
                      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
                    </div>
                    <Link
                      href="/get-involved"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:text-primary/80"
                    >
                      Join this stream <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-12">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-[radial-gradient(circle_at_top,rgba(157,213,253,0.35),transparent_65%)]" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                  Community Signals
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Stories in motion</h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  Our chapters activate civic tech, health innovation, climate resilience, and education tooling that is
                  rooted in the communities it serves.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-2xl border border-border/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground transition-smooth hover:border-primary/40 hover:text-foreground"
              >
                Visit Stories Hub
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="relative">
              <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
                {stories.map((story) => (
                  <article
                    key={story.title}
                    className="group relative min-w-[280px] snap-center overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 shadow-lg transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_70px_-35px_rgba(7,8,45,0.55)] sm:min-w-[320px]"
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundImage: "linear-gradient(135deg, rgba(93,186,159,0.15), rgba(157,213,253,0.15))" }} />
                    <div className="relative space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                        {story.region}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{story.title}</h3>
                      <p className="text-sm text-muted-foreground">{story.description}</p>
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:text-primary/80"
                      >
                        Read the journey <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-12 rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                Collective Roadmap
              </div>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Building the future of open source stewardship together.
              </h2>
              <p className="text-sm text-muted-foreground">
                From year-round fellowships to regional summits, our roadmap is co-created with communities on the ground.
                We focus on distributed leadership, mutual aid infrastructure, and sustainable funding models.
              </p>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Layers size={16} className="text-primary" /> Regional pods sharing governance playbooks and budgets.
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" /> Quarterly immersion weeks for cross-border projects.
                </span>
                <span className="flex items-center gap-2">
                  <HeartPulse size={16} className="text-primary" /> Care frameworks integrated into project lifecycles.
                </span>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {milestones.map((milestone) => (
                <div
                  key={milestone.year}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">{milestone.year}</span>
                    <h3 className="text-lg font-semibold text-foreground">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/40 to-secondary" />
          <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_top,rgba(93,186,159,0.35),transparent_65%)]" />
          <div className="mx-auto w-full max-w-4xl px-4 py-24 text-center text-secondary-foreground lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
              Final Call
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-foreground dark:text-white sm:text-4xl">Ready to co-create lasting change?</h2>
            <p className="mt-4 text-base text-muted-foreground dark:text-white/70 sm:text-lg">
              Join the movement to resource East Africa&apos;s open source communities with the care, tooling, and
              solidarity they deserve.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/get-involved"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
              >
                Partner With Us
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:border-primary/40 hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:border-white dark:hover:bg-white/10"
              >
                Talk to the team
                <ArrowUpRight size={16} />
            </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
