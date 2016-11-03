import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';
import { Link } from 'react-router';
import './HomePage.css';
import CompanionSection from './CompanionSection';
import MapSection from './MapSection';
import HeaderBar from '../../../components/HeaderBar';
import Footer from '../../../components/Footer';

class HomePage extends Component {
  constructor(props){
    super(props);
    this.search = this.search.bind(this);

  }
  search(value){
    this.props.actions.getJobs();
  }
  getLatest(numberOfRequests){
    this.props.actions.getJobs(numberOfRequests);
  }

  componentDidMount(){
    // Initialize load with latest 3 posts
    this.getLatest(3);
  }

  render() {
    console.log(this.props);

    return (
      <div className="homepage">
        <HeaderBar />
        <div className="homepage__main">
          <div className="homepage__bg"></div>
          <div className="container">
            <div className="homepage__main__hero">
              <h1>Help the environment by volunteering anywhere.</h1>
              <input className="homepage__main__hero__input" type="text" placeholder="I want to help the environment in.." />
              <input onClick={() => this.search('value')} className="homepage__main__hero__submit" type="submit" value="Start looking" />
            </div>
          </div>
        </div>
        <div className="homepage__introduction">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h2>Together we can make a <br /> difference.</h2>
                <p className="homepage__introduction__text">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting.</p>
                <br/>
                <Link>
                  <button className="btn btn-transparent">Why is this so important?</button>
                </Link>
              </div>
              <div className="col-md-5">
                <img className="homepage__introduction__image" src={process.env.PUBLIC_URL + '/images/dam.jpg'} width="100%" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <CompanionSection />
        <MapSection jobs={this.props.jobs.listings} />

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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
