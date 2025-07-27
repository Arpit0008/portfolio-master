import React from "react";
import {AiOutlineMenu} from "react-icons/ai";

const Header = ({menuOpen, setMenuOpen}) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className='navBtn' onClick={()=>{setMenuOpen(!menuOpen)}}>
        <AiOutlineMenu/>
      </button>
    </>
  )
}

export const HeaderPhone = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen?"navPhoneComes":""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export const NavContent = ({setMenuOpen}) => (
  <>
    <h2>Arpit.</h2>
    <div>
      <a href="#home" onClick={()=>{setMenuOpen && setMenuOpen(false)}}>Home</a>
      <a href="#work" onClick={()=>{setMenuOpen && setMenuOpen(false)}}>Work</a>
      <a href="#timeline" onClick={()=>{setMenuOpen && setMenuOpen(false)}}>Experience</a>
      <a href="#services" onClick={()=>{setMenuOpen && setMenuOpen(false)}}>Services</a>
      <a href="#testimonial" onClick={()=>{setMenuOpen && setMenuOpen(false)}}>Testimonial</a>
      <a href="#contact" onClick={()=>{setMenuOpen && setMenuOpen(false)}}>Contact</a>
    </div>
    <a href="mailto:arpitupadhyay169@gmail.com"><button>Email</button></a>
  </>
)

export default Header