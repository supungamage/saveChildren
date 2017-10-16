export var OrphanageUtil = {
  filterOrphanages: (orphanages, filter) => {
    var filteredOrphanages = orphanages;
    filteredOrphanages = filteredOrphanages.filter((orphanage) => {
      return filter.name.lenght === 0 || orphanage.name.toLowerCase().indexOf(filter.name.toLowerCase())  > -1;;
    });

    return filteredOrphanages;
  }
}

export default OrphanageUtil;
