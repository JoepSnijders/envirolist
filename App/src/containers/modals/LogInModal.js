import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';

import './Modal.css';

class LogInModal extends Component {
  render() {
    return (
      <div className="modal fade" id="logInModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="btn btn-facebook">Log In with Facebook</div>
              <br/>
              <div className="btn btn-google">Log In with Google</div>
              <hr/>
              <span style={{marginBottom: 10, display: 'block'}}>
                Or..
              </span>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Enter your email..."/>
                <br/>
                <input className="form-control" type="password" placeholder="Enter your password..."/>
                <br/>
                <div className="btn btn-success">Log in</div>
              </div>
              <hr/>
              <span>
                Don't have an account yet?
              </span>
              <a href="#">
                <span data-toggle="modal" data-target="#logInModal" style={{float: 'right', color: '#333', fontWeight: 'bold'}}>
                  Sign up
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
export default connect(mapStateToProps, mapDispatchToProps)(LogInModal);
