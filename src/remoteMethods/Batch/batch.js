import axios from 'axios';
import {apiUrl} from '../../vars/config';

export const addBatch = (departmentId, batchName) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${apiUrl}/Batches/addBatch`,
      data: {departmentId, batchName}
    }).then(({data}) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  })
}

export const getBatchesByDepartmentId = (departmentId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Batches/getBatchByDepartmentId`,
      data: { departmentId }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}