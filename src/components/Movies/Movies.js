import { Grid } from "@mui/material";
import React from "react";
import { Img, ImgWrap } from "../contact/ContactElements";
import { MoviesContainer, MoviesWrapper, YouTubeSquare } from "./MoviesElements";


export const Movies = () => {

    return (
        <>
            <MoviesContainer id={'movies'}>
                <MoviesWrapper>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <div class="homeSliderSquare">
                                <div class="videoWrapper">
                                    <iframe
                                        src="https://www.youtube.com/embed/z0nwZrmaW1k"
                                        frameborder='10'
                                        allowfullscreen
                                        title='video'
                                        class="videoWrapper-item"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <div class="homeSliderSquare">
                                <div class="videoWrapper">
                                    <iframe src='https://www.youtube.com/embed/oP979OnIq-g'
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
                                    <iframe src='https://www.youtube.com/embed/UKIn-sQYc8Y'
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
                    </Grid>
                </MoviesWrapper>
            </MoviesContainer>
        </>
    );
};
