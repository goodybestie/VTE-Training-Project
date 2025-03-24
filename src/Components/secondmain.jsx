import imagestandout from "../Data/images/desktop/imagestandout.jpg";

const SecondMain = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around items-center mx-auto ">
            {/* Image */}
            <div className="md:w-1/2 ">
                <img src={imagestandout} alt="Standout" className="w-full h-auto object-cover" />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left space-y-4 p-[30px]  ">
                <h1 className=" text-2xl md:text-4xl font-extrabold text-gray-800">Stand out to the right audience</h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consequuntur reiciendis fuga velit minima voluptatum
                    illo ab veritatis. Temporibus.
                </p>
                <button className="  text-black font-bold hover:bg-red-500 hover:text-white transition duration-300">
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default SecondMain;
