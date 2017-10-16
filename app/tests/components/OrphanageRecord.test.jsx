var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

import {OrphanageRecord} from 'OrphanageRecord';

describe('OrphanageRecord', () => {
  it('Should exists', () => {
    expect(OrphanageRecord).toExist();
  });
});
