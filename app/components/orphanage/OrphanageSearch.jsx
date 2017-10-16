import React from 'react';
import {connect} from 'react-redux';

import * as orphanageActions from 'orphanageActions';

export class OrphanageSearch extends React.Component {
  render () {
    var {dispatch, orphanageSearch} = this.props;
    return(
      <div className="container__header">
        <div className="row">
          <div className="large-10 column">
            <input type="search" ref="orphanageSearch" value={orphanageSearch} placeholder="search orphanage"
              onChange={() => {
                dispatch(orphanageActions.setOrphanageSearch(this.refs.orphanageSearch.value));
              }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    orphanageSearch: state.searchOrphanage
  }
})(OrphanageSearch);
