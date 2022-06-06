import './main.css'
import {Link as Slink,animateScroll as scroll} from 'react-scroll'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useState } from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
const Main = () => {
    const [icon,setIcon] = useState(true)
    return ( 
        <div className="main">
            <video src="/video/video.mp4" autoPlay muted loop></video>
            <div className="overlay"></div>
            <h1>Virtual Banking Made Easy</h1>
            <h3>Sign up for a new account today and receive $250  incredit towards your next payment</h3>
            <button onMouseEnter={()=>setIcon(!icon)} onMouseLeave={()=>setIcon(!icon)}><Slink to="sign" spy={true} smooth={true} offset={-80} duration={500}>Get Started</Slink> {icon ? <ChevronRightOutlinedIcon /> : <ArrowRightAltOutlinedIcon />}  </button>


        
        </div>
     );
}
 
export default Main;