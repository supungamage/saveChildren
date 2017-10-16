var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var {Provider} = require('react-redux');

import {configure} from 'configStore';

import ConnectedOrphanageList from 'OrphanageList';
import ConnectedOrphanageRecord from 'OrphanageRecord';

describe('OrphanageList', () => {
  it('Should exist', () => {
    expect(ConnectedOrphanageList).toExist();
  });

  it('Should render a OrphanageRecord for each orphanage', () => {
    var orphanages = [{
      id: '1234',
      name: 'test Orphanage 1',
      city: 'City',
      dictrict: 'Colombo',
      noofchildren: 10
    },{
      id: '2345',
      name: 'test Orphanage 2',
      city: 'City',
      dictrict: 'Colombo',
      noofchildren: 10
    }];

    var store = configure({
      orphanages
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedOrphanageList/>
      </Provider>
    );
    var connectedOrphanageList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedOrphanageList)[0];
    var records = TestUtils.scryRenderedComponentsWithType(connectedOrphanageList, ConnectedOrphanageRecord);

    expect(records.length).toBe(orphanages.length);
  });
});
