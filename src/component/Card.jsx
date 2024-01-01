
import { useState } from "react";
import ImageSlider from "./ImageSlider";
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
const Card = ({ category }) => {
    const [isImgClick, setIsImgClick] = useState(false)
    return (<>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {category && category.imageSrc.map(result => {
                return (
                    <div onClick={() => setIsImgClick(!isImgClick)} key={Math.random()}  >
                        <img className="h-auto max-w-full rounded-lg" src={result.original} alt="" />
                    </div>
                )
            })}
        </div>
        <Modal
            isOpen={isImgClick}
            contentLabel="Example Modal"
            style={customStyles}
            onRequestClose={() => setIsImgClick(false)}
        >
            <ImageSlider sliderImg={category.imageSrc} />
        </Modal>

    </>)
}
export default Card