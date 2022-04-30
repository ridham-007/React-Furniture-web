import React, { useState, useEffect } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Gallerys = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch('https://artrueinfotech.com/dummy.php');
            const json = await response.json();
            setImageArray(json);
        }

        fetchMyAPI()
    }, []);

    const updatedImages = imageArray?.response?.filter(img => img.name === "Common");
    const staticPhotos = [];
    updatedImages?.forEach(({ images }) => {
        images.forEach(img => {
            staticPhotos.push({
                src: img,
            });
        })
    });
    const openLightbox = (index, photo) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div>

            <div className="gallery-container1">
                <div style={{ textAlign: 'center', maxWidth: '300px', margin: 'auto', width: '50%', color: 'white', borderBottom: '2px solid #feb70e', fontWeight: 'bold' }}><h2 >TOP PICKS</h2></div><br />
                <div className="gallery-grid">
                    {staticPhotos.map((photo, index) => {
                        return (
                            <React.Fragment>
                                <div className='imageContainer'>
                                    <img src={photo.src} alt={index} />
                                    <div className='mybtnwrapper'>
                                        <div className='mybtn'>
                                            <AddCircleOutlineIcon fontSize='large' onClick={() => openLightbox(index, photo)} >add_circle</AddCircleOutlineIcon>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>)
                    })}
                </div>

                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={staticPhotos.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

            </div>
        </div>
    )
}

export default Gallerys;