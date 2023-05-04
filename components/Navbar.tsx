import Link from "next/link";
import Image from "next/image";

/*
.App-logo {
	margin-left: 1em;
	width: 175px;
}

.navbar-light .navbar-nav .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link {
	color: var(--color-on-background);
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.active,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .show > .nav-link:hover {
	color: var(--color-on-hover);
}

.main-nav {
	border-bottom: 1em;
}

.main-nav .navbar-nav .nav-link {
	padding-left: 0.65rem;
	padding-right: 0.65rem;
}

.main-nav .navbar-nav .nav-link.active {
	color: var(--color-on-labelAndHeaders);
	font-weight: 600;
}

.fa-bars:before {
	color: var(--color-on-background) !important;
}

.navbar-toggler {
	padding: 0.5rem;
	border: none !important;
}

button.navbar-toggler:focus {
	outline: none;
}

.main-nav .fas.fa-external-link-alt {
	margin-left: 0.4rem;
}

.main-nav .button {
	background-color: var(--color-on-labelAndHeaders);
	border: none;
	border-radius: 7px;
	padding: 13px 33px;
	font-weight: 600;
	outline: none;
}

.main-nav .button:hover {
	background-color: #f04248;
}

.main-nav .navbar-nav {
	align-items: center;
}
 */

const NavBar = () => (
  <nav className="flex items-center justify-between border-b border-[1em] p-4 lg:flex-row lg:p-6">
    <Link href="/" className="flex items-center">
      <Image src="/images/logo.png" alt="logo" className="w-44 mr-6" />
    </Link>
    <button type="button" className="block lg:hidden focus:outline-none">
      <i className="fas fa-bars fa-lg"></i>
    </button>
    <div className="hidden lg:flex lg:justify-end lg:flex-1">
      <ul className="flex items-center space-x-6 text-lg font-medium">
        <li>
          <Link href="/about" className="text-gray-900 hover:text-red-500">
            About
          </Link>
        </li>
        <li>
          <Link href="/calendar" className="text-gray-900 hover:text-red-500">
            Events
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-gray-900 hover:text-red-500">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/tutoring" className="text-gray-900 hover:text-red-500">
            Tutoring
          </Link>
        </li>
        <li>
          <Link href="/membership" className="text-gray-900 hover:text-red-500">
            Membership
          </Link>
        </li>
        <li>
          <Link href="/hackathons" className="text-gray-900 hover:text-red-500">
            Hackathons
          </Link>
        </li>
        <li>
          <Link href="/contactus" className="text-gray-900 hover:text-red-500">
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="https://uhcode.red/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-900 hover:text-red-500"
          >
            CodeRED <i className="fas fa-external-link-alt"></i>
          </Link>
        </li>
        <li>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-6 py-2 text-lg font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
