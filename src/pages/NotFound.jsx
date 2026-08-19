import { Link } from "react-router-dom";
import { LuTriangleAlert, LuUnplug } from "react-icons/lu";
import { MdLinkOff } from "react-icons/md";
import { MdAnalytics, MdAddLink } from "react-icons/md";
import { CgComponents } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="px-6 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="flex min-h-[600px] flex-col items-center justify-center rounded-t-lg bg-gradient-to-b from-slate-100 to-white px-6 text-center">
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-50">
              <MdLinkOff className="h-11 w-11 text-slate-300" />

              <div className="absolute right-0 top-0 flex h-8 w-8 rotate-12 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm">
                <LuTriangleAlert className="h-4 w-4" />
              </div>
            </div>

            <h1 className="mt-7 text-3xl font-extrabold text-blue-700">404</h1>

            <h2 className="mt-2 text-xl font-bold text-gray-900">
              Page Not Found
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              The page you're looking for doesn't exist. It may have been moved,
              deleted, or the link might be broken.
            </p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="rounded-md flex gap-3 justify-center items-center bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <FaArrowLeft className="w-4 h-4" />
                Go to Dashboard
              </Link>

              <button
                type="button"
                className="rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-gray-50"
              >
                Report an Issue
              </button>
            </div>

            <div className="mt-14 grid w-full max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-5 text-left shadow-sm">
                <MdAnalytics className="h-5 w-5 text-blue-600" />

                <h3 className="mt-4 text-sm font-bold text-gray-900">
                  Check Analytics
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Track your active links and traffic sources in real-time.
                </p>
              </div>

              <Link
                to="/create-link"
                className="rounded-lg bg-white p-5 text-left shadow-sm transition hover:shadow-md"
              >
                <MdAddLink className="h-5 w-5 text-blue-600" />

                <h3 className="mt-4 text-sm font-bold text-gray-900">
                  New ShortLink
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Create a brand new shortened URL in seconds.
                </p>
              </Link>

              <div className="rounded-lg bg-white p-5 text-left shadow-sm">
                <CgComponents className="h-5 w-5 text-blue-600" />

                <h3 className="mt-4 text-sm font-bold text-gray-900">
                  Developer API
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Integrate our link infrastructure into your apps.
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

export default NotFound;
