import './footer.css'
const Footer = () => {
    return ( 
        <>
        <div className="footer">
            <div className="footer-section">
                <div className="footer-col1">
                    <h1>About Us</h1>
                    <h3>How it works</h3>
                    <h3>Testimonials</h3>
                    <h3>Careers</h3>
                    <h3>Investors</h3>
                    <h3>Terms of Service</h3>
                </div>
                <div className="footer-col2">
                    <h1>Contact Us</h1>
                    <h3>Contact</h3>
                    <h3>Support</h3>
                    <h3>Destinations</h3>
                    <h3>Sponsorships</h3>
                    
                </div>
                <div className="footer-col3">
                    <h1>Videos</h1>
                    <h3>Submit Video</h3>
                    <h3>Ambassadors</h3>
                    <h3>Agency</h3>
                    <h3>Influencer</h3>
                    
                </div>
                <div className="footer-col4">
                    <h1>Social Media</h1>
                    <h3>Instgram</h3>
                    <h3>Facebook</h3>
                    <h3>Youtube</h3>
                    <h3>Twitter</h3>
                    
                </div>
            </div>
        </div>
        <div className="copy"><small>dolla ©{new Date().getFullYear()} All rghts reserved.</small></div>
        </>
     );
}
 
export default Footer;