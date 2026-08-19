import { Link, useNavigate } from "react-router-dom";
import {
  LuArrowLeft,
  LuChartNoAxesColumnIncreasing,
  LuEye,
  LuGrid2X2,
  LuQrCode,
  LuZap,
} from "react-icons/lu";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

function CreateLink() {
  const [destinationUrl, setDestinationUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8082/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          original_url: destinationUrl,
          slug: customSlug || undefined,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        return setError(result.message || "Failed to create link");
      }
      navigate("/dashboard");
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar variant="dashboard" />

      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/dashboard"
            className="flex w-fit items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            <LuArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Create New Short Link
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Transform your long URLs into clean, manageable assets.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-7"
          >
            <div>
              <label className="text-xs font-bold uppercase tracking-wide text-gray-800">
                Destination URL <span className="text-red-500">*</span>
              </label>

              <div className="mt-2 flex items-center rounded-md border border-gray-200 bg-gray-50 px-3">
                <IoMdLink className="h-4 w-4 shrink-0 text-gray-400" />

                <input
                  type="url"
                  value={destinationUrl}
                  onChange={(e) => setDestinationUrl(e.target.value)}
                  placeholder="https://example.com/your-long-url-here"
                  className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <p className="mt-2 text-[10px] italic text-gray-400">
                Ensure your URL starts with http:// or https://
              </p>
            </div>

            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wide text-gray-800">
                Custom Slug <span className="font-medium">(Optional)</span>
              </label>

              <div className="mt-2 flex rounded-md border border-gray-200 bg-gray-50">
                <span className="flex items-center border-r border-gray-200 px-3 text-sm text-gray-500">
                  short.link/
                </span>

                <input
                  type="text"
                  value={customSlug}
                  onChange={(e) => setCustomSlug(e.target.value)}
                  placeholder="my-custom-slug"
                  className="w-full bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <p className="mt-2 text-[10px] italic text-gray-400">
                Leave blank to generate a random unique identifier.
              </p>
            </div>

            <div className="mt-5 rounded-md border border-blue-100 bg-blue-50/70 px-4 py-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wide text-blue-600">
                <LuEye className="h-4 w-4" />
                Live Preview
              </div>

              <p className="mt-2 text-sm text-gray-800">
                Your short link will be:{" "}
                <span className="font-semibold text-blue-600">
                  https://short.link/{customSlug || "my-custom-slug"}
                </span>
              </p>
            </div>

            <div className="mt-7 flex items-center gap-8">
              {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                {loading ? "Creating..." : "Create link"}
                <LuZap className="h-4 w-4" />
              </button>

              <Link
                to="/dashboard"
                className="text-sm font-medium text-blue-700 hover:text-blue-800"
              >
                Cancel
              </Link>
            </div>
          </form>

          <div className="mt-8 grid gap-6 border-t border-gray-200 pt-7 sm:grid-cols-2">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <IoAnalyticsSharp className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Real-time Analytics
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Track every click, geographical location, and referral source
                  instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <LuQrCode className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-900">
                  Auto-generated QR
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Every link automatically creates a high-resolution QR code for
                  print.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default CreateLink;
