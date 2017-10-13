import React from 'react';

export class OrphanageSearch extends React.Component {
  render () {
    return(
      <div className="container__header">
        <div className="row">
          <div className="large-10 column">
            <input type="search" ref="search" placeholder="search orphanage"/>
          </div>
        </div>
      </div>
    );
  }
}

export default OrphanageSearch;
