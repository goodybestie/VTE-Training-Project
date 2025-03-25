import imageheader from "../Data/images/desktop/imageheader.jpg";
import imageheader1 from "../Data/images/mobile/imageheader1.jpg";

import FifthMain from "./fifthmain";
import FirstMain from "./firstmain";
import FourthMain from "./fourthmain";
import SecondMain from "./secondmain";
import ThirdMain from "./thridmain";
import { useState } from "react";
import iconarrowdown from "../Data/images/iconarrowdown.svg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = ["About", "Services", "Projects", "Contact"];

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-screen flex flex-col items-center text-center">

                {/* Background Image */}
                <div className="absolute w-full h-full">
                    <picture>
                        <source srcSet={imageheader1} media="(max-width: 720px)" />
                        <img src={imageheader} alt="hero" className="w-full h-full object-cover object-center" />
                    </picture>
                </div>

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
                    <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Sunnyside</h1>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white text-2xl p-2 rounded-md"
                        onClick={handleMenuClick}
                    >
                        ☰
                    </button>

                    {/* Mobile & Desktop Menu */}
                    <div className={`md:flex hidden gap-8 items-center`}>
                        {navLinks.slice(0, 3).map((link, index) => (
                            <p key={index} className="text-white text-lg cursor-pointer hover:underline active:text-gray-400">{link}</p>
                        ))}
                        <button className="bg-white text-black rounded-full px-6 py-2 font-bold uppercase tracking-wide shadow-md hover:bg-gray-200 active:scale-95">
                            {navLinks[3]}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col absolute top-30 right-8 bg-white p-6 rounded shadow-lg w-[80%] z-30 
    before:content-[''] before:absolute before:-top-5 before:right-0 before:border-[50px] before:border-transparent before:border-r-white">

                        {navLinks.slice(0, 3).map((link, index) => (
                            <p
                                key={index}
                                className="text-black text-lg cursor-pointer  py-2 ">
                                {link}
                            </p>
                        ))}

                        <button className="bg-yellow-400 text-black rounded-full px-6 py-2 font-bold uppercase tracking-wide shadow-md hover:bg-yellow-500 active:scale-95 mt-3">
                            {navLinks[3]}
                        </button>
                    </div>
                )}


                {/* Hero Text */}
                <div className="absolute top-[30%] text-white text-3xl md:text-4xl font-extrabold tracking-widest z-10">
                    WE ARE CREATIVES
                </div>
                <img src={iconarrowdown} className="absolute top-[45%]" />
            </div>

            {/* Main Sections */}
            <FirstMain />
            <SecondMain />
            <ThirdMain />
            <FourthMain />
            <FifthMain />
        </>
    );
};

export default Navbar;
