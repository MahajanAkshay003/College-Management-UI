import axios from 'axios';
import {apiUrl} from "../../vars/config";

export const addSubject = (id, subjectName, subjectDescription, credits, departmentId, semester, subjectType) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Subjects/addSubject`,
      data: { id, subjectName, subjectDescription, credits, departmentId, semester, subjectType }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  });
}

export const getSubjectsByDepartmentAndSemester = (departmentId, semester) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Subjects/getSubjectsBySemesterAndDepartment`,
      data: { departmentId, semester }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  })
}