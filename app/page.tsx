import Image from "next/image";

const services = [
  {
    number: "01",
    title: "SEO",
    description:
      "Build long-term organic visibility and attract customers who are actively searching for your business.",
  },
  {
    number: "02",
    title: "Website Design",
    description:
      "High-converting, fast and modern websites designed to turn visitors into real business opportunities.",
  },
  {
    number: "03",
    title: "Google Ads",
    description:
      "Reach high-intent customers with strategically managed search campaigns focused on profitable growth.",
  },
  {
    number: "04",
    title: "Meta Ads",
    description:
      "Turn attention into leads with targeted Facebook and Instagram campaigns built around your customers.",
  },
  {
    number: "05",
    title: "Social Media",
    description:
      "Build a consistent digital presence that strengthens your brand and keeps your audience engaged.",
  },
  {
    number: "06",
    title: "Growth Strategy",
    description:
      "Connect your website, advertising and marketing into one clear strategy designed around business goals.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, customers, competition and growth goals.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "We create the right digital strategy, website and marketing campaigns.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Everything goes live with tracking, analytics and conversion optimisation.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We continuously analyse the data and improve what is working.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08202C] text-white">
      

      {/* HERO */}
<section className="relative overflow-hidden pt-[120px]">
  {/* Background glow */}
  <div className="pointer-events-none absolute left-[55%] top-24 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2BF97B]/10 blur-[140px]" />

  <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">
    <div className="max-w-5xl">

      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
        <span className="h-2 w-2 rounded-full bg-[#2BF97B]" />
        Digital growth partner for ambitious businesses
      </div>

      {/* Main Heading */}
      <h1 className="max-w-5xl text-[54px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[88px]">

        <span className="text-white">
          We don&apos;t just
        </span>

        <br />

        <span className="text-white/40">
          market businesses.
        </span>

        <br />

        <span className="text-[#2BF97B]">
          We grow them.
        </span>

      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
        Rankskey helps ambitious businesses grow through smart websites,
        SEO, paid advertising and digital strategies that are built around
        measurable results.
      </p>

      {/* Buttons */}
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">

        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-[#2BF97B] px-6 py-3.5 text-sm font-semibold text-[#08202C] transition hover:bg-[#20e96d]"
        >
          Start Growing →
        </a>

        <a
          href="#services"
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white/75 transition hover:border-[#2BF97B]/40 hover:bg-[#2BF97B]/5 hover:text-[#2BF97B]"
        >
          Explore Services
        </a>

      </div>
    </div>

    {/* Hero Stats */}
    <div className="mt-20 grid grid-cols-2 border-t border-white/10 pt-7 md:grid-cols-4">

      <div className="border-white/10 px-0 md:border-r md:px-8 first:md:pl-0">
        <p className="text-2xl font-semibold tracking-tight">
          360°
        </p>
        <p className="mt-1.5 text-xs text-white/35">
          Digital Strategy
        </p>
      </div>

      <div className="border-white/10 px-4 md:border-r md:px-8">
        <p className="text-2xl font-semibold tracking-tight">
          Data
        </p>
        <p className="mt-1.5 text-xs text-white/35">
          Driven Decisions
        </p>
      </div>

      <div className="border-white/10 px-0 pt-6 md:border-r md:px-8 md:pt-0">
        <p className="text-2xl font-semibold tracking-tight">
          ROI
        </p>
        <p className="mt-1.5 text-xs text-white/35">
          Focused Marketing
        </p>
      </div>

      <div className="px-4 pt-6 md:px-8 md:pt-0">
        <p className="text-2xl font-semibold tracking-tight">
          Long
        </p>
        <p className="mt-1.5 text-xs text-white/35">
          Term Growth
        </p>
      </div>

    </div>
  </div>
</section>

      {/* PROBLEM */}
<section className="border-t border-white/10 bg-[#08202C]">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* Left */}
      <div>
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2BF97B]">
          The Problem
        </p>

        <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
          Great businesses don&apos;t always have{" "}
          <span className="text-white/35">
            great digital visibility.
          </span>
        </h2>
      </div>

      {/* Right */}
      <div className="max-w-xl lg:ml-auto">

        <p className="text-lg leading-8 text-white/55">
          You may have a great product, a strong team and happy customers —
          but if your digital presence isn&apos;t working, growth becomes
          harder than it needs to be.
        </p>

        <p className="mt-6 text-lg leading-8 text-white/55">
          Random marketing tactics don&apos;t create predictable growth.
          Rankskey brings your website, SEO, advertising and digital strategy
          together into one clear growth system.
        </p>

        <div className="mt-8 h-px w-full bg-white/10" />

        <div className="mt-7 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#2BF97B]" />

          <span className="text-sm font-medium text-white/70">
            Strategy first. Growth follows.
          </span>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* SERVICES */}
<section
  id="services"
  className="border-t border-white/10 bg-[#08202C]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

    {/* Section Heading */}
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2BF97B]">
        What We Do
      </p>

      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
        Everything you need to{" "}
        <span className="text-white/35">
          grow online.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
        We combine strategy, technology and performance marketing to build
        digital systems that attract the right audience and turn attention
        into growth.
      </p>
    </div>

    {/* Service Cards */}
    <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">

      {/* Card 1 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-10">
        <span className="text-sm font-medium text-[#2BF97B]">
          01
        </span>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Website Design & Development
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          Fast, modern and conversion-focused websites designed to turn
          visitors into customers.
        </p>

        <div className="mt-8 text-xl text-white/30 transition group-hover:text-[#2BF97B]">
          →
        </div>
      </div>

      {/* Card 2 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-10">
        <span className="text-sm font-medium text-[#2BF97B]">
          02
        </span>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Search Engine Optimisation
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          Build sustainable organic visibility and attract people actively
          searching for what you offer.
        </p>

        <div className="mt-8 text-xl text-white/30 transition group-hover:text-[#2BF97B]">
          →
        </div>
      </div>

      {/* Card 3 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-10">
        <span className="text-sm font-medium text-[#2BF97B]">
          03
        </span>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Google Ads
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          Target high-intent customers with data-driven paid search campaigns
          built around measurable returns.
        </p>

        <div className="mt-8 text-xl text-white/30 transition group-hover:text-[#2BF97B]">
          →
        </div>
      </div>

      {/* Card 4 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-10">
        <span className="text-sm font-medium text-[#2BF97B]">
          04
        </span>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Meta Ads
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          Reach the right audiences across Facebook and Instagram with
          creative campaigns designed to generate action.
        </p>

        <div className="mt-8 text-xl text-white/30 transition group-hover:text-[#2BF97B]">
          →
        </div>
      </div>

      {/* Card 5 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-10">
        <span className="text-sm font-medium text-[#2BF97B]">
          05
        </span>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Social Media Marketing
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          Build a consistent social presence that strengthens your brand and
          keeps your business in front of the right people.
        </p>

        <div className="mt-8 text-xl text-white/30 transition group-hover:text-[#2BF97B]">
          →
        </div>
      </div>

      {/* Card 6 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-10">
        <span className="text-sm font-medium text-[#2BF97B]">
          06
        </span>

        <h3 className="mt-12 text-2xl font-semibold text-white">
          Digital Growth Strategy
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          Bring everything together with a clear digital strategy focused on
          your business goals and long-term growth.
        </p>

        <div className="mt-8 text-xl text-white/30 transition group-hover:text-[#2BF97B]">
          →
        </div>
      </div>

    </div>
  </div>
</section>

      {/* PROCESS */}
<section
  id="process"
  className="border-t border-white/10 bg-[#08202C]"
>
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

    {/* Heading */}
    <div className="max-w-3xl">
      <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#2BF97B]">
        Our Process
      </p>

      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
        Simple process.
        <br />
        <span className="text-white/35">
          Serious growth.
        </span>
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-white/50">
        No complicated processes or unnecessary layers. We focus on
        understanding your business, building the right strategy and
        continuously improving what works.
      </p>
    </div>

    {/* Process Steps */}
    <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-4">

      {/* Step 01 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-9">
        <div className="flex items-start justify-between">
          <span className="text-sm font-semibold text-[#2BF97B]">
            01
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-[#2BF97B]">
            →
          </span>
        </div>

        <h3 className="mt-16 text-2xl font-semibold text-white">
          Discover
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          We learn about your business, audience, competitors and goals to
          understand where the biggest opportunities are.
        </p>
      </div>

      {/* Step 02 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-9">
        <div className="flex items-start justify-between">
          <span className="text-sm font-semibold text-[#2BF97B]">
            02
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-[#2BF97B]">
            →
          </span>
        </div>

        <h3 className="mt-16 text-2xl font-semibold text-white">
          Strategise
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          We create a focused digital growth strategy based on your goals,
          market and the channels that matter most.
        </p>
      </div>

      {/* Step 03 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-9">
        <div className="flex items-start justify-between">
          <span className="text-sm font-semibold text-[#2BF97B]">
            03
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-[#2BF97B]">
            →
          </span>
        </div>

        <h3 className="mt-16 text-2xl font-semibold text-white">
          Execute
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          From websites and SEO to Google and Meta Ads, we put the strategy
          into action and build momentum.
        </p>
      </div>

      {/* Step 04 */}
      <div className="group bg-[#08202C] p-8 transition hover:bg-[#0A2936] lg:p-9">
        <div className="flex items-start justify-between">
          <span className="text-sm font-semibold text-[#2BF97B]">
            04
          </span>

          <span className="text-xl text-white/20 transition group-hover:text-[#2BF97B]">
            ↗
          </span>
        </div>

        <h3 className="mt-16 text-2xl font-semibold text-white">
          Optimise
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/45">
          We measure performance, identify what is working and continuously
          optimise your digital growth system.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
<section
  id="contact"
  className="relative overflow-hidden border-t border-white/10 bg-[#08202C]"
>
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2BF97B]/10 blur-[150px]" />

  <div className="relative mx-auto max-w-7xl px-6 py-28 text-center lg:px-8 lg:py-36">

    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#2BF97B]">
      Ready to grow?
    </p>

    <h2 className="mx-auto max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
      Let&apos;s build something{" "}
      <span className="text-[#2BF97B]">
        that grows.
      </span>
    </h2>

    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg sm:leading-8">
      Tell us where you are today, where you want to go, and we&apos;ll help
      you build the digital system to get there.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">

      <a
        href="/contact"
        className="inline-flex items-center justify-center rounded-full bg-[#2BF97B] px-7 py-4 text-sm font-semibold text-[#08202C] transition hover:bg-[#20e96d]"
      >
        Start a Conversation →
      </a>

      <a
        href="/about"
        className="inline-flex items-center justify-center rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-white/70 transition hover:border-[#2BF97B]/40 hover:text-[#2BF97B]"
      >
        Learn About Rankskey
      </a>

    </div>

  </div>
</section>

      {/* FOOTER */}
<footer className="border-t border-white/10 bg-[#061A24]">

  <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Brand */}
      <div className="lg:col-span-2">

        <a href="/" className="inline-flex items-center">
          <Image
            src="/Rankskey-logo-new.jpg"
            alt="Rankskey"
            width={150}
            height={150}
            className="h-12 w-12 object-contain"
          />
        </a>

        <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
          Rankskey is a digital growth agency helping ambitious businesses
          build stronger brands, better websites and predictable digital
          growth.
        </p>

      </div>

      {/* Navigation */}
      <div>
        <p className="text-sm font-semibold text-white">
          Explore
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">

          <a
            href="/"
            className="transition hover:text-[#2BF97B]"
          >
            Home
          </a>

          <a
            href="/#services"
            className="transition hover:text-[#2BF97B]"
          >
            Services
          </a>

          <a
            href="/about"
            className="transition hover:text-[#2BF97B]"
          >
            About
          </a>

          <a
            href="/contact"
            className="transition hover:text-[#2BF97B]"
          >
            Contact
          </a>

        </div>
      </div>

      {/* Services */}
      <div>
        <p className="text-sm font-semibold text-white">
          Services
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm text-white/45">

          <span>Website Development</span>
          <span>SEO</span>
          <span>Google Ads</span>
          <span>Meta Ads</span>
          <span>Social Media</span>

        </div>
      </div>

    </div>

    {/* Bottom */}
    <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © {new Date().getFullYear()} Rankskey. All rights reserved.
      </p>

      <p>
        Digital growth, built with purpose.
      </p>

    </div>

  </div>

</footer>
    </main>
  );
}