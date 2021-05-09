import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from './crown.svg'
import './header.styles.scss'

const Header = () => (
  <div className="header">
    <Link to="/crwn-clothing">
      <Logo className="logo-container"/>
    </Link>
    <div className="options">
      <Link className="option" to="/crwn-clothing/shop">
        SHOP
      </Link>
      <Link className="option" to="/crwn-clothing/signin">
        LOG IN
      </Link>
    </div>

  </div>
);

export default Header;