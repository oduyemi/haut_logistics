import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';



export const Contact = () => {
    return(
        <Box className="contact_section layout_padding">
            <Box className="container-fluid">
                <Box className="row">
                <Box className="col-md-6 padding_0">
                    <Box className="bg_1">
                    <Box className="padding_left10">
                        <h1 className="contact_text">We&apos;re here</h1>
                        <p className="content_text">Our door is always open for a cup of coffee.</p>
                    </Box>
                    </Box>
                </Box>
                <Box className="col-md-6 padding_0">
                    <Box className="bg_6">
                    <Box className="mail_section" id="contact">
                        <input type="text" className="mail_text" placeholder="Name" name="name" />
                        <input type="number" className="mail_text" placeholder="Phone Number" name="phone" />
                        <input type="email" className="mail_text" placeholder="Email" name="email" />
                        <textarea className="massage_text" placeholder="Message" rows="5" id="comment" name="message"></textarea>
                        <button className="btn btn-warning px-2 py-2 mt-3"><Link to="#">Send Message</Link></button>
                    </Box>
                    </Box>
                </Box>
                </Box>
            </Box>
        </Box>
    )
}