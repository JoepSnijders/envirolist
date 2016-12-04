import React, { Component } from 'react';
import {  } from 'react-router';
import './Footer.css';

import LogInModal from '../containers/modals/LogInModal';
import SignUpModal from '../containers/modals/SignUpModal';

export default class Footer extends Component {
  render(){
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <h2>Stay in touch.</h2>
                <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters. </p>
                <button className="btn btn-transparent">Sign up for the newsletter</button>
              </div>
            </div>
          </div>

        </footer>
        <div className="footer__super-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 pull-right">
                <p>Copyrights 2016 - Joep Snijders</p>
              </div>
            </div>
          </div>
        </div>
        <SignUpModal />
        <LogInModal />
      </div>
    );
  }
}
