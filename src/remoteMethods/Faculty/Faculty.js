import axios from 'axios';
import {apiUrl} from "../../vars/config";

export const getFaculties = (fullName, departmentId) => {
  let whereFilter;
  if (departmentId) whereFilter = { fullName: { like: fullName }, departmentId }
  else whereFilter = { fullName: { like: fullName } }
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${apiUrl}/Faculties/getFaculties`,
      params: { whereFilter }
    }).then(({ data }) => {
      resolve(data.faculties);
    }).catch(error => {
      reject(error);
    })
  })
}

export const markAttendanceOfFaculty = (facultyId, date, entryTime, exitTime, isPresent, type, attendanceId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${apiUrl}/Attendances/addFacultyAttendance`,
      data: {
        facultyId, date, entryTime, exitTime, isPresent, type, attendanceId
      }
    }).then(({ data }) => {
      resolve(data.result);
    }).catch(error => {
      reject(error);
    })
  })
}