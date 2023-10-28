import Link from 'next/link';
import React from 'react'

interface ActiveOption {
    activeOption?: "About" | "Events" | "Gallery" | "Branches" | "Contact Us" | "CodeRED" | "Register";
}
const NavBar = () => {

    return (
      <nav className="flex flex-row justify-between mx-8 mt-2 text-center">
        <div className="flex justify-between gap-4">
            <Link href="/">
                <img
                src="/icons/logo.svg"
                alt="Logo"
                className="mx-auto"
                />
            </Link>
            <h1 className="my-1 font-extrabold text-2xl text-red-700">CougarCS</h1>
        </div>
        <ul className="flex gap-4 px-8 mt-4">
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/branches">Branches</Link>
          </li>
          <li>
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link href="/codered">CodeRED</Link>
          </li>
            <li className="">
                <Link className="bg-red-700 text-white px-4 py-2" href="/join">Register</Link>
            </li>
        </ul>
      </nav>
    );
}



export default NavBar