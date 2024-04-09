


export const Footer = () => {
    return(
        <div class="footer_section layout_padding">
            <div class="container">
                <div class="row">
                <div class="col-lg-3">
                    <h1 class="footer_taital">Quick Links</h1>
                    <div class="footer_menu">
                    <ul>
                        <li class="active"><a href="/">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h1 class="footer_taital">Location</h1>
                    <div class="map_text"><a href="#"><img src={require("../assets/images/fb-icon.png")} alt="place" /><span class="map_icon">hautlogistics</span></a></div>
                    <div class="map_text"><a href="#"><img src={require("../assets/images/call-icon.png")} alt="call" /><span class="map_icon"> +1 (647) 632-4207</span></a></div>
                    <div class="map_text"><a href="#"><img src={require("../assets/images/mail-icon.png")} alt="mail" /><span class="map_icon">info@hautlogistics.com</span></a></div>
                </div>
                <div class="col-lg-3">
                    <h1 class="footer_taital">Social Link</h1>
                    <div class="social_icon">
                    <ul>
                        <li><a href="#"><img src={require("../assets/images/fb-icon.png")} alt="fb" /></a></li>
                        <li><a href="#"><img src={require("../assets/images/twitter-icon.png")} alt="twi" /></a></li>
                        <li><a href="#"><img src={require("../assets/images/instagram-icon.png")} alt="insta" /></a></li>
                    </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h1 class="footer_taital">Newsletter</h1>
                    <input type="" class="email_text" placeholder="Enter Your Email" name="text" />
                    <div class="Subscribe_text"><a href="#">SUBSCRIBE</a></div>
                </div>
                </div>
            </div>
        </div>
    )
}