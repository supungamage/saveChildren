import React from 'react';
import Nav from 'Nav';

export class Main extends React.Component {
  render () {
    return (
      <div>
        <Nav/>
        <div className="row">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
