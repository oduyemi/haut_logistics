import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';




export const About = () => {
    return(
      <Box className="about_section layout_padding">
      <Box className="container-fluid">
        <Box className="row">
          <Box className="col-md-6 padding_0">
              <Box className="image_2"><img src={require("../assets/images/a.png")} /></Box>
            </Box>
          <Box className="col-md-6 padding_0">
            <Box className="bg_1">
              <Box className="padding_left01">
                <h1 className="about_text">About</h1>
                <p className="many_text1">There are many variations of passages of Lorem Ipsum available, but the majority</p>
                <Box className="read_bt1" id="about"><Link to="#">Contact Us</Link></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}