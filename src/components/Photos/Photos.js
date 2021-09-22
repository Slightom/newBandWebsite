import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { PhotosContainer, PhotosWrapper } from "./PhotosElements";


export const Photos = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const photos = [
        {
            src: require('../../images/gallery/g1.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g2.jpg').default,
            width: 5,
            height: 7,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g3.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g4.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g5.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g6.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g7.jpg').default,
            width: 1,
            height: 1,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g8.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g9.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g10.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g11.jpg').default,
            width: 5,
            height: 7,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g12.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g13.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g14.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g15.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g16.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g17.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g18.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g19.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g20.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g21.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g22.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g23.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g24.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        }
    ]

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <PhotosContainer id={'photos'}>
                <PhotosWrapper>
                    <Gallery photos={photos} onClick={openLightbox} />
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </PhotosWrapper>
            </PhotosContainer>
        </>
    );
};
