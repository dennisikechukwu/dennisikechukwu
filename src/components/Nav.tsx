"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    function toggleNavbar() {
        setOpen(!open);
    }

    // Add string type to link parameter
    function handleMenuClick(link: string) {
        setActiveLink(link);
        setOpen(false);
    }

    return (
        <nav className="p-6 bg-[#151414] rounded-bl-xl rounded-br-xl  sticky top-0 z-50">
            <div className="flex justify-between items-center text-[#eae4e4]">
                {/* Logo */}
                <Link href="/">
                    <span className="text-xl font-semibold font-serif bg-gradient-to-r from-[#ffffff] via-[#eae4e4] to-transparent bg-clip-text text-transparent cursor-pointer">
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
                                className={`px-4 py-3 rounded-full cursor-pointer ${
                                    activeLink === item.name ? "bg-[#151414]" : "bg-[#242222]"
                                }`}
                                onClick={() => handleMenuClick(item.name)}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex bg-[#242222] p-2 rounded-full">
                    <button onClick={toggleNavbar} className="w-10 h-10 flex items-center justify-center">
                        {open ? <X className="text-3xl" /> : <Menu className="text-3xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {open && (
                <div className="md:hidden mt-4 flex flex-col gap-3 bg-[#151414] p-4 rounded-lg text-center fixed left-0 w-full">
                    {[
                        { name: "Projects", href: "/#projects" },
                        { name: "Skills", href: "/#skills" },
                        { name: "Get in Touch", href: "/#contact" },
                    ].map((item) => (
                        <Link key={item.name} href={item.href}>
                            <span
                                className={`block text-white py-2 rounded-md border-[1.5px] border-[#242222] cursor-pointer ${
                                    activeLink === item.name ? "bg-[#2c2b2b]" : ""
                                }`}
                                onClick={() => handleMenuClick(item.name)}
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
