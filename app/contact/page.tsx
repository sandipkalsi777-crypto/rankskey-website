"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "85b74941-5ce1-455f-b067-9fb4c5680834"
    );

    formData.append("subject", "New Rankskey Website Enquiry");
    formData.append("from_name", "Rankskey Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#08202C] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden pt-40">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#2BF97B]/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="max-w-4xl">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#2BF97B]" />
              Let's Work Together
            </div>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Let's build
              <br />
              something
              <br />
              <span className="text-[#2BF97B]">that grows.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Tell us about your business, your goals and where you want to
              go. We'll help you figure out the right digital strategy.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT AREA */}
      <section className="border-t border-white/10 bg-white/[0.02]">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">

          {/* LEFT */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2BF97B]">
              Get In Touch
            </p>

            <h2 className="text-4xl font-semibold tracking-tight">
              Start a conversation.
            </h2>

            <p className="mt-6 max-w-md leading-7 text-white/50">
              Whether you need a new website, better search visibility,
              advertising campaigns or a complete digital strategy, we'd love
              to hear about your project.
            </p>

            <div className="mt-10 space-y-6">

              {/* EMAIL */}
              <div>
                <p className="text-sm text-white/40">Email</p>

                <a
                  href="mailto:officialrankskey@gmail.com"
                  className="mt-1 block text-lg font-medium transition hover:text-[#2BF97B]"
                >
                  officialrankskey@gmail.com
                </a>
              </div>

              {/* RESPONSE TIME */}
              <div>
                <p className="text-sm text-white/40">Response Time</p>

                <p className="mt-1 text-lg font-medium">
                  Usually within 1 business day
                </p>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-white/10 bg-[#0A2936] p-7 sm:p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Honeypot spam protection */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
              />

              {/* NAME + EMAIL */}
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#08202C] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2BF97B]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/60">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-[#08202C] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2BF97B]"
                  />
                </div>

              </div>

              {/* BUSINESS NAME */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Business Name
                </label>

                <input
                  type="text"
                  name="business_name"
                  placeholder="Your business name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#08202C] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2BF97B]"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  What do you need help with?
                </label>

                <select
                  name="service"
                  defaultValue=""
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#08202C] px-4 py-3.5 text-white outline-none transition focus:border-[#2BF97B]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Website Design & Development">
                    Website Design & Development
                  </option>

                  <option value="SEO">
                    SEO
                  </option>

                  <option value="Google Ads">
                    Google Ads
                  </option>

                  <option value="Meta Ads">
                    Meta Ads
                  </option>

                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>

                  <option value="Digital Growth Strategy">
                    Digital Growth Strategy
                  </option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm text-white/60">
                  Tell us about your project
                </label>

                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us about your business, goals and what you're looking to achieve..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#08202C] px-4 py-3.5 text-white outline-none transition placeholder:text-white/25 focus:border-[#2BF97B]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-[#2BF97B] px-6 py-4 font-semibold text-[#08202C] transition hover:bg-[#20e96d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Enquiry →"}
              </button>

              {/* SUCCESS */}
              {status === "success" && (
                <div className="rounded-xl border border-[#2BF97B]/20 bg-[#2BF97B]/10 px-4 py-3 text-center text-sm text-[#2BF97B]">
                  Thanks! Your enquiry has been sent successfully.
                  We'll get back to you shortly.
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-sm text-red-300">
                  Something went wrong. Please try again or email us
                  directly at officialrankskey@gmail.com.
                </div>
              )}

              <p className="text-center text-xs text-white/30">
                We'll never share your information with third parties.
              </p>

            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">

          <p className="text-sm uppercase tracking-[0.2em] text-white/30">
            Rankskey
          </p>

          <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">
            Your next stage of growth
            <span className="text-[#2BF97B]"> starts here.</span>
          </h2>

        </div>

      </section>

    </main>
  );
}