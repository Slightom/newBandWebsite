import React, { useCallback, useEffect, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { GalleryLoader, PhotosContainer, PhotosWrapper } from "./PhotosElements";


export const Photos = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedCounter, setLoadedCounter] = useState(0);

    useEffect(() => {
        if (loadedCounter >= 24) {
            setLoading(false);
        }
    }, [loadedCounter])

    const photos = [
        {
            src: require('../../images/gallery/g1.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g2.jpg').default,
            width: 5,
            height: 7,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g3.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g4.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g5.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g6.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g7.jpg').default,
            width: 1,
            height: 1,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g8.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g9.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g10.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g11.jpg').default,
            width: 5,
            height: 7,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g12.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g13.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g14.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g15.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g16.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g17.jpg').default,
            width: 5,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g18.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g19.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g20.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g21.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g22.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g23.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/gallery/g24.jpg').default,
            width: 4,
            height: 3,
            loading: "lazy",
            onLoad: () => setLoadedCounter(loadedCounter + 1),
            className: 'galleryPhoto'
        }
    ]

    const photosThumbnails = [
        {
            src: require('../../images/galleryThumbnails/g1.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g2.jpg').default,
            width: 5,
            height: 7,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g3.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g4.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g5.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g6.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g7.jpg').default,
            width: 1,
            height: 1,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g8.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g9.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g10.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g11.jpg').default,
            width: 5,
            height: 7,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g12.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g13.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g14.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g15.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g16.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g17.jpg').default,
            width: 5,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g18.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g19.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g20.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g21.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g22.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g23.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        },
        {
            src: require('../../images/galleryThumbnails/g24.jpg').default,
            width: 4,
            height: 3,
            className: 'galleryPhoto'
        }
    ]

    const photos2 = [
        {
            src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
            width: 1,
            height: 1
        },
        {
            src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
            width: 3,
            height: 4
        },
        {
            src: "https://source.unsplash.com/PpOHJezOalU/800x599",
            width: 4,
            height: 3
        },
        {
            src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
            width: 4,
            height: 3
        }
    ];
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
                    {/* {loading && <img src={require('../../images/gallery/g1.jpg').default} />} */}
                    <>
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
                    </>
                </PhotosWrapper>
            </PhotosContainer>
        </>
    );
};
