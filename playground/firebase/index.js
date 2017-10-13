import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBdNnLoezo0l5Zysj_mC2t2jg-QUalvpEY",
  authDomain: "new-todo-app-c92b8.firebaseapp.com",
  databaseURL: "https://new-todo-app-c92b8.firebaseio.com",
  projectId: "new-todo-app-c92b8",
  storageBucket: "new-todo-app-c92b8.appspot.com",
  messagingSenderId: "142531021407"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  name: 'Todo App',
  hobby: 'Running',
  marrried: true,
  version: {
    version: 1.0,
    author: 'Supun'
  },
  user: {
    name: 'Supun',
    age: 36,
    child: {
      childname: 'Nethum',
      school: true
    }
  }
});
/*.then(() => {
  console.log('Success set');
}, (e) => {
  console.log('ERROR set');
}); */

/*firebaseRef.child('version').set({
  version: 2.0,
  author: 'Rangika'
});*/

/*
firebaseRef.update({
  name: 'New Todo App',
  'version/author': 'Rangika',
  'user/name': 'Rangika'
});

firebaseRef.child('version').update({
  version: 40
});

firebaseRef.child('user').update({
  age: 40
});

firebaseRef.child('name').remove();

firebaseRef.child('user').update({
  name: 'Nethum',
  age: null
}); */

/*firebaseRef.once('value').then((snapshot) => {
  console.log('SUCESS', snapshot.val());
}, (e) => {
  console.log('ERROR', e)
});

firebaseRef.child('user/child').once('value').then((snapshot) => {
  console.log('USER', snapshot.val());
}, (e) => {
  console.log('U ERROR', e)
});*/

/*firebaseRef.child('user/child').on('value', (snapshot) => {
  console.log('CHILD CHANGE VALUE', snapshot.val())
});

firebaseRef.update({
  'user/child/childname': 'Nethum G',
  'user/child/age': 4
});

firebaseRef.update({
  'user/name': 'Supun G'
});

firebaseRef.update({
  'name': 'My New todo app'
});*/

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'test todo 1'
});

todosRef.push({
  text: 'test todo 2'
});
