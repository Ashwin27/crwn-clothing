import React from 'react'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from './crown.svg'
import './header.styles.scss'

import { connect } from 'react-redux'

const Header = ({currentUser}) => (
  <div className="header">
    <Link to="/crwn-clothing">
      <Logo className="logo-container"/>
    </Link>
    <div className="options">
      <Link className="option" to="/crwn-clothing/shop">
        SHOP
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/crwn-clothing/signin">
          SIGN IN
        </Link>
      }
    </div>

  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);