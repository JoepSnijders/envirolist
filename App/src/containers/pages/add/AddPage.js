import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import FormSection from './FormSection';
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';

import './AddPage.css';

class AddPage extends Component {
  constructor(props){
    super(props);
    this.setType = this.setType.bind(this);
    this.resetType = this.resetType.bind(this);
    this.state = {
      type: '',
      section: 0
    }
  }

  resetType(){
    this.setState({
      type: null,
      section: 0
    })
  }

  setType(type){
    window.scrollTo(0, 0);
    console.log(type);
    this.setState({
      type: type,
      section: 1
    });
  }

  render() {
    console.log(this.props);
    var volunteer = { backgroundImage: 'url("/images/volunteer.jpg")' }
    var paid = { backgroundImage: 'url("/images/paid.jpg")' }
    var fee = { backgroundImage: 'url("/images/fee.jpg")' }
    return (
      <div className="addpage">
        <HeaderBar />
        <div className="singlepage no-header">
          { this.state.section === 0 ?
            <div>
              <div className="container">
                <div className="row">
                  <div className="col-sm-7">
                    <h2>Three ways to add a job to Envirolist.</h2>
                    <p>Verwelkom mensen in je community en help ze om zich overal thuis te voelen.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="addpage__choice addpage__choice--volunteering">
                      <div className="addpage__choice__thumb" style={volunteer}></div>
                      <div className="addpage__choice__content">
                        <p className="bold">Add a free unpaid volunteering job.</p>
                        <p>
                          You can add an unpaid volunteering opportunity for free. Your company will be found by people around the world!
                        </p>
                        <div className="btn btn-success" onClick={() => this.setType('free volunteer') }>Add a free volunteering job</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="addpage__choice addpage__choice--paid">
                      <div className="addpage__choice__thumb" style={paid}></div>
                      <div className="addpage__choice__content">
                        <p className="bold">Add a paid job.</p>
                        <p>
                          Of je nu een huisje in de bergen of een extra kamer hebt, verdien een. We ask you for €5,- / month.
                        </p>
                        <div className="btn btn-success" onClick={() => this.setType('paid') }>Add a paid job</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="addpage__choice addpage__choice--fee">
                      <div className="addpage__choice__thumb" style={fee}></div>
                      <div className="addpage__choice__content">
                        <p className="bold">Add a fee required job.</p>
                        <p>
                          Of je nu een huisje in de bergen of een extra kamer hebt, verdien een. We ask you for €10,- / month.
                        </p>
                        <div className="btn btn-success" onClick={() => this.setType('fee required') }>Add a fee required job</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="addpage__thanks">
                  <hr/>
                  <div className="row">
                    <div className="col-sm-6">
                      <h2>Thank you for your contributing!</h2>
                      <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            : null
          }
          { this.state.type ?
              <div>
                <div className="container">
                  {/* <p onClick={ this.resetType }>Return</p> */}
                  <FormSection type={this.state.type} actions={this.props.actions} />
                </div>
              </div>
              : null
            }
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
