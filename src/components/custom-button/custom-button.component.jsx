import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherButtonProps}) => (
  <button className={`custom-button
                     ${isGoogleSignIn ? 'google-sign-in':''}
                     ${inverted ? 'inverted':''}`} {...otherButtonProps}>{children}</button>
);

export default CustomButton;