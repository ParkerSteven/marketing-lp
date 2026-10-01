import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Phone, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandMarks } from "@/components/marketing-brand-marks";
import logoAsset from "@/assets/TheCollingwoodPress.png";
import bbbBadge from "@/assets/bbb-accredited.svg";
import ibpaBadge from "@/assets/ibpa-member.png";
import footerBg from "@/assets/v3-footer-bg.jpg";
import heroImage from "@/assets/marketing-hero-collage.jpg";
import formCollage from "@/assets/marketing-form-collage.jpg";
import finalImage from "@/assets/marketing-final-inquiry.jpg";
import digitalBackdrop from "@/assets/marketing-digital-backdrop.jpg";
import digitalA1 from "@/assets/marketing-digital-a1.jpg";
import digitalA2 from "@/assets/marketing-digital-a2.jpg";
import digitalA3 from "@/assets/marketing-digital-a3.jpg";
import digitalA4 from "@/assets/marketing-digital-a4.jpg";
import digitalA5 from "@/assets/marketing-digital-a5.jpg";
import digitalA6 from "@/assets/marketing-digital-a6.jpg";
import digitalB1 from "@/assets/marketing-digital-b1.jpg";
import digitalB2 from "@/assets/marketing-digital-b2.jpg";
import digitalB3 from "@/assets/marketing-digital-b3.jpg";
import digitalB4 from "@/assets/marketing-digital-b4.jpg";
import digitalB5 from "@/assets/marketing-digital-b5.jpg";
import campaignA1 from "@/assets/marketing-campaign-a1.jpg";
import campaignA2 from "@/assets/marketing-campaign-a2.jpg";
import campaignA3 from "@/assets/marketing-campaign-a3.jpg";
import campaignA4 from "@/assets/marketing-campaign-a4.jpg";
import campaignB1 from "@/assets/marketing-campaign-b1.jpg";
import campaignB2 from "@/assets/marketing-campaign-b2.jpg";
import campaignB3 from "@/assets/marketing-campaign-b3.jpg";
import campaignB4 from "@/assets/marketing-campaign-b4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Book Marketing Services — The Collingwood Press" },
      { name: "description", content: "Book marketing strategies, launch campaigns, listing optimization, advertising, author branding and more from The Collingwood Press." },
      { property: "og:title", content: "Book Marketing Services — The Collingwood Press" },
      { property: "og:description", content: "You didn't write a book to watch it collect dust. Explore book marketing that puts your work in front of readers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ]
  }),
  component: MarketingPage,
});

const toolImages = [digitalA1, digitalA2, digitalA3, digitalA4, digitalA5, digitalA6, digitalB1, digitalB2, digitalB3, digitalB4];
const promiseImages = [campaignA1, campaignA2, campaignA3];
const processImages = [campaignB1, campaignB2, campaignB3, campaignB4];
const planImages = [digitalB1, digitalB5, digitalA2];

const platformStrip = [
  "amazon", "bookbub", "goodreads", "meta", "facebook", "instagram", "tiktok", "youtube", "googleads",
  "googleanalytics", "x", "pinterest", "reddit", "mailchimp",
  "threads", "substack", "wordpress",
];
const serviceMarks: string[][] = [
  ["googlesearchconsole"],
  ["googleads", "meta", "bookbub"],
  ["mailchimp", "substack"],
  ["tiktok", "instagram", "threads"],
  ["pinterest", "x"],
  ["wordpress", "googleanalytics"],
  ["facebook", "goodreads"],
  ["goodreads", "reddit"],
  ["youtube", "tiktok"],
  ["spotify", "substack"],
];
const reports = [
  { mark: "googleads", tint: "#4285F4", title: "Ad Performance Report", body: "Spend, clicks, cost per click and sales for every campaign, with a plain note on what we changed and why." },
  { mark: "instagram", tint: "#FF0069", title: "Social Campaign Report", body: "Reach, saves, shares and comments across Instagram, TikTok, Facebook and Threads, plus the posts worth repeating." },
  { mark: "googleanalytics", tint: "#E37400", title: "Traffic and Conversions", body: "Where visitors to your book page came from, what they read, and how many went on to buy." },
  { mark: "substack", tint: "#FF6719", title: "Email and List Growth", body: "New subscribers, open and click rates, and the sends that turned readers into buyers." },
];

const promises = [
  { title: "Stop Shouting Into the Void", body: "Posting on social media every day and getting 3-4 likes from your mom doesn't count as marketing. We put your book in front of people who actually buy books in your genre.", end: "Targeted visibility that reaches readers already hunting for their next read." },
  { title: "Make Readers Understand Why Your Book Matters", body: "Confused readers don't buy. If your description rambles, your genre is unclear, or your hook is buried, people bounce.", end: "We sharpen your positioning so readers instantly know what your book is, who it's for, and why they need it now." },
  { title: "Build Momentum That Doesn't Die After Launch Week", body: "A big launch spike means nothing if sales flatline by month two. We create systems that keep working. Reviews that compound.", end: "Email lists that grow. Discoverability that improves over time. Your book stays alive long after the launch party ends." },
];
const process = [
  { title: "Find Out Why Nobody's Clicking", body: "We audit your listing, cover, keywords, and reviews — and pinpoint exactly what's costing you sales." },
  { title: "Get Your Book Where Buyers Already Shop", body: "We place your book on the platforms and communities where your ideal readers are already looking." },
  { title: "Build the Trust That Makes People Buy", body: "Reviews, social proof, professional presentation. We remove hesitation and turn browsers into buyers." },
  { title: "Keep Sales Coming Month After Month", body: "Email sequences, retargeting, algorithmic momentum — your book keeps selling while you write the next." },
];
const services = [
  { title: "Amazon Listing Optimization", body: "Sharper descriptions, keywords, and categories help the right readers find your book and understand why it matters." },
  { title: "Paid Advertising That Pays Back", body: "Targeted campaigns across Amazon, Facebook, Instagram, and BookBub, tracked and adjusted around your goals." },
  { title: "Email Marketing That Builds Your Audience", body: "Build a reader list you own, then keep in touch with thoughtful campaigns for every new release." },
  { title: "Social Media Campaigns That Don't Waste Your Time", body: "Content shaped for BookTok, Bookstagram, and reader communities, with a clear purpose behind every post." },
  { title: "Author Branding That Makes You Memorable", body: "A consistent voice and visual identity help readers recognize you from one book to the next." },
  { title: "Author Website That Actually Converts", body: "A home for your books, reader signups, and clear paths to buy, built for your audience." },
  { title: "Book Launch Campaigns", body: "Coordinate preorders, release announcements, review outreach, email, and ads into one launch." },
  { title: "Review Generation", body: "Build legitimate review momentum through advance readers, outreach, and compliant requests." },
  { title: "Book Video Trailers", body: "Short-form book video made for social feeds, launch announcements, and digital campaigns." },
  { title: "PR and Media Features", body: "Reach relevant podcasts, blogs, publications, and book reviewers with a focused pitch." },
];
const strategy = [
  { title: "Author + Book Branding", body: "Give this book a clear identity while building an author name readers remember for the next one." },
  { title: "Launch + Lasting Audience", body: "Build excitement before release, then turn attention into readers who return, review, and recommend." },
  { title: "Paid + Organic Marketing", body: "Use targeted ads for early reach and lasting channels to keep readers discovering your work." },
];
const faqs = [
  { q: "I've tried marketing before. Burned money on ads. Got nothing. Why would this be different?", a: "Because most authors run ads without strategy. They boost posts randomly, target 'people who like books,' and wonder why nothing converts. We start with your positioning. Who exactly is this book for? Where do those readers shop? What message makes them click? Then we build campaigns around answers, not guesses. Every dollar has a job." },
  { q: "My book has been out for months with barely any sales. Is it too late?", a: "Not even close. Some of our best results come from books that authors had given up on. A stale listing can be revived. Keywords can be fixed. A fresh marketing push can trigger Amazon's algorithm to start showing your book again. We've taken books sitting at rank 500,000 and pushed them into bestseller categories. Your book isn't dead. It's dormant." },
  { q: "How is this different from just hiring someone to run Facebook ads?", a: "Ads are a tactic. Marketing is a system. We don't just run ads and hope. We fix your Amazon listing so it converts when people land on it. We build email sequences that capture readers who aren't ready to buy yet. We coordinate launches, promotions, and ongoing visibility. Ads are part of it. But they're not the whole thing." },
  { q: "Do I need a huge budget to see results?", a: "No. Big budgets help, but smart targeting matters more. We've seen authors waste thousands on poorly aimed campaigns and others turn a few hundred into consistent sales. We work with your budget and focus spending where it actually moves the needle. No vanity metrics. No wasted impressions. Just conversions." },
  { q: "What if I don't have a social media following?", a: "Good news: you don't need one. Plenty of bestselling authors have tiny followings. What matters is reaching the right readers, not building an audience of people who'll never buy. We focus on platforms where book buyers shop, not on growing follower counts that look impressive but don't convert." },
  { q: "How long until I see results?", a: "Some changes hit fast. Fixing your Amazon listing can improve conversions within days. Ad campaigns typically show patterns within two to three weeks. Building review momentum and sustained discoverability takes longer. We give you realistic timelines upfront so you know what to expect and when." },
  { q: "Do I really need an author website or can I just sell through Amazon?", a: "Amazon is essential but you're renting space there. You don't own your customer list. You can't email your readers directly. You're one algorithm change away from disappearing. An author website gives you a home base you control. We help you build one that actually converts visitors into buyers and captures emails for future launches." },
  { q: "What exactly do I get when I work with you?", a: "Depends on what your book needs. Could be a full marketing overhaul: listing optimization, ad campaigns, email setup, launch coordination, ongoing promotion. Could be targeted fixes: just your Amazon presence or just your ad strategy. We start with a free review, identify what's broken, and build a plan around your specific situation and budget." },
];

const wrap = "mx-auto w-full max-w-[1280px] px-6 lg:px-12";
function Star({ className = "w-4 h-4" }: { className?: string }) {
  return <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" /></svg>;
}
const authorReviews = [
  { name: "Chris Thompson", title: "The Journey Within", date: "Mar 2026", rating: 5, body: "Collingwood Press made my dream real. They guided me through editing, cover design, and launch. My book is selling on Amazon and I could not be more proud." },
  { name: "Michael Brooks", title: "Reflections of Success", date: "Feb 2026", rating: 5, body: "I never thought publishing could be this smooth. Thorough editing, sharp design, flawless distribution — delivered exactly on schedule." },
  { name: "William Harris", title: "Finding My Voice", date: "Jan 2026", rating: 5, body: "They took my scattered draft and turned it into a real book. Honest feedback, transparent pricing, launch on the date they promised." },
  { name: "Hannah Reed", title: "The Paper Garden", date: "Dec 2025", rating: 5, body: "Collingwood helped my book find readers fast. A publisher that treats you like a partner and not a transaction." },
  { name: "David Whitaker", title: "Ledger of Days", date: "Nov 2025", rating: 5, body: "Straight talk from day one. Told me what my manuscript needed, what it would cost, and when it would be done. No upsells." },
  { name: "Eleanor Grady", title: "North by North", date: "Oct 2025", rating: 5, body: "The editing sharpened my prose without changing my voice. The cover got me stopped in the aisle at my local shop." },
];
function Mark({ id, className = "h-5 w-5" }: { id: string; className?: string }) {
  const m = brandMarks[id];
  if (!m) return null;
  return <svg viewBox="0 0 24 24" className={className} fill={m.hex} role="img" aria-label={m.title}><path d={m.path} /></svg>;
}
function PlatformCarousel() {
  return <div className="mk-platform-viewport mt-8" aria-label="Marketing platforms">
    <div className="mk-platform-track">
      {[0, 1].map((copy) => <div key={copy} className="mk-platform-group" aria-hidden={copy === 1 ? true : undefined}>
        {platformStrip.map((id) => {
          const mark = brandMarks[id];
          const title = id === "amazon" ? "Amazon" : mark?.title;
          if (!title) return null;
          const symbol = id === "amazon" ? <ShoppingCart size={32} color="var(--maroon)" aria-hidden="true" /> : <Mark id={id} className="h-8 w-8" />;
          return <div key={id} className="flip-card mk-platform-card" tabIndex={copy === 0 ? 0 : -1} aria-label={`${title} marketing platform`}>
            <div className="flip-inner">
              <div className="flip-face mk-platform-front">
                <span className="mk-platform-symbol">{symbol}</span>
                <span className="mk-plat-name">{title}</span>
              </div>
              <div className="flip-face flip-back mk-platform-back">
                {id === "amazon" ? <ShoppingCart size={48} color="var(--maroon)" aria-hidden="true" /> : <Mark id={id} className="h-12 w-12" />}
                <span className="mk-plat-name">{title}</span>
              </div>
            </div>
          </div>;
        })}
      </div>)}
    </div>
  </div>;
}
function Action({ children, href, gold = false }: { children: React.ReactNode; href: string; gold?: boolean }) {
  return <Button asChild className={gold ? "btn-gold" : "btn-primary"}><a href={href}>{children}</a></Button>;
}
function InquiryForm({ idPrefix = "marketing", formAnchor = "review-form", compact = false, collage = false }: { idPrefix?: string; formAnchor?: string; compact?: boolean; collage?: boolean }) {
  const [prepared, setPrepared] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nCurrent stage: ${data.get("stage")}\nGenre: ${data.get("genre")}\nMessage: ${data.get("message")}`;
    window.location.href = `mailto:info@thecollingwoodpress.com?subject=${encodeURIComponent("Free marketing review request")}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  }
  const field = `w-full min-w-0 rounded-none border border-rule ${collage ? "bg-paper/95 backdrop-blur-[2px]" : "bg-paper-deep/40"} px-3.5 ${compact ? "py-2.5" : "py-3"} font-sans text-[14px] text-ink outline-none placeholder:text-ink-mute focus:border-navy focus:ring-1 focus:ring-navy`;
  return <div id={formAnchor} className={`relative isolate scroll-mt-24 overflow-hidden border shadow-xl ${collage ? "border-gold/60 shadow-[0_24px_60px_-18px_rgba(74,20,13,0.45)]" : "border-rule bg-paper"} ${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"}`}>
    {collage && <>
      <img src={formCollage} alt="" width={1024} height={1280} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-paper/98 via-paper/94 to-paper/86" />
    </>}
    {prepared ? <div className="py-12 text-center"><h2 className="display text-[27px] text-ink">One more <span className="mk-orange">step.</span></h2><p className="mt-4">Your email app should open with your request ready to send.</p><a href="mailto:info@thecollingwoodpress.com" className="mt-5 inline-block underline">Email us directly</a></div> : <>
      <h2 className={`display leading-tight text-ink ${compact ? "text-[23px] sm:text-[26px]" : "text-[26px] sm:text-[30px]"}`}>Get Your Free <span className="mk-orange">Marketing Review</span></h2>
      <p className={`${compact ? "mt-2 text-[14px]" : "mt-3 text-[16px]"} leading-relaxed text-ink-soft`}>Tell us where your book is stuck. We'll show you what may be holding it back and where to start.</p>
      <form onSubmit={submit} className={compact ? "mt-4 space-y-2.5" : "mt-6 space-y-3.5"}>
        <div className="grid gap-3 sm:grid-cols-2"><label className="sr-only" htmlFor={`${idPrefix}-name`}>Full name</label><input className={field} id={`${idPrefix}-name`} name="name" placeholder="Full name" required /><label className="sr-only" htmlFor={`${idPrefix}-email`}>Email</label><input className={field} id={`${idPrefix}-email`} name="email" type="email" placeholder="Email" required /></div>
        <div className="grid gap-3 sm:grid-cols-2"><label className="sr-only" htmlFor={`${idPrefix}-phone`}>Phone number</label><input className={field} id={`${idPrefix}-phone`} name="phone" type="tel" placeholder="Phone number" required />{!compact && <><label className="sr-only" htmlFor={`${idPrefix}-stage`}>Current stage</label><select className={field} id={`${idPrefix}-stage`} name="stage" required defaultValue=""><option value="" disabled>Current stage</option><option>Manuscript in Progress</option><option>Manuscript Completed</option><option>Already Published</option><option>Re-launch / Backlist</option></select></>}</div>
        {!compact && <><label className="sr-only" htmlFor={`${idPrefix}-genre`}>Genre</label><input className={field} id={`${idPrefix}-genre`} name="genre" placeholder="Genre (optional)" /></>}
        <label className="sr-only" htmlFor={`${idPrefix}-message`}>Message</label><textarea className={`${field} ${compact ? "min-h-[54px]" : "min-h-[80px]"} resize-y`} id={`${idPrefix}-message`} name="message" placeholder="Message (optional)" />
        <label className="flex items-start gap-3 text-[12px] leading-relaxed"><input type="checkbox" required className="mt-1 accent-navy" /><span>By checking this box, you consent to receive marketing communications from The Collingwood Press. Msg &amp; data rates may apply. Reply STOP to unsubscribe. By submitting this form, you agree to our <a className="underline" href="https://www.thecollingwoodpress.com/privacy-policy/">privacy policy</a> and <a className="underline" href="https://www.thecollingwoodpress.com/privacy-choices/">Your Privacy Choices</a>.</span></label>
        <Button type="submit" className="btn-gold w-full">Prepare Email Request <ArrowRight size={16} /></Button>
        {!compact && <p className="text-center text-[12px] text-ink-mute">Your email app will open with your details. Review and send the message to request your review.</p>}
      </form>
    </>}
  </div>;
}
function MarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <div className="marketing-page min-h-screen overflow-hidden bg-paper text-ink font-serif">
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-md"><div className={`${wrap} flex min-h-[76px] sm:min-h-[88px] items-center justify-between gap-4 py-2`}><Link to="/" aria-label="Collingwood Press home" className="min-w-0 shrink"><img src={logoAsset} alt="The Collingwood Press" className="h-12 w-auto max-w-[240px] object-contain sm:h-16 sm:max-w-[260px] lg:h-14" /></Link><nav className="hidden gap-7 font-sans text-[12px] font-semibold uppercase lg:flex"><a href="#approach">Approach</a><a href="#platforms">Platforms</a><a href="#services">Services</a><a href="#reports">Reports</a><a href="#reviews">Reviews</a><a href="#faq">FAQ</a></nav><Button asChild className="btn-primary shrink-0 !px-3 !text-[10px] sm:!px-5 sm:!text-[12px]"><a href="#review-form">Get a review <ArrowRight size={14} /></a></Button></div></header>
    <main>
      <section className="relative isolate overflow-hidden border-b border-rule"><img src={heroImage} alt="Colorful collage of digital marketing panels — social feeds, ad dashboards, a glowing book and an online storefront" width={1920} height={1080} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" /><div className="absolute inset-0 -z-10 mk-hero-scrim" /><div className={`${wrap} grid items-start gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16`}><div className="lg:pt-5 mk-hero-copy"><h1 className="display max-w-[15ch] text-[34px] leading-[1.12] text-ink sm:text-[44px] lg:text-[50px]">You Didn't Write a Book to <span className="mk-orange">Watch It Collect Dust</span> on Page 47 of Amazon.</h1><p className="mt-6 max-w-[57ch] text-[17px] leading-[1.7] text-ink-soft">Let’s be honest. You poured months into writing. Edited until your eyes burned. Finally hit publish. And then... silence. A few family purchases. One pity review. Royalty reports that make you wince. Your book isn't bad. It's invisible. And invisible books don't sell. We fix that.</p><div className="mt-7 flex flex-wrap gap-3"><Action href="tel:+19362233644" gold><Phone size={15} /> Call us</Action><Action href="#approach">See How Book Marketing Works <ArrowRight size={15} /></Action></div><div className="mt-9 max-w-[530px] border-t border-rule pt-5"><p className="font-sans text-[11px] font-semibold uppercase text-ink-mute">Accredited &amp; Member</p><div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4"><img src={ibpaBadge} alt="Independent Book Publishers Association — Proud Member" className="h-12 w-auto object-contain" /><span className="hidden h-9 w-px bg-rule sm:block" /><img src={bbbBadge} alt="BBB Accredited Business" className="h-11 w-auto object-contain" /></div></div></div><InquiryForm collage /></div></section>
      <section id="platforms" className="mk-platforms relative scroll-mt-24 overflow-hidden border-b border-rule py-10 lg:py-12"><div className={`${wrap} relative`}><div className="mx-auto max-w-[760px] text-center"><h2 className="display text-[26px] leading-tight sm:text-[32px]">Your Book, Running on the <span className="mk-orange">Platforms Readers Actually Use.</span></h2><p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-relaxed">Paid search, social campaigns, video, email and reader communities. We set them up, run them together, and report on each one.</p></div></div><PlatformCarousel /></section>
      <section id="approach" className="marketing-scene relative scroll-mt-24 overflow-hidden border-b border-rule py-14 lg:py-16"><img src={campaignA4} alt="" loading="lazy" className="marketing-scene-image" /><div className="marketing-scene-veil" /><div className={`${wrap} relative`}><div className="mx-auto max-w-[800px] text-center"><h2 className="display text-[28px] leading-tight sm:text-[34px]">We Build <span className="mk-orange">Marketing Strategies</span> That Turn Scrollers Into Buyers.</h2><p className="mx-auto mt-4 max-w-[66ch] text-[17px] leading-relaxed">You wrote something worth reading. But readers scroll past 10,000 books a day. If yours doesn't grab them in three seconds, they're gone. Good writing isn't enough anymore. You need a strategy that puts your book where buyers are already looking.</p></div><div className="mt-9 grid gap-5 md:grid-cols-3">{promises.map((item, i) => <article key={item.title} className="marketing-image-card"><img src={promiseImages[i]} alt="" loading="lazy" width={480} height={384} className="marketing-card-image" /><div className="marketing-card-copy"><h3 className="display text-[21px] leading-tight">{item.title}</h3><p className="mt-3 text-[16px] leading-[1.6]">{item.body}</p><p className="mt-3 text-[16px] leading-[1.6]">{item.end}</p></div></article>)}</div><div className="mt-8 flex justify-center"><Action href="#review-form" gold>Get a Custom Marketing Roadmap <ArrowRight size={15} /></Action></div></div></section>
      <section className="marketing-scene relative overflow-hidden border-b border-rule py-14 lg:py-16"><img src={digitalB1} alt="" loading="lazy" className="marketing-scene-image" /><div className="marketing-scene-veil" /><div className={`${wrap} relative`}><div className="mx-auto max-w-[720px] text-center"><h2 className="display text-[28px] leading-tight sm:text-[34px]">From Invisible to <span className="mk-orange">Impossible to Ignore.</span> Here's How.</h2><p className="mt-4 text-[17px]">A clear, intentional process built to move your book from “invisible” to discoverable.</p></div><div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{process.map((item, i) => <article key={item.title} className="marketing-image-card"><img src={processImages[i]} alt="" loading="lazy" width={480} height={384} className="marketing-card-image" /><div className="marketing-card-copy"><span className="font-sans text-[12px] font-bold uppercase text-maroon">Step {String(i + 1).padStart(2, "0")}</span><h3 className="display mt-2 text-[20px] leading-tight">{item.title}</h3><p className="mt-3 text-[16px] leading-[1.6]">{item.body}</p></div></article>)}</div><div className="mt-8 text-center"><Action href="#review-form">Get a Free Marketing Audit <ArrowRight size={15} /></Action></div></div></section>
      <section id="services" className="marketing-scene relative scroll-mt-24 overflow-hidden py-12 lg:py-14"><img src={digitalBackdrop} alt="" loading="lazy" className="marketing-scene-image" /><div className="marketing-scene-veil" /><div className={`${wrap} relative`}><div className="mx-auto max-w-[760px] border-b border-rule pb-7 text-center"><h2 className="display text-[28px] leading-tight sm:text-[34px]">Every Tool You Need to <span className="mk-orange">Turn Readers Into Buyers</span></h2><p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-relaxed">From the search result to the social feed to the inbox, your book needs to show up where readers discover what to read next. We connect the channels around your book.</p></div><div className="mt-6 grid gap-3 md:grid-cols-2">{services.map((item, i) => <article key={item.title} className="marketing-tool-row relative isolate"><img src={toolImages[i]} alt="" loading="lazy" width={384} height={512} className="h-24 w-24 shrink-0 object-cover sm:h-28 sm:w-28" /><div className="min-w-0 py-3 pr-4 sm:pr-5"><h3 className="display text-[19px] leading-tight">{item.title}</h3><p className="mt-1.5 text-[15px] leading-[1.5]">{item.body}</p><div className="mt-2.5 flex flex-wrap items-center gap-1.5">{(serviceMarks[i] ?? []).map((id) => <span key={id} className="mk-chip" style={{ ["--tint" as string]: brandMarks[id]?.hex }}>{id === "googlesearchconsole" ? <ShoppingCart size={13} color="#FF9900" /> : <Mark id={id} className="h-3.5 w-3.5" />}<span>{id === "googlesearchconsole" ? "Amazon" : brandMarks[id]?.title}</span></span>)}</div></div></article>)}</div><div className="mt-8 text-center"><Action href="#review-form" gold>Schedule Your Free Consultation <ArrowRight size={15} /></Action></div></div></section>
      <section id="reports" className="mk-reports relative scroll-mt-24 overflow-hidden border-y border-rule py-14 lg:py-16"><div className={`${wrap} relative`}><div className="mx-auto max-w-[740px] text-center"><h2 className="display text-[26px] leading-tight sm:text-[32px]">You See <span className="mk-orange">Every Number</span> We See.</h2><p className="mx-auto mt-4 max-w-[62ch] text-[16px] leading-relaxed">Every month you get plain-language reports from each platform we run, so you always know where the money went and what it returned.</p></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{reports.map((r) => <article key={r.title} className="mk-report-card" style={{ ["--tint" as string]: r.tint }}><span className="mk-report-icon"><Mark id={r.mark} className="h-6 w-6" /></span><h3 className="display mt-4 text-[19px] leading-tight">{r.title}</h3><p className="mt-2 text-[15px] leading-[1.6]">{r.body}</p></article>)}</div><div className="mt-8 text-center"><Action href="#review-form" gold>See a Sample Report <ArrowRight size={15} /></Action></div></div></section>
      <section className="marketing-scene relative overflow-hidden border-y border-rule py-14 lg:py-16"><img src={digitalA5} alt="" loading="lazy" className="marketing-scene-image" /><div className="marketing-scene-veil" /><div className={`${wrap} relative`}><div className="mx-auto max-w-[780px] text-center"><h2 className="display text-[28px] leading-tight sm:text-[34px]">You Do Not Need More Ads. <span className="mk-orange">You Need to Understand</span> What Marketing Actually Means.</h2><p className="mt-4 text-[17px] leading-relaxed">Not every book needs ads. Not every author needs a massive following. We help you figure out what you actually need and build from there.</p></div><div className="mt-9 grid gap-5 md:grid-cols-3">{strategy.map((item, i) => <article key={item.title} className="marketing-image-card"><img src={planImages[i]} alt="" loading="lazy" width={480} height={384} className="marketing-card-image" /><div className="marketing-card-copy"><h3 className="display text-[21px] leading-tight">{item.title}</h3><p className="mt-3 text-[16px] leading-[1.6]">{item.body}</p></div></article>)}</div><div className="mt-8 text-center"><Action href="#review-form">Get a Marketing Plan That Fits Your Budget <ArrowRight size={15} /></Action></div></div></section>
      <section id="reviews" className="marketing-scene relative scroll-mt-24 overflow-hidden py-14 lg:py-16"><img src={digitalA6} alt="" loading="lazy" className="marketing-scene-image" /><div className="marketing-scene-veil" /><div className={`${wrap} relative`}><div className="mx-auto flex max-w-[650px] flex-col items-center text-center"><div className="flex gap-2 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5" />)}</div><h2 className="display mt-4 text-[28px] leading-tight text-ink sm:text-[34px]">Why Authors <span className="mk-orange">Trust Us</span> With Their Life's Work.</h2><p className="mt-4 text-[17px] text-ink-soft">Hear from authors who have worked with Collingwood Press across publishing, editing, and distribution.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{authorReviews.map((r) => <article key={r.name} className="marketing-review-card relative isolate flex flex-col border border-rule p-6"><div className="flex items-center justify-between"><div className="flex gap-1 text-gold">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} />)}</div><span className="font-sans text-[12px] uppercase text-ink-mute">{r.date}</span></div><p className="mt-4 flex-1 text-[17px] leading-[1.7] text-ink-soft">“{r.body}”</p><div className="mt-5 border-t border-rule pt-4"><strong className="font-sans text-[13px] text-ink">{r.name}</strong><span className="block text-[14px] italic text-ink-mute">“{r.title}”</span></div></article>)}</div></div></section>
      <section id="faq" className="relative scroll-mt-24 overflow-hidden py-14 lg:py-18"><img src={digitalB2} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-b from-paper/90 via-paper/80 to-paper/90" /><div className={`${wrap} relative max-w-[1080px]`}><div className="mx-auto max-w-[680px] text-center"><h2 className="display text-[28px] text-ink sm:text-[34px]">Frequently Asked <span className="mk-orange">Questions</span></h2><p className="mt-4 text-[17px] text-ink-soft">Clear answers about book marketing, budgets, and next steps.</p></div><div className="mx-auto mt-9 max-w-[820px] border-t border-rule">{faqs.map((item, i) => <div key={item.q} className="border-b border-rule"><Button variant="ghost" className="flex h-auto w-full items-baseline gap-6 rounded-none px-0 py-4 text-left whitespace-normal hover:bg-transparent" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}><span className="display flex-1 text-[17px] leading-[1.35] text-ink">{item.q}</span><span className={`shrink-0 text-[24px] leading-none text-maroon transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span></Button>{openFaq === i && <p className="max-w-[68ch] pb-5 pr-8 text-[16px] leading-[1.75] text-ink-soft">{item.a}</p>}</div>)}</div><div className="mt-8 flex flex-wrap justify-center gap-3"><Action href="#review-form">Get a Free Review</Action><Action href="mailto:info@thecollingwoodpress.com" gold><Mail size={15} /> Contact Our Team</Action></div></div></section>
      <section className="relative isolate overflow-hidden border-t border-rule"><img src={finalImage} alt="" loading="lazy" width={1600} height={912} className="absolute inset-0 -z-20 h-full w-full object-cover object-center" /><div className="absolute inset-0 -z-10 bg-gradient-to-r from-paper/95 via-paper/85 to-paper/65" /><div className={`${wrap} grid items-center gap-6 py-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:py-10`}><div><h2 className="display max-w-[19ch] text-[29px] leading-tight sm:text-[35px]">Ready to Get Your Book in Front of the <span className="mk-orange">Right Readers?</span></h2><p className="mt-4 max-w-[48ch] text-[16px] leading-[1.6]">Tell us about your book. We'll look at your marketing options and help you find the right next step.</p><div className="mt-5"><Action href="tel:+19362233644" gold><Phone size={15} /> Call · +1 (936) 223-3644</Action></div></div><InquiryForm idPrefix="final-marketing" formAnchor="final-review-form" compact /></div></section>
    </main>
    <Footer />
  </div>;
}

function SocialIcon({ label, path, color, href }: { label: string; path: React.ReactNode; color: string; href: string }) {
  return (
    <a href={href} aria-label={label} className="w-11 h-11 flex items-center justify-center rounded-full ring-1 ring-white/20 shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5" style={{ backgroundColor: color }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fff" aria-hidden="true">{path}</svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden text-[#F1E9D6] font-sans">
      <div className="absolute inset-0">
        <img src={footerBg} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(18,15,12,0.93), rgba(14,12,10,0.88) 55%, rgba(9,8,7,0.95))" }} />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="inline-flex items-center rounded-md bg-paper px-3.5 py-2">
            <img src={logoAsset} alt="Collingwood Press" className="h-9 sm:h-11 w-auto object-contain" />
          </div>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#F1E9D6]/75 max-w-[30ch]">
            Your trusted partner in bringing books to life. From manuscript to marketplace.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialIcon label="Facebook" href="#" color="#1877F2" path={<path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.5-1.5H17V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.6V13h2.7v8h3.2z" />} />
            <SocialIcon label="Instagram" href="#" color="#E1306C" path={<path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.9.9 1.4.2.5.4 1.1.4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.9.7-1.4.9-.5.2-1.1.4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.9-.9-1.4-.2-.5-.4-1.1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.9-.7 1.4-.9.5-.2 1.1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.3c-3.3 0-6.5 2.7-6.5 6.5s2.7 6.5 6.5 6.5 6.5-2.7 6.5-6.5-2.9-6.5-6.5-6.5zm0 10.7c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2zm6.8-11c-.9 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5c0-.9-.7-1.5-1.5-1.5z" />} />
            <SocialIcon label="LinkedIn" href="#" color="#0A66C2" path={<path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4V21H3V8.98zM9.5 8.98h3.8v1.65h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.35c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.39-2.05 2.83V21h-4V8.98z" />} />
            <SocialIcon label="X" href="#" color="#1A1A1A" path={<path d="M18.9 3H22l-7.4 8.5L23.2 21h-6.7l-5.3-6.5L5.2 21H2.1l7.9-9.1L1.5 3h6.9l4.8 6L18.9 3zm-2.4 16h1.9L7.6 5H5.5l11 14z" />} />
            <SocialIcon label="TikTok" href="#" color="#1F1F1F" path={<path d="M19.6 6.7a5.4 5.4 0 01-3.1-1V15c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .6 0 .9.1v3a3 3 0 00-.9-.1 3 3 0 103 3V2h3a5.4 5.4 0 003.1 5v-.3z" />} />
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-[15px] text-[#F1E9D6]/80">
            {["Book Marketing", "Listing Optimization", "Paid Advertising", "Author Branding", "Launch Campaigns", "Reviews"].map((l) =>
              <li key={l}><a href="#services" className="transition-colors hover:text-gold">{l}</a></li>
            )}
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold mb-5">Company</h4>
          <ul className="space-y-3 text-[15px] text-[#F1E9D6]/80">
            <li><a href="#reviews" className="transition-colors hover:text-gold">Testimonials</a></li>
            <li><a href="#faq" className="transition-colors hover:text-gold">FAQ</a></li>
            <li><a href="#review-form" className="transition-colors hover:text-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.24em] uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-[15px] text-[#F1E9D6]/80">
            <li><a href="mailto:info@thecollingwoodpress.com" className="transition-colors hover:text-gold">info@thecollingwoodpress.com</a></li>
            <li><a href="tel:+19362233644" className="transition-colors hover:text-gold">+1 (936) 223-3644</a></li>
            <li className="text-[#F1E9D6]/60 pt-1">6777 Camp Bowie Blvd Ste. 125<br />Fort Worth, TX 76116</li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center rounded-md bg-paper px-3 py-2">
              <img src={bbbBadge} alt="BBB Accredited Business" className="h-7 w-auto" loading="lazy" />
            </div>
            <div className="inline-flex items-center rounded-md bg-paper px-3 py-2">
              <img src={ibpaBadge} alt="IBPA Proud Member" className="h-7 w-auto" loading="lazy" />
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#F1E9D6]/25 bg-white/5 px-2.5 py-1.5">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3 h-3" />)}
              </div>
              <div className="text-[11px] text-[#F1E9D6]/90">4.9</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-[#F1E9D6]/15">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12 py-5 flex flex-wrap items-center justify-between gap-4 text-[14px] text-[#F1E9D6]/60">
          <p>© 2026 Collingwood Press (Subsidiary of Hambone Publishers LLC). All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.thecollingwoodpress.com/privacy-policy/" className="transition-colors hover:text-gold">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-gold">Terms &amp; Conditions</a>
            <a href="https://www.thecollingwoodpress.com/privacy-choices/" className="transition-colors hover:text-gold">Your Privacy Choices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
