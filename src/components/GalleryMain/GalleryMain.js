import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GalleryLoader, Img, ImgWrap, PhotosContainer, PhotosWrapper } from "./GalleryMainElements";


export const GalleryMain = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedCounter, setLoadedCounter] = useState(0);

    return (
        <>
            <PhotosContainer id={'galleryMain'}>
                <PhotosWrapper>
                    <Link to='/gallery'>
                        <ImgWrap>
                            <Img src={require('../../images/gallery.jpg').default} />
                        </ImgWrap>
                    </Link>
                </PhotosWrapper>
            </PhotosContainer>
        </>
    );
};
