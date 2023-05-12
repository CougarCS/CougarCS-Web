import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-4 lg:flex-row lg:p-6 border-b border-[1em]">
      <Link href="/">
        <div className="ml-4 w-44">
          <Image src="/images/logo.png" alt="logo" />
        </div>
      </Link>

      <button
        type="button"
        aria-controls="responsive-navbar-nav"
        className="text-on-background focus:outline-none"
      >
        <i className="fas fa-bars fa-lg"></i>
      </button>

      <div className="justify-end" id="responsive-navbar-nav">
        <nav>
          <Link href="/about">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              About
            </a>
          </Link>
          <Link href="/calendar">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              Events
            </a>
          </Link>
          <Link href="/gallery">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              Gallery
            </a>
          </Link>
          <Link href="/tutoring">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              Tutoring
            </a>
          </Link>
          <Link href="/membership">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              Membership
            </a>
          </Link>
          <Link href="/hackathons">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              Hackathons
            </a>
          </Link>
          <Link href="/contactus">
            <a className="nav-link px-2 text-on-background hover:text-on-hover">
              Contact Us
            </a>
          </Link>
          <a
            href="https://uhcode.red/"
            target="_blank"
            rel="noreferrer"
            className="nav-link px-2 text-on-background hover:text-on-hover inline-flex items-center"
          >
            CodeRED <i className="fas fa-external-link-alt ml-1"></i>
          </a>
          <Link href="/register">
            <a>
              <button className="nav-link button bg-on-labelAndHeaders text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-600 focus:outline-none">
                Register
              </button>
            </a>
          </Link>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;