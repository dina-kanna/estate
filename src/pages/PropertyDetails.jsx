
import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Check,
  Phone,
  Mail,
  Heart,
  Share2,
  Home,
  ShieldCheck,
  Sparkles,
  Building2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { properties } from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find(
    (item) => String(item.id) === String(id)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!property) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#f7f7f3] px-6 text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#c5a36a]/15 text-[#c5a36a]">
            <Home size={42} />
          </div>

          <h1 className="text-3xl font-extrabold text-[#102a25]">
            Property Not Found
          </h1>

          <p className="mt-3 max-w-md text-gray-500">
            Sorry, we couldn't find the property you are looking for.
          </p>

          <Link
            to="/properties"
            className="mt-7 flex items-center gap-2 rounded-xl bg-[#102a25] px-7 py-3.5 font-bold text-white transition hover:bg-[#c5a36a] hover:text-[#102a25]"
          >
            <ArrowLeft size={18} />
            Back to Properties
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const gallery =
    property.gallery?.length > 0
      ? property.gallery
      : property.image
        ? [property.image]
        : [];

  const currentImage = gallery[activeImage];

  const nextImage = () => {
    setActiveImage((previous) =>
      (previous + 1) % gallery.length
    );
  };

  const previousImage = () => {
    setActiveImage((previous) =>
      (previous - 1 + gallery.length) % gallery.length
    );
  };

  const agentPhone = String(property.phone || "").replace(
    /[^+\d]/g,
    ""
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f7f7f3]">

        {/* TOP BANNER */}
        <section className="relative overflow-hidden bg-[#102a25] py-12 md:py-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#c5a36a]/20" />
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-[#c5a36a]/20" />

          <div className="relative mx-auto max-w-full px-6">
            <Link
              to="/properties"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition hover:text-[#c5a36a]"
            >
              <ArrowLeft size={17} />
              Back to Properties
            </Link>

            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <div className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[3px] text-[#c5a36a]">
                  <Sparkles size={15} />
                  ESTATE HAVEN EXCLUSIVE
                </div>

                <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-white md:text-5xl">
                  {property.title}
                </h1>

                <p className="mt-4 flex items-center gap-2 text-sm text-white/60 md:text-base">
                  <MapPin size={18} className="text-[#c5a36a]" />
                  {property.location}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsFavorite(!isFavorite)}
                  aria-label={
                    isFavorite
                      ? "Remove from favorites"
                      : "Add to favorites"
                  }
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition ${
                    isFavorite
                      ? "border-[#c5a36a] bg-[#c5a36a] text-[#102a25]"
                      : "border-white/20 text-white hover:border-[#c5a36a] hover:text-[#c5a36a]"
                  }`}
                >
                  <Heart
                    size={20}
                    fill={isFavorite ? "currentColor" : "none"}
                  />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: property.title,
                        url: window.location.href,
                      }).catch(() => {});
                    } else if (navigator.clipboard) {
                      navigator.clipboard.writeText(
                        window.location.href
                      );
                    }
                  }}
                  aria-label="Share property"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#c5a36a] hover:text-[#c5a36a]"
                >
                  <Share2 size={19} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <div className="mx-auto max-w-full px-5 py-10 md:px-6 md:py-14">

          {/* IMAGE GALLERY */}
          <section className="overflow-hidden rounded-3xl bg-white p-3 shadow-[0_15px_50px_rgba(16,42,37,0.08)]">

            {gallery.length > 0 ? (
              <>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={currentImage}
                    alt={property.title}
                    className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[560px]"
                  />

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full bg-[#c5a36a] px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-[#102a25] shadow-lg">
                      {property.tag || "Featured Property"}
                    </span>
                  </div>

                  {gallery.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#102a25] shadow-lg transition hover:bg-[#c5a36a]"
                      >
                        <ArrowLeft size={20} />
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#102a25] shadow-lg transition hover:bg-[#c5a36a]"
                      >
                        <ArrowRight size={20} />
                      </button>

                      <div className="absolute bottom-5 right-5 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white">
                        {activeImage + 1} / {gallery.length}
                      </div>
                    </>
                  )}
                </div>

                {gallery.length > 1 && (
                  <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {gallery.map((image, index) => (
                      <button
                        key={`${image}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(index)}
                        aria-label={`View image ${index + 1}`}
                        aria-pressed={activeImage === index}
                        className={`overflow-hidden rounded-xl transition ${
                          activeImage === index
                            ? "ring-4 ring-[#c5a36a]"
                            : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${property.title} view ${index + 1}`}
                          className="h-20 w-full object-cover sm:h-28"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex h-72 items-center justify-center rounded-2xl bg-[#f1f2ed] text-[#102a25]">
                <Building2 size={48} />
                <span className="ml-3">No images available</span>
              </div>
            )}

          </section>

          {/* DETAILS AND ENQUIRY */}
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_360px]">

            {/* LEFT CONTENT */}
            <section>

              {/* PRICE CARD */}
              <div className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <div>
                  <p className="text-xs font-bold tracking-[2px] text-[#c5a36a]">
                    PROPERTY PRICE
                  </p>

                  <h2 className="mt-2 text-3xl font-extrabold text-[#102a25] md:text-4xl">
                    {property.priceLabel}
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    {property.purpose || "Premium Property"}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-[#eaf1ec] px-4 py-3 text-sm font-bold text-[#102a25]">
                  <ShieldCheck size={19} />
                  Verified Listing
                </div>
              </div>

              {/* PROPERTY HIGHLIGHTS */}
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">

                {[
                  {
                    icon: BedDouble,
                    label: "Bedrooms",
                    value: property.beds ?? property.bedrooms ?? "N/A",
                  },
                  {
                    icon: Bath,
                    label: "Bathrooms",
                    value: property.baths ?? "N/A",
                  },
                  {
                    icon: Ruler,
                    label: "Area",
                    value: `${property.area || "N/A"} Sq.ft`,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf1ec] text-[#102a25]">
                        <Icon size={21} />
                      </div>

                      <p className="text-2xl font-extrabold text-[#102a25]">
                        {item.value}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {item.label}
                      </p>
                    </div>
                  );
                })}

              </div>

              {/* DESCRIPTION */}
              <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-8 w-1 rounded-full bg-[#c5a36a]" />
                  <h2 className="text-2xl font-extrabold text-[#102a25]">
                    About This Property
                  </h2>
                </div>

                <p className="text-sm leading-8 text-gray-500 md:text-base">
                  {property.description ||
                    "Contact our property consultant to learn more about this property."}
                </p>
              </div>

              {/* AMENITIES */}
              <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <div className="h-8 w-1 rounded-full bg-[#c5a36a]" />
                  <div>
                    <h2 className="text-2xl font-extrabold text-[#102a25]">
                      Property Amenities
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                      Everything you need for comfortable living
                    </p>
                  </div>
                </div>

                {property.amenities?.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {property.amenities.map((amenity) => (
                      <div
                        key={amenity}
                        className="flex items-center gap-3 rounded-xl bg-[#f7f7f3] p-4 transition hover:bg-[#eaf1ec]"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#102a25] text-[#c5a36a]">
                          <Check size={16} />
                        </span>

                        <span className="text-sm font-semibold text-[#34453e]">
                          {amenity}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    Contact us for more information about amenities.
                  </p>
                )}
              </div>

              {/* LOCATION */}
              <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf1ec] text-[#102a25]">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <h2 className="text-xl font-extrabold text-[#102a25]">
                      Property Location
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {property.location}
                    </p>
                  </div>
                </div>
              </div>

            </section>

            {/* RIGHT ENQUIRY CARD */}
            <aside className="lg:sticky lg:top-8">

              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_15px_50px_rgba(16,42,37,0.10)]">

                <div className="bg-[#102a25] p-7 text-white">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c5a36a] text-[#102a25]">
                    <Building2 size={23} />
                  </div>

                  <p className="text-xs font-bold tracking-[3px] text-[#c5a36a]">
                    PROPERTY ENQUIRY
                  </p>

                  <h2 className="mt-3 text-2xl font-extrabold leading-snug">
                    Interested in this property?
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Speak with our property consultant and get
                    assistance with your next home.
                  </p>
                </div>

                <div className="p-7">

                  {/* AGENT DETAILS */}
                  <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eaf1ec] text-[#102a25]">
                      <Building2 size={25} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#102a25]">
                        {property.agent || "Estate Haven Team"}
                      </h3>

                      <p className="mt-1 text-xs text-gray-400">
                        Property Consultant
                      </p>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div className="py-6">
                    <p className="text-xs font-semibold tracking-wider text-gray-400">
                      LISTED PRICE
                    </p>

                    <p className="mt-2 text-2xl font-extrabold text-[#102a25]">
                      {property.priceLabel}
                    </p>
                  </div>

                  {/* CALL BUTTON */}
                  {agentPhone ? (
                    <a
                      href={`tel:${agentPhone}`}
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#102a25] py-4 font-bold text-white transition hover:bg-[#c5a36a] hover:text-[#102a25]"
                    >
                      <Phone size={19} />
                      Call Property Agent
                    </a>
                  ) : (
                    <Link
                      to="/contact"
                      className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#102a25] py-4 font-bold text-white transition hover:bg-[#c5a36a] hover:text-[#102a25]"
                    >
                      <Phone size={19} />
                      Contact Our Team
                    </Link>
                  )}

                  {/* CONTACT BUTTON */}
                  <Link
                    to="/contact"
                    className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-[#102a25]/20 py-4 font-bold text-[#102a25] transition hover:bg-[#f7f7f3]"
                  >
                    <Mail size={19} />
                    Send An Enquiry
                  </Link>

                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#f7f7f3] p-4">
                    <ShieldCheck
                      size={20}
                      className="shrink-0 text-[#c5a36a]"
                    />

                    <p className="text-xs leading-6 text-gray-500">
                      Our team is here to help you find the right
                      property with confidence.
                    </p>
                  </div>

                </div>
              </div>

            </aside>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
