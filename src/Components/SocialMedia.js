import React from "react";
import { SocialIcons } from '../Schemas/SocialIcons';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';


export const SocialMedia = () =>{
  return(
    <section>
      <h2 className="section-title">Social Media</h2>
      <div className="icons">
      <a href="https://in.linkedin.com/in/ankit-dhanotiya" target='_blank'><BsLinkedin className = 'social-media-icon-linkedin'/></a>
      
      <a href="www.instagram.com/ankit._d0">
      <BsInstagram className="social-media-icon-insta"/></a>
      </div>
    </section>
  )
}

