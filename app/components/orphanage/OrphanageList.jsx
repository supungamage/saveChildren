import React from 'react';
import {connect} from 'react-redux';

import OrphanageRecord from 'OrphanageRecord';

export class OrphanageList extends React.Component {
  render() {
    var renderOrphanages = () => {
      var {orphanages} = this.props;
      return orphanages.map((orphanage) => {
        return(
          <OrphanageRecord key={orphanage._id} />
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
    orphanages: state.orphanages
  };
})(OrphanageList);
