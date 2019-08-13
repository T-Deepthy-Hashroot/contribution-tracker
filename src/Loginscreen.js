import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import SignUp from './SignUp';

const style = {
  margin: 15,
};

class Loginscreen extends Component {
  constructor(props){
    super(props);
    var loginButtons=[];
    loginButtons.push(
      <div key={"Login-Div"}>
      <MuiThemeProvider>
        <div>
           <RaisedButton label={"SignUp"} primary={true} style={style} onClick={(event) => this.handleClick(event,'student')}/>
       </div>
       </MuiThemeProvider>
      </div>
    )
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      userbuttonLabel:'Sign Up',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} key={"LoginScreen"}/>);
    var loginmessage = "New User?";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;
    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<SignUp parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Already User? Go to Login";
      let loginButtons=[];
      loginButtons.push(
        <div key="login-button">
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
      let loginscreen=[],loginButtons=[];
      loginButtons.push(
        <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Sign Up"} primary={true} style={style} onClick={(event) => this.handleClick(event,'student')}/>
         </div>
         </MuiThemeProvider>
        
        </div>
      )
      loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "New User?";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}


export default Loginscreen;