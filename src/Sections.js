import './section.css'
import {Link as Slink,animateScroll as scroll} from 'react-scroll'
const Section = () => {
    return ( 
        <>
        <div className="about-section" id="about">
            <div className="about-detail">
                <h1 className="first-about-hd">
                    PREMIUM BANK
                </h1>
                <h1 className="second-about-hd">
                        Unlimited <br/>
                        Transaction with <br/>
                        Zero fees
                </h1>
                <p className="des-about">
                    Get accsess to our exclusive app that allows you to send
                    unlimited transactions without getting charge any fees
                </p>
                <button><Slink to="sign" spy={true} smooth={true} offset={-80} duration={500}>Get Started</Slink></button>
            </div>
            <div className="about-img">
                <img src="/svg/svg2.svg" alt=""/>
            </div>
          </div>

          <div className="login-section" id="login">
          <div className="login-img">
                <img src="/svg/pic1.svg" alt=""/>
            </div>
            <div className="login-detail">
                <h1 className="first-about-hd">
                    PREMIUM BANK
                </h1>
                <h1 className="second-login-hd">
                        Unlimited <br/>
                        Transaction with <br/>
                        Zero fees
                </h1>
                <p className="des-login">
                    Get accsess to our exclusive app that allows you to send
                    unlimited transactions without getting charge any fees
                </p>
                <button>Get Started</button>
            </div>

          </div>
          </>
     );
}
 
export default Section;