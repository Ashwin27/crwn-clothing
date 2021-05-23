import React from 'react'

import FormInput from '../form-input/form-input.component'
import './sign-up.styles.scss'

import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, password, confirmPassword, email } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName}); 

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="displayName" type="text" handleChange={this.handleChange} value={this.state.displayName} label="Display Name" required/>
          <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required/>
          <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required/>
          <FormInput name="confirmPassword" type="password" handleChange={this.handleChange} value={this.state.confirmPassword} label="Confirm Password" required/>
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form" onClick={this.handleSubmit}>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;