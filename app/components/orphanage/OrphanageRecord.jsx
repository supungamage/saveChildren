import React from 'react';

export class OrphanageRecord extends React.Component {
  render() {
    var orphanage = this.props.orphanage;
    
    return(
      <tr>
        <td></td>
        <td>{orphanage.name}</td>
        <td>{orphanage.city}</td>
        <td>{orphanage.dictrict}</td>
        <td>{orphanage.totaldonationcount}</td>
        <td>{orphanage.noofchildren}</td>
      </tr>
    );
  }
}

export default OrphanageRecord;
