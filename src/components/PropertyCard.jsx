
import { Link } from "react-router-dom";

import {
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  ArrowUpRight,
  Heart,
  Sparkles,
} from "lucide-react";

const PropertyCard = ({ property }) => {
  if (!property) return null;

  const image =
    property.image ||
    property.gallery?.[0] ||
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85";

  const beds = property.beds ?? property.bedrooms ?? 0;
  const baths = property.baths ?? property.bathrooms ?? 0;
  const area = property.area || "N/A";

  return (
    <article className="group overflow-hidden rounded-[26px] border border-gray-100 bg-white shadow-[0_10px_35px_rgba(16,42,37,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(16,42,37,0.14)]">

      {/* IMAGE SECTION */}
      <div className="relative h-[250px] overflow-hidden sm:h-[270px]">

        <img
          src={image}
          alt={property.title || "Property"}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#102a25]/65 via-transparent to-black/10" />

        {/* PURPOSE BADGE */}
        <div className="absolute left-5 top-5">
          <span className="rounded-full bg-[#c5a36a] px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-[#102a25] shadow-lg">
            {property.purpose || "For Sale"}
          </span>
        </div>

        {/* FEATURED BADGE */}
        {property.featured && (
          <div className="absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-white/30 bg-[#102a25]/85 px-3 py-2 text-[11px] font-bold text-white backdrop-blur-md">
            <Sparkles size={13} className="text-[#c5a36a]" />
            Featured
          </div>
        )}

        {/* PROPERTY TYPE */}
        <div className="absolute bottom-5 left-5">
          <p className="text-xs font-bold uppercase tracking-[2px] text-white/80">
            {property.type || "Residential Property"}
          </p>
        </div>

        {/* PRICE OVERLAY */}
        <div className="absolute bottom-4 right-5 text-right">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
            Property Price
          </p>
          <p className="mt-1 text-xl font-extrabold text-white drop-shadow-lg">
            {property.priceLabel || "Contact for price"}
          </p>
        </div>

      </div>

      {/* PROPERTY INFORMATION */}
      <div className="p-5 sm:p-6">

        {/* TITLE */}
        <Link to={`/property/${property.id}`}>
          <h3 className="line-clamp-1 text-xl font-extrabold text-[#102a25] transition-colors duration-300 group-hover:text-[#b18b4e]">
            {property.title || "Beautiful Property"}
          </h3>
        </Link>

        {/* LOCATION */}
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
          <MapPin
            size={17}
            className="shrink-0 text-[#c5a36a]"
          />

          <span className="line-clamp-1">
            {property.location || "Location unavailable"}
          </span>
        </div>

        {/* DIVIDER */}
        <div className="my-5 h-px bg-gray-100" />

        {/* PROPERTY FEATURES */}
        <div className="grid grid-cols-3 gap-2">

          <div className="flex flex-col items-center justify-center rounded-xl bg-[#f7f7f3] px-2 py-4 transition group-hover:bg-[#eaf1ec]">
            <BedDouble
              size={21}
              className="mb-2 text-[#c5a36a]"
            />

            <p className="text-base font-extrabold text-[#102a25]">
              {beds}
            </p>

            <p className="mt-1 text-[11px] font-medium text-gray-400">
              Bedrooms
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-[#f7f7f3] px-2 py-4 transition group-hover:bg-[#eaf1ec]">
            <Bath
              size={21}
              className="mb-2 text-[#c5a36a]"
            />

            <p className="text-base font-extrabold text-[#102a25]">
              {baths}
            </p>

            <p className="mt-1 text-[11px] font-medium text-gray-400">
              Bathrooms
            </p>
          </div>

          <div className="flex flex-col items-center justify-center rounded-xl bg-[#f7f7f3] px-2 py-4 transition group-hover:bg-[#eaf1ec]">
            <Ruler
              size={21}
              className="mb-2 text-[#c5a36a]"
            />

            <p className="text-base font-extrabold text-[#102a25]">
              {area}
            </p>

            <p className="mt-1 text-[11px] font-medium text-gray-400">
              Sq.ft
            </p>
          </div>

        </div>

        {/* BOTTOM ACTION */}
        <div className="mt-6 flex items-center justify-between gap-3">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Explore Property
            </p>

            <p className="mt-1 text-sm font-bold text-[#102a25]">
              View full details
            </p>
          </div>

          <Link
            to={`/property/${property.id}`}
            className="group/button flex h-12 items-center justify-center gap-2 rounded-full bg-[#102a25] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#c5a36a] hover:text-[#102a25]"
          >
            View Details

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
            />
          </Link>

        </div>

      </div>
    </article>
  );
};

export default PropertyCard;
