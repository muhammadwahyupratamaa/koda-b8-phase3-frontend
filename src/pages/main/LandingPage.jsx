import { Link } from "react-router-dom";
import { LuZap, LuLink } from "react-icons/lu";
import { AiOutlineCheck } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function LandingPage() {
  const features = [
    {
      icon: <LuZap className="h-4 w-4" />,
      title: "Easy Create",
      description:
        "Instantly generate high-performance short links with a single click or through our surgical API endpoints.",
    },
    {
      icon: <LuLink className="h-4 w-4" />,
      title: "Custom Slugs",
      description:
        "Maintain brand authority with readable, custom link endings that resonate with your digital audience.",
    },
    {
      icon: <IoIosPeople className="h-4 w-4 text-gray-700" />,
      title: "Team Ready",
      description:
        "Collaborate across departments with shared workspaces, permissions, and unified analytics dashboard.",
    },
  ];

  const insights = [
    {
      icon: <AiOutlineCheck className="h-3 w-3" />,
      text: "Geographic Distribution Maps",
    },
    {
      icon: <AiOutlineCheck className="h-3 w-3" />,
      text: "Device & Browser Breakdown",
    },
    {
      icon: <AiOutlineCheck className="h-3 w-3" />,
      text: "UTM Parameter Tracking",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="flex min-h-[520px] items-center justify-center px-6 py-20">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Shorten URLs. <span className="text-blue-600">Share Easily.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Create short, memorable links for your team communications.
            <br className="hidden sm:block" />
            Transform long, cumbersome URLs into powerful digital assets that
            drive engagement.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/register"
              className="rounded-md bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="rounded-md border border-gray-200 bg-white px-7 py-3 text-sm font-semibold text-blue-600 transition hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 w-full max-w-2xl rounded-xl bg-white p-2 shadow-lg shadow-blue-100">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="flex flex-1 items-center rounded-md border border-gray-100 px-4">
                <LuLink className="mr-3 h-4 w-4 shrink-0 text-gray-300" />

                <input
                  type="url"
                  placeholder="https://very-long-architectural-url.com/asset-id-99238-x1"
                  className="w-full bg-transparent py-3 text-sm text-gray-600 outline-none placeholder:text-gray-300"
                />
              </div>

              <button
                type="button"
                className="rounded-md bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Shorten
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="border-y border-gray-100 bg-gray-50 px-6 py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
              Architectural Features
            </p>

            <h2 className="mt-2 text-xl font-bold text-gray-900 sm:text-3xl ">
              Built for Enterprise Precision
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-md border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-600">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-sm font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-5 h-0.5 w-8 bg-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white max-w-7xl m-auto shadow rounded-md px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-lg shadow-xl shadow-blue-100">
              <img
                src="/landing-dashboard.jpg"
                alt="ShortLink analytics dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Data Driven Insights
            </p>

            <h2 className="mt-3 max-w-md text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              Observe your link architecture in real-time.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
              Every click is a data point. Our dashboard provides surgical
              precision into where your traffic originates, who is engaging, and
              how your team communications are performing across the globe.
            </p>

            <ul className="mt-6 space-y-3">
              {insights.map((insight) => (
                <li
                  key={insight.text}
                  className="flex items-center gap-2 text-xs font-medium text-gray-700"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
                    {insight.icon}
                  </span>

                  {insight.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default LandingPage;
