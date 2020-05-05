import axios from 'axios';
import {apiUrl} from "../../vars/config";

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