import { Link } from 'react-router-dom';
import './sign.css'
const Sign = () => {
    return ( 
        <div className="login-section" id="sign">

          <div className="login-detail">
              <h1 className="first-about-hd">
                  JOIN OUR TEAM
              </h1>
              <h1 className="second-login-hd">
                      Creating an <br/>
                      account is <br/>
                      extremly easy
              </h1>
              <p className="des-login">
                  Get accsess to our exclusive app that allows you to send
                  unlimited transactions without getting charge any fees
              </p>
              <button><Link to="/form">Start Now</Link></button>
          </div>
          <div className="login-img">
              <img src="/svg/svg6.svg" alt=""/>
          </div>

        </div>
     );
}
 
export default Sign;