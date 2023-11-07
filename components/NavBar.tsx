import Link from "next/link";
import NavLink from "./NavLink";

interface ActiveOption {
  activeOption?:
    | "About"
    | "Events"
    | "Gallery"
    | "Branches"
    | "Contact Us"
    | "CodeRED"
    | "Register";
}
const NavBar = () => {
  const navLinks = [
    { name: "About", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Branches", href: "/branches" },
    { name: "Contact Us", href: "/contactus" },
    { name: "CodeRED", href: "/codered" },
  ];

  return (
    <nav className="flex flex-row justify-between mx-8 my-2 text-center">
      <div className="relative">
        <Link href="/" className="flex flex-row justify-between gap-4">
          <img src="/icons/logo.svg" alt="Logo" className="mx-auto" />
          <h1 className="my-1 font-extrabold uppercase text-2xl text-red-700">
            CougarCS
          </h1>
        </Link>
      </div>
      <ul className="flex gap-4 my-2">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink href={link.href} name={link.name} />
          </li>
        ))}
        <li key="Register">
          <Link className="bg-red-700 text-white px-4 py-2" href="/join">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
