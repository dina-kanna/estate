
import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Heart,
  Building2,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "All Properties", path: "/properties" },
    { name: "Sell Property", path: "/sell" },
    { name: "Contact Us", path: "/contact" },
  ];

  const propertyLinks = [
    { name: "Properties for Sale", path: "/properties?purpose=Buy" },
    { name: "Properties for Rent", path: "/properties?purpose=Rent" },
    { name: "Apartments", path: "/properties?type=Apartment" },
    { name: "Luxury Villas", path: "/properties?type=Villa" },
    { name: "Commercial Spaces", path: "/properties?type=Commercial" },
  ];

  const socialLinks = [
    { symbol: "f", label: "Facebook", url: "https://facebook.com" },
    { symbol: "◎", label: "Instagram", url: "https://instagram.com" },
    { symbol: "in", label: "LinkedIn", url: "https://linkedin.com" },
    { symbol: "X", label: "Twitter", url: "https://twitter.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#102a25] text-white">

      {/* DECORATIVE BACKGROUND */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#c5a36a]/10" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#c5a36a]/10" />

      {/* TOP CTA SECTION */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-6 px-5 py-12 text-center sm:flex-row sm:text-left lg:px-8">

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[4px] text-[#c5a36a]">
              Your Dream Home Awaits
            </p>

            <h2 className="max-w-xl text-2xl font-extrabold leading-tight sm:text-3xl">
              Ready to find your
              <span className="text-[#c5a36a]"> perfect property?</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/55">
              Let our team help you discover a place you'll love.
            </p>
          </div>

          <Link
            to="/contact"
            className="group flex shrink-0 items-center gap-3 rounded-full bg-[#c5a36a] px-7 py-4 text-sm font-extrabold text-[#102a25] transition-all duration-300 hover:bg-white"
          >
            Get In Touch
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="relative mx-auto grid max-w-full grid-cols-1 gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:px-8">

        {/* BRAND SECTION */}
        <div className="lg:col-span-1">

          <Link to="/" className="mb-6 inline-flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c5a36a] text-[#102a25] shadow-lg">
              <Building2 size={27} />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white">
                Estate<span className="text-[#c5a36a]">Haven</span>
              </h2>

              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[3px] text-white/50">
                Find Your Place
              </p>
            </div>
          </Link>

          <p className="max-w-sm text-sm leading-8 text-white/60">
            Discover exceptional properties and experience a better way
            to find your dream home. We make every property journey
            simple, confident and memorable.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="mt-7">
            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#c5a36a]">
              Follow Our Journey
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-extrabold text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a36a] hover:bg-[#c5a36a] hover:text-[#102a25]"
                >
                  {social.symbol}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-7 text-sm font-extrabold uppercase tracking-[2px] text-white">
            Explore
          </h3>

          <div className="mb-5 h-0.5 w-10 bg-[#c5a36a]" />

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[#c5a36a]"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#c5a36a] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PROPERTY LINKS */}
        <div>
          <h3 className="mb-7 text-sm font-extrabold uppercase tracking-[2px] text-white">
            Properties
          </h3>

          <div className="mb-5 h-0.5 w-10 bg-[#c5a36a]" />

          <ul className="space-y-4">
            {propertyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[#c5a36a]"
                >
                  <ArrowRight
                    size={14}
                    className="text-[#c5a36a] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT SECTION */}
        <div>
          <h3 className="mb-7 text-sm font-extrabold uppercase tracking-[2px] text-white">
            Get In Touch
          </h3>

          <div className="mb-5 h-0.5 w-10 bg-[#c5a36a]" />

          <ul className="space-y-6">

            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a36a]/10 text-[#c5a36a]">
                <MapPin size={19} />
              </div>

              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">
                  Our Location
                </p>
                <p className="text-sm leading-6 text-white/75">
                  Madurai, Tamil Nadu,
                  <br />
                  India
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a36a]/10 text-[#c5a36a]">
                <Phone size={19} />
              </div>

              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">
                  Call Us
                </p>
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/75 transition hover:text-[#c5a36a]"
                >
                  +91 98765 43210
                </a>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a36a]/10 text-[#c5a36a]">
                <Mail size={19} />
              </div>

              <div>
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-white/40">
                  Email Us
                </p>
                <a
                  href="mailto:info@estatehaven.com"
                  className="break-all text-sm text-white/75 transition hover:text-[#c5a36a]"
                >
                  info@estatehaven.com
                </a>
              </div>
            </li>

          </ul>
        </div>

      </div>

      {/* BOTTOM FOOTER */}
      <div className="relative border-t border-white/10 bg-[#0b201c]">
        <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-4 px-5 py-6 text-center sm:flex-row lg:px-8">

          <p className="text-xs text-white/45">
            © {currentYear} Estate Haven. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-white/50">
            Crafted with
            <Heart
              size={13}
              fill="currentColor"
              className="text-[#c5a36a]"
            />
            for your dream home.
          </p>

          <Link
            to="/"
            className="text-xs font-semibold text-[#c5a36a] transition hover:text-white"
          >
            Back to Home ↑
          </Link>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
