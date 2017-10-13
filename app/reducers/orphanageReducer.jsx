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
