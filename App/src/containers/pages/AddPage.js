import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import HeaderBar from '../../components/HeaderBar';

class AddPage extends Component {
  constructor(){
    super();
    this.search = this.search.bind(this);
  }

  search(){
    this.props.actions.searchJobs();
  }

  render() {
    console.log(this.props);
    return (
      <div className="homepage">
        <HeaderBar />
        <div className="container">
          <p>Add Page</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddPage);
