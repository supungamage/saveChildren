export var orphanageReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ORPHANAGES':
      return [
        ...state,
        ...action.orphanages
      ];
    default:
      return state;
  }
};

export var orphanageSearchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ORPHANAGE_SEARCH':
      return action.orphanageSearch;
    default:
      return state;
  }
};
