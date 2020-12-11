import React, { Component } from 'react';
import { trigger_register } from '../../actions/userActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";
import "../SignUp/SignUp.css";

class SignUp extends Component {
constructor(props) {
    super(props);
    this.state = {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
    }
}

doSignUp = () => {
    const username = this.state.username;
    const password = this.state.password;
    const firstName = this.state.firstname;
    const lastName = this.state.lastname;
    let loginData = { username, password, firstName, lastName }
    this.props.trigger_register(loginData);
}

handleChangeUserName(event) {
    this.setState({ username: event.target.value })
}

handleChangePassword(event) {
    this.setState({ password: event.target.value })
}

handleChangeFirstName(event) {
    this.setState({ firstname: event.target.value })
}

handleChangeLastName(event) {
    this.setState({ lastname: event.target.value })
}

render() {
    let markup = "";
    if(this.props.naviagateToHome === "redirect_to_home") {
        markup = 
            <Redirect to={{
                pathname: '/'
              }} />;
    } else {
    markup = (<form>
        <input
          type="text"
          value={this.state.firstname}
          placeholder="First Name"
          onChange={(event) => this.handleChangeFirstName(event)}
        />
        <input
          type="text"
          value={this.state.lastname}
          placeholder="Last Name"
          onChange={(event) => this.handleChangeLastName(event)}
        />
         <input
          type="text"
          value={this.state.username}
          placeholder="Username"
          onChange={(event) => this.handleChangeUserName(event)}
        />
        <input
          type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={(event) => this.handleChangePassword(event)}
        />
        <div className="control-fields">
            <input className="login_submit" type="button" value="Submit" onClick={() => this.doSignUp()} />
        </div>
      </form>)
}
    return markup;
}
}

const mapStateToProps = (state) => {
    debugger
    return {
        user: state.user,
        message: state.message,
        naviagateToHome: state.navigate.redirect,
    };
}

const mapDispatchToProps = dispatch => ({
    trigger_register: (data) => dispatch(trigger_register(data)),
    // trigger_reset: () => dispatch(trigger_reset())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
