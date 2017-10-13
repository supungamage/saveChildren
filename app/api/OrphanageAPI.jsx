import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api/';

var OrphanageAPI = {

  getAllOrphanages: () => {
    var requestURL = `${ROOT_URL}orphanages`;

    return axios.get(requestURL).then((snapshot) => {
      if(snapshot.status && snapshot.status === 200) {
        console.log(snapshot.data);
        return snapshot.data;
      }
    }, (err) => {
      return err;
    });
  }
};

module.exports = OrphanageAPI;
