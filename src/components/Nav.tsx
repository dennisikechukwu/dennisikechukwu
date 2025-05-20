"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    function toggleNavbar() {
        setTimeout(() => setOpen((prev) => !prev), 20); // Small delay to prevent race conditions
    }

    function handleMenuClick(link: string, e: React.MouseEvent) {
        e.stopPropagation(); // Prevents unwanted event bubbling
        setActiveLink(link);
        setOpen(false);
    }

    return (
        <nav className="p-6 bg-black rounded-bl-xl rounded-br-xl sticky top-0 z-50">
            <div className="flex justify-between items-center text-[#eae4e4]">
                {/* Logo */}
                <Link href="/">
                    <span className="text-2xl font-semibold font-sans bg-gradient-to-r from-[#ffffff] via-[#eae4e4] to-transparent bg-clip-text text-transparent cursor-pointer">
                        Dennis.I
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-4">
                    {[
                        { name: "Projects", href: "/#projects" },
                        { name: "Skills", href: "/#skills" },
                        { name: "Get in Touch", href: "/#contact" },
                    ].map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span
                                className={`px-4 py-3 rounded-full cursor-pointer border border-[#a3a2a2] ${
                                    activeLink === item.name ? "bg-black" : "bg-[#0e0e0e]"
                                }`}
                                onClick={(e) => handleMenuClick(item.name, e)}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex border border-[#a3a2a2] p-1 rounded-full">
                    <button onClick={toggleNavbar} className="w-10 h-10 flex items-center justify-center">
                        {open ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div
                    key={open ? "open" : "closed"} // Forces fresh render
                    className="md:hidden mt-4 flex flex-col gap-3 bg-black p-4 rounded-lg text-center fixed left-0 w-full z-10"
                >
                    {[
                        { name: "Projects", href: "/#projects" },
                        { name: "Skills", href: "/#skills" },
                        { name: "Get in Touch", href: "/#contact" },
                    ].map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span
                                className={`block text-white py-2 rounded-md border-[1.5px] border-[#242222] cursor-pointer ${
                                    activeLink === item.name ? "bg-[#0e0e0e]" : ""
                                }`}
                                onClick={(e) => handleMenuClick(item.name, e)}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Nav;
