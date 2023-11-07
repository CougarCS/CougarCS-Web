import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

interface ActiveOption {
    activeOption?: "About" | "Events" | "Gallery" | "Branches" | "Contact Us" | "CodeRED" | "Register";
}

const NavBar = () => {
    const [isBranchesOpen, setBranchesOpen] = useState(false);

    const toggleBranchesDropdown = () => {
        setBranchesOpen(!isBranchesOpen);
    };

    const handleMouseEnter = () => {
        setBranchesOpen(true);
    };

    const handleMouseLeave = () => {
        setBranchesOpen(false);
    };

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
                <li
                    className="relative flex items-center"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Branches 
                    <Image
                      src="/images/dropdownicon.svg"
                      alt="dropdown-icon"
                      width='15'
                      height='15'
                      className="ml-2" 
                    />
                    {isBranchesOpen && (
                         <ul className="absolute left-0 top-5 w-20 bg-white border border-gray-300 shadow-lg p-2">
                            <li>
                                <Link href="/webdev" className="hover:font-semibold">WebDev</Link>
                            </li>
                            <li>
                                <Link href="/tutoring" className="hover:font-semibold">Tutoring</Link>
                            </li>
                            <li>
                                <Link href="/infosec" className="hover:font-semibold">Infosec</Link>
                            </li>

                        </ul>
                    )}
                </li>
                <li>
                    <Link href="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link href="/codered">CodeRED</Link>
                </li>
                <li>
                    <Link className="bg-red-700 text-white px-4 py-2" href="/join">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
