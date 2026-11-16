
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Camera,
  Users,
  BadgeCheck,
  Handshake,
  ClipboardCheck,
  Home,
  ShieldCheck,
  Sparkles,
  Building2,
  ChartNoAxesCombined,
  Phone,
} from "lucide-react";

export default function Sell() {
  const benefits = [
    {
      icon: TrendingUp,
      number: "01",
      title: "Expert Property Valuation",
      description:
        "Get professional guidance to understand your property's market value and make informed selling decisions.",
    },
    {
      icon: Camera,
      number: "02",
      title: "Premium Property Marketing",
      description:
        "Present your property beautifully with quality photography, compelling descriptions and professional listings.",
    },
    {
      icon: Users,
      number: "03",
      title: "Qualified Buyers",
      description:
        "Connect with interested buyers and receive assistance throughout your property-selling journey.",
    },
    {
      icon: ShieldCheck,
      number: "04",
      title: "Trusted Guidance",
      description:
        "Get support with property enquiries, documentation guidance and important selling decisions.",
    },
  ];

  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Tell Us About Your Property",
      description:
        "Contact our team and share your property location, type and selling expectations.",
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Get a Property Evaluation",
      description:
        "Our team will help you understand your property's potential market value.",
    },
    {
      icon: Building2,
      number: "03",
      title: "Showcase Your Property",
      description:
        "We help present your property to potential buyers through professional marketing.",
    },
    {
      icon: Handshake,
      number: "04",
      title: "Connect and Sell",
      description:
        "Connect with interested buyers and receive assistance as you move towards a sale.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f3]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#102a25]">

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#c5a36a]/20" />
        <div className="absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-[#c5a36a]/20" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#c5a36a]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-full items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-2">

          {/* HERO TEXT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#c5a36a]/30 bg-white/5 px-4 py-2 text-xs font-bold tracking-[2px] text-[#c5a36a]">
              <Sparkles size={15} />
              YOUR PROPERTY, OUR PRIORITY
            </div>

            <h1 className="mt-7 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              Your Property
              <br />
              Deserves a
              <br />
              <span className="text-[#c5a36a]">
                Better Sale.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 md:text-lg">
              Selling a property is a big decision. Let Estate Haven
              help you showcase your property, connect with potential
              buyers and move forward with confidence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#c5a36a] px-8 py-4 font-bold text-[#102a25] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Get Property Valuation
                <ArrowUpRight
                  size={19}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <a
                href="#selling-process"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#c5a36a] hover:text-[#c5a36a]"
              >
                Explore Our Process
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-7">
              <div className="flex items-center gap-3">
                <BadgeCheck className="text-[#c5a36a]" size={22} />
                <span className="text-sm text-white/70">
                  Professional Guidance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#c5a36a]" size={22} />
                <span className="text-sm text-white/70">
                  Trusted Support
                </span>
              </div>
            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -right-5 -top-5 h-full w-full rounded-[35px] border border-[#c5a36a]/30" />

            <div className="relative overflow-hidden rounded-[30px] bg-[#1b3b33] p-3 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
                alt="Beautiful luxury house with landscaped garden"
                className="h-[350px] w-full rounded-[24px] object-cover sm:h-[460px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/20 bg-[#102a25]/90 p-5 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-[#c5a36a]">
                      THE ESTATE HAVEN PROMISE
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      Sell With Confidence
                    </h3>

                    <p className="mt-1 text-sm text-white/50">
                      Expert support at every step
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c5a36a] text-[#102a25]">
                    <Home size={23} />
                  </div>
                </div>
              </div>

            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf1ec] text-[#102a25]">
                  <ChartNoAxesCombined size={22} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#102a25]">
                    Smart Marketing
                  </p>
                  <p className="text-xs text-gray-400">
                    Showcase your property
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-full px-6 py-20 md:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-xs font-extrabold tracking-[4px] text-[#c5a36a]">
              A BETTER WAY TO SELL
            </p>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-[#102a25] md:text-5xl">
              More Than Just
              <br />
              A Property Listing.
            </h2>

            <p className="mt-6 leading-8 text-gray-500">
              Every property has a story. At Estate Haven, we believe
              selling your property should be a well-guided and
              straightforward experience.
            </p>

            <p className="mt-4 leading-8 text-gray-500">
              From understanding your property's value to connecting
              with interested buyers, our team is here to help you
              through the important steps.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 font-bold text-[#102a25] transition hover:text-[#c5a36a]"
            >
              Talk to Our Team
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div className="space-y-4 pt-10">
              <div className="flex h-48 items-center justify-center rounded-3xl bg-[#102a25] p-6 text-center">
                <div>
                  <Home size={35} className="mx-auto text-[#c5a36a]" />
                  <h3 className="mt-4 font-bold text-white">
                    Property Expertise
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    Guidance for your property journey
                  </p>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80"
                alt="Modern luxury home interior"
                className="h-56 w-full rounded-3xl object-cover"
              />
            </div>

            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80"
                alt="Elegant modern living room"
                className="h-56 w-full rounded-3xl object-cover"
              />

              <div className="flex h-48 items-center justify-center rounded-3xl bg-[#c5a36a] p-6 text-center">
                <div>
                  <Handshake size={35} className="mx-auto text-[#102a25]" />
                  <h3 className="mt-4 font-bold text-[#102a25]">
                    Personal Support
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#102a25]/65">
                    Assistance throughout the process
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-white py-20 md:py-24">

        <div className="mx-auto max-w-full px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold tracking-[4px] text-[#c5a36a]">
              WHY ESTATE HAVEN
            </p>

            <h2 className="mt-5 font-display text-3xl font-extrabold text-[#102a25] md:text-5xl">
              A Smarter Way to
              <span className="block text-[#c5a36a]">
                Sell Your Property
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              Get the right support, professional guidance and
              property marketing services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-[#fafaf8] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#c5a36a]/40 hover:shadow-xl"
                >
                  <span className="absolute right-6 top-5 text-4xl font-black text-[#102a25]/5">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102a25] text-[#c5a36a] transition group-hover:bg-[#c5a36a] group-hover:text-[#102a25]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-lg font-extrabold text-[#102a25]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-[#c5a36a] transition-all duration-300 group-hover:w-full" />
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* SELLING PROCESS */}
      <section
        id="selling-process"
        className="relative overflow-hidden bg-[#102a25] py-20 md:py-24"
      >

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#c5a36a]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-full px-6">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold tracking-[4px] text-[#c5a36a]">
              FOUR SIMPLE STEPS
            </p>

            <h2 className="mt-5 font-display text-3xl font-extrabold text-white md:text-5xl">
              How Selling Works
            </h2>

            <p className="mt-5 leading-8 text-white/50">
              A simple, guided journey from your first enquiry
              to connecting with the right buyer.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">

                  {index !== steps.length - 1 && (
                    <div className="absolute left-16 top-8 hidden h-px w-[calc(100%-35px)] bg-[#c5a36a]/30 lg:block" />
                  )}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c5a36a]/40 bg-[#1c3a32] text-[#c5a36a]">
                    <Icon size={27} />
                  </div>

                  <p className="mt-7 text-xs font-bold tracking-[3px] text-[#c5a36a]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="mx-auto max-w-full px-6 py-20 md:py-24">

        <div className="grid items-center gap-10 rounded-[32px] bg-[#eaf1ec] p-8 md:p-12 lg:grid-cols-2">

          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102a25] text-[#c5a36a]">
              <CheckCircle2 size={28} />
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-[#102a25] md:text-4xl">
              Your Property.
              <br />
              Your Decision.
              <br />
              Our Support.
            </h2>

            <p className="mt-5 max-w-lg leading-8 text-gray-500">
              Whether you're selling an apartment, villa or commercial
              property, our team can help you explore the next steps.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#102a25] px-8 py-4 font-bold text-white transition hover:bg-[#c5a36a] hover:text-[#102a25]"
            >
              Speak With Our Team
              <ArrowRight size={19} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85"
              alt="Beautiful contemporary residential property"
              className="h-[350px] w-full object-cover md:h-[420px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102a25]/60 to-transparent" />

            <div className="absolute bottom-7 left-7 right-7">
              <p className="text-xs font-bold tracking-[3px] text-[#c5a36a]">
                ESTATE HAVEN
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white">
                A Better Property Experience
              </h3>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-20 md:pb-24">

        <div className="relative mx-auto max-w-full overflow-hidden rounded-[32px] bg-[#102a25] px-7 py-16 text-center md:px-16 md:py-20">

          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-[#c5a36a]/20" />
          <div className="absolute -left-20 -bottom-28 h-72 w-72 rounded-full border border-[#c5a36a]/20" />

          <div className="relative">
            <p className="text-xs font-bold tracking-[4px] text-[#c5a36a]">
              LET'S GET STARTED
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Ready to Make Your
              <span className="text-[#c5a36a]">
                {" "}Next Move?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-white/55">
              Tell us about your property. Our team is ready to help
              you take the next step towards a successful sale.
            </p>

            <Link
              to="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#c5a36a] px-9 py-4 font-extrabold text-[#102a25] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Start Selling Today
              <ArrowUpRight
                size={20}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
