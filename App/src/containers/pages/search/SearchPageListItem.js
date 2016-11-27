import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SearchPageListItem extends Component {
  render() {
    return (
      <Link to={"jobs/" + this.props.job._id} key={this.props.job._id}>
        <div className="searchpage__main__results__result">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2">
                <div className="searchpage__main__results__result__image" style={{backgroundImage: "url('images/small-beach.jpg')"}}></div>
              </div>
              <div className="col-sm-10">
                <div className="searchpage__main__results__result__content">
                  <p className="bold">{this.props.job.name}</p>
                  <p>{this.props.job.location.name } - { this.props.job.location.country }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
