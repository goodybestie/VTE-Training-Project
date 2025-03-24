import imageheader from "../Data/images/desktop/imageheader.jpg";
import FifthMain from "./fifthmain";
import FirstMain from "./firstmain";
import FourthMain from "./fourthmain";
import SecondMain from "./secondmain";
import ThirdMain from "./thridmain";
import { useState } from "react";
import iconarrowdown from "../Data/images/iconarrowdown.svg"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = ["About", "Services", "Projects", "Contact"];

    return (
        <>
            {/* Hero Section */}
            <div className="relative h-[650px] flex flex-col items-center text-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${imageheader})` }}
                >
                    {/* Dark Overlay */}
                </div>

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-10">
                    <h1 className="text-white text-3xl font-bold tracking-wide">Sunnyside</h1>
                    
                    {/* Mobile Menu Button */}
                    <button className="lg:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                    
                    {/* Desktop Menu */}
                    <div className={`lg:flex gap-8 items-center ${menuOpen ? "flex flex-col absolute top-16 right-6 bg-white p-4 rounded shadow-lg" : "hidden"}`}>
                        {navLinks.slice(0, 3).map((link, index) => (
                            <p key={index} className="text-black lg:text-white text-lg cursor-pointer hover:underline active:text-gray-400">{link}</p>
                        ))}
                        <button className="bg-white rounded-full px-6 py-2 text-black font-bold uppercase tracking-wide shadow-md hover:bg-gray-200 active:scale-95">
                            {navLinks[3]}
                        </button>
                    </div>
                </div>

                {/* Hero Text */}
                <div className="absolute top-[25%]  text-white text-3xl md:text-5xl font-extrabold tracking-widest z-10">
                    WE ARE CREATIVES
                </div>
                <img src={iconarrowdown} className="absolute top-[43%] " />
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
