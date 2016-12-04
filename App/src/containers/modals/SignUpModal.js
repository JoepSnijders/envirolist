import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FacebookLogin from 'react-facebook-login';
import * as actionCreators from '../../actions';

import './Modal.css';

class SignUpModal extends Component {
  constructor(props){
    super(props);
    this.loggingInWithFacebook = this.loggingInWithFacebook.bind(this);
    this.loggedInWithFacebook = this.loggedInWithFacebook.bind(this);
  }
  loggingInWithFacebook(){

  }
  loggedInWithFacebook(response){
    this.props.actions.logInWithFacebook(response);
  }
  render() {
    return (
      <div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <FacebookLogin
                appId="383268538672083"
                autoLoad={true}
                cssClass="btn btn-facebook"
                fields="name,email,picture"
                onClick={this.loggingInWithFacebook}
                callback={this.loggedInWithFacebook}
                icon="fa-facebook"
              />
              {/* <div onClick={this.logInWithFacebook} className="btn btn-facebook">Sign Up with Facebook</div> */}
              <br/>
              <div className="btn btn-google">Sign Up with Google</div>
              <hr/>
              <span style={{marginBottom: 10, display: 'block'}}>
                Or..
              </span>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Enter your email..."/>
                <br/>
                <input className="form-control" type="password" placeholder="Enter your password..."/>
                <br/>
                <input className="form-control" type="password" placeholder="Repeat your password..."/>
                <br/>
                <div className="btn btn-success">Sign Up</div>
              </div>
              <hr/>
              <span>
                Already have an account?
              </span>
              <a href="#">
                <span data-toggle="modal" data-target="#logInModal" style={{float: 'right', color: '#333', fontWeight: 'bold'}}>
                  Log In
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { jobs: state.jobslist }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);
