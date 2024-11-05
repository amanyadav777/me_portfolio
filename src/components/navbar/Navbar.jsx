import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <div className="navbar-menu">
      <nav>
        <a
          href="#home"
          onClick={() => setActiveNav("#home")}
          className={activeNav === "#home" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skill"
          onClick={() => setActiveNav("#skill")}
          className={activeNav === "#skill" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#project"
          onClick={() => setActiveNav("#project")}
          className={activeNav === "#project" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </div>
  );
}

export default Navbar;