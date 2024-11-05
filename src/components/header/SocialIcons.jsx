import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { BiLogoGmail } from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aman-yadav-893339220/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/amanyadav777" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="mailto:ydaaman755@gmail.com" rel="noreferrer" target="_blank"><BiLogoGmail/></a>
      <a href="https://leetcode.com/ydaaman755/" target="_blank" rel="noreferrer" ><SiLeetcode /></a>
    </div>
  )
}

export default HeaderSocials