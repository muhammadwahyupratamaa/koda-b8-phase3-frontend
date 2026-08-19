import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Analytics",
      path: "/analytics",
    },
    {
      name: "Links",
      path: "/links",
    },
  ];

  return (
    <nav className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <div className="flex h-full items-center gap-7">
          <Link
            to="/"
            className="text-xl font-extrabold tracking-tight text-gray-900"
          >
            ShortLink
          </Link>

          <div className="flex h-full items-center gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative flex h-full items-center text-sm font-medium ${
                    isActive
                      ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-blue-600"
                      : "text-gray-500 hover:text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            Login
          </Link>

          <button
            type="button"
            className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;