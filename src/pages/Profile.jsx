
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  UserRound,
  Mail,
  LogOut,
  Heart,
  Home
} from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("estatehaven_user");

      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);

        if (
          parsedUser &&
          typeof parsedUser.name === "string" &&
          typeof parsedUser.email === "string"
        ) {
          setUser(parsedUser);
        } else {
          localStorage.removeItem("estatehaven_user");
        }
      }
    } catch (error) {
      console.error("Unable to read user information:", error);
      localStorage.removeItem("estatehaven_user");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("estatehaven_user");
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-[650px] bg-[#f6f5f0] py-20">
        <div className="mx-auto max-w-9xl px-6">

          <p className="font-bold tracking-widest text-[#c5a36a]">
            MY ACCOUNT
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-[#102a25]">
            My Profile
          </h1>

          {loading ? (
            <div className="mt-10 rounded-2xl bg-white p-10 text-center">
              <p className="text-gray-500">Loading profile...</p>
            </div>
          ) : user ? (
            <div className="mt-10 grid gap-8 md:grid-cols-[280px_1fr]">

              {/* Profile Sidebar */}
              <div className="rounded-2xl bg-[#102a25] p-8 text-white">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#c5a36a] text-[#102a25]">
                  <UserRound size={38} />
                </div>

                <h2 className="mt-6 break-words text-2xl font-bold">
                  {user.name}
                </h2>

                <p className="mt-2 break-all text-sm text-white/60">
                  {user.email}
                </p>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-9 flex items-center gap-3 font-bold text-white transition hover:text-[#c5a36a]"
                >
                  <LogOut size={19} />
                  Logout
                </button>
              </div>

              {/* Account Information */}
              <div className="rounded-2xl bg-white p-8 shadow-lg">

                <h2 className="text-2xl font-bold text-[#102a25]">
                  Account Information
                </h2>

                <div className="mt-8 space-y-7">

                  <div className="flex items-center gap-4">
                    <UserRound
                      size={23}
                      className="shrink-0 text-[#c5a36a]"
                    />

                    <div>
                      <p className="text-xs text-gray-400">
                        Full Name
                      </p>

                      <p className="mt-1 font-bold text-[#102a25]">
                        {user.name}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail
                      size={23}
                      className="shrink-0 text-[#c5a36a]"
                    />

                    <div>
                      <p className="text-xs text-gray-400">
                        Email Address
                      </p>

                      <p className="mt-1 break-all font-bold text-[#102a25]">
                        {user.email}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Favourite Properties */}
                <div className="mt-10 rounded-xl bg-[#f6f5f0] p-6">

                  <h3 className="flex items-center gap-2 font-bold text-[#102a25]">
                    <Heart className="text-[#c5a36a]" />
                    My Favourite Properties
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">
                    Your favourite properties will appear here
                    when the favourites feature is implemented.
                  </p>

                  <Link
                    to="/properties"
                    className="mt-5 inline-flex items-center gap-2 font-bold text-[#c5a36a] hover:text-[#102a25]"
                  >
                    <Home size={17} />
                    Browse Properties
                  </Link>

                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10 rounded-2xl bg-white p-12 text-center shadow-lg">

              <UserRound
                size={55}
                className="mx-auto text-[#c5a36a]"
              />

              <h2 className="mt-6 text-2xl font-bold text-[#102a25]">
                You Are Not Logged In
              </h2>

              <p className="mt-3 text-gray-500">
                Please login to access your profile.
              </p>

              <Link
                to="/login"
                className="mt-7 inline-block rounded-full bg-[#102a25] px-8 py-4 font-bold text-white transition hover:bg-[#c5a36a]"
              >
                Login Now
              </Link>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
