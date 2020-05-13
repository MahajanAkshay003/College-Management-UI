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

export const editUser = (userType, userData) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/CollegeUsers/editUser`,
      data: { userType, userData }
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

export const getEmployeesByUserType = (userType, fullName) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/CollegeUsers/getEmployeesByType`,
      data: { userType, whereFilter: { fullName: { like: fullName } } }
    }).then(({ data }) => {
      resolve(data.employees);
    }).catch(error => {
      reject(error);
    })
  });
}