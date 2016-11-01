import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import { Link } from 'react-router';
import './HomePage.css';
import HeaderBar from '../../components/HeaderBar';
import Footer from '../../components/Footer';

import Map from '../../components/Map';

class HomePage extends Component {
  constructor(){
    super();
    this.search = this.search.bind(this);
  }

  search(){
    this.props.actions.searchJobs();
  }

  render() {
    console.log(this.props);
    // Vars for inline background-images companions.
    var beachImage = {
       backgroundImage: 'url(' + process.env.PUBLIC_URL + "/images/small-beach.jpg" + ')'
    }
    var turtleImage = {
       backgroundImage: 'url(' + process.env.PUBLIC_URL + "/images/small-turtle.jpg" + ')'
    }
    var dogImage = {
       backgroundImage: 'url(' + process.env.PUBLIC_URL + "/images/small-dog.jpg" + ')'
    }
    var coralImage = {
       backgroundImage: 'url(' + process.env.PUBLIC_URL + "/images/small-coral.jpg" + ')'
    }
    return (
      <div className="homepage">
        <HeaderBar />
        <div className="homepage__main">
          <div className="homepage__bg"></div>
          <div className="container">
            <div className="homepage__main__hero">
              <h1>Help the environment by volunteering anywhere.</h1>
              <input className="homepage__main__hero__input" type="text" placeholder="I want to help the environment in.." />
              <input onClick={this.search} className="homepage__main__hero__submit" type="submit" value="Start looking" />
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
            <Map jobs={this.props.jobs.listings} />
          </div>
        </div>
        <div className="homepage__companions">
          <div className="container">
            <hr/>
            <div className="homepage__companions__inner">
              <div className="col-md-12">
                <h2>Stories from our companions.</h2>
              </div>
              <div className="clearfix"></div>
              <div className="homepage__companions__inner__highlight">
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <img src={process.env.PUBLIC_URL + '/images/small-beach.jpg'} width="100%" alt=""/>
                  </div>
                  <div className="col-md-5">
                    <p className="bigger bold">Trash Hero</p>
                    <p className="sub">Koh Phangan - Thailand</p>
                    <p>
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.
                      Read more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="homepage__companions__bottom">
            <div className="homepage__companions__bottom__item" style={beachImage}>
              <div className="homepage__companions__bottom__item__title">
                <p className="bold">Trash Hero</p>
                <p className="sub">Koh Phangan - Thailand</p>
              </div>
            </div>
            <div className="homepage__companions__bottom__item" style={turtleImage}>
              <div className="homepage__companions__bottom__item__title">
                <p className="bold">Turtle Rescue</p>
                <p className="sub">Koh Phangan - Thailand</p>
              </div>
            </div>
            <div className="homepage__companions__bottom__item" style={dogImage}>
              <div className="homepage__companions__bottom__item__title">
                <p className="bold">Vagabond Dogs</p>
                <p className="sub">Koh Phangan - Thailand</p>
              </div>
            </div>
            <div className="homepage__companions__bottom__item" style={coralImage}>
              <div className="homepage__companions__bottom__item__title">
                <p className="bold">Corals are beautiful</p>
                <p className="sub">Koh Phangan - Thailand</p>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage__world">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Opportunities around the world.</h2>
                <p>Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters.</p>
              </div>
            </div>
          </div>
          <div className="homepage__world__map">

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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
