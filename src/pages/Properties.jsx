
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  SlidersHorizontal,
  MapPin,
  Home,
  BedDouble,
  IndianRupee,
  Search,
  RotateCcw,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Properties() {
  const [params] = useSearchParams();

  const [purpose, setPurpose] = useState(
    params.get("purpose") || "All"
  );

  const [location, setLocation] = useState(
    params.get("location") || ""
  );

  const [type, setType] = useState(
    params.get("type") || "Any type"
  );

  const [bedrooms, setBedrooms] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(
    params.get("maxPrice") || ""
  );

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const propertyLocation = property.location || "";
      const propertyPurpose = property.purpose || "";
      const propertyType = property.type || "";
      const propertyPrice = Number(property.price) || 0;

      const propertyBedrooms = Number(
        property.bedrooms ?? property.beds ?? 0
      );

      return (
        (purpose === "All" || propertyPurpose === purpose) &&
        propertyLocation
          .toLowerCase()
          .includes(location.trim().toLowerCase()) &&
        (type === "Any type" || propertyType === type) &&
        (bedrooms === "Any" ||
          propertyBedrooms >= Number(bedrooms)) &&
        (!minPrice || propertyPrice >= Number(minPrice)) &&
        (!maxPrice || propertyPrice <= Number(maxPrice))
      );
    });
  }, [purpose, location, type, bedrooms, minPrice, maxPrice]);

  const clearFilters = () => {
    setPurpose("All");
    setLocation("");
    setType("Any type");
    setBedrooms("Any");
    setMinPrice("");
    setMaxPrice("");
  };

  const activeFilters = [
    location,
    type !== "Any type" ? type : "",
    bedrooms !== "Any" ? `${bedrooms}+ bedrooms` : "",
    minPrice,
    maxPrice,
    purpose !== "All" ? purpose : "",
  ].filter(Boolean).length;

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-[#fafaf8] px-4 py-3 text-sm text-[#102a25] outline-none transition placeholder:text-gray-400 focus:border-[#c5a36a] focus:ring-2 focus:ring-[#c5a36a]/20";

  const labelClass =
    "mb-2 block text-sm font-semibold text-[#263b35]";

  return (
    <main className="min-h-screen bg-[#f7f7f3]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#102a25]">
        <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full border border-[#c5a36a]/20" />
        <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border border-[#c5a36a]/20" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#c5a36a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-9xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c5a36a]/30 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-[#c5a36a]">
              <Sparkles size={14} />
              DISCOVER YOUR NEXT ADDRESS
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Find a place
              <br />
              <span className="text-[#c5a36a]">
                to call home.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Explore exceptional homes, beautiful apartments and
              premium properties designed around the way you live.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <Home size={16} className="text-[#c5a36a]" />
                Find your dream home
              </span>
              <span className="text-white/30">|</span>
              <span className="flex items-center gap-2">
                <Building2 size={16} className="text-[#c5a36a]" />
                Explore properties
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-auto max-w-full px-5 py-12 md:px-6 md:py-16">

        <div className="grid items-start gap-8 lg:grid-cols-[300px_1fr]">

          {/* FILTER SIDEBAR */}
          <aside className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_15px_50px_rgba(16,42,37,0.06)]">

            <div className="flex items-center justify-between bg-[#102a25] px-6 py-5">
              <div>
                <div className="flex items-center gap-2 text-white">
                  <SlidersHorizontal size={19} />
                  <h2 className="text-lg font-bold">Filter Properties</h2>
                </div>
                <p className="mt-1 text-xs text-white/50">
                  Find your perfect match
                </p>
              </div>

              <span className="rounded-full bg-[#c5a36a] px-3 py-1 text-xs font-bold text-[#102a25]">
                {activeFilters} Active
              </span>
            </div>

            <div className="space-y-6 p-6">

              {/* PURPOSE */}
              <div>
                <label className={labelClass}>
                  Property Purpose
                </label>

                <div className="grid grid-cols-3 gap-1 rounded-xl bg-[#f3f4f0] p-1">
                  {["All", "Buy", "Rent"].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setPurpose(item)}
                      className={`rounded-lg py-2.5 text-sm font-bold transition-all ${
                        purpose === item
                          ? "bg-[#102a25] text-white shadow-md"
                          : "text-gray-500 hover:text-[#102a25]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* LOCATION */}
              <div>
                <label
                  htmlFor="property-location"
                  className={labelClass}
                >
                  Preferred Location
                </label>

                <div className="relative">
                  <MapPin
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a36a]"
                  />

                  <input
                    id="property-location"
                    type="text"
                    placeholder="City or neighbourhood"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              {/* PROPERTY TYPE */}
              <div>
                <label htmlFor="property-type" className={labelClass}>
                  Property Type
                </label>

                <div className="relative">
                  <Home
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a36a]"
                  />

                  <select
                    id="property-type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={`${inputClass} appearance-none pl-11`}
                  >
                    <option value="Any type">Any type</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>

              {/* BEDROOMS */}
              <div>
                <label htmlFor="property-bedrooms" className={labelClass}>
                  Bedrooms
                </label>

                <div className="relative">
                  <BedDouble
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a36a]"
                  />

                  <select
                    id="property-bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className={`${inputClass} appearance-none pl-11`}
                  >
                    <option value="Any">Any Bedrooms</option>
                    <option value="1">1+ Bedrooms</option>
                    <option value="2">2+ Bedrooms</option>
                    <option value="3">3+ Bedrooms</option>
                    <option value="4">4+ Bedrooms</option>
                  </select>
                </div>
              </div>

              {/* PRICE RANGE */}
              <div>
                <label className={labelClass}>
                  Budget Range
                </label>

                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-400">
                  <IndianRupee size={14} />
                  Enter your preferred price in rupees
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="minimum-price"
                      className="mb-2 block text-xs text-gray-500"
                    >
                      Minimum
                    </label>
                    <input
                      id="minimum-price"
                      type="number"
                      min="0"
                      placeholder="Min price"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="maximum-price"
                      className="mb-2 block text-xs text-gray-500"
                    >
                      Maximum
                    </label>
                    <input
                      id="maximum-price"
                      type="number"
                      min="0"
                      placeholder="Max price"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* CLEAR FILTERS */}
              <button
                type="button"
                onClick={clearFilters}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#102a25]/20 py-3.5 text-sm font-bold text-[#102a25] transition hover:border-[#102a25] hover:bg-[#102a25] hover:text-white"
              >
                <RotateCcw size={16} />
                Clear All Filters
              </button>

            </div>
          </aside>

          {/* PROPERTY RESULTS */}
          <section>

            {/* RESULTS HEADER */}
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">

              <div>
                <p className="mb-2 text-xs font-bold tracking-[3px] text-[#c5a36a]">
                  EXPLORE OUR COLLECTION
                </p>

                <h2 className="font-display text-2xl font-extrabold text-[#102a25] md:text-3xl">
                  Available Properties
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Discover a property that feels like yours.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#102a25] text-[#c5a36a]">
                  <Building2 size={19} />
                </div>

                <div>
                  <p className="text-xl font-extrabold leading-none text-[#102a25]">
                    {filteredProperties.length}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Properties found
                  </p>
                </div>
              </div>

            </div>

            {/* ACTIVE SEARCH */}
            {(location || purpose !== "All" || type !== "Any type") && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-gray-500">
                  Searching:
                </span>

                {location && (
                  <span className="rounded-full bg-[#102a25]/5 px-3 py-1.5 text-xs font-semibold text-[#102a25]">
                    {location}
                  </span>
                )}

                {purpose !== "All" && (
                  <span className="rounded-full bg-[#102a25]/5 px-3 py-1.5 text-xs font-semibold text-[#102a25]">
                    {purpose}
                  </span>
                )}

                {type !== "Any type" && (
                  <span className="rounded-full bg-[#102a25]/5 px-3 py-1.5 text-xs font-semibold text-[#102a25]">
                    {type}
                  </span>
                )}
              </div>
            )}

            {/* PROPERTY GRID */}
            {filteredProperties.length > 0 ? (
              <div className="grid gap-7 sm:grid-cols-2">
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                  />
                ))}
              </div>
            ) : (
              /* EMPTY STATE */
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">

                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#c5a36a]/15 text-[#c5a36a]">
                  <Search size={34} />
                </div>

                <h3 className="text-2xl font-extrabold text-[#102a25]">
                  No Properties Found
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-gray-500">
                  We couldn't find properties matching your current
                  search. Try adjusting your filters to explore more homes.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-7 flex items-center gap-2 rounded-xl bg-[#102a25] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#c5a36a] hover:text-[#102a25]"
                >
                  Reset Filters
                  <ArrowRight size={17} />
                </button>

              </div>
            )}

          </section>

        </div>
      </section>

    </main>
  );
}
