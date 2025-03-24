import imagegraphicdesign from "../Data/images/desktop/imagegraphicdesign.jpg";
import imagephotography from "../Data/images/desktop/imagephotography.jpg";

const ThirdMain = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Graphic Design Section */}
            <div className="relative h-auto">
                <img src={imagegraphicdesign} alt="Graphic Design" className="w-full h-auto  object-cover" />
                <div className="  -mt-[60%] md:-mt-[40%] lg:-mt-[30%]  text-center text-black p-6">
                    <h1 className="text-2xl md:text-3xl font-bold  ">Graphic Design</h1>
                    <p className=" text-center leading-relaxed pl-[10px]  mt-5 w-full text-sm">
                       Great design makes you memorable. 
                       we deliver <br /> artwork that underscores your brand message <br /> and captures potential client attention.


                    </p>
                    
                </div>
            </div>

            {/* Photography Section */}
            <div className="relative  h-auto">
                <img src={imagephotography} alt="Photography" className="w-full h-auto  object-cover" />
                <div className="  -mt-[50%] md:-mt-[40%] lg:-mt-[30%]  text-center text-black p-6">
                    <h1 className="text-2xl md:text-3xl font-bold ">Photography</h1>
                    <p className="text-sm text-center leading-relaxed pl-[10px]  w-full  mt-5">
                        increase your credibility by getting the most <br /> stunning,
                         high quality photos that improve your <br /> business image. 
                       
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default ThirdMain;
