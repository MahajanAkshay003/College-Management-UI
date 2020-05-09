import React, {useEffect, useState} from 'react';
import {getStudents} from "../remoteMethods/Student/student";

const useGetStudents = (fullName, departmentId, batchId, semester) => {
  const [ students, setStudents ] = useState([]);
  const [ startSearch, setStartSearch ] = useState(false);
  useEffect(() => {
    if (startSearch) {
      getStudents({ fullName: { like: fullName }, departmentId, batchId, semester: { gte: semester - 1, lte: semester } }).then(students => {
        setStartSearch(false);
        setStudents(students);
      }).catch(error => {
        setStartSearch(false);
        setStudents([]);
      })
    }
  }, [startSearch]);
  return [ students, setStartSearch];
}

export default useGetStudents;