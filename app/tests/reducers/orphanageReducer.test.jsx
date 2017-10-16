import expect from 'expect';
import * as orphanageReducer from 'orphanageReducer'

import df from 'deep-freeze-strict';

describe('orphanageReducer', () => {
  it('Should load orphanages via LOAD_ORPHANAGES', () => {
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
    var action = {
      type: 'LOAD_ORPHANAGES',
      orphanages
    };

    var actual = orphanageReducer.orphanageReducer(df([]), df(action));
    expect(actual).toEqual(orphanages);
  });

  it('Should set search orphanage text via SET_ORPHANAGE_SEARCH', () => {
    var orphanageSearch = 'search';
    var action = {
      type: 'SET_ORPHANAGE_SEARCH',
      orphanageSearch
    };

    var actual = orphanageReducer.orphanageSearchReducer(df(''), df(action));
    expect(actual).toEqual(orphanageSearch);
  });
});
