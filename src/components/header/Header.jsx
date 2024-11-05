import React from 'react';
import CTA from './Resume';
import SocialIcons from "./SocialIcons";
import './header.css';
import TypingAnimation from './TypingAnimation';

const Header = () => {
  return (
    <header id="home">
      <div className="header__container">
        <h5 className="header__container__greeting">Hello I'm</h5>
        <h1 className="header__container__name">Aman Yadav</h1>
        <h5 className="text__light">
          <TypingAnimation />
        </h5>
        <SocialIcons />
        <CTA />
      </div>
    </header>
  );
};

export default Header;
