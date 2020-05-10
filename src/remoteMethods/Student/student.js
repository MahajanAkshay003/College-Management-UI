import axios from 'axios';
import {apiUrl} from "../../vars/config";

export const getStudentById = studentId => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Students/getStudentDetails`,
      params: { studentId }
    }).then(({ data }) => {
      resolve(data.student);
    }).catch(error => {
      reject(error);
    })
  })
}

export const getStudentByRollNumber = rollNumber => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Students/getStudentByRollNumber`,
      params: { rollNumber }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}

export const getStudents = whereFilter => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Students/getStudents`,
      params: {
        whereFilter
      }
    }).then(({ data }) => {
      resolve(data.students);
    }).catch(error => {
      reject(error);
    })
  })
}
