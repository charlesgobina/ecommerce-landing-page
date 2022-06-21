import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import CartButton from '../CartButton/CartButton';
import { ReactComponent as SneakerLogo } from '../../images/logo.svg';
import avatar from '../../images/image-avatar.png';
import './Header.css';

const Header = ({ setDetect }) => (
  <header>
    <nav>
      <div className="headerLogo">
        <MenuIcon className="headerMenuIcon" size={30} />
        <SneakerLogo className="header" />
        <ul className="headerLinks">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <ul className="headerProfile">
        <li>
          <CartButton setDetect={setDetect} />
        </li>
        <li>
          <img src={avatar} alt="avatar" />
        </li>
      </ul>
    </nav>
    <hr className="headerLine" />
  </header>
);

Header.propTypes = {
  setDetect: PropTypes.func.isRequired,
};

export default Header;
