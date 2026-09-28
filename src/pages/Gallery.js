import React, { useState, useEffect } from 'react';

import Carousel, { Modal, ModalGateway } from "react-images";
import './contact.scss';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RouteDetail from '../component/RouteDetail';
import { useDispatch } from 'react-redux';
import { selectedCaterory } from '../component/Reducer/action';
import Image from 'material-ui-image'
import { useNavigate } from 'react-router-dom';


const Gallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [categorySelected, setCategory] = useState("All");
    const [pathName, setPathName] = useState("Home /Gallery");
    const [imageArray, setImageArray] = useState([]);

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch('https://artrueinfotech.com/dummy.php');
            const json = await response.json();
            setImageArray(json);
        }

        fetchMyAPI()
    }, []);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let categoryList = [];
    let staticPhotos = [];

    const updatedImages = imageArray?.response?.filter(img => img.name !== "Common");
    updatedImages?.forEach(({ images, name }) => {
        categoryList.push(name);
        images.forEach(img => {
            staticPhotos.push({
                src: img,
                category: name
            });
        })
    });

    let categoryPhotos = staticPhotos;
    let isAll = true;
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

    const openCategory = (index, photo) => {
        dispatch(selectedCaterory(photo + '$_$' + pathName + '/' + photo));

        setPathName(pathName + '/' + photo);
        setCategory(photo.category);
        navigate(index);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const marginValue = isAll ? '50px' : 0;
    return (
        <>
            <RouteDetail route="GALLERY" path={pathName} />
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
                                            {isAll && (<ArrowCircleRightIcon fontSize='large' onClick={() => openCategory('/SubCategory', photo.category)} style={{ marginRight: '52px', position: 'absolute' }}>Category</ArrowCircleRightIcon>)}
                                            <AddCircleOutlineIcon fontSize='large' onClick={() => openLightbox(index, photo)} style={{ marginLeft: marginValue, position: 'absolute' }}>add_circle</AddCircleOutlineIcon>
                                            <h4>{photo.category}</h4>
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
                                    src: require(`${x.src}`).default,
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>

            </div>
        </>
    )
}

export default Gallery;
