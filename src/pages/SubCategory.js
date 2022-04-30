import React, { useState, useEffect } from 'react';

import Carousel, { Modal, ModalGateway } from "react-images";
import '../pages/contact.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RouteDetail from '../component/RouteDetail';
import { useSelector } from 'react-redux';
import Image from 'material-ui-image'

const SubCategory = (props) => {

    const selectedSubcategory = useSelector(state => state.selectedCaterory);
    console.log('selectedSubcategory', selectedSubcategory, props);
    const pathDetails = selectedSubcategory?.split('$_$');
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [categorySelected, setCategory] = useState(pathDetails[0]);
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://artrueinfotech.com/dummy.php');
            const upadtedCategory = await response.json();
            setImageArray(upadtedCategory);
        }

        fetchMyAPI()
    }, []);
    let categoryList = [];
    let staticPhotos = [];

    imageArray?.response?.forEach(({ images, name }) => {
        categoryList.push(name);
        images.forEach(img => {
            staticPhotos.push({
                src: img,
                category: name
            });
        })
    });

    let categoryPhotos = staticPhotos;
    let isAll = false;
    if (categorySelected === "All") {
        categoryPhotos = categoryList.map(categorys => staticPhotos.find(ph => ph.category === categorys));
    } else {
        isAll = false;
        categoryPhotos = staticPhotos.filter(catePhoto => catePhoto.category === categorySelected);
    }

    const openLightbox = (index, photo) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const marginValue = isAll ? '50px' : 0;

    return (
        <>
            <RouteDetail route="GALLERY" path={pathDetails[1]} />
            <div className="gallery-container">

                <div className="gallery-grid">
                    {categoryPhotos.map((photo, index) => {
                        return (
                            <React.Fragment>
                                <div className='imageContainer'>
                                    <Image
                                        style={{
                                            background: 'rgba(100, 100, 100, 0.5)',
                                        }}
                                        src={photo.src} />
                                    <div className='mybtnwrapper'>
                                        <div className='mybtn'>
                                            <AddCircleOutlineIcon fontSize='large' onClick={() => openLightbox(index, photo)} style={{ marginLeft: marginValue, position: 'absolute' }}>add_circle</AddCircleOutlineIcon>
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
                                views={categoryPhotos.map(x => ({
                                    src: x.src,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

            </div>
        </>
    )
}

export default SubCategory;
