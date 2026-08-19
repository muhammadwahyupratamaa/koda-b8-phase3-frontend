import { Link, useNavigate } from "react-router-dom";
import {
  LuBell,
  LuLink,
  LuLogOut,
  LuPencil,
  LuShieldCheck,
} from "react-icons/lu";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

function Profile() {
  const navigate = useNavigate();

  const user = {
    name: "Alex Thompson",
    email: "user@example.com",
    role: "Product Architect at Digital Flow",
    memberSince: "January 1, 2026",
  };

  const [activeAssets, setActiveAssets] = useState(0);
  useEffect(() => {
    async function getLinks() {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8082/api/links", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.json();

      if (!response.ok) {
        return;
      }

      setActiveAssets(result.data.length);
    }
    getLinks();
  }, []);

  const handleLogout = () => {
    (localStorage.removeItem("token"), navigate("/login"));
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar variant="profile" />

      <section className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Account Management
          </p>

          <div className="mx-auto mt-4 max-w-2xl rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-900">Profile</h1>

              <span className="rounded-full bg-blue-100 px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-blue-600">
                Pro Member
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg bg-slate-200">
                  <span className="text-2xl font-bold text-slate-500">A</span>
                </div>

                <button
                  type="button"
                  className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-white text-blue-600 shadow-sm"
                  aria-label="Edit profile picture"
                >
                  <LuPencil className="h-3 w-3" />
                </button>
              </div>

              <div>
                <h2 className="text-sm font-bold text-gray-900">{user.name}</h2>

                <p className="mt-1 text-xs text-gray-500">{user.role}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-slate-100 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Email Address
                </p>

                <p className="mt-2 text-xs font-medium text-gray-900">
                  {user.email}
                </p>
              </div>

              <div className="rounded-md bg-slate-100 px-4 py-4">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                  Account Tenure
                </p>

                <p className="mt-2 text-xs font-medium text-gray-900">
                  Member since: {user.memberSince}
                </p>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="mt-5 flex items-center justify-between rounded-md bg-blue-600 px-4 py-4 text-white transition hover:bg-blue-700"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500">
                  <LuLink className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-100">
                    Active Assets
                  </p>

                  <p className="mt-1 text-lg font-bold">{activeAssets}</p>
                </div>
              </div>

              <span className="rounded-md bg-blue-500 px-3 py-2 text-[10px] font-bold uppercase tracking-wide">
                View Links
              </span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-slate-50 py-3 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
            >
              <LuLogOut className="h-3.5 w-3.5" />
              Logout Session
            </button>
          </div>

          <p className="mt-5 text-center text-[9px] text-slate-400">
            Your data is encrypted using AES-256 standards.{" "}
            <span className="font-medium text-blue-600">Privacy Policy</span>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Profile;
