
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Search,
  MapPin,
  ChevronDown,
  Home,
  IndianRupee,
  ArrowRight,
  SlidersHorizontal,
} from "lucide-react";

const SearchBar = () => {
  const navigate = useNavigate();

  const [purpose, setPurpose] = useState("Buy");
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (purpose) {
      params.set("purpose", purpose);
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    if (maxPrice) {
      params.set("maxPrice", maxPrice);
    }

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div className="mx-auto w-full max-w-full">

      {/* SEARCH HEADING */}
      <div className="mb-5 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[4px] text-[#c5a36a]">
          Find Your Perfect Place
        </p>

        <h2 className="text-2xl font-extrabold text-[#102a25] sm:text-3xl">
          Discover Your Dream Property
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Search thousands of properties and find the right one for you.
        </p>
      </div>

      {/* SEARCH PANEL */}
      <form
        onSubmit={handleSearch}
        className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_20px_60px_rgba(16,42,37,0.12)]"
      >

        {/* TOP HEADER */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-[#102a25] px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c5a36a]/15 text-[#c5a36a]">
              <SlidersHorizontal size={21} />
            </div>

            <div>
              <h3 className="font-bold text-white">
                Property Search
              </h3>

              <p className="mt-0.5 text-xs text-white/60">
                Choose your preferences
              </p>
            </div>
          </div>

          <span className="rounded-full border border-[#c5a36a]/40 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#d9bd8b]">
            Estate Haven
          </span>
        </div>

        {/* SEARCH FIELDS */}
        <div className="grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:items-end">

          {/* PURPOSE */}
          <div>
            <label
              htmlFor="property-purpose"
              className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102a25]"
            >
              <Home size={16} className="text-[#c5a36a]" />
              Looking To
            </label>

            <div className="group relative">
              <select
                id="property-purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-[#f8f8f5] px-4 py-4 pr-10 text-sm font-semibold text-[#102a25] outline-none transition-all focus:border-[#c5a36a] focus:ring-4 focus:ring-[#c5a36a]/10"
              >
                <option value="Buy">Buy Property</option>
                <option value="Rent">Rent Property</option>
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#c5a36a]"
              />
            </div>
          </div>

          {/* LOCATION */}
          <div>
            <label
              htmlFor="property-location"
              className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102a25]"
            >
              <MapPin size={16} className="text-[#c5a36a]" />
              Location
            </label>

            <div className="relative">
              <MapPin
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a36a]"
              />

              <input
                id="property-location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or area"
                className="w-full rounded-xl border border-gray-200 bg-[#f8f8f5] py-4 pl-11 pr-4 text-sm font-medium text-[#102a25] outline-none transition-all placeholder:font-normal placeholder:text-gray-400 focus:border-[#c5a36a] focus:ring-4 focus:ring-[#c5a36a]/10"
              />
            </div>
          </div>

          {/* PRICE */}
          <div>
            <label
              htmlFor="maximum-price"
              className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#102a25]"
            >
              <IndianRupee size={16} className="text-[#c5a36a]" />
              Maximum Budget
            </label>

            <div className="relative">
              <select
                id="maximum-price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-[#f8f8f5] px-4 py-4 pr-10 text-sm font-semibold text-[#102a25] outline-none transition-all focus:border-[#c5a36a] focus:ring-4 focus:ring-[#c5a36a]/10"
              >
                <option value="">Any Price</option>
                <option value="3000000">Under ₹30 Lakhs</option>
                <option value="5000000">Under ₹50 Lakhs</option>
                <option value="7500000">Under ₹75 Lakhs</option>
                <option value="10000000">Under ₹1 Crore</option>
                <option value="20000000">Under ₹2 Crores</option>
                <option value="50000000">Under ₹5 Crores</option>
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#c5a36a]"
              />
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div>
            <button
              type="submit"
              className="group flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl bg-[#102a25] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#102a25]/15 transition-all duration-300 hover:bg-[#c5a36a] hover:text-[#102a25] hover:shadow-xl"
            >
              <Search size={19} />

              Search Properties

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>

        {/* BOTTOM INFORMATION */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 bg-[#fafaf8] px-6 py-4 sm:px-8">
          <p className="text-xs text-gray-500">
            <span className="font-bold text-[#102a25]">
              Find a place
            </span>{" "}
            that feels like home.
          </p>

          <p className="text-xs font-semibold tracking-wide text-[#a98a58]">
            BUY · RENT · DISCOVER
          </p>
        </div>

      </form>
    </div>
  );
};

export default SearchBar;
