import axios from 'axios';
import {apiUrl} from "../../vars/config";

export const addCollegeUser = userData => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/CollegeUsers/createUser`,
      data: { userData }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}

export const loginUser = (email, password, userType) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/CollegeUsers/loginUser`,
      data: { email, password, userType }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}

export const getUserByToken = token => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/CollegeUsers/getUserByToken`,
      data: { token }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}