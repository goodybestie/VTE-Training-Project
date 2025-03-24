import imagetransform from "../Data/images/desktop/imagetransform.jpg";

const FirstMain = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center mx-auto ">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-4 pl-[10%] p-[20px] ">
                <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800">Transform your <br /> brand</h1>
                <p className="text-gray-700 text-lg leading-relaxed  ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consequuntur reiciendis fuga velit minima voluptatum
                    illo ab 
                </p>
                <button className=" text-black font-bold hover:bg-yellow-400 hover:text-white transition duration-300">
                    Learn More
                </button>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
                <img src={imagetransform} alt="Transform" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default FirstMain;
