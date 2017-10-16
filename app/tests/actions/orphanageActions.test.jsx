import React from 'react';
import expect from 'expect';

import * as orphanageActions from 'orphanageActions';

describe('orphanageActions', () => {
  it('Should generate SET_ORPHANAGE_SEARCH action', () => {
    var expected = {
      type: 'SET_ORPHANAGE_SEARCH',
      orphanageSearch: 'search'
    };

    var actual = orphanageActions.setOrphanageSearch(expected.orphanageSearch);

    expect(actual).toEqual(expected);
  });

  it('Should generate LOAD_ORPHANAGES action', () => {
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
    var expected = {
      type: 'LOAD_ORPHANAGES',
      orphanages
    };
    var actual = orphanageActions.loadOrphanages(orphanages);

    expect(actual).toEqual(expected);
  });
});
