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