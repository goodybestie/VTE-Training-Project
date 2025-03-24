import imageheader from "../Data/images/desktop/imageheader.jpg";
import FifthMain from "./fifthmain";
import FirstMain from "./firstmain";
import FourthMain from "./fourthmain";
import SecondMain from "./secondmain";
import ThirdMain from "./thridmain";
import { useState } from "react";
import iconarrowdown from "../Data/images/iconarrowdown.svg";
import imagetransform from "../Data/images/desktop/imagetransform.jpg";

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
                <div
                    className="absolute inset-0 md:w-full w-screen h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${imageheader})` }}
                ></div>

                {/* Navbar */}
                <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-20">
                    <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide">Sunnyside</h1>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        className="lg:hidden text-white text-2xl  p-2 rounded-md" 
                        onClick={handleMenuClick}
                    >
                        {menuOpen ? "☰" : "☰"}
                    </button>
                    
                    {/* Mobile & Desktop Menu */}
                    <div className={`lg:flex gap-8 items-center transition-all duration-300 
                        ${menuOpen ? "flex flex-col absolute top-30 right-6 bg-white p-4 rounded shadow-lg w-[80%] z-30 before:content-[''] before:absolute before:-top-3 before:right-6 before:border-8 before:border-transparent before:border-b-white" : "hidden"}`}>

                        {navLinks.slice(0, 3).map((link, index) => (
                            <p key={index} className="text-black lg:text-white text-lg cursor-pointer hover:underline active:text-gray-400">{link}</p>
                        ))}

                        {/* Contact Button */}
                        <button className="md:bg-white bg-yellow-400 sm:text-black rounded-full px-6 py-2 text-black font-bold uppercase tracking-wide shadow-md hover:bg-yellow-500 active:scale-95">
                            {navLinks[3]}
                        </button>

                    </div>
                </div>

                {/* Hero Text */}
                <div className="absolute top-[30%] text-white text-3xl md:text-5xl font-extrabold tracking-widest z-10">
                    WE ARE CREATIVES
                </div>
                <img src={iconarrowdown} className="absolute top-[45%]" />
            </div>

            {/* Overlay Image on Small Screens */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none top-[100%]"
                >
                    <img src={imagetransform} alt="Transform" className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover shadow-lg" />
                </div>
            )}

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
