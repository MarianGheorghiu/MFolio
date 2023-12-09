'use client';
import { useState } from 'react';
import { NAV_LINKS } from './constants';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import Link from 'next/link';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const openNavbar = (
        <button
            onClick={() => setNavbarOpen(true)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
            <Bars3Icon className="h-5 w-5" />
        </button>
    );

    const closeNavbar = (
        <button
            onClick={() => setNavbarOpen(false)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
        >
            <XMarkIcon className="h-5 w-5" />
        </button>
    );

    const navLinkItems = (
        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {NAV_LINKS.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0  z-10 bg-[#121212] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={'/'}
                    className="text-2xl md:text-2xl text-white font-semibold"
                >
                    Marian <span className="text-lg align-middle">|</span> CEO
                    MCorp
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? openNavbar : closeNavbar}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    {navLinkItems}
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={NAV_LINKS} />}
        </nav>
    );
};

export default Navbar;
