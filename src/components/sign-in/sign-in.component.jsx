import React from 'react'

import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: ""})
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required/>
          <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="password" required/>
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form" onClick={this.handleSubmit}>Sign In</CustomButton>
            <CustomButton type="submit" value="Submit Form" isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;