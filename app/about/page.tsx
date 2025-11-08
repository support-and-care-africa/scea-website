import { Sparkle } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const pillars = [
  {
    title: "Care as Strategy",
    description:
      "We embed trauma-informed practices, psychosocial support, and sabbatical pathways into every community sprint.",
  },
  {
    title: "Radical Transparency",
    description:
      "Budgets, governance notes, and program data are published open-source to model accountability beyond compliance.",
  },
  {
    title: "Distributed Power",
    description:
      "Chapters co-design priorities, vote on funding allocations, and lead experiments tailored to local realities.",
  },
]

const challengeAreas = [
  {
    title: "Fragmented support systems",
    description:
      "Developers jump between short-term gigs without access to holistic funding, mentorship, or wellness structures.",
  },
  {
    title: "Limited visibility",
    description:
      "Regional contributors often build in isolation and rarely receive recognition aligned with their impact.",
  },
  {
    title: "Burnout proliferation",
    description:
      "Without intentional care, many maintainers leave projects after high intensity grants or hackathons end.",
  },
  {
    title: "Policy & governance gaps",
    description:
      "Institutions lack playbooks for adopting, sustaining, and valuing open source initiatives in East Africa.",
  },
]

const board = [
  { name: "Anita Kamau", role: "Community Governance Lead" },
  { name: "Brian Mutesi", role: "Open Source Maintainer" },
  { name: "Diana Nambassa", role: "Digital Rights Strategist" },
  { name: "Samuel Okello", role: "Engineering Director" },
  { name: "Winnie Muthoni", role: "Psychosocial Support Lead" },
  { name: "Yonas Kebede", role: "Civic Tech Advisor" },
]

const partners = [
  "African Coding Network",
  "Mozilla Foundation",
  "Open Source Collective",
  "Safaricom Innovation Studio",
  "UNDP Accelerator Labs",
  "Ushahidi",
]

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 420L420 0\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
              About Support & Care
          </div>
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Designing infrastructures of care for East Africa&apos;s open source movement.
                </h1>
                <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  We exist so contributors can create without sacrificing their wellbeing. Our programs bridge funding,
                  mentorship, mental health, and governance support—helping maintainers steward communities with
                  longevity.
                </p>
                <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-white/60">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                    <Sparkle size={14} /> Mentorship Pods
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                    Collective Care Funds
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1">
                    Contributor Residencies
                  </span>
                </div>
              </div>

              <div className="relative rounded-3xl border border-white/10 bg-white/10 p-8 text-white/70 backdrop-blur-3xl">
                <p className="text-sm">
                  We are a community response to the silent attrition of open source maintainers across East Africa.
                  Support & Care convenes organizers, healers, and technologists to craft a new standard for sustained
                  collaboration—one anchored in dignity, shared resources, and joyful making.
                </p>
                <div className="mt-8 grid gap-4 text-xs uppercase tracking-[0.3em]">
                  <div className="flex justify-between text-white/60">
                    <span>Founded</span>
                    <span>2021</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Chapters</span>
                    <span>5 Cities</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Contributors</span>
                    <span>1,800+</span>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Mission & approach</h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                Our mission is to resource developers, maintainers, and stewards with relational, financial, and structural
                support so East Africa&apos;s open source future is community-centered and sustainable.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                {[
                  "Co-create mentorship, residency, and fellowship pathways rooted in contributor wellbeing.",
                  "Fund long-term infrastructure and experiment with regenerative economic models.",
                  "Broker equitable partnerships between global foundations and local chapters.",
                  "Build curricula for governance, documentation, and leadership intentionality.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Challenges We Address
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
                  What East African contributors told us.
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Listening tours across Nairobi, Kampala, Kigali, Dar es Salaam, and Addis Ababa grounded our work in
                  the realities of maintainers, designers, writers, and community strategists.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {challengeAreas.map((challenge) => (
                <div
                  key={challenge.title}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-background/80 p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">{challenge.title}</h3>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div className="rounded-3xl border border-border/60 bg-surface p-8 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                People
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Leadership collective</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Our advisory board blends community organizing, technical leadership, and care practice. Every member is
                accountable to a regional chapter and commits to transparent reporting.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {board.map((member) => (
                <div key={member.name} className="rounded-3xl border border-border/60 bg-background/80 p-6 shadow-lg transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {member.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-secondary/30 to-secondary/80" />
          <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_top,rgba(93,186,159,0.35),transparent_65%)]" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 text-secondary-foreground lg:px-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  Partners in care
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  A constellation of allied organizations.
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-white/70">
                  We collaborate with coalitions and institutions willing to invest in long-term, care-centered open
                  source ecosystems.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div key={partner} className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-white/80 backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-white/40">
                  {partner}
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
