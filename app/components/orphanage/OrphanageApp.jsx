import React from 'react';
import {connect} from 'react-redux';

import * as orphanageActions from 'orphanageActions';

import OrphanageSearch from 'OrphanageSearch';
import OrphanageList from 'OrphanageList';

export class OrphanageApp extends React.Component {
  componentDidMount() {
    var {dispatch} = this.props;
    dispatch(orphanageActions.startLoadOrphanages());
  }
  render() {
    return(
      <div>
        <div className="row">
          <div className="large-12 columns page-title">
            <h2>Orphanages</h2>
          </div>
        </div>
        <div className="row">
          <div className="large-6 columns">
            <OrphanageSearch/>
          </div>
          <div className="large-3 medium-6 columns">
            <button type="button" className="button hollow button-margin">Add</button>
            <button type="button" className="button hollow button-margin" >Delete</button>
          </div>
        </div>
        <OrphanageList/>
      </div>
    );
  }
}

export default connect()(OrphanageApp);
