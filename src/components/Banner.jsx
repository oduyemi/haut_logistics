import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const Banner = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Box className="banner_section layout_padding">
            <Slider {...settings}>
                <Box className="carousel-item">
                    <Box className="container-fluid">
                        <Box className="row">
                            <Box className="col-md-6 padding_0">
                                <Box className="bg_1">
                                    <Box className="padding_left0">
                                        <h1 className="best_text">
                                            Canada to<br />
                                            Lagos
                                        </h1>
                                        <Typography
                                            variant="h5"
                                            paragraph
                                            className="many_text"
                                            sx={{
                                                fontWeight: "300"
                                            }}
                                            >
                                            Cargo exports from Canada to anywhere in Nigeria.
                                        </Typography>
                                        <Box className="read_bt"><Link to="">Track Delivery</Link></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="col-md-6 padding_0">
                                <Box className="image_1"><img src={require("../assets/images/ba.jpg")} alt="Banner Image" /></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="carousel-item">
                    <Box className="container-fluid">
                        <Box className="row">
                            <Box className="col-md-6 padding_0">
                                <Box className="bg_1">
                                    <Box className="padding_left0">
                                        <h1 className="best_text">
                                            Toronto to<br />
                                            Canada
                                        </h1>
                                        <Typography variant="h5" sx={{fontWeight:"300"}} paragraph className="many_text">
                                            Relocation service from Toronto to any province in Canada.
                                        </Typography>
                                        <Box className="read_bt"><Link to="">Track Delivery</Link></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="col-md-6 padding_0">
                                <Box className="image_1"><img src={require("../assets/images/bb.jpg")} alt="Banner Image" /></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="carousel-item">
                    <Box className="container-fluid">
                        <Box className="row">
                            <Box className="col-md-6 padding_0">
                                <Box className="bg_1">
                                    <Box className="padding_left0">
                                        <h1 className="best_text">
                                            Canada to<br />
                                            Nigeria
                                        </h1>
                                        <Typography variant="h5" sx={{fontWeight:"300"}} paragraph className="many_text">
                                            Sea cargo export. Ship your cars, barrels, goods, suitcase and much more.
                                        </Typography>
                                        <Box className="read_bt"><Link to="">Track Delivery</Link></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="col-md-6 padding_0">
                                <Box className="image_1"><img src={require("../assets/images/bc.jpg")} alt="Banner Image" /></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Slider>
        </Box>
    );
};
