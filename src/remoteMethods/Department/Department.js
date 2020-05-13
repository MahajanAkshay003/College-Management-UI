import axios from 'axios';
import { apiUrl } from '../../vars/config';

export const addDepartment = (departmentName, departmentDescription, departmentHodId) => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${apiUrl}/Departments/addDepartment`,
      method: "POST",
      data: { departmentName, departmentHodId, departmentDescription }
    }).then(({ data }) => {
      resolve(data);
    }).catch(({ error }) => {
      reject(error);
    });
  });
}

export const getAllDepartments = () => {
  return new Promise((resolve, reject) => {
    axios({
      url: `${apiUrl}/Departments/getDepartments`,
      method: "GET"
    }).then(({ data }) => {
      resolve(data.departments);
    }).catch(error => {
      reject(error);
    })
  });
}

export const addHodToDepartment = (departmentId, facultyId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Departments/addHod`,
      data: { departmentId, facultyId }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}