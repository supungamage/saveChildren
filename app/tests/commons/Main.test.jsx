import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Main from 'Main';
import Nav from 'Nav';

describe('Main', () => {
  it('Should exists', () => {
    expect(Main).toExist();
  });

  it('Should render Nav component', () => {
    var main = TestUtils.renderIntoDocument(<Main/>);
    var nav = TestUtils.scryRenderedComponentsWithType(main, Nav)[0];
    expect(nav).toExist();
  });
});
