import { Calendar, Compass, HeartPulse, Layers, Telescope, Users, Workflow } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const programStreams = [
                {
                  icon: Users,
    badge: "Communities",
    title: "Chapter Hubs",
    summary: "Localized stewardship circles led by community organizers and senior maintainers.",
    focus: [
      "Monthly build nights and contributor clinics",
      "Shared resource libraries and equipment pools",
      "Micro-grants to stabilize grassroots projects",
    ],
  },
  {
    icon: Layers,
    badge: "Fellowships",
    title: "Momentum Labs",
    summary: "Six-month fellowships supporting project teams through governance, product, and wellbeing tracks.",
    focus: [
      "Weekly technical mentorship pairings",
      "Care stipends and mental health support",
      "Launch support with partner foundations",
                  ],
                },
                {
                  icon: Calendar,
    badge: "Summits",
    title: "Open Source Week EA",
    summary: "Flagship annual gathering convening chapters, allies, and policy makers across the region.",
    focus: [
      "Maintainer town-halls and roadmap studios",
      "Partnership forums with civic institutions",
      "Contributor awards centred on community care",
                  ],
                },
                {
    icon: Workflow,
    badge: "Operations",
    title: "Governance Studio",
    summary: "Toolkits, templates, and coaching for sustainable contributor ops and project governance.",
    focus: [
      "Code of conduct and safeguarding implementation",
      "Financial planning and transparent reporting",
      "Facilitation playbooks and onboarding flows",
    ],
  },
]

const residencies = [
  {
    title: "Maintainer Sabbatical",
    description:
      "Paid residencies offering seasonal breaks, therapy sessions, and dedicated maintainership support teams.",
    location: "Hybrid · 8 weeks",
  },
  {
    title: "Policy & Advocacy Lab",
    description:
      "Cross-disciplinary cohorts working with policy makers to publish open source adoption frameworks and toolkits.",
    location: "Nairobi · 12 weeks",
  },
  {
    title: "Wellbeing Pod Design",
    description:
      "Design researchers, healers, and program leads co-create wellbeing infrastructures for contributor ecosystems.",
    location: "Remote-first · 10 weeks",
  },
]

const supportDesk = [
  {
    title: "Institution onboarding",
    description: "Tailored workshops for universities, NGOs, and public agencies adopting open source tooling.",
  },
  {
    title: "Sustainability modeling",
    description: "Financial modeling, grant packaging, and community revenue experiments for long-term resilience.",
  },
  {
    title: "Rapid response care",
    description: "Crisis support protocols and emergency care funds activated when teams face burnout or conflict.",
  },
]

const metrics = [
  {
    figure: "38",
    label: "Chapter pilots launched",
    detail: "ranging from documentation drives to city-wide hackweeks",
  },
  {
    figure: "94%",
    label: "Fellow retention",
    detail: "continuing to contribute or mentor after graduating Momentum Labs",
  },
  {
    figure: "120",
    label: "Organizations supported",
    detail: "through our governance studio and support desk sprints",
  },
]

export default function Programs() {
                return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 210H420\" stroke=\"rgba(255,255,255,0.08)\"/%3E%3Cpath d=\"M210 0V420\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
              Programs & Pathways
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  We design containers for contributors to thrive across every chapter.
                </h1>
                <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  Our programs prioritise care, experimentation, and resourcing. Each pathway unlocks peer mentorship,
                  mental health support, and equitable partnership opportunities so projects can sustain impact.
                </p>
                        </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-white/70 backdrop-blur-3xl">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/60">
                  <span>Streams</span>
                  <span>Active · 2025</span>
                      </div>
                <div className="mt-6 grid gap-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <div className="text-2xl font-semibold text-white">{metric.figure}</div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">{metric.label}</p>
                      <p className="mt-2 text-xs text-white/60">{metric.detail}</p>
                    </div>
                  ))}
                    </div>
                  </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Core Streams
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                  Anchored in community wellbeing and impact.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  Every stream is co-created with chapter leads, fellows, and movement partners to ensure outcomes match
                  the needs on the ground.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {programStreams.map((program) => (
                <article
                  key={program.title}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 shadow-[0_25px_60px_-30px_rgba(7,8,45,0.45)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_40px_70px_-30px_rgba(7,8,45,0.55)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                        {program.badge}
                      </span>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                        <program.icon size={22} />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground">{program.summary}</p>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {program.focus.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:text-primary/80">
                      Discover participation paths
                      <Compass size={16} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Residencies & Labs
              </div>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Deep-dive residencies for builders stewarding critical infrastructure.
              </h2>
              <p className="text-sm text-muted-foreground">
                From sabbaticals to policy labs, our residencies give teams space, funding, and multidisciplinary care to
                regenerate their practice. Fellows receive mental health support, technical mentorship, and governance
                coaching.
              </p>
              <div className="grid gap-4">
                {residencies.map((residency) => (
                  <div key={residency.title} className="rounded-3xl border border-border/60 bg-background/80 p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground">{residency.title}</h3>
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                        {residency.location}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{residency.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg transition-smooth hover:border-primary/40">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Care in Practice
              </div>
              <p className="text-sm text-muted-foreground">
                Every cohort includes therapy access, peer-care circles, and time-off buffers. We co-design obligations so
                fellows can lead at a sustainable pace without compromising community impact.
              </p>
              <div className="rounded-2xl border border-border/60 bg-card/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Support Toolkit</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <HeartPulse size={16} className="text-primary" />
                    Weekly wellbeing check-ins with certified practitioners
                  </li>
                  <li className="flex items-center gap-2">
                    <Telescope size={16} className="text-primary" />
                    Venture scouting for downstream partnerships and funding
                  </li>
                  <li className="flex items-center gap-2">
                    <Layers size={16} className="text-primary" />
                    Dedicated documentation and community ops support squads
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Support Desk
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                  Dedicated guidance for organizations embracing open source.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                  Our support desk pairs institutions with community strategists, governance experts, and program
                  designers who understand the nuances of working across East Africa.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {supportDesk.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border/60 bg-background/80 p-6 text-sm text-muted-foreground transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/40 to-secondary" />
          <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_top,rgba(93,186,159,0.35),transparent_65%)]" />
          <div className="mx-auto w-full max-w-4xl px-4 py-24 text-center text-secondary-foreground lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Join a program
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
              Ready to build with us across East Africa?
            </h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Share your interests and we&apos;ll connect you to the right stream—whether you&apos;re launching a project,
              amplifying a chapter, or backing the movement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/get-involved"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
              >
                Tell us your focus
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-smooth hover:border-white hover:bg-white/10"
              >
                Speak with the team
                <Compass size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
