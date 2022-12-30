import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import '../styles/Navbar.css';

const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="md" className={scrolled ? "scrolled" : "non__scrolled"}>
        {/* <div className="header"> */}
        <div className="heading__container" href="/">
          <h2 className="heading">HACKMOL 4.0</h2>
          {/* <div className="line"></div> */}
        </div>

        {/* <Navbar.Toggle aria-controls="basic-navbar-nav">
            <div className="toggleBar">
            <span className="navbar-toggler-icon"></span>
            <span>MENU</span>
            </div>
          </Navbar.Toggle> */}


        <div className="navbar-options" id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link className="header-name">HACKMOL 4.0</Nav.Link> */}
            <Nav.Link href="#about" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT</Nav.Link>
            <Nav.Link href="#rules" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('rules')}>RULES</Nav.Link>
            <Nav.Link href="#schedule" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('schedule')}>SCHEDULE</Nav.Link>
            <Nav.Link href="#prizes" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('prizes')}>PRIZES</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>CONTACT</Nav.Link>
          </Nav>
          {/* <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span> */}
        </div>
        {/* </div> */}
      </Navbar>
    </div>
  )
}
export default NavBar;
