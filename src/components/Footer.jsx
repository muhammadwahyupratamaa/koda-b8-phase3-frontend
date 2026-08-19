function Footer() {
  return (
    <footer className="flex max-w-full flex-col justify-center items-center gap-5 bg-gray-100 px-6 py-6 text-sm text-gray-500 sm:px-9 sm:text-base lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p>© 2024 SHORTLINK. THE DIGITAL ARCHITECT.</p>
      </div>

      <ul className="flex flex-wrap justify-center gap-3 lg:justify-end">
        <li>
          <a href="#" className="hover:text-gray-900">
            PRIVACY POLICY
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-gray-900">
            TERMS OF SERVICE
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-gray-900">
            API DOCUMENTATION
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-gray-900">
            SUPPORT
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
