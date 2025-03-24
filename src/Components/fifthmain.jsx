import imagegallerycone from "../Data/images/desktop/imagegallerycone.jpg";
import imagegalleryorange from "../Data/images/desktop/imagegalleryorange.jpg";
import imagegallerysugarcubes from "../Data/images/desktop/imagegallerysugarcubes.jpg";
import imagegallerymilkbottles from "../Data/images/desktop/imagegallerymilkbottles.jpg"

const FifthMain = () => {
    const images = [
        { img: imagegallerymilkbottles, alt:"milk"},
        { img: imagegalleryorange, alt: "Orange" },
        { img: imagegallerycone, alt: "Cone" },
        { img: imagegallerysugarcubes, alt: "Sugar Cubes" },
    ];

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-[10%] ">
                {images.map((image, index) => (
                    <img key={index} src={image.img} alt={image.alt} className="w-full h-auto object-cover" />
                ))}
            </div>
        </>
    );
};

export default FifthMain;
