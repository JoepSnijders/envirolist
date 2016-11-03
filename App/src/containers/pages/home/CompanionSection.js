import React, { Component } from 'react';
import { Link } from 'react-router';

export default class CompanionSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeCompanion: 1,
    };
    this.setActiveCompanion = this.setActiveCompanion.bind(this);
    this.activeCompanionInterval = this.activeCompanionInterval.bind(this);
    // Initial start for interval
    this.companionInterval = setInterval(() => {
      this.activeCompanionInterval();
    }, 1000);
    // Interval Progress bar
    this.companionIntervalProgress = 0;
  }

  setActiveCompanion(index){
    this.setState({
      activeCompanion: index
    });
    // Reset interval after click
    clearInterval(this.companionInterval);
    // Resume intercal counter
    this.companionInterval = setInterval(() => {
      this.activeCompanionInterval();
    }, 10000);
  }
  activeCompanionInterval(reset){
    if (this.state.activeCompanion === 4){
      this.setState({activeCompanion: 0}); // Restart activeCompanion once end is reached.
    }
    this.setActiveCompanion(this.state.activeCompanion + 1 );
  }

  render(){
    // Vars for inline background-images companions.
    var beachImage = { backgroundImage: 'url("/images/small-beach.jpg")' }
    var turtleImage = { backgroundImage: 'url("/images/small-turtle.jpg")' }
    var dogImage = { backgroundImage: 'url("/images/small-dog.jpg")' }
    var coralImage = { backgroundImage: 'url("/images/small-coral.jpg")' }
    return (
      <div className="homepage__companions">
        <div className="container">
          <hr/>
          <div className="homepage__companions__inner">
            <div className="col-md-12">
              <h2>Stories from our companions.</h2>
            </div>
            <div className="clearfix"></div>
            <div className="homepage__companions__inner__container">
              <div className={"homepage__companions__inner__highlight " + (this.state.activeCompanion === 1 ? 'active' : '')}>
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <img src={process.env.PUBLIC_URL + '/images/small-beach.jpg'} width="100%" alt=""/>
                  </div>
                  <div className="col-md-5">
                    <p className="bigger bold">Trash Hero</p>
                    <p className="sub">Koh Phangan - Thailand</p>
                    <p>
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door.
                    </p>
                    <Link>
                      <p className="bold">Read more</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"homepage__companions__inner__highlight " + (this.state.activeCompanion === 2 ? 'active' : '')}>
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <img src={process.env.PUBLIC_URL + '/images/small-turtle.jpg'} width="100%" alt=""/>
                  </div>
                  <div className="col-md-5">
                    <p className="bigger bold">Turtle Rescue</p>
                    <p className="sub">Koh Tao - Thailand</p>
                    <p>
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door.
                    </p>
                    <Link>
                      <p className="bold">Read more</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"homepage__companions__inner__highlight " + (this.state.activeCompanion === 3 ? 'active' : '')}>
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <img src={process.env.PUBLIC_URL + '/images/small-dog.jpg'} width="100%" alt=""/>
                  </div>
                  <div className="col-md-5">
                    <p className="bigger bold">Vagabond Dogs</p>
                    <p className="sub">London - England</p>
                    <p>
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door.
                    </p>
                    <Link>
                      <p className="bold">Read more</p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className={"homepage__companions__inner__highlight " + (this.state.activeCompanion === 4 ? 'active' : '')}>
                <div className="row">
                  <div className="col-md-5 offset-md-1">
                    <img src={process.env.PUBLIC_URL + '/images/small-coral.jpg'} width="100%" alt=""/>
                  </div>
                  <div className="col-md-5">
                    <p className="bigger bold">Corals are beautiful</p>
                    <p className="sub">Koh Phangan - Thailand</p>
                    <p>
                      Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door.
                    </p>
                    <Link>
                      <p className="bold">Read more</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage__companions__bottom">
          <div onClick={() => this.setActiveCompanion(1)} className={"homepage__companions__bottom__item " + (this.state.activeCompanion === 1 ? 'active' : '')}>
            <div className="homepage__companions__bottom__item__title">
              <p className="bold">Trash Hero</p>
              <p className="sub">Koh Phangan - Thailand</p>
            </div>
            <div className="homepage__companions__bottom__item__thumb" style={beachImage}></div>
          </div>
          <div onClick={() => this.setActiveCompanion(2)} className={"homepage__companions__bottom__item " + (this.state.activeCompanion === 2 ? 'active' : '')}>
            <div className="homepage__companions__bottom__item__title">
              <p className="bold">Turtle Rescue</p>
              <p className="sub">Koh Tao - Thailand</p>
            </div>
            <div className="homepage__companions__bottom__item__thumb" style={turtleImage}></div>
          </div>
          <div onClick={() => this.setActiveCompanion(3)} className={"homepage__companions__bottom__item " + (this.state.activeCompanion === 3 ? 'active' : '')}>
            <div className="homepage__companions__bottom__item__title">
              <p className="bold">Vagabond Dogs</p>
              <p className="sub">London - England</p>
            </div>
            <div className="homepage__companions__bottom__item__thumb" style={dogImage}></div>
          </div>
          <div onClick={() => this.setActiveCompanion(4)} className={"homepage__companions__bottom__item " + (this.state.activeCompanion === 4 ? 'active' : '')}>
            <div className="homepage__companions__bottom__item__title">
              <p className="bold">Corals are beautiful</p>
              <p className="sub">Koh Phangan - Thailand</p>
            </div>
            <div className="homepage__companions__bottom__item__thumb" style={coralImage}></div>
          </div>
        </div>
      </div>
    );
  }
}
