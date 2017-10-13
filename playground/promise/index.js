var config = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('config completed');
      resolve();
    }, 1000);
  });
};

var mileage = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof data === 'string') {
        console.log('mileage completed');
        resolve('mileage SUCESS');
      } else {
        reject('mileage ERROR');
      }
    }, 1000);
  });
};

var expense = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof data === 'string') {
        console.log('expense completed');
        resolve('expense SUCESS');
      } else {
        reject('expense ERROR');
      }
    }, 1000);
  });
};

var load = () => {
  config()
     .then(mileage('aa'))
     .then(expense('bb'));
};

load();

/*
config().then(() =>{
  console.log('SUCCESS CONFIG');
}, (err) => {
  console.log('ERROR CONFIG');
}).then((message) => {
  console.log('SUCCESS', message);
}, (err) => {
  console.log('ERROR', err);
});*/
