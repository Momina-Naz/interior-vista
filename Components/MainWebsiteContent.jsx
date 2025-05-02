import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Gallery({ images, selectedIndex, setSelectedIndex }) {
  const closeLightbox = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  if (selectedIndex === null) return null;

  return (
    <div className="lightbox">
      <span className="close" onClick={closeLightbox}>×</span>
      <span className="prev" onClick={showPrev}>‹</span>
      <img src={images[selectedIndex]} alt="Large view" className="lightbox-img" />
      <span className="next" onClick={showNext}>›</span>
    </div>
  );
}




export default function MainWebsiteContent() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const clientsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const images = [
    'work-4.jpg',
    'work-2.jpg',
    'work-3.jpg',
    'work-1.jpg',
    
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const clientData = [
    {   

        comment:` Lorem ipsum dolor amet, consectetur adipiscing elit augue diam,
         accumsan ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor amet,
          consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing`,
        img:"client-1.jpg",
        name:"Sara William"

    },
    {   

        comment: `Lorem ipsum dolor amet, consectetur adipiscing elit augue diam,
         accumsan ipsum dolor sit amet, consectetur adipiscing.Lorem ipsum dolor amet,
          consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing`,
        img:"client-2.png",
        name:"Julia Miltese"

    }
]
  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev === 0 ? 1 : 0));
  }, 3000); 

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <div className={`nav-bar ${isFixed ? 'fixed' : ''}`}>
        <button onClick={toggleMenu} className="side-menu-btn">☰</button>

        <div className={`side-menu ${isOpen ? '' : 'open'}`}>
          <button className="close-btn" onClick={handleClose}>×</button>
          <ul className="menu-list">
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(homeRef)}}>HOME</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(aboutRef)}}>ABOUT</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(portfolioRef)}}>PORTFOLIO</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(clientsRef)}}>CLIENTS</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(blogRef)}}>BLOG</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(contactRef)}}>CONTACT</a></li>
          </ul>
          <div className="social-media-in-side-menu">
            <ul className="social-icons-simple">
              <li><a href=""><FontAwesomeIcon icon={faTwitter} className="icon" /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faFacebook} className="icon" /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faInstagram} className="icon" /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
            </ul>
          </div>
          <div className="side-menu-text">
            <p>© 2025 MegaOne. Made With Love by Coderthemes</p>
          </div>
        </div>

        <div className="logo">
          <img src="/image.png" alt="logo" />
        </div>

        <div className="nav-bar-content">
          <ul>
            <li><a href="#" onClick={(e) => {e.preventDefault();scrollToSection(homeRef)}}>HOME</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef) }}>ABOUT</a></li>
            <li><a href="#" onClick={(e) =>  { e.preventDefault();scrollToSection(portfolioRef)}}>PORTFOLIO</a></li>
            <li><a href="#" onClick={(e) =>  { e.preventDefault();scrollToSection(clientsRef)}}>CLIENTS</a></li>
            <li><a href="#" onClick={(e) =>  { e.preventDefault();scrollToSection(blogRef)}}>BLOG</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault ();scrollToSection(contactRef)}}>CONTACT</a></li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-icons-simple">
            <li><a href=""><FontAwesomeIcon icon={faTwitter} className="icon" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faFacebook} className="icon" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faInstagram} className="icon" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
          </ul>
        </div>
      </div>

      <section className="banner-sec" id="Home" ref={homeRef}>
        <div className="container">
          <div className="banner-area">
            <h2>HELLO! I AM
              <span> INTERIOR
                <span style={{ color: "#547022" }}> DESIGNER.</span></span>
            </h2>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting and lorem Ipsum has been the industry’s standard dummy.</p>
            <a className="learn-more" href="#" onClick={() => scrollToSection(aboutRef)}>LEARN MORE</a>
          </div>
        </div>
      </section>

      <section className="about-sec" id="About" ref={aboutRef}>
        <div className="about-sec-container-1">
          <div>
            <h2>01</h2>
            <h4>Drawing Room</h4>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div>
            <h2>02</h2>
            <h4>Drawing Room</h4>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div>
            <h2>03</h2>
            <h4>Drawing Room</h4>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div>
            <h2>04</h2>
            <h4>Drawing Room</h4>
            <p>Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
        <div className="about-sec-container-2">
          <div><span>"</span>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fusce vitae egestas mi, vel dapibus diam.
            </h2>
            <h3>Tina Watson</h3>
            <h4>Corporate Interior Designer</h4>
          </div>
        </div>
      </section>

      <section className="portfolio-sec" id="Portfolio" ref={portfolioRef}>
        <div className='container-1'>
          <div className="pf-header">
            <h1>CHECK MY</h1>
            <h1>AMAZING PORTFOLIO</h1>
            <nav>
              <ul>
                <li><a href='#'>ALL</a></li>
                <li><a href='#'>LIVING ROOM</a></li>
                <li><a href='#'>CORPORATE</a></li>
                <li><a href='#'>CUSTOM DESIGN</a></li>
                <li><a href='#'>OTHER</a></li>
              </ul>
            </nav>
          </div>
          <div className='pf-menu' onClick={() => setSelectedIndex(0)}>
            <img src="work-3.jpg" alt="work1" />
            <div className="overlay">
                 <div className="overlay-content">
                <span className="plus">+</span>
                 <p className="footer-text">Creativite <span>35 </span> WP Anniversary</p>
             </div>
             </div>
          </div>
          <div className='pf-menu' onClick={() => setSelectedIndex(1)}>
            <img src="work-2.jpg" alt="work2" />
            <div className="overlay">
                 <div className="overlay-content">
                <span className="plus">+</span>
                 <p className="footer-text">Creativite <span>35 </span> WP Anniversary</p>
             </div>
             </div>
          </div>
        </div>
        <div className='container-2'>
          <div className='pf-menu' onClick={() => setSelectedIndex(2)}>
            <img src="work-1.jpg" alt="work3" />
            <div className="overlay">
                 <div className="overlay-content">
                <span className="plus">+</span>
                 <p className="footer-text">Creativite <span>35 </span>WP Anniversary</p>
             </div>
             </div>
          </div>
          <div className='pf-menu' onClick={() => setSelectedIndex(3)}>
            <img src="work-4.jpg" alt="work4" />
            <div className="overlay">
                 <div className="overlay-content">
                <span className="plus">+</span>
                 <p className="footer-text">Creativite <span> 35</span> WP Anniversary</p>
             </div>
             </div>
          </div>
          <div className='footer'>
            <h5> We've Completed More Than</h5>
            <span> 530 </span>
            <h5> Projects For Our Amazing Clients</h5>
            <button>VIEW ALL</button>
          </div>
        </div>
      </section>

      <Gallery images={images} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />


      <section className="clients-sec" id="Clients" ref={clientsRef}>
        <div className='container-1'>
            <h1>satisfied
            customers</h1>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting.
                 Lorem Ipsum has been the industry’s standard dummy.</p>
        </div>
        <div className='conatiner-2'>
            <span>"</span>
            <p>{clientData [current].comment}</p>
            <img src={clientData [current].img} alt="client picture" />
            <h3>{clientData[current].name}</h3>

        </div>
      </section>
      <section className="blog-sec" id="Blog" ref={blogRef}>
        <div className='container'>
            <h1>interior designing</h1>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry.
                 Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry.</p>
            <button>LEARN MORE</button>
        </div>
      </section>
      <section className="contact-sec" id="Contact" ref={contactRef}>
        <div className='container-1'>
            <h1>hire me!</h1>
            <h1>as <span> interior</span> designer</h1>
            <ul>
                <li><FontAwesomeIcon icon={ faMapMarkerAlt} className="icon"/> <span>email@website.com</span></li>
                <li><FontAwesomeIcon icon={ faEnvelope} className="icon"/><span> +1 631 1234 5678</span></li>
                <li><FontAwesomeIcon icon={ faPhoneAlt} className="icon"/><span>123 Park Avenue, New York</span></li>
            </ul>

        </div>
        <div className='container-2'>
               <form>
                <input type="text" name='userName' placeholder='Name' />
                <input type="text" name='userPhone' placeholder='Contact No' />
                <input type="text" name='userEmail' placeholder='Email' />
                <textarea name="message" id="message" placeholder='Type Your Messgae Here'></textarea>
                <a href="#">Submit Information</a>
               </form>
        </div>
        <div className="social-media">
          <ul className="social-icons-simple">
            <li><a href=""><FontAwesomeIcon icon={faTwitter} className="icon" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faFacebook} className="icon" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faInstagram} className="icon" /></a></li>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></li>
          </ul>
        </div>
        <div className='footer-div'>
            <p>
            © 2025 MegaOne. Made With Love By Coderthemes</p>
        </div>
      </section>

    </>
    
  );
}

