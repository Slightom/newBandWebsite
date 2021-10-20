import { Grid } from "@mui/material";
import React from "react";
import { Img, ImgWrap } from "../contact/ContactElements";
import { MoviesContainer, MoviesWrapper, YouTubeSquare } from "./MoviesElements";


export const Movies = () => {

    return (
        <>
            <MoviesContainer id={'movies'}>
                <MoviesWrapper>
                    <p>this tab is unavailable now</p>
                    {/* <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div class="homeSliderSquare">
                                <div class="videoWrapper">
                                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                        frameborder='10'
                                        allow='autoplay; encrypted-media'
                                        allowfullscreen
                                        title='video'
                                        class="videoWrapper-item"
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div class="homeSliderSquare">
                                <div class="videoWrapper">
                                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                        frameborder='10'
                                        allow='autoplay; encrypted-media'
                                        allowfullscreen
                                        title='video'
                                        class="videoWrapper-item"
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div class="homeSliderSquare">
                                <div class="videoWrapper">
                                    <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                        frameborder='10'
                                        allow='autoplay; encrypted-media'
                                        allowfullscreen
                                        title='video'
                                        class="videoWrapper-item"
                                    />
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div class="homeSliderSquare">
                                <div class="videoWrapper" >
                                    <a href="https://www.youtube.com/channel/UCHbIIqaBpcEKG7cv3O5r5OQ" target="_blank">
                                        <img id='ytimage' class="videoWrapper-item" src={require('../../images/yt2.png').default} width='100%' height='100%' />
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    </Grid> */}
                    {/* <div style={{ gridColumn: '1/2', gridRow: '1/2', border: '1px solid green' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <div>cssd</div>
                        </div>
                    </div>
                    <div style={{ gridColumn: '2/3', gridRow: '1/2', border: '1px solid green' }}>
                        <div style={{ width: '100%', height: 'auto' }}>
                            <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                                frameborder='10'
                                allow='autoplay; encrypted-media'
                                allowfullscreen
                                title='video'
                                width="600" height="400"
                            />
                        </div>
                    </div>
                    <div style={{ gridColumn: '1/2', gridRow: '2/3', border: '1px solid green' }}>
                        <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                            frameborder='10'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                        />
                    </div>
                    <div style={{ gridColumn: '2/3', gridRow: '2/3', textAlign: 'center', border: '1px solid green' }}>
                        <div style={{ border: '2px solid red', width: '80%', height: '100%', textAlign: 'center', margin: 'auto' }}>
                            <p>scs</p>
                           <ImgWrap>
                                <Img src={require('../../images/youtube.png').default} />
                            </ImgWrap>
                        </div>
                    </div> */}
                </MoviesWrapper>
            </MoviesContainer>
        </>
    );
};
