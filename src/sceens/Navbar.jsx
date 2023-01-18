import { useState } from 'react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

import mobileIcon from '../assets/menu-icon.svg';
import mobileCloseIcon from '../assets/close-icon.svg';

const PAGES = ['Home', 'Skills', 'Projects', 'Testimonials', 'Contact'];

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${
                selectedPage === lowerCasePage ? 'text-yellow' : ''
            } hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navbarBg = isTopOfPage ? '' : 'bg-slate-800';

    const mobileButtonNav = (
        <button
            className="rounded-full bg-red p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
            <img src={mobileIcon} alt="menu" />
        </button>
    );

    const mobileNav = (
        <div className="fixed right-0 bottom-0 h-full bg-slate-800 w-[200px]">
            {/* close icon */}
            <div className="flex justify-end mr-2 p-5">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <img src={mobileCloseIcon} alt="close-mobile-menu" />
                </button>
            </div>

            {/* mobile menu items */}
            <div className="flex flex-col gap-6 ml-[30px]  text-2xl text-white">
                {PAGES.map((page, i) => (
                    <Link
                        key={i}
                        page={page}
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </div>
        </div>
    );

    const desktopNav = (
        <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            {PAGES.map((page, i) => (
                <Link
                    key={i}
                    page={page}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            ))}
        </div>
    );

    return (
        <nav className={`${navbarBg} z-40 w-full fixed top-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">MG</h4>

                {isAboveSmallScreens ? desktopNav : mobileButtonNav}
                {!isAboveSmallScreens && isMenuToggled && mobileNav}
            </div>
        </nav>
    );
};

export default Navbar;
