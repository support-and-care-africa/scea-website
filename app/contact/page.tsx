"use client"

import type React from "react"

import { useState } from "react"
import { Compass, Inbox, MapPin, Phone, Send, Sparkle, Users } from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const contactChannels = [
  {
    icon: Inbox,
    label: "Email us",
    detail: "hello@supportandcareea.org",
    href: "mailto:hello@supportandcareea.org",
    description: "We respond within 2 business days with thoughtful next steps.",
  },
  {
    icon: MapPin,
    label: "Chapter hubs",
    detail: "Nairobi · Kampala · Dar es Salaam · Kigali · Addis Ababa",
    href: "/chapters",
    description: "Visit a local hub, attend an open circle, or co-host a residency.",
  },
  {
    icon: Phone,
    label: "Partnership hotline",
    detail: "+254 (0)700 000 000",
    href: "tel:+254700000000",
    description: "Reach our partnerships desk for funding, policy, or research collaborations.",
  },
]

const faqs = [
  {
    question: "How do I join my nearest chapter?",
    answer:
      "Head to our Chapters page, choose your city, and introduce yourself in the pre-welcome form. A chapter steward will reach out with onboarding rituals and upcoming gatherings.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No. Support & Care is funded through community-led grants and ally contributions. Membership is free and we offer stipends for accessibility whenever possible.",
  },
  {
    question: "What does partnership look like?",
    answer:
      "We co-design engagements around your goals—whether that’s maintainership, policy, funding, or research. Expect transparent scopes, shared governance, and mutual care commitments.",
  },
  {
    question: "Can beginners request mentorship?",
    answer:
      "Absolutely. We host mentorship pods every season and match new contributors with experienced maintainers, designers, and community strategists.",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message. We will get back to you soon!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 space-y-28 pb-24 sm:space-y-32 sm:pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-secondary/90 to-background" />
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"420\" height=\"420\" viewBox=\"0 0 420 420\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 210H420\" stroke=\"rgba(255,255,255,0.08)\"/%3E%3Cpath d=\"M210 0V420\" stroke=\"rgba(255,255,255,0.06)\"/%3E%3C/svg%3E')" }} />
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-20 text-secondary-foreground lg:px-8 lg:pb-32">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-primary">
              Contact Support & Care
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div className="space-y-6">
                <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                  Let&apos;s co-design support for your community, project, or partnership.
                </h1>
                <p className="max-w-2xl text-pretty text-base text-white/70 sm:text-lg">
                  Reach out when you&apos;re ready to collaborate, request care resources, or explore program partnerships.
                  Our team works across East Africa and the global open source ecosystem.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-sm text-white/70 backdrop-blur-3xl">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60">
                  <Users size={14} />
                  We respond within 48 hours
                </div>
                <p className="mt-4 text-sm">
                  Your inquiry is reviewed by our care desk, who will connect you to chapter stewards, program leads, or
                  wellbeing practitioners best suited to support your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-8 shadow-[0_25px_60px_-30px_rgba(7,8,45,0.45)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_40px_70px_-30px_rgba(7,8,45,0.55)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative space-y-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <channel.icon size={20} />
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{channel.label}</h2>
                    <p className="mt-2 text-sm text-primary">{channel.detail}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{channel.description}</p>
                </div>
              </a>
            ))}
              </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="grid gap-10 rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                Write to the care desk
              </div>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Tell us what you need</h2>
              <p className="text-sm text-muted-foreground">
                Share project updates, partnership ideas, or support requests. We honour your time, so every message gets
                a thoughtful response from the right steward.
              </p>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <Sparkle size={14} />
                  What to include
                </span>
                <ul className="mt-4 space-y-2">
                  <li>• Your role and chapter alignment (if any)</li>
                  <li>• A snapshot of the support or collaboration you&apos;re seeking</li>
                  <li>• Preferred timelines and how we can make engagement accessible</li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-border/60 bg-background/80 p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="h-12 w-full rounded-2xl border border-border/60 bg-background/90 px-4 text-sm text-foreground shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Your name"
                  />
                </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      className="h-12 w-full rounded-2xl border border-border/60 bg-background/90 px-4 text-sm text-foreground shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="you@email.com"
                  />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-2xl border border-border/60 bg-background/90 px-4 text-sm text-foreground shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="How can we support you?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-2xl border border-border/60 bg-background/90 px-4 py-3 text-sm text-foreground shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Share context, goals, and any accessibility considerations."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-accent text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-smooth hover:shadow-primary/40"
                >
                  Send message
                  <Send size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 lg:px-8">
          <div className="rounded-3xl border border-border/60 bg-surface p-10 shadow-[0_35px_80px_-40px_rgba(7,8,45,0.55)] backdrop-blur-xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  FAQs
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">Answers before we meet.</h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Every collaboration starts with clarity. If you don&apos;t see your question below, send us a message—we
                  love thoughtful inquiries.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-3xl border border-border/60 bg-background/80 p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40">
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{faq.answer}</p>
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
              Collaborate with us
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">Ready to design resilient ecosystems?</h2>
            <p className="mt-4 text-base text-white/70 sm:text-lg">
              We&apos;re here for maintainers, healers, policy makers, and partners who believe open source deserves care
              infrastructure. Let&apos;s chart the path together.
            </p>
            <a
              href="/get-involved"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-secondary transition-smooth hover:translate-y-[-1px] hover:shadow-lg"
            >
              Explore collaboration paths
              <Compass size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
