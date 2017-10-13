import * as OrphanageAPI from 'OrphanageAPI';

export var loadOrphanages = (orphanages) => {
  return {
    type: 'LOAD_ORPHANAGES',
    orphanages
  };
};

export var startLoadOrphanages = () => {
  return (dispatch, getState) => {
    return OrphanageAPI.getAllOrphanages().then((data) => {
      dispatch(loadOrphanages(data));
    }, (err) => {
      console.log('Unable to get data' + err);
    });
  };
};
