import Link from "next/link"
import { Briefcase, Code, Compass, Heart, Sparkle, Users } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const pathways = [
  {
    icon: Code,
    title: "Contributors",
    description:
      "For developers, designers, researchers, writers, and maintainers ready to build in public with community care.",
    actions: ["Join a chapter pod", "Apply for mentorship", "Take on Momentum Lab challenges"],
    cta: "Start contributing",
    href: "/contact",
  },
  {
    icon: Users,
    title: "Organizers",
    description:
      "For facilitators, program designers, and community builders who want to steward local chapters and care pods.",
    actions: ["Host community rituals", "Lead care practices", "Co-design chapter programs"],
    cta: "Lead a chapter pod",
    href: "/chapters",
  },
  {
    icon: Briefcase,
    title: "Partners",
    description:
      "For organizations, funds, and institutions offering resources, research, or strategic alliances.",
    actions: ["Fund residencies & labs", "Share infrastructure", "Co-create governance pilots"],
    cta: "Design a partnership",
    href: "/contact",
  },
  {
    icon: Heart,
    title: "Allies & Donors",
    description:
      "For individuals and foundations resourcing care stipends, accessibility support, and community grants.",
    actions: ["Sponsor care stipends", "Fund documentation sprints", "Support scholarship cohorts"],
    cta: "Fund the movement",
    href: "/contact",
  },
]

const developerBenefits = [
  {
    title: "Mentorship pods",
    items: [
      "Dedicated pairing with maintainers and mentors across the region",
      "Wellbeing check-ins woven into each sprint",
      "Access to global contributor networks",
    ],
  },
  {
    title: "Momentum Labs",
    items: [
      "Six-month fellowships with governance and product coaching",
      "Stipends and wellbeing subsidies for committed contributors",
      "Demo days with partners, funders, and global maintainers",
    ],
  },
  {
    title: "Community rituals",
    items: [
      "Monthly build nights and documentation circles",
      "Cross-chapter hackweeks and knowledge exchanges",
      "Open care rooms for integration and rest",
    ],
  },
]

const partnerOpportunities = [
  {
    title: "Program sponsorship",
    description: "Underwrite residencies, mentorship pods, and wellbeing funds tailored to chapter needs.",
  },
  {
    title: "Infrastructure & tooling",
    description: "Offer platforms, licenses, and cloud resources that amplify local contributors.",
  },
  {
    title: "Knowledge exchange",
    description: "Facilitate workshops, publish research, and co-author governance playbooks with our chapters.",
  },
  {
    title: "Fellowship placements",
    description: "Host fellows, maintainers, and designers on projects aligned to your mission.",
  },
]

const foundationAlliances = [
  {
    title: "Care-backed grants",
    description: "Co-create grantmaking models embedding wellbeing, sabbaticals, and mutual aid.",
  },
  {
    title: "Global mentorship networks",
    description: "Pair international maintainers with East African stewards for reciprocal learning.",
  },
  {
    title: "Policy and advocacy",
    description: "Collaborate on open source governance frameworks for governments and institutions.",
  },
  {
    title: "Regional summits",
    description: "Bring global voices to Nairobi Summit and sponsor travel for underrepresented contributors.",
  },
]

export default function GetInvolved() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0L420 420\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary dark:text-primary-foreground">
              Get Involved
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
              <div className="space-y-6 text-foreground dark:text-white">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground dark:text-white sm:text-5xl md:text-6xl">
                  Build the future of open source care with us.
                </h1>
                <p className="max-w-2xl text-pretty text-base text-muted-foreground dark:text-white/70 sm:text-lg">
                  Whether you&apos;re a maintainer, community organizer, or ally, we create pathways to resource your work,
                  ground it in care, and scale impact across East Africa.
                </p>
              </div>
              <div className="rounded-3xl border border-border/60 bg-surface-strong p-6 text-sm text-muted-foreground backdrop-blur-3xl dark:border-white/10 dark:bg-white/10 dark:text-white/70">
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground dark:text-white/60">
                  <Sparkle size={14} />
                  Movement Snapshot
                </span>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>• 5 thriving chapters with 1,800+ members</li>
                  <li>• Momentum Labs fellowships running twice per year</li>
                  <li>• Care pods offering stipends, therapy, and sabbaticals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 text-foreground shadow-[0_30px_70px_-45px_rgba(7,8,45,0.55)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_45px_90px_-40px_rgba(7,8,45,0.6)] dark:text-white"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                      <pathway.icon size={22} />
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary/70">Pathway</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-foreground">{pathway.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground">{pathway.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {pathway.actions.map((action) => (
                      <li key={action} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pathway.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-smooth hover:text-primary/80"
                  >
                    {pathway.cta} →
                  </Link>
                </div>
            </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] text-foreground dark:text-white">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                  Contributors
                </div>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Support for builders & maintainers</h2>
                <p className="text-sm text-muted-foreground">
                  We cultivate environments where contributors can create, rest, and lead with confidence. Join our pods,
                  fellowships, and practice studios tailored to your craft.
                </p>
              </div>

              <div className="rounded-3xl border border-border/60 bg-surface p-6 text-sm text-muted-foreground dark:border-white/10 dark:bg-background/80 dark:text-white/80">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Compass size={14} />
                  Apply anytime
                </span>
                <p className="mt-3">
                  Applications for mentorship and Momentum Labs open year-round. We prioritize historically marginalized
                  contributors, caretakers, and long-time maintainers.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {developerBenefits.map((benefit) => (
                <div key={benefit.title} className="rounded-3xl border border-border/60 bg-surface p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 dark:bg-background/80">
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">{benefit.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground dark:text-white/70">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] text-foreground dark:text-white">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                  Partners & Organizations
                </div>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Collaborate with chapters & fellows</h2>
                <p className="text-sm text-muted-foreground">
                  Organizations are vital allies in sustaining our work. We co-design partnerships that balance impact,
                  accountability, and contributor wellbeing.
                </p>
                  </div>

              <div className="rounded-3xl border border-border/60 bg-surface p-6 text-sm text-muted-foreground dark:border-white/10 dark:bg-background/80 dark:text-white/80">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Impact Reporting</span>
                <p className="mt-3">
                  Receive transparent metrics on community health, project delivery, and wellbeing outcomes for every
                  partnership.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {partnerOpportunities.map((opportunity) => (
                <div key={opportunity.title} className="rounded-3xl border border-border/60 bg-surface p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 dark:bg-background/80">
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">{opportunity.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary dark:border-primary/40 dark:bg-primary/10 dark:text-primary-foreground">
                  Global Foundations
                </div>
                <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Strengthen the open source fabric</h2>
                <p className="text-sm text-muted-foreground">
                  We work with international allies to unlock resources, governance frameworks, and systems of care that
                  ripple across the global OSS ecosystem.
                </p>
              </div>

              <div className="rounded-3xl border border-border/60 bg-surface p-6 text-sm text-muted-foreground dark:border-white/10 dark:bg-background/80 dark:text-white/80">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">We offer</span>
                <p className="mt-3">
                  Quarterly coalitions, transparent financial reporting, and co-authored research to amplify shared
                  learnings.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {foundationAlliances.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border/60 bg-surface p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 dark:bg-background/80"
                >
                  <h3 className="text-lg font-semibold text-foreground dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground dark:text-white/70">{item.description}</p>
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
              Let&apos;s build together
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-foreground dark:text-white sm:text-4xl">
              Ready to amplify care in open source?
            </h2>
            <p className="mt-4 text-base text-muted-foreground dark:text-white/70 sm:text-lg">
              Share your intentions and we&apos;ll co-create a pathway—be it mentorship, funding, or community rituals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
              >
                Start the conversation
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/chapters"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/60 px-6 py-3 text-sm font-semibold text-foreground transition-smooth hover:border-primary/40 hover:bg-primary/10 dark:border-white/40 dark:text-white dark:hover:border-white dark:hover:bg-white/10"
              >
                Meet a chapter steward
                <Sparkle size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
