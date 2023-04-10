import React, { Component } from "react";

const AuthContext = React.createContext();

export class Auth extends Component {
  state = {
    isAuthenticated: false,
    userName: "",
    userPwd: ""
  };

  updateUserName = (e) => {
    console.log("username", e);
    this.setState({ userName: e });
  };

  updatePwd = (e) => {
    this.setState({ userPwd: e });
  };

  hanldeLogin = () => {
    if (this.state.userName !== "" && this.state.userPwd !== "") {
      this.setState({ isAuthenticated: true });
    } else return;
  };

  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
      userName: "",
      userPwd: ""
    });
  };

  render() {
    const { isAuthenticated, userName, userPwd } = this.state;
    const { updatePwd, updateUserName, handleLogout, hanldeLogin } = this;
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated,
          userName,
          userPwd,
          handleLogout,
          hanldeLogin,
          updatePwd,
          updateUserName
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;
