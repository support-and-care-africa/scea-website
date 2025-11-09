import Link from "next/link"
import { ArrowUpRight, Calendar, HeartPulse, MapPin, Sparkle, Users } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

type ChapterKey = "nairobi" | "kampala" | "dar-es-salaam" | "kigali" | "addis-ababa"

const chaptersData: Record<
  ChapterKey,
  {
    name: string
    country: string
    tagline: string
    focus: string[]
    members: string
    meetups: string
    location: string
    established: string
    pods: string[]
    leaders: Array<{ name: string; role: string }>
    upcoming: Array<{ title: string; date: string; format: string }>
  }
> = {
  nairobi: {
    name: "Nairobi Chapter",
    country: "Kenya",
    tagline: "Maintainers building civic, climate, and fintech infrastructure with collective care at the center.",
    focus: ["Civic tech", "Financial inclusion", "Open data stewardship"],
    members: "250+ members",
    meetups: "Monthly build nights · Weekly co-working",
    location: "Nairobi, Kenya",
    established: "2019",
    pods: ["Governance Studio", "Momentum Labs", "Care Pod Alpha"],
    leaders: [
      { name: "Anita Kamau", role: "Chapter Steward & Governance Lead" },
      { name: "Brian Mutesi", role: "Maintainer Coach" },
    ],
    upcoming: [
      { title: "Civic Data Hackweek", date: "Feb 2025", format: "In-person / Hybrid" },
      { title: "Maintainer Care Circle", date: "Every last Thursday", format: "Virtual" },
      { title: "Momentum Showcase", date: "April 2025", format: "Hybrid" },
    ],
  },
  kampala: {
    name: "Kampala Chapter",
    country: "Uganda",
    tagline: "Storytellers, health innovators, and educators learning to steward open source communities.",
    focus: ["Public health", "Learning tools", "Community storytelling"],
    members: "180+ members",
    meetups: "Monthly salons · Mentorship pods",
    location: "Kampala, Uganda",
    established: "2020",
    pods: ["Wellbeing Pod North", "Policy Lab", "Learning Circle"],
    leaders: [
      { name: "Diana Nambassa", role: "Community Experience Lead" },
      { name: "Samuel Okello", role: "Technical Mentor" },
    ],
    upcoming: [
      { title: "Open Health Data Clinic", date: "March 2025", format: "In-person" },
      { title: "Storytelling for Maintainers", date: "Monthly", format: "Virtual" },
      { title: "Mentor Residency Launch", date: "May 2025", format: "Hybrid" },
    ],
  },
  "dar-es-salaam": {
    name: "Dar es Salaam Chapter",
    country: "Tanzania",
    tagline: "Coastal builders fusing hardware, IoT, and climate-tech with open standards.",
    focus: ["IoT and hardware", "Climate resilience", "Marine ecosystems"],
    members: "150+ members",
    meetups: "Bi-weekly hack nights · Field immersions",
    location: "Dar es Salaam, Tanzania",
    established: "2021",
    pods: ["IoT Foundry", "Resilience Pod", "Documentation Squad"],
    leaders: [
      { name: "Halima Mwinyi", role: "Hardware Steward" },
      { name: "Yusuf Kivuyo", role: "Chapter Operations Lead" },
    ],
    upcoming: [
      { title: "Coastal Sensor Lab", date: "April 2025", format: "In-person" },
      { title: "Hardware Repair Café", date: "Bi-weekly", format: "In-person" },
      { title: "Contributor Wellbeing Retreat", date: "June 2025", format: "Hybrid" },
    ],
  },
  kigali: {
    name: "Kigali Chapter",
    country: "Rwanda",
    tagline: "Design justice advocates guiding AI commons and documentation-first cultures.",
    focus: ["Design justice", "AI commons", "Civic storytelling"],
    members: "120+ members",
    meetups: "Monthly documentation labs · Studio sessions",
    location: "Kigali, Rwanda",
    established: "2021",
    pods: ["AI Commons Lab", "Design Justice Studio", "Care Pod East"],
    leaders: [
      { name: "Winnie Muthoni", role: "Wellbeing Lead" },
      { name: "Eric Mugisha", role: "AI Commons Facilitator" },
    ],
    upcoming: [
      { title: "AI Governance Sprint", date: "March 2025", format: "Hybrid" },
      { title: "Design Justice Residency", date: "May 2025", format: "In-person" },
      { title: "Care Pod Gathering", date: "Monthly", format: "Virtual" },
    ],
  },
  "addis-ababa": {
    name: "Addis Ababa Chapter",
    country: "Ethiopia",
    tagline: "Research hubs and grassroots organizers building connective tissue across ecosystems.",
    focus: ["Research translation", "Civic innovation", "Open education"],
    members: "100+ members",
    meetups: "Monthly meetups · Residency cohorts",
    location: "Addis Ababa, Ethiopia",
    established: "2022",
    pods: ["Residency Cohort", "Policy Studio", "Care Pod Meridian"],
    leaders: [
      { name: "Bethel Kebede", role: "Chapter Steward" },
      { name: "Yonas Zewdu", role: "Program Operations" },
    ],
    upcoming: [
      { title: "Research Translation Lab", date: "February 2025", format: "In-person" },
      { title: "Open Education Residency", date: "May 2025", format: "Hybrid" },
      { title: "Community Listening Tour", date: "Quarterly", format: "In-person" },
    ],
  },
}

export default function ChapterDetail({ params }: { params: { slug: ChapterKey } }) {
  const chapter = chaptersData[params.slug]

  if (!chapter) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-foreground">Chapter not found</h1>
            <Link href="/chapters" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Return to chapters
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-24 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 420L420 0\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/50 bg-transparent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary">
              {chapter.country}
          </div>
            <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div className="space-y-6 text-foreground dark:text-white">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground dark:text-white sm:text-5xl md:text-6xl">
                  {chapter.name}
                </h1>
                <p className="max-w-2xl text-pretty text-base text-muted-foreground dark:text-white/70 sm:text-lg">
                  {chapter.tagline}
                </p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                  {chapter.focus.map((focus) => (
                    <span
                      key={focus}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-transparent px-3 py-1 text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-primary"
                    >
                      <Sparkle size={14} />
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-border/60 bg-surface-strong p-6 text-sm text-muted-foreground backdrop-blur-3xl dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-muted-foreground dark:text-white/60">
                  <span>Established</span>
                  <span>{chapter.established}</span>
                </div>
                <div className="mt-4 grid gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                  <div className="rounded-2xl border border-border/60 bg-surface p-4 text-foreground dark:border-white/10 dark:bg-white/10 dark:text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={16} />
                      {chapter.members}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground dark:text-white/70">{chapter.meetups}</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-surface p-4 text-foreground dark:border-white/10 dark:bg-white/10 dark:text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={16} />
                      {chapter.location}
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground dark:text-white/70">Pods: {chapter.pods.join(" • ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div className="space-y-6">
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Why this chapter exists</h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Each chapter is a living, breathing network anchored in local realities. Members experiment with care
                  infrastructures, governance practices, and technical solutions that answer their city&apos;s needs. We
                  share funding strategies, documentation templates, and mentorship across the region.
                </p>
                <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Community Pods</span>
                    <p className="mt-2">{chapter.pods.join(", ")}</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Care Practices</span>
                    <p className="mt-2">Weekly check-ins · Mutual aid pools · Sabbatical planning</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-border/60 bg-background/70 p-6 text-sm text-muted-foreground">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Member Voices</span>
                <p className="mt-4">
                  “We move at the pace of trust. Support & Care ensures we have the mentors, mental health practitioners,
                  and funding allies to breathe life into our projects without burning out.”
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-primary/70">Chapter member, {chapter.country}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Leadership collective</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
              Chapter leadership is accountable to local members and commits to transparent reporting on wellbeing,
              funding, and partnership decisions.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {chapter.leaders.map((leader) => (
                <div key={leader.name} className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {leader.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-transparent px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-primary">
                  Upcoming Rhythms
                </span>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">What&apos;s next for {chapter.name}</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Events and rituals designed with rest, play, and impact in mind. Reach out if you&apos;d like to
                  collaborate or bring this programming to your city.
                      </p>
                    </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {chapter.upcoming.map((event) => (
                <div key={event.title} className="rounded-3xl border border-border/60 bg-background/80 p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary/70">
                    <span>{event.format}</span>
                    <span>{event.date}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{event.title}</h3>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:text-primary/80">
                    Collaborate on this
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/40 to-secondary" />
          <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_top,rgba(93,186,159,0.35),transparent_65%)]" />
          <div className="mx-auto w-full max-w-4xl px-4 py-24 text-center text-secondary-foreground lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-transparent px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/30 dark:bg-primary/10 dark:text-primary">
              Join the chapter
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-foreground dark:text-white sm:text-4xl">
              Ready to co-create with {chapter.name}?
            </h2>
            <p className="mt-4 text-base text-muted-foreground dark:text-white/70 sm:text-lg">
              Tell us how you want to plug in—whether you&apos;re mentoring, building, or offering partner support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/get-involved"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
              >
                Introduce yourself
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:border-primary/40 hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:border-white dark:hover:bg-white/10"
              >
                Talk with a steward
                <HeartPulse size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
