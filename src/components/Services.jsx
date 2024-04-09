import React from 'react';
import { Box } from '@mui/material';
import "../assets/css/style.css";



export const Services = () => {
    return(
        <Box className="services_section layout_padding">
            <Box className="container-fluid">
                <Box className="row">
                <Box className="col-md-6 padding_0">
                    <Box className="bg_3">
                    <Box className="padding_left0">
                        <h1 className="services_text">Our<br/> 
                        <span style={{color: "#000"}}>Services</span></h1>
                        <p className="many_text2">We handle all aspects of fulfillment and delivery. Our services include:</p>
                    </Box>
                    <Box className="padding_left0">
                        <ul>
                            <li>Air freight into Canada and from Canada</li>
                            <li>Sea freight import into Canada and export from Canada </li>
                            <li>Door to Door service</li>
                            <li>LTL ( Less than Truckload) within Canada</li>
                            <li>FTL ( Full Truck Load) within Canada</li>
                            <li>Relocation service Within canada</li>
                        </ul>
                        </Box>
                    </Box>
                </Box>
                <Box className="col-md-6 padding_0">
                    <Box className="image_1"><img src={require("../assets/images/bc.jpg")} alt="services" /></Box>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}