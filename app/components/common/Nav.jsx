import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Nav extends React.Component {
  onSearch (e) {
    e.preventDefault();
  }
  render() {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Orphanage</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="search" placeholder="Search Orphanage"/>
              </li>
              <li>
                <input type="submit" className="button" value="Search"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

export default Nav;
