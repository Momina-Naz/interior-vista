import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function SideMenu(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen); 
      };
function handleClose(){
   setIsOpen(false)
}
    return(
        <>
       <button  onClick={toggleMenu} className="side-menu-btn">☰</button>
       <div className={`side-menu ${isOpen ? '':'open'}`}>
       <button className="close-btn" onClick={handleClose}>×</button>
        <ul className='menu-list'>
                         <li><a href="#"onClick={(e) => e.preventDefault()}>HOME</a></li>
                         <li><a href="#"onClick={(e) => e.preventDefault()}>ABOUT</a></li>
                         <li><a href="#"onClick={(e) => e.preventDefault()}>PORTFOLIO</a></li>
                         <li><a href="#"onClick={(e) => e.preventDefault()}>CLIENTS</a></li>
                         <li><a href="#"onClick={(e) => e.preventDefault()}>BLOG</a></li>
                         <li><a href="#"onClick={(e) => e.preventDefault()}>CONTACT</a></li>
        </ul>
        <div className="social-media-in-side-menu">
                         <ul className="social-icons-simple">
                                <li><a href="">< FontAwesomeIcon icon={faTwitter}  className="icon"/> </a></li>
                                <li><a href=""><FontAwesomeIcon icon={faFacebook}  className="icon"/> </a> </li>
                                <li><a href="" ><FontAwesomeIcon icon={faInstagram}  className="icon"/></a> </li>
                                <li><a href=""><FontAwesomeIcon icon={faLinkedin }  className="icon"/></a> </li>
                                </ul>

        </div>
        <div className='side-menu-text'>
            <p>© 2025 MegaOne. Made With Love by
            Coderthemes</p>
        </div>
                

       </div>

       </>
    )

}



 

 


