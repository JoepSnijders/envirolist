import React, { Component } from 'react';
import {  } from 'react-router';
import moment from 'moment';
moment().format('YYYY MM DD');
import Map from '../../../components/Map';

export default class MapSection extends Component {
  render(){
    return (
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
          <div className="homepage__world__map__latest">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 offset-sm-8">
                  <div className="homepage__world__map__latest__inner">
                    <p className="bold">Latest Additions</p>
                    <ul>
                      {
                        (this.props.jobs.length) ?
                          this.props.jobs.map((listValue) => {
                            return (
                              <li key={listValue._id}>
                                <div className="homepage__world__map__latest__inner__title">{listValue.name}</div>
                                <div className="homepage__world__map__latest__inner__location">{listValue.location.name} - { listValue.location.country }</div>
                                <div className="homepage__world__map__latest__inner__ago">{moment(listValue.dateAdded).fromNow()}</div>
                              </li>
                            );
                          })
                          :
                          <li className="none-found">
                            No entries found.
                          </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Map markers={this.props.jobs} />
        </div>
      </div>
    );
  }
}
