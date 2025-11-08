import Link from "next/link"
import { Calendar, Layers, Sparkle, User } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const blogPosts = [
  {
    id: 1,
    slug: "why-open-source-matters",
    title: "Why Open Source Matters: The East African Perspective",
    excerpt:
      "Explore how open source is revolutionizing software development across East Africa and why it matters for the region's digital future.",
    content:
      "Open source software has become a cornerstone of modern software development. In East Africa, the adoption and contribution to open source projects are creating new opportunities for developers and strengthening our regional tech ecosystem...",
    author: "Support & Care Team",
    date: "2024-01-15",
    category: "Open Source",
    image: "/open-source-code.jpg",
  },
  {
    id: 2,
    slug: "getting-started-open-source",
    title: "Getting Started with Open Source: A Beginner's Guide",
    excerpt:
      "Your comprehensive guide to making your first open source contribution and joining the global developer community.",
    content:
      "Making your first open source contribution can feel intimidating, but it's easier than you think. This guide walks you through finding the right project, understanding workflows, and making your first pull request...",
    author: "Jane Developer",
    date: "2024-01-10",
    category: "Tutorial",
    image: "/developer-coding-tutorial.jpg",
  },
  {
    id: 3,
    slug: "community-spotlight-nairobi",
    title: "Community Spotlight: Nairobi Chapter's Impact",
    excerpt: "Celebrating the achievements and growth of our Nairobi chapter over the past year.",
    content:
      "The Nairobi chapter of Support & Care For East Africa has grown tremendously this year. From hosting 12 successful meetups to launching our first Open Source Challenge, the community has demonstrated incredible enthusiasm...",
    author: "Community Manager",
    date: "2024-01-05",
    category: "Community",
    image: "/nairobi-tech-community.jpg",
  },
  {
    id: 4,
    slug: "open-source-best-practices",
    title: "Open Source Best Practices: Code of Conduct",
    excerpt: "Understanding and implementing a code of conduct in your open source project.",
    content:
      "A well-written code of conduct sets the tone for your project community. It establishes standards of behavior, creates a welcoming environment, and provides a framework for addressing conflicts...",
    author: "Open Source Expert",
    date: "2023-12-28",
    category: "Best Practices",
    image: "/code-of-conduct.jpg",
  },
  {
    id: 5,
    slug: "mentorship-success-stories",
    title: "Mentorship Success Stories: From Mentee to Maintainer",
    excerpt: "Inspiring stories of developers who grew through our mentorship program.",
    content:
      "Our mentorship program has successfully connected over 50 pairs of mentors and mentees. Here are some inspiring stories of developers who have grown and are now contributing back to the community...",
    author: "Mentorship Team",
    date: "2023-12-20",
    category: "Stories",
    image: "/mentorship-success.jpg",
  },
  {
    id: 6,
    slug: "funding-opportunities-east-africa",
    title: "Funding Opportunities for Open Source Projects in East Africa",
    excerpt: "A guide to available grants and funding programs for open source developers.",
    content:
      "There are numerous funding opportunities available for open source projects and developers in East Africa. This guide highlights grants from global foundations, regional initiatives, and corporate sponsors...",
    author: "Funding Coordinator",
    date: "2023-12-15",
    category: "Opportunities",
    image: "/funding-grants.jpg",
  },
]

export default function Blog() {
  const [featured, ...rest] = blogPosts
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 420L420 0\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
              Stories & Signals
            </div>
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Dispatches from East Africa&apos;s open source stewards.
                </h1>
                <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  Read reflections, playbooks, and field notes from our chapters, fellows, and partners. Every story is a
                  glimpse into how care-led open source shows up across the region.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white/70 backdrop-blur-3xl">
                <span className="text-xs uppercase tracking-[0.3em] text-white/60">Featured theme</span>
                <p className="mt-3 text-sm">
                  Sustainability, care, and community infrastructure highlight this month&apos;s programs across Nairobi,
                  Kampala, and Kigali.
                </p>
                <Link
                  href="/get-involved"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
                >
                  Join the movement →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_50px_90px_-35px_rgba(7,8,45,0.6)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-2 text-white/60">
                    <Calendar size={14} />
                    {new Date(featured.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{featured.title}</h2>
                  <p className="text-sm text-muted-foreground sm:text-base">{featured.excerpt}</p>
                </div>
                <div className="mt-auto flex items-center gap-3 text-sm font-semibold text-primary transition-smooth group-hover:text-primary/80">
                  Read full story
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>

            <div className="grid gap-6">
              <div className="rounded-3xl border border-border/60 bg-background/80 p-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Sparkle size={14} />
                  What you&apos;ll find
                </span>
                <ul className="mt-4 space-y-2">
                  <li>• Maintainer diaries from each chapter</li>
                  <li>• Care playbooks and wellbeing rituals</li>
                  <li>• Funding journeys and program retrospectives</li>
                  <li>• Technical deep dives and tooling experiments</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border/60 bg-background/80 p-6 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Layers size={14} />
                  Contribute a story
                </span>
                <p className="mt-3">
                  Are you a chapter member or ally? Share your journey to help others learn. Pitch your idea at{" "}
                  <span className="text-primary">stories@supportandcareea.org</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Field Notes
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Latest stories</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Insights from our community on what it takes to build sustainable, care-centered open source.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-6 shadow-[0_20px_55px_-35px_rgba(7,8,45,0.45)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_35px_70px_-30px_rgba(7,8,45,0.55)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary/80">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10px] font-semibold">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-2 text-muted-foreground">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="text-sm font-semibold text-primary transition-smooth group-hover:text-primary/80">
                      Read →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 text-center shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Newsletter
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-foreground sm:text-4xl">Stay close to the movement.</h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Monthly highlights featuring maintainer stories, upcoming programs, and opportunities to resource East
              Africa&apos;s open source caretakers.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="h-12 w-full rounded-2xl border border-border/60 bg-background/90 px-4 text-sm text-foreground shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 sm:w-80"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-accent px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-smooth hover:shadow-primary/40"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
