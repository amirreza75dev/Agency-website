import './Navbar.css'
import {Link as Slink,animateScroll as scroll} from 'react-scroll'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const [nav,setNav] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY> 60){
                setNav(true)
            }else{
                setNav(false)
            }
        })

    },[])
    const toTop = ()=>{
        scroll.scrollToTop()
    }
    return ( 
        <div className={nav ? "navbar navbar-bg" : "navbar"}>
            <div className="navbar-container">
                <h1 onClick={toTop}>dolla</h1>
                <div className="nav-links">
                    <p><Slink activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Slink></p>
                    <p><Slink activeClass="active" to="login" spy={true} smooth={true} offset={-70} duration={500}>Discover</Slink></p>
                    <p><Slink activeClass="active" to="services" spy={true} smooth={true} offset={-80} duration={500}>Services</Slink></p>
                    <p><Slink activeClass="active" to="sign" spy={true} smooth={true} offset={-80} duration={500}>Sign up</Slink></p>
                </div>
                <button><Link to="/form">Sign UP</Link></button>
                <div className="hamber-menu" onClick={()=>setToggle(!toggle)}><MenuOutlinedIcon className="menu-icon" /></div>
            </div>
            <div className={toggle ? "toggle-menu-active" : "toggle-menu" }>
                <div className="close-conitaner"><CloseOutlinedIcon className="close-icon" onClick={()=>setToggle(!toggle)}/></div>
                
                <div className="toggle-links">
                    <p ><Slink onClick={()=>setToggle(!toggle)} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Slink></p>
                    <p ><Slink onClick={()=>setToggle(!toggle)} activeClass="active" to="login" spy={true} smooth={true} offset={-80} duration={500}>Discover</Slink></p>
                    <p ><Slink onClick={()=>setToggle(!toggle)} activeClass="active" to="services" spy={true} smooth={true} offset={-80} duration={500}>Services</Slink></p>
                    <p ><Slink onClick={()=>setToggle(!toggle)} activeClass="active" to="sign" spy={true} smooth={true} offset={-80} duration={500}>Sign up</Slink></p>
                </div>
                <div className="toggle-button"><button onClick={()=>setToggle(!toggle)}><Link to="/form">Start Now</Link></button></div>
                

                
                
            </div>
        </div>
     );
}
 
export default Navbar;