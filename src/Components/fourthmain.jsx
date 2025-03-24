import imageemily from "../Data/images/imageemily.jpg";
import imagethomas from "../Data/images/imagethomas.jpg";
import imagejennie from "../Data/images/imagejennie.jpg";

const FourthMain = () => {
    return (
        <>
            {/* Section Title */}
            <div className="text-center mt-[30%] md:mt-[20%] mb-10">
                <h1 className="text-gray-800 text-1xl md:text-2xl font-bold tracking-widest mb-[5%]">
                    CLIENT TESTIMONIALS
                </h1>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-5">
                {/* Emily */}
                <div className="flex flex-col items-center text-center">
                    <img src={imageemily} alt="Emily" className="w-24 h-24 rounded-full object-cover mb-4" />
                    <p className="text-gray-600 mt-8 max-w-md">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat in molestias nam
                        provident pariatur, excepturi debitis quas repudiandae harum."
                    </p>
                    <div className="mt-8">
                    <h1 className="text-lg font-bold mt-4">Emily F.</h1>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                    </div>
                </div>

                {/* Thomas */}
                <div className="flex flex-col items-center text-center">
                    <img src={imagethomas} alt="Thomas" className="w-24 h-24 rounded-full object-cover mb-4" />
                    <p className="text-gray-600 mt-8 max-w-md">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat in molestias nam
                        provident pariatur, excepturi debitis quas repudiandae harum."
                    </p>
                    <div className="mt-8">
                    <h1 className="text-lg font-bold mt-4">Thomas S.</h1>
                    <p className="text-sm text-gray-500">Cheif Opering Officer</p>
                    </div>
                </div>

                {/* Jennie */}
                <div className="flex flex-col items-center text-center">
                    <img src={imagejennie} alt="Jennie" className="w-24 h-24 rounded-full object-cover mb-4" />
                    <p className="text-gray-600 max-w-md mt-8">
                        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat in molestias nam
                        provident pariatur, excepturi debitis quas repudiandae harum."
                    </p>
                    <div className="mt-8">
                    <h1 className="text-lg font-bold mt-4">Jennie F.</h1>
                    <p className="text-sm text-gray-500">Business Owner</p>
                </div>
                </div>
            </div>
        </>
    );
};

export default FourthMain;
