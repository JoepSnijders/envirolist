import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import FormSection from './FormSection';
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';
import SinglePageMain from '../../../components/SinglePageMain';

import './AddPage.css';

class AddPage extends Component {
  render() {
    var beachImage = { backgroundImage: 'url("/images/big-beach.jpg")' }
    return (
      <div className="addpage">
        <HeaderBar />
        <div className="singlepage">
          <SinglePageMain title="Add an activity" image={beachImage} />
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <h2>Opportunities around the world.</h2>
                <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters.</p>
              </div>
              <div className="col-sm-6">
                <img src="/images/small-turtle.jpg" width="100%" alt=""/>
              </div>
            </div>
            <hr/>
            <FormSection />
            <div className="addpage__thanks">
              <hr/>
              <div className="row">
                <div className="col-sm-6">
                  <h2>Thank you for your contribution!</h2>
                  <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
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
export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
