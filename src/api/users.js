import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const createUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body)
        .then(() => console.warn("User Created"));
    }).catch(reject);
});

const checkUserExists = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (Object.values(response.data).length) {
        resolve(response.data)
      } else {
        resolve("create user");
      }
    })
})

export { createUser, checkUserExists };
