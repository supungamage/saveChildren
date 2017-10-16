import React from 'react';
import {connect} from 'react-redux';

import OrphanageUtil from 'OrphanageUtil';
import OrphanageRecord from 'OrphanageRecord';

export class OrphanageList extends React.Component {
  render() {
    var renderOrphanages = () => {
      var {orphanages, orphanageSearch} = this.props;
      var filteredOrphanages = OrphanageUtil.filterOrphanages(orphanages, {name: orphanageSearch});
      return filteredOrphanages.map((orphanage) => {
        return(
          <OrphanageRecord key={orphanage._id} orphanage={orphanage}/>
        );
      });
    }
    return(
      <div className="row">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>name</th>
              <th>city</th>
              <th>dictrict</th>
              <th>donations</th>
              <th>childrens</th>
            </tr>
          </thead>
          <tbody>
          {renderOrphanages()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    orphanages: state.orphanages,
    orphanageSearch: state.orphanageSearch
  };
})(OrphanageList);
