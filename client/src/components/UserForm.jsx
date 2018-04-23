import React from 'react';
import axios from 'axios';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordsMatch: null,
      usernameUniq: null,
    };
    this.passwordCheck = this.passwordCheck.bind(this);
    this.checkUsername = this.checkUsername.bind(this);
  }

  passwordCheck() {
    const password = document.getElementById('passwordInput').value;
    const repeatPassword = document.getElementById('repeatPasswordInput').value;
    if (password === repeatPassword) {
      this.setState({
        passwordsMatch: true,
      });
    } else {
      this.setState({
        passwordsMatch: false,
      });
    }
  }

  checkUsername() {
    const context = this;
    console.log('inside checkUsername');
    const username = document.getElementById('usernameInput').value;
    axios.post('http://127.0.0.1:3000/api/checkUsername', {
      username,
    })
      .then((data) => {
        console.log(data.data);
        if (data.data === null) {
          context.setState({
            usernameUniq: true,
          });
        } else {
          context.setState({
            usernameUniq: false,
          });
        }
      })
      .catch((err) => {
        console.log('There was an error:', err);
      });

  }

  render() {
    return (
      <div id="userFormContainerWrapper">
        <div id="userFormContainer">
          <button id="x" onClick={this.props.handleUserFormClick}>X</button>
          <div id="userFormBox">
            <div id="userFormOptionsBar">
              <button className="userFormOptionsButton" id="loginUserFormOptionButton" onClick={this.props.loginUserFormOption}>Login</button>
              <button className="userFormOptionsButton" id="signUpUserFormOptionButton" onClick={this.props.signUpUserFormOption}>Sign Up</button>
            </div>
            {this.props.signUpForm ||
            <div id="userFormMain">
              <h2 id="userFormTitle" >Log In</h2>
              <h4 id="userFormSubTitle" >Please fill in your unsername and password to login</h4>
              <form id="signUpForm">
                <label htmlFor="usernameInput" >Username</label>
                <input type="text" placeholder="Enter Username" id="usernameInput" />
                <label htmlFor="passwordInput" >Password</label>
                <input type="password" placeholder="Enter Password" id="passwordInput" />
              </form>
              <button id="submitSignUpForm" onClick={() => this.props.handleAccountSignIn(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value)} >Log In</button>
            </div>}
            {this.props.signUpForm &&
            <div id="userFormMain">
              <h2 id="userFormTitle">Sign Up</h2>
              <h4 id="userFormSubTitle">Please fill in this form to create an account</h4>
              <form id="signUpForm">
                <label htmlFor="usernameInput" >Username</label>
                <input type="text" onBlur={this.checkUsername} placeholder="Enter Username" id="usernameInput" className={this.state.usernameUniq === true ? 'usernameUniq' : (this.state.usernameUniq === false ? 'usernameTaken' : 'usernameNotChecked')} />
                <label htmlFor="passwordInput" >Password</label>
                <input type="password" onChange={this.passwordCheck} placeholder="Enter Password" id="passwordInput" className={this.state.passwordsMatch === true ? 'passwordsMatch' : (this.state.passwordsMatch === false ? 'passwordsNoMatch' : 'passwordsNotChecked')} />
                <label htmlFor="repeatPasswordInput" >Repeat Password</label>
                <input type="password" onChange={this.passwordCheck} placeholder="Repeat Password" id="repeatPasswordInput" className={this.state.passwordsMatch === true ? 'passwordsMatch' : (this.state.passwordsMatch === false ? 'passwordsNoMatch' : 'passwordsNotChecked')} />
              </form>
              {(this.state.passwordsMatch === true && this.state.usernameUniq === true) &&
                <button id="submitSignUpForm" onClick={() => this.props.handleAccountSignUp(document.getElementById('usernameInput').value, document.getElementById('passwordInput').value)} >Submit</button> 
              }
              {(this.state.passwordsMatch === true && this.state.usernameUniq === true) ||
                <button id="submitSignUpForm" className="disabled" >Submit</button>
              }
            </div>}
          </div>
          <div id="closeButtonContainer">
            <button id="close" onClick={this.props.handleUserFormClick}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}


export default UserForm;
