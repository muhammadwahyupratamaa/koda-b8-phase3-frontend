import {
  LuCalendarDays,
  LuClipboard,
  LuFilter,
  LuSearch,
  LuTrash2,
} from "react-icons/lu";
import { IoMdLink } from "react-icons/io";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

function Dashboard() {
  const [links, setLinks] = useState([]);

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

      setLinks(result.data);
    }

    getLinks();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:8082/api/links/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    if (!response.ok) {
      return console.error(result.message);
    }
    setLinks((currentLinks) => currentLinks.filter((link) => link.id !== id));
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar variant="dashboard" />

      <section className="px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Links</h1>

              <p className="mt-1 text-sm text-gray-500">
                Manage and track your shortened digital assets.
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                Total Active
              </p>

              <p className="mt-1 text-2xl font-bold text-blue-600">
                {links.length}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
            <LuSearch className="h-5 w-5 shrink-0 text-gray-400" />

            <input
              type="text"
              placeholder="Search by name or URL..."
              className="w-full bg-transparent px-3 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />

            <button
              type="button"
              className="shrink-0 text-gray-500 transition hover:text-gray-900"
            >
              <LuFilter className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-7 space-y-3">
            {links.map((link) => (
              <div
                key={link.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <IoMdLink className="h-4 w-4 shrink-0 text-blue-600" />

                      <p className="truncate text-sm font-bold text-blue-600">
                        {link.slug}
                      </p>
                    </div>

                    <p className="mt-1 truncate text-xs text-gray-500">
                      {link.original_url}
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-xs font-medium tracking-wide text-slate-400">
                      <span className="flex items-center gap-1">
                        <LuCalendarDays className="h-3.5 w-3.5" />
                        {new Date(link.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>

                      <span>•</span>

                      {/* <span>{link.clicks}</span> */}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <button
                      type="button"
                      className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition hover:bg-blue-100"
                      aria-label="Copy link"
                    >
                      <LuClipboard className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(link.id)}
                      className="text-slate-400 transition hover:text-red-500"
                      aria-label="Delete link"
                    >
                      <LuTrash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between text-xs font-medium text-slate-500">
            <button type="button" className="transition hover:text-gray-900">
              ‹ Prev Page
            </button>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-100 font-semibold text-blue-600"
              >
                1
              </button>

              <span>of</span>

              <span className="text-gray-900">5</span>
            </div>

            <button type="button" className="transition hover:text-gray-900">
              Next ›
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Dashboard;
