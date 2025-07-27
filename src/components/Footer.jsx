
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
import profile_picture from '../assets/profile_picture.jpg';

const Footer = () => {
  return (
    
    <footer id='footer'>
        <div>
            <img src={profile_picture} alt="Founder" />
        <h2>
            Arpit Upadhyay
        </h2>
        <p>Keep Growing</p>
        </div>
        <aside>
            <h2>Social Media</h2>
            <article>
                <a href="https://www.instagram.com/arpitupadhyay._.08?igsh=MTY2ZzFiYWlhamoyYw=="><AiFillInstagram/></a>
            </article>
            <article>
                <a href="https://www.linkedin.com/in/arpit-upadhyay-82125b246"><AiFillLinkedin/></a>
            </article>
            <article>
                <a href="https://github.com/Arpit0008"><AiFillGithub/></a>
            </article>
        </aside>
        <a href='#home'><AiOutlineArrowUp/></a>
    </footer> 
  )
}

export default Footer