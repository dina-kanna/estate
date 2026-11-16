
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Home as HomeIcon,
  KeyRound,
  MapPin,
  ShieldCheck,
  Sparkles,
  Building2,
  Users,
  BedDouble,
  Bath,
  Maximize,
  Star,
} from "lucide-react";

import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  const featuredProperties = properties
    .filter((property) => property.featured)
    .slice(0, 3);

  const categories = [
    {
      title: "Luxury Villas",
      description: "Beautiful homes with premium living spaces",
      count: "120+ Properties",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900",
      type: "Villa",
    },
    {
      title: "Modern Apartments",
      description: "Comfortable homes in prime locations",
      count: "250+ Properties",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
      type: "Apartment",
    },
    {
      title: "Commercial Spaces",
      description: "Perfect spaces for your growing business",
      count: "80+ Properties",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
      type: "Commercial",
    },
  ];

  const stats = [
    { icon: HomeIcon, value: "500+", label: "Properties Listed" },
    { icon: Users, value: "1,200+", label: "Happy Customers" },
    { icon: Building2, value: "50+", label: "Prime Locations" },
    { icon: Star, value: "4.9/5", label: "Customer Rating" },
  ];

  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative min-h-[720px] bg-[#102a25]">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000"
            alt="Luxury modern house"
            className="h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b17] via-[#102a25]/85 to-[#102a25]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102a25] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-full px-5 pb-24 pt-24 lg:px-8 lg:pt-32">

          <div className="max-w-3xl text-white">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#d6b77a]/40 bg-white/10 px-5 py-2.5 text-xs font-semibold tracking-[2px] text-[#e8cb91] backdrop-blur-md">
              <Sparkles size={15} />
              FIND YOUR PLACE IN THE WORLD
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Discover a Home
              <span className="mt-2 block font-light italic text-[#d6b77a]">
                Beyond Ordinary.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Explore exceptional properties, discover inspiring
              neighbourhoods and find a place that truly feels like home.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="group inline-flex items-center gap-3 rounded-full bg-[#d6b77a] px-7 py-4 font-bold text-[#102a25] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                Explore Properties
                <ArrowUpRight
                  size={19}
                  className="transition group-hover:rotate-45"
                />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#102a25]"
              >
                Discover Our Story
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d6b77a]" />
                Verified Listings
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d6b77a]" />
                Trusted Guidance
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#d6b77a]" />
                Premium Locations
              </span>
            </div>

          </div>

          {/* Floating review card */}
          <div className="absolute bottom-12 right-8 hidden rounded-2xl border border-white/20 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl xl:block">
            <div className="flex items-center gap-1 text-[#e5bd70]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} fill="currentColor" />
              ))}
            </div>
            <p className="mt-2 text-2xl font-bold">4.9/5</p>
            <p className="mt-1 text-xs text-white/70">
              Trusted by happy homeowners
            </p>
          </div>

        </div>

        {/* SEARCH PANEL */}
        <div className="relative z-10 mx-auto -mb-20 max-w-full px-5 lg:px-8">
          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-[3px] text-[#b18c4b]">
                  PROPERTY SEARCH
                </p>
                <h2 className="mt-1 text-xl font-bold text-[#102a25] sm:text-2xl">
                  Find your perfect match
                </h2>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-[#f5f1e8] text-[#b18c4b] sm:flex">
                <KeyRound size={23} />
              </div>
            </div>

            <SearchBar />
          </div>
        </div>

      </section>

      {/* STATISTICS */}
      <section className="bg-[#f8f7f3] pb-16 pt-36">
        <div className="mx-auto grid max-w-full grid-cols-2 gap-8 px-5 md:grid-cols-4 lg:px-8">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#b18c4b] shadow-sm transition duration-300 group-hover:-translate-y-2 group-hover:bg-[#102a25] group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mt-4 text-3xl font-extrabold text-[#102a25]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            );
          })}

        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="mx-auto max-w-full px-5 py-24 lg:px-8">

        <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold tracking-[4px] text-[#b18c4b]">
              HANDPICKED FOR YOU
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102a25] sm:text-4xl lg:text-5xl">
              Featured Properties
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-500">
              Discover a collection of beautiful homes and exceptional
              spaces selected for quality, comfort and style.
            </p>
          </div>

          <Link
            to="/properties"
            className="group flex items-center gap-2 font-bold text-[#102a25] transition hover:text-[#b18c4b]"
          >
            View All Properties
            <ArrowRight
              size={19}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        {featuredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-[#f8f7f3] p-12 text-center">
            <HomeIcon
              size={45}
              className="mx-auto text-[#b18c4b]"
            />
            <h3 className="mt-5 text-xl font-bold text-[#102a25]">
              Featured properties coming soon
            </h3>
            <p className="mt-2 text-gray-500">
              Explore our complete property collection.
            </p>
            <Link
              to="/properties"
              className="mt-6 inline-flex rounded-full bg-[#102a25] px-7 py-3 font-bold text-white hover:bg-[#b18c4b]"
            >
              Browse Properties
            </Link>
          </div>
        )}

      </section>

      {/* PROPERTY CATEGORIES */}
      <section className="bg-[#f8f7f3] py-24">

        <div className="mx-auto max-w-full px-5 lg:px-8">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-xs font-bold tracking-[4px] text-[#b18c4b]">
              EXPLORE BY CATEGORY
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102a25] sm:text-5xl">
              Find the Space That Fits You
            </h2>

            <p className="mt-4 leading-7 text-gray-500">
              From stylish apartments to spacious villas, explore
              properties that match your lifestyle.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category) => (
              <Link
                key={category.title}
                to={`/properties?type=${category.type}`}
                className="group relative h-[390px] overflow-hidden rounded-3xl"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071b17] via-[#071b17]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                  <span className="text-xs font-bold tracking-widest text-[#e8cb91]">
                    {category.count}
                  </span>

                  <h3 className="mt-3 text-2xl font-extrabold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/75">
                    {category.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 font-semibold text-[#e8cb91]">
                    Explore Collection
                    <ArrowUpRight
                      size={18}
                      className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto grid max-w-full items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8">

        <div className="relative">
          <div className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-[#d6b77a]/20 blur-2xl" />

       
<img
  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
  alt="Elegant modern home interior"
  className="relative h-[430px] w-full rounded-3xl object-cover shadow-xl sm:h-[520px]"
  loading="lazy"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85";
  }}
/>


          <div className="absolute -bottom-7 right-5 rounded-2xl bg-[#102a25] p-6 text-white shadow-xl sm:right-[-20px]">
            <p className="text-3xl font-extrabold text-[#d6b77a]">
              10+
            </p>
            <p className="mt-1 text-sm text-white/80">
              Years of Experience
            </p>
          </div>
        </div>

        <div className="pt-6 lg:pl-8">

          <p className="text-xs font-bold tracking-[4px] text-[#b18c4b]">
            ABOUT ESTATE HAVEN
          </p>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-[#102a25] sm:text-5xl">
            More Than Just a Property.
            <span className="block font-light italic text-[#b18c4b]">
              It's Your Future.
            </span>
          </h2>

          <p className="mt-7 leading-8 text-gray-500">
            At Estate Haven, we believe finding a home should be
            an exciting experience. We bring together beautiful
            properties, helpful guidance and a simple way to
            discover your next place.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f1e8] text-[#b18c4b]">
                <ShieldCheck size={23} />
              </div>
              <div>
                <h3 className="font-bold text-[#102a25]">
                  Trusted Property Listings
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Explore carefully presented property options.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f1e8] text-[#b18c4b]">
                <Users size={23} />
              </div>
              <div>
                <h3 className="font-bold text-[#102a25]">
                  Personalised Assistance
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Get guidance throughout your property journey.
                </p>
              </div>
            </div>

          </div>

          <Link
            to="/about"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#102a25] px-8 py-4 font-bold text-white transition hover:bg-[#b18c4b]"
          >
            More About Us
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* SELL PROPERTY CTA */}
      <section className="px-5 pb-24 lg:px-8">

        <div className="relative mx-auto max-w-full overflow-hidden rounded-[35px] bg-[#102a25] px-7 py-16 text-center text-white sm:px-14 lg:py-20">

          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[50px] border-white/5" />
          <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border-[50px] border-[#d6b77a]/10" />

          <div className="relative mx-auto max-w-3xl">

            <p className="text-xs font-bold tracking-[4px] text-[#d6b77a]">
              READY FOR YOUR NEXT MOVE?
            </p>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">
              Have a Property to Sell?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-white/65">
              Let us help you showcase your property and connect
              with people searching for their perfect space.
            </p>

            <Link
              to="/sell"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#d6b77a] px-9 py-4 font-bold text-[#102a25] transition hover:-translate-y-1 hover:bg-white"
            >
              List Your Property
              <ArrowUpRight size={19} />
            </Link>

          </div>
        </div>

      </section>

    </main>
  );
}
