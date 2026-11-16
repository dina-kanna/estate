
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Our Team",
      detail: "+91 44 4000 2020",
      link: "tel:+914440002020",
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@estatehaven.in",
      link: "mailto:hello@estatehaven.in",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      detail: "Chennai, Tamil Nadu, India",
      link: "https://maps.google.com/?q=Chennai,Tamil+Nadu",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f8f5]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#102a25] px-6 py-20 text-white md:py-28">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#c5a36a]/10 blur-3xl" />

        <div className="relative mx-auto max-w-full">

          <div className="max-w-3xl">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-bold tracking-[3px] text-[#d8bd8a]">
              <MessageCircle size={15} />
              LET'S TALK
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-tight md:text-7xl">
              We'd Love To
              <span className="block text-[#c5a36a]">
                Hear From You.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Looking for your dream home or need expert property
              advice? Our team is ready to help you make the right move.
            </p>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-white/70">

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#c5a36a]" />
              Friendly Support
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#c5a36a]" />
              Expert Guidance
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#c5a36a]" />
              Quick Response
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="mx-auto max-w-full px-6 py-16 md:py-24">

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT INFORMATION */}
          <div>

            <p className="text-xs font-bold tracking-[4px] text-[#b18a4a]">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102a25] md:text-4xl">
              Let's Start a
              <span className="block text-[#b18a4a]">
                Conversation
              </span>
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              Whether you want to buy, sell, or rent a property,
              we're here to guide you through every step.
              Reach out using any of the details below.
            </p>

            {/* CONTACT CARDS */}
            <div className="mt-9 space-y-4">

              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.link}
                    target={item.title === "Visit Our Office" ? "_blank" : undefined}
                    rel={item.title === "Visit Our Office" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c5a36a]/50 hover:shadow-lg"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#102a25] text-[#c5a36a] transition group-hover:bg-[#c5a36a] group-hover:text-[#102a25]">
                      <Icon size={23} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#102a25]">
                        {item.title}
                      </h3>

                      <p className="mt-1 break-words text-sm text-gray-500">
                        {item.detail}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={19}
                      className="text-gray-400 transition group-hover:text-[#b18a4a]"
                    />

                  </a>
                );
              })}

            </div>

            {/* WORKING HOURS */}
            <div className="mt-7 rounded-2xl bg-[#102a25] p-7 text-white">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#c5a36a]">
                  <Clock size={22} />
                </div>

                <h3 className="text-lg font-bold">
                  Working Hours
                </h3>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/65">

                <div className="flex justify-between gap-3">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-white">
                    9 AM - 6 PM
                  </span>
                </div>

                <div className="flex justify-between gap-3">
                  <span>Sunday</span>
                  <span className="font-semibold text-[#c5a36a]">
                    Closed
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT CONTACT FORM */}
          <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl md:p-10">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f5efe3] text-[#a47d3c]">
                <Building2 size={27} />
              </div>

              <div>
                <p className="text-xs font-bold tracking-[3px] text-[#b18a4a]">
                  GET IN TOUCH
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-[#102a25]">
                  Send Us a Message
                </h2>
              </div>

            </div>

            <p className="mt-5 text-sm leading-7 text-gray-500">
              Fill out the form below and our property team will
              get back to you.
            </p>

            {submitted ? (

              <div className="mt-9 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <CheckCircle2 size={35} />
                </div>

                <h3 className="mt-5 text-2xl font-bold text-[#102a25]">
                  Thank You!
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  Your demo enquiry has been submitted.
                  Connect a backend or email service to receive
                  and process real messages.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-7 rounded-xl bg-[#102a25] px-7 py-3 font-semibold text-white transition hover:bg-[#b18a4a]"
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-4 text-sm outline-none transition focus:border-[#b18a4a] focus:ring-2 focus:ring-[#c5a36a]/20"
                  />
                </div>

                {/* EMAIL AND PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-4 text-sm outline-none transition focus:border-[#b18a4a] focus:ring-2 focus:ring-[#c5a36a]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      autoComplete="tel"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-4 text-sm outline-none transition focus:border-[#b18a4a] focus:ring-2 focus:ring-[#c5a36a]/20"
                    />
                  </div>

                </div>

                {/* SUBJECT */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Subject
                  </label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-4 text-sm text-gray-600 outline-none transition focus:border-[#b18a4a] focus:ring-2 focus:ring-[#c5a36a]/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="Buying a property">Buying a Property</option>
                    <option value="Renting a property">Renting a Property</option>
                    <option value="Selling a property">Selling a Property</option>
                    <option value="Property valuation">Property Valuation</option>
                    <option value="Other enquiry">Other Enquiry</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-[#fafbf9] px-4 py-4 text-sm outline-none transition focus:border-[#b18a4a] focus:ring-2 focus:ring-[#c5a36a]/20"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#102a25] px-6 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b18a4a]"
                >
                  Send Message
                  <Send
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your information is used for this demo enquiry only.
                </p>

              </form>

            )}

          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto flex max-w-full flex-col items-center justify-between gap-6 rounded-3xl bg-[#eee8dc] p-8 text-center md:flex-row md:px-12 md:text-left">

          <div>
            <h2 className="text-2xl font-extrabold text-[#102a25]">
              Ready to find your dream home?
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Explore our latest property listings today.
            </p>
          </div>

          <a
            href="/properties"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#102a25] px-7 py-4 font-bold text-white transition hover:bg-[#b18a4a]"
          >
            Explore Properties
            <ArrowUpRight size={18} />
          </a>

        </div>
      </section>

    </main>
  );
}
