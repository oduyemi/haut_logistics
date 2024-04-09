import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export const FAQs = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: (
            <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                <i className="fa fa-angle-left fas" style={{ fontSize: "44px" }} aria-hidden="true"></i>
            </Link>
        ),
        nextArrow: (
            <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                <i className="fa fa-angle-right fas" style={{ fontSize: "44px" }} aria-hidden="true"></i>
            </Link>
        )
    };

    return (
      <Box className="about_section layout_padding">
      <Box className="container-fluid">
        <Box className="row">
          <Box className="col-md-6 padding_0">
            <Slider {...settings}>
              <Box className="carousel-item">
                    <Box className="col-md-6 padding_0">
                      <Box className="bg_4">
                          <h1 className="readable_text">Question</h1>
                          <p className="lorem_text">
                            <b>What is the best way to keep track of inventory?</b><br/><br/>
                          </p>
                          <h1 className="readable_text pt-1">Response</h1>
                          <p className="lorem_text">
                            Inventory tracking should be based on the number of times
                            you count your inventory and the technology used. The
                            two general types of tracking include-<br/>
                            Full inventory counting- This tracking method uses staff
                            members&apos; time to count the inventory and offers the
                            most accurate results. Note: You will have to stop your
                            operations to get results.
                          </p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="carousel-item">
                      <Box className="col-md-6 padding_0">
                          <Box className="bg_4">
                              <h1 className="readable_text">Question</h1>
                              <p className="lorem_text">
                                <b>What is the best way to keep track of inventory?</b><br/><br/>
                              </p>
                              <h1 className="readable_text pt-1">Response</h1>
                              <p className="lorem_text">
                                Inventory tracking should be based on the number of times
                                you count your inventory and the technology used. The
                                two general types of tracking include-<br/>
                                Full inventory counting- This tracking method uses staff
                                members&apos; time to count the inventory and offers the
                                most accurate results. Note: You will have to stop your
                                operations to get results.
                              </p>
                          </Box>
                      </Box>
                  </Box>
                  <Box className="carousel-item">
                      <Box className="col-md-6 padding_0">
                          <Box className="bg_4">
                          <h1 className="readable_text">Question</h1>
                              <p className="lorem_text">
                                <b>What is the best way to keep track of inventory?</b><br/><br/>
                              </p>
                              <h1 className="readable_text pt-1">Response</h1>
                              <p className="lorem_text">
                                Inventory tracking should be based on the number of times
                                you count your inventory and the technology used. The
                                two general types of tracking include-<br/>
                                Full inventory counting- This tracking method uses staff
                                members&apos; time to count the inventory and offers the
                                most accurate results. Note: You will have to stop your
                                operations to get results.
                              </p>
                          </Box>
                      </Box>
              </Box>
            </Slider>
          </Box>
          <Box className="col-md-6 padding_0" id="faqs">
              <Box className="bg_5  ">
                  <Box className="padding_left01">
                      <h1 className="about_text">FAQs</h1>
                      <p className="many_text1">
                        Didn&apos;t you find what you&apos; looking for?<br/>
                        Send us a message today 
                      </p>
                      <Box className="read_bt1"><Link to="">Contact Us</Link></Box>
                  </Box>
              </Box>
          </Box>
        </Box>
      </Box>
  </Box>
    );
}
