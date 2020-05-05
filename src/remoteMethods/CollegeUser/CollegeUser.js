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