import iconfacebook from "../Data/images/iconfacebook.svg";
import iconinstagram from "../Data/images/iconinstagram.svg";
import icontwitter from "../Data/images/icontwitter.svg";
import iconpinterest from "../Data/images/iconpinterest.svg";

const Footer = () => {
    const images = [
        { img: iconfacebook, alt: "Facebook" },
        { img: iconinstagram, alt: "Instagram" },
        { img: icontwitter, alt: "Twitter" },
        { img: iconpinterest, alt: "Pinterest" },
    ];

    return (
        <div className="bg-dark-moderate-cyan">
            <div className="flex flex-col items-center text-center py-[7%]">
                {/* Logo */}
                <h1 className="text-3xl font-bold text-gray-700 mb-4">sunnyside</h1>

                {/* Navigation Links */}
                <div className="flex gap-6 text-gray-600 text-lg font-medium">
                    <p className="cursor-pointer hover:text-white">About</p>
                    <p className="cursor-pointer hover:text-white">Services</p>
                    <p className="cursor-pointer hover:text-white">Project</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 mt-6 justify-center">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.img}
                            alt={image.alt}
                            className="w-6 h-6 cursor-pointer hover:filter hover:brightness-0 hover:invert"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
