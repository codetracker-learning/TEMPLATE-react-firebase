import axios from 'axios';
import firebaseConfig from '../helpers/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const createUser = (userObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users.json`, userObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };

      axios.patch(`${dbUrl}/users/${response.data.name}.json`, body)
        .then(() => resolve({ ...userObj, ...body}));
    }).catch(reject);
});

const checkUserExists = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => {
      if (Object.values(response.data).length) {
        const [foundUser] = Object.values(response.data);
        resolve({ ...foundUser });
      } else {
        resolve("create user");
      }
    })
})

export { createUser, checkUserExists };
