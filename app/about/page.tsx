export const metadata = {
  title: "About Us",
  description:
    "Learn about Rankskey, a digital growth agency helping ambitious businesses build stronger digital brands and generate measurable growth.",
};

const values = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "We don't believe in random marketing. Every decision starts with understanding your business, your customers and your goals.",
  },
  {
    number: "02",
    title: "Built to Perform",
    description:
      "From websites to advertising campaigns, everything we create is designed with performance, conversion and measurable outcomes in mind.",
  },
  {
    number: "03",
    title: "Long-Term Thinking",
    description:
      "We focus on building digital assets and strategies that continue creating value instead of chasing short-term trends.",
  },
  {
    number: "04",
    title: "Always Improving",
    description:
      "Digital marketing never stands still. We analyse, test and improve continuously so your business can keep moving forward.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#08202C] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden pt-40">
        {/* Background glow */}
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2BF97B]/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
          <div className="max-w-5xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#2BF97B]" />
              About Rankskey
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              We believe
              <br />
              <span className="text-white/40">
                digital should
              </span>
              <br />
              <span className="text-[#2BF97B]">drive growth.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Rankskey is a digital growth agency built to help ambitious
              businesses establish a stronger online presence, attract the
              right customers and turn digital activity into real business
              results.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2BF97B]">
              Who We Are
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              More than a digital marketing agency.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/55">
            <p>
              Rankskey was built around a simple idea: businesses don't need
              more marketing noise. They need a clear digital strategy that
              connects every part of their online presence.
            </p>

            <p>
              Your website, search visibility, advertising and social presence
              should work together — not as separate activities, but as one
              system focused on growth.
            </p>

            <p>
              That's the approach we bring to every project. We combine
              strategy, creativity and technology to build digital experiences
              that are designed to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2BF97B]">
              What We Do
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              We turn digital presence into business opportunity.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#0A2936] p-7 transition hover:-translate-y-1 hover:border-[#2BF97B]/30">
              <div className="mb-8 text-3xl text-[#2BF97B]">01</div>

              <h3 className="text-xl font-semibold">
                Build
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                We create modern websites and digital experiences that give
                businesses a strong foundation online.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0A2936] p-7 transition hover:-translate-y-1 hover:border-[#2BF97B]/30">
              <div className="mb-8 text-3xl text-[#2BF97B]">02</div>

              <h3 className="text-xl font-semibold">
                Attract
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                We use SEO, Google Ads, Meta Ads and content strategies to put
                your business in front of the right audience.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0A2936] p-7 transition hover:-translate-y-1 hover:border-[#2BF97B]/30">
              <div className="mb-8 text-3xl text-[#2BF97B]">03</div>

              <h3 className="text-xl font-semibold">
                Convert
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                We focus on turning website visitors and marketing traffic into
                genuine enquiries and customers.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0A2936] p-7 transition hover:-translate-y-1 hover:border-[#2BF97B]/30">
              <div className="mb-8 text-3xl text-[#2BF97B]">04</div>

              <h3 className="text-xl font-semibold">
                Grow
              </h3>

              <p className="mt-3 leading-7 text-white/45">
                We measure performance, identify opportunities and continuously
                improve the strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2BF97B]">
              Our Approach
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              How we think about growth.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.number}
                className="group bg-[#0A2936] p-8 transition hover:bg-[#0D3443] sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-[#2BF97B]">
                    {value.number}
                  </span>

                  <span className="text-xl text-white/20 transition group-hover:text-[#2BF97B]">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-white/45">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#2BF97B] px-8 py-16 text-[#08202C] sm:px-16 sm:py-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />

          <div className="relative max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#08202C]/70">
              Our Mission
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Help ambitious businesses turn their digital presence into a
              competitive advantage.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#08202C]/75">
              We want businesses to have access to digital strategies that are
              clear, practical and built around measurable growth — without the
              unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2BF97B]">
                Work With Us
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Ready to build something that grows?
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex w-fit rounded-full bg-[#2BF97B] px-7 py-4 font-semibold text-[#08202C] transition hover:bg-[#20e96d]"
            >
              Let's Talk →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}