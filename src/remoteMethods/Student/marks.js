import axios from 'axios';
import { apiUrl } from "../../vars/config";

export const addNewMarks = (studentId, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks) => {
  console.log(studentId, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks);
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Marks/addMarks`,
      data: { studentId, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
}

export const editExisitingMarks = (studentId, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks, id) => {
  console.log(studentId, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks, id);
  return new Promise(((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Marks/updateMarks`,
      data: { studentId, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks, id }
    }).then(({ data }) => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  }));
}

