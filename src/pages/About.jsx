
import { Link } from "react-router-dom";

export default function About() {
  const features = [
    {
      icon: "⌂",
      number: "01",
      title: "Customer First",
      description:
        "We listen to your needs and help you discover a property that perfectly matches your lifestyle and budget.",
    },
    {
      icon: "✓",
      number: "02",
      title: "Trusted Properties",
      description:
        "Explore carefully presented property listings with clear information and professional assistance.",
    },
    {
      icon: "✧",
      number: "03",
      title: "Expert Guidance",
      description:
        "Our team supports you throughout your buying, selling and renting journey.",
    },
  ];

  const stats = [
    { number: "500+", label: "Properties Listed" },
    { number: "350+", label: "Happy Customers" },
    { number: "10+", label: "Locations Covered" },
    { number: "24/7", label: "Customer Support" },
  ];

  const services = [
    {
      icon: "🏡",
      title: "Buy a Property",
      description:
        "Discover beautiful homes and find the perfect place for your future.",
      link: "/properties?purpose=Buy",
    },
    {
      icon: "🔑",
      title: "Rent a Property",
      description:
        "Explore comfortable rental homes and spaces that suit your needs.",
      link: "/properties?purpose=Rent",
    },
    {
      icon: "🏢",
      title: "Sell a Property",
      description:
        "Present your property to potential buyers with professional support.",
      link: "/sell",
    },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#102a25]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#c5a36a]/10 blur-3xl" />

        <div className="relative mx-auto grid w-full max-w-full items-center gap-16 px-6 py-24 lg:grid-cols-2">

          {/* HERO CONTENT */}
          <div className="text-white">

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#c5a36a]" />
              <span className="text-xs font-bold tracking-[3px] text-[#c5a36a]">
                ABOUT ESTATE HAVEN
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.15] md:text-6xl lg:text-7xl">
              More Than
              <span className="block text-[#c5a36a]">
                Just A Home.
              </span>
              A Better Life.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/65 md:text-lg">
              We believe every great journey begins with the right place.
              Discover properties that inspire your lifestyle and bring
              your dreams closer to reality.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/properties"
                className="rounded-full bg-[#c5a36a] px-8 py-4 font-bold text-[#102a25] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Properties →
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition duration-300 hover:border-[#c5a36a] hover:bg-white/10"
              >
                Contact Us
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap gap-8">

              <div>
                <p className="text-2xl font-extrabold text-[#c5a36a]">
                  Quality
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Property Selection
                </p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <p className="text-2xl font-extrabold text-[#c5a36a]">
                  Reliable
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Property Guidance
                </p>
              </div>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-3xl border border-[#c5a36a]/40" />

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85"
              alt="Modern luxury home interior"
              className="relative h-[430px] w-full rounded-[35px] object-cover shadow-2xl md:h-[500px]"
            />

            <div className="absolute -bottom-7 -left-5 rounded-2xl bg-white p-6 shadow-2xl md:-left-10">
              <p className="text-3xl font-extrabold text-[#102a25]">
                Your Dream
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Our Commitment
              </p>
              <div className="mt-3 h-1.5 w-20 rounded-full bg-[#c5a36a]" />
            </div>

          </div>

        </div>
      </section>

      {/* STATISTICS */}
      <section className="relative z-10 mx-auto max-w-full px-6 py-14">

        <div className="grid grid-cols-2 gap-6 rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:grid-cols-4 md:p-10">

          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <h2 className="text-3xl font-extrabold text-[#102a25] md:text-4xl">
                {item.number}
              </h2>
              <p className="mt-2 text-sm font-medium text-gray-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto grid max-w-full items-center gap-16 px-6 py-24 lg:grid-cols-2">

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85"
            alt="Beautiful modern house interior"
            loading="lazy"
            className="h-[350px] w-full rounded-3xl object-cover shadow-lg md:h-[470px]"
          />

          <div className="absolute -bottom-8 right-5 max-w-[230px] rounded-2xl bg-[#102a25] p-6 text-white shadow-xl md:-right-8">
            <p className="text-3xl font-extrabold text-[#c5a36a]">
              ESTATE
            </p>
            <p className="mt-1 text-sm text-white/70">
              Helping you find a place to call home.
            </p>
          </div>

        </div>

        <div className="pt-5 lg:pt-0">

          <p className="text-xs font-extrabold tracking-[4px] text-[#b18b4e]">
            OUR STORY
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102a25] md:text-5xl">
            Creating Spaces.
            <span className="block text-[#b18b4e]">
              Building Dreams.
            </span>
          </h2>

          <p className="mt-7 leading-8 text-gray-500">
            Estate Haven is a real estate platform dedicated to helping
            people discover residential and commercial properties.
          </p>

          <p className="mt-5 leading-8 text-gray-500">
            Whether you are searching for your first home, looking for
            a rental property or planning to sell, we aim to make your
            property journey simple, convenient and enjoyable.
          </p>

          <div className="mt-8 space-y-5">

            {[
              "Simple and convenient property search",
              "Professional customer assistance",
              "Residential and commercial listings",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7f7f3] text-xl font-bold text-[#b18b4e]">
                  ✓
                </span>
                <span className="font-semibold text-[#102a25]">
                  {item}
                </span>
              </div>
            ))}

          </div>

          <Link
            to="/properties"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#102a25] px-8 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b18b4e]"
          >
            Discover Properties →
          </Link>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#f7f7f3] py-24">

        <div className="mx-auto max-w-full px-6">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-extrabold tracking-[4px] text-[#b18b4e]">
              WHY ESTATE HAVEN
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#102a25] md:text-5xl">
              Why Choose Us?
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              We combine personal attention, reliable information and
              professional guidance to make your property experience better.
            </p>

          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-3xl border border-gray-100 bg-white p-9 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f7f3] text-4xl text-[#b18b4e] transition duration-300 group-hover:bg-[#102a25] group-hover:text-[#c5a36a]">
                    {feature.icon}
                  </div>

                  <span className="text-4xl font-extrabold text-gray-100">
                    {feature.number}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#102a25] transition group-hover:text-[#b18b4e]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-[#c5a36a] transition-all duration-300 group-hover:w-24" />

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="mx-auto max-w-full px-6 py-24">

        <div className="flex flex-wrap items-end justify-between gap-6">

          <div>
            <p className="text-xs font-extrabold tracking-[4px] text-[#b18b4e]">
              WHAT WE DO
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#102a25]">
              Our Services
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-500">
              Everything you need to make your next property move with confidence.
            </p>
          </div>

          <Link
            to="/contact"
            className="font-bold text-[#b18b4e] transition hover:text-[#102a25]"
          >
            Talk to Our Team →
          </Link>

        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f7f7f3] text-3xl transition group-hover:bg-[#102a25]">
                {service.icon}
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#102a25]">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {service.description}
              </p>

              <div className="mt-7 font-bold text-[#b18b4e] transition group-hover:translate-x-2">
                Explore Service →
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 pb-24">

        <div className="relative mx-auto max-w-full overflow-hidden rounded-[35px] bg-[#102a25] px-7 py-20 text-center text-white md:px-20">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#c5a36a]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="relative">

            <p className="text-xs font-bold tracking-[4px] text-[#c5a36a]">
              YOUR NEXT CHAPTER STARTS HERE
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
              Let's Find Your Perfect Property Together
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/60">
              Your dream home could be just one step away.
              Let us help you find the right property.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/properties"
                className="rounded-full bg-[#c5a36a] px-8 py-4 font-bold text-[#102a25] transition hover:bg-white"
              >
                Browse Properties →
              </Link>

              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Get In Touch
              </Link>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
