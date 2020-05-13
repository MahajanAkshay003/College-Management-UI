import axios from 'axios';
import {apiUrl} from "../../vars/config";

export const sendAnnouncement = (subject, description, studentId, senderId, senderType) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Announcements/sendAnnouncement`,
      data: {
        subject, description, studentId, senderId, senderType
      }
    }).then(({ data }) => {
      resolve(data.announcement);
    }).catch(error => {
      reject(error);
    })
  })
}

export const getAnnouncements = (id, userType) => {
  return new Promise((resolve, reject) => {
    switch (userType) {
      case "student":
        axios({
          method: "GET",
          url: `${apiUrl}/Announcements/getStudentAnnouncements`,
          params: { studentId: id }
        }).then(({ data }) => {
          resolve(data.announcements);
        }).catch(error => {
          reject(error);
        });
        break;
      default:
        axios({
          method: "GET",
          url: `${apiUrl}/Announcements/getEmployeeAnnouncements`,
          params: { id, userType }
        }).then(({ data }) => {
          resolve(data.announcements);
        }).catch(error => {
          reject(error);
        });
    }
  })
}

export const sendQuery = (facultyId, studentId, questionTitle, questionDescription) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/StudentQueries/askQuery`,
      data: { facultyId, studentId, questionTitle, questionDescription }
    }).then(({ data }) => {
      resolve(data.query);
    }).catch(error => {
      reject(error);
    })
  })
}

export const getQueries = (userType, id) => {
  let idFieldName, urlEndPoint;
  switch (userType) {
    case "student":
      idFieldName = "studentId";
      urlEndPoint = `${apiUrl}/StudentQueries/getQueriesByStudentId`;
      break;
    case "faculty":
      idFieldName = "facultyId";
      urlEndPoint = `${apiUrl}/StudentQueries/getFacultyQueries`;
      break;
    default:
  }
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: urlEndPoint,
      data: { [idFieldName]: id }
    }).then(({ data }) => {
      resolve(data.queries);
    }).catch(error => {
      reject(error);
    })
  })
}

export const saveQueryAnswer = (studentQueryId, answer) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/StudentQueryAnswers/answerQuery`,
      data: { studentQueryId, answer }
    }).then(({ data }) => {
      resolve(data.queryAnswer);
    }).catch(error => {
      reject(error);
    })
  })
}

export const sendMailToStudent = (studentId, subject, description) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Announcements/sendMail`,
      data: { studentId, subject, description }
    }).then(({ data }) => {
      resolve(data.success);
    }).catch(error => {
      reject(error);
    })
  })
}