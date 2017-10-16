var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {OrphanageSearch} from 'OrphanageSearch';

describe('OrphanageSearch', () => {
  it('Should exists', () => {
    expect(OrphanageSearch).toExist();
  });

  it('Should dispatch SET_ORPHANAGE_SEARCH action when valid text entered', () => {
    var searchText = 'test';
    var action = {
      type: 'SET_ORPHANAGE_SEARCH',
      orphanageSearch: searchText
    };
    var spy = expect.createSpy();
    var orphanageSearch = TestUtils.renderIntoDocument(<OrphanageSearch dispatch={spy}/>);
    orphanageSearch.refs.orphanageSearch.value = searchText;
    TestUtils.Simulate.change(orphanageSearch.refs.orphanageSearch);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
