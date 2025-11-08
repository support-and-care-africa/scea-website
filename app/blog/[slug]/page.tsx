import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPosts: Record<string, any> = {
  "why-open-source-matters": {
    title: "Why Open Source Matters: The East African Perspective",
    author: "Support & Care Team",
    date: "2024-01-15",
    category: "Open Source",
    content: `
    Open source software has become a cornerstone of modern software development. In East Africa, the adoption and contribution to open source projects are creating new opportunities for developers and strengthening our regional tech ecosystem.

    Over 70% of modern software now relies on open source components. From web frameworks to databases, mobile development tools to cloud infrastructure, open source powers the digital world. Yet, the contributors who maintain and improve these critical projects are few and often unsupported.

    East Africa has tremendous potential in the tech industry. With Kenya, Uganda, Tanzania, Rwanda, and Ethiopia emerging as digital hubs, we have thousands of talented developers ready to contribute to global open source projects. However, many lack the structured support, mentorship, and resources needed to make meaningful contributions.

    This is where Support & Care For East Africa comes in. We're dedicated to:

    • Building inclusive communities that welcome developers of all levels
    • Providing mentorship from experienced open source maintainers
    • Creating funding opportunities for open source projects
    • Connecting East African developers with global opportunities
    • Ensuring the long-term sustainability of open source projects

    The future of technology in East Africa is built on open source. By empowering our developers to contribute and lead open source projects, we're not just building better software—we're building a stronger, more connected tech ecosystem for the entire region.

    Join us in this mission. Whether you're a seasoned developer or just starting your journey, there's a place for you in the open source community.
    `,
  },
  "getting-started-open-source": {
    title: "Getting Started with Open Source: A Beginner's Guide",
    author: "Jane Developer",
    date: "2024-01-10",
    category: "Tutorial",
    content: `
    Making your first open source contribution can feel intimidating, but it's easier than you think. This guide walks you through finding the right project, understanding workflows, and making your first pull request.

    Step 1: Find the Right Project
    
    Start with projects that interest you. Look for repositories tagged with 'good-first-issue' or 'beginner-friendly'. GitHub's search makes this easy. Consider projects that:
    • Solve problems you care about
    • Have good documentation
    • Have active communities
    • Are looking for new contributors

    Step 2: Understand the Project

    Before diving in, take time to:
    • Read the README and CONTRIBUTING files
    • Look at existing issues and discussions
    • Understand the project's goals and code structure
    • Review the code of conduct

    Step 3: Set Up Your Development Environment

    Most projects have clear setup instructions. Follow them carefully and ask for help if you get stuck. The community is usually very supportive of newcomers.

    Step 4: Make Your First Contribution

    Start small. Look for issues marked as 'good-first-issue' or 'help-wanted'. Your first contribution might be:
    • Fixing a typo in documentation
    • Improving a comment or docstring
    • Adding a small feature
    • Fixing a small bug

    Step 5: Submit a Pull Request

    After making your changes:
    • Create a new branch for your work
    • Commit your changes with clear messages
    • Push to your fork and create a pull request
    • Write a clear description of your changes
    • Be responsive to feedback

    Remember: Every maintainer was once a beginner too. The community wants to help you succeed!

    Start your open source journey today. Your contributions matter.
    `,
  },
  "community-spotlight-nairobi": {
    title: "Community Spotlight: Nairobi Chapter's Impact",
    author: "Community Manager",
    date: "2024-01-05",
    category: "Community",
    content: `
    The Nairobi chapter of Support & Care For East Africa has grown tremendously this year. From hosting 12 successful meetups to launching our first Open Source Challenge, the community has demonstrated incredible enthusiasm and commitment to advancing open source in the region.

    Since our launch, the Nairobi chapter has achieved:

    • 250+ active community members
    • 12 monthly meetups with average attendance of 35 people
    • 5 successful workshops covering Git, GitHub, and open source fundamentals
    • 3 mentorship programs connecting 15 pairs of mentors and mentees
    • 1 successful Open Source Challenge with 40+ participants

    Community Highlights

    Our monthly meetups have become a hub for Nairobi's open source community. We've hosted talks from accomplished developers, organized pair programming sessions, and created a safe space for beginners to learn and ask questions.

    One of our most successful initiatives has been the mentorship program. Seeing beginners grow into confident contributors, and then transition into mentors themselves, has been incredibly rewarding.

    Success Stories

    We've been thrilled to see community members land new jobs, get promoted, and become maintainers of open source projects. These success stories inspire us to keep growing and supporting the community.

    Looking Ahead

    In 2024, we're planning to:
    • Expand to 2 meetups per month
    • Launch an internship program connecting students with companies
    • Host our first annual Open Source Summit
    • Grow our mentorship program to 50+ pairs
    • Build partnerships with tech companies and universities

    Thank you to every community member who has contributed to this amazing journey. Together, we're building the future of open source in East Africa.
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post not found</h1>
            <Link href="/blog" className="text-primary hover:underline">
              Back to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Back Link */}
        <div className="bg-background border-b border-border">
          <div className="max-w-3xl mx-auto px-4 py-4">
            <Link href="/blog" className="text-primary hover:text-accent transition flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Post Header */}
        <section className="bg-card border-b border-border py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="mb-4">
              <span className="text-sm bg-accent bg-opacity-20 text-accent px-3 py-1 rounded">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((paragraph: string, idx: number) => (
                <p key={idx} className="text-foreground leading-relaxed mb-6 whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Related Posts CTA */}
        <section className="bg-card border-t border-border py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">More Stories</h2>
            <p className="text-muted-foreground mb-8">Check out other articles from our community</p>
            <Link href="/blog" className="text-primary hover:text-accent transition inline-flex items-center gap-2">
              Read More Posts <ArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
