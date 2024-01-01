import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageSlider = ({ sliderImg }) => {
    return (
        <>
            <ImageGallery items={sliderImg} />
        </>
    )
}
export default ImageSlider