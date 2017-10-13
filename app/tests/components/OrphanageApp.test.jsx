import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';
import {Provider} from 'react-redux';

import {configure} from 'configStore';

import ConnectedOrphanageApp, {OrphanageApp} from 'OrphanageApp';
import OrphanageSearch from 'OrphanageSearch';
import OrphanageList from 'OrphanageList';

describe('OrphanageApp', () => {
  it('Should exists', () => {
    expect(OrphanageApp).toExist();
  });

  it('Should render orphanageSearch and orphanageList components', () => {
    var store = configure({
      orphanages: []
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedOrphanageApp/>
      </Provider>
    );

    var connectedOrphanageApp = TestUtils.scryRenderedComponentsWithType(provider, ConnectedOrphanageApp)[0];
    var orphanageSearch = TestUtils.scryRenderedComponentsWithType(connectedOrphanageApp, OrphanageSearch)[0];
    var orphanageList = TestUtils.scryRenderedComponentsWithType(connectedOrphanageApp, OrphanageList)[0];
    expect(orphanageSearch).toExist();
    expect(orphanageList).toExist();
  });
});
