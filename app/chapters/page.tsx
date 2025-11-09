import Link from "next/link"
import { Compass, MapPin, Users } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const chapters = [
  {
    name: "Nairobi",
    country: "Kenya",
    slug: "nairobi",
    description: "A pioneering maintainer collective building civic, financial, and climate-tech solutions.",
    members: "250+ active",
    cadence: "Monthly meetups · Weekly build nights",
    gradient: "from-primary/20 via-primary/15 to-accent/20",
  },
  {
    name: "Kampala",
    country: "Uganda",
    slug: "kampala",
    description: "Peer-led contributor pods focusing on health, education, and community storytelling.",
    members: "180+ active",
    cadence: "Monthly meetups · Mentorship pods",
    gradient: "from-amber-400/20 via-primary/15 to-accent/20",
  },
  {
    name: "Dar es Salaam",
    country: "Tanzania",
    slug: "dar-es-salaam",
    description: "Coastal innovators tackling open hardware, IoT, and civic infrastructure.",
    members: "150+ active",
    cadence: "Bi-weekly hack nights · Learning circles",
    gradient: "from-orange-400/20 via-primary/15 to-accent/20",
  },
  {
    name: "Kigali",
    country: "Rwanda",
    slug: "kigali",
    description: "Design justice and AI commons practitioners shaping equitable tech futures.",
    members: "120+ active",
    cadence: "Monthly salons · Documentation labs",
    gradient: "from-rose-400/20 via-primary/15 to-accent/20",
  },
  {
    name: "Addis Ababa",
    country: "Ethiopia",
    slug: "addis-ababa",
    description: "Emerging networks connecting research hubs with grassroots contributor communities.",
    members: "100+ active",
    cadence: "Monthly meetups · Residency pilots",
    gradient: "from-indigo-400/20 via-primary/15 to-accent/20",
  },
]

const steps = [
  {
    title: "Arrive as you are",
    description: "Introduce yourself during check-ins, share your intentions, and meet fellow contributors.",
  },
  {
    title: "Plug into a pod",
    description: "Join a learning, wellbeing, or build pod aligned to your interests and availability.",
  },
  {
    title: "Co-create impact",
    description: "Lead projects, facilitate sessions, and steward newcomers into East Africa's OSS movement.",
  },
]

export default function Chapters() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0L420 420\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary">
              Chapter Ecosystem
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div className="space-y-6 text-foreground dark:text-white">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground dark:text-white sm:text-5xl md:text-6xl">
                  From Nairobi to Addis Ababa, we are stitching together care-first contributor networks.
                </h1>
                <p className="max-w-2xl text-pretty text-base text-muted-foreground dark:text-white/70 sm:text-lg">
                  Each chapter is a living lab grounded in local context. Together we share governance, tooling, and
                  wellbeing practices to nurture East Africa&apos;s open source stewards.
                </p>
              </div>
              <div className="rounded-3xl border border-border/60 bg-surface-strong p-6 text-muted-foreground backdrop-blur-3xl dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-muted-foreground dark:text-white/60">
                  <MapPin size={14} />
                  5 cities · 18 pods · 37 projects in motion
                </div>
                <p className="mt-4 text-sm">
                  Join care pods, collaborate on projects, and co-design local experiments that respond to what your city
                  needs most.
                </p>
                <Link
                  href="/get-involved"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-2 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
                >
                  Map your chapter journey
                  <Compass size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {chapters.map((chapter) => (
              <Link
                key={chapter.slug}
                href={`/chapters/${chapter.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 text-foreground shadow-[0_25px_60px_-30px_rgba(7,8,45,0.45)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_40px_70px_-30px_rgba(7,8,45,0.55)] dark:text-white"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative flex h-full flex-col gap-5">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary">
                      {chapter.country}
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold text-foreground">{chapter.name}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{chapter.description}</p>
                  </div>
                  <div className="mt-auto space-y-3 rounded-2xl border border-border/60 bg-background/70 p-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                          <Users size={16} className="text-primary" />
                      {chapter.members}
                        </div>
                    <p>{chapter.cadence}</p>
                        </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth group-hover:text-primary/80">
                    Visit chapter profile
                    <Compass size={16} />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary">
                  Start Here
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                  Your first 90 days with a chapter.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  Whether you&apos;re a maintainer, designer, storyteller, or organizer—you belong in our chapters. Here&apos;s
                  how we welcome you in.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-border/60 bg-background/80 p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
