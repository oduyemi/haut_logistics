import { Box } from "@mui/material";
import { About } from "../../components/About";
import { Banner } from "../../components/Banner"
import { Services } from "../../components/Services";
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import { FAQs } from "../../components/FAQs";
import { Track } from "../../components/Track";




const Home = () => {
    return(
        <Box>
            <Banner />
            <About />
            <Services id="services" />
            <Track />
            <FAQs id="faqs" />
            <Contact id="contact" />
            <Footer />
        </Box>
    )
}



export default Home;