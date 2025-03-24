import imagegraphicdesign from "../Data/images/desktop/imagegraphicdesign.jpg";
import imagephotography from "../Data/images/desktop/imagephotography.jpg";

const ThirdMain = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Graphic Design Section */}
            <div className="relative h-[400px] md:h-[500px] lg:h-auto">
                <img src={imagegraphicdesign} alt="Graphic Design" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-end text-black text-center p-6 pb-8">
                    <h1 className="text-2xl md:text-3xl font-bold">Graphic Design</h1>
                    <p className="max-w-[100%] md:max-w-[100%] lg:max-w-[60%] text-sm md:text-base leading-relaxed mt-3">
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client.
                    </p>
                </div>
            </div>

            {/* Photography Section */}
            <div className="relative h-[400px] md:h-[500px] lg:h-auto">
                <img src={imagephotography} alt="Photography" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-end text-black text-center p-6 pb-8">
                    <h1 className="text-2xl md:text-3xl font-bold">Photography</h1>
                    <p className="max-w-[100%] md:max-w-[100%] lg:max-w-[60%] text-sm md:text-base leading-relaxed mt-3">
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ThirdMain;
