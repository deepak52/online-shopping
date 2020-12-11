import React, { Component } from 'react';
import { trigger_login } from '../../actions/userActions';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router";
import "../LoginForm/Login.css";

class LoginForm extends Component {
constructor(props) {
    super(props);
    // this.activeMsg = this.getQueryParams();
    this.state = {
        username: '',
        password: '',
    }
}

doLogIn = () => {
    const username = this.state.username;
    const password = this.state.password;
    let loginData = { username, password }
    this.props.trigger_login(loginData);
}

handleChangeUserName(event) {
    this.setState({ username: event.target.value })
}

handleChangePassword(event) {
    this.setState({ password: event.target.value })
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
            <input className="login_submit" type="button" value="Submit" onClick={() => this.doLogIn()} />
            <a href="/signup" className="sign_up">Sign Up</a>
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
    trigger_login: (data) => dispatch(trigger_login(data)),
    // trigger_reset: () => dispatch(trigger_reset())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
