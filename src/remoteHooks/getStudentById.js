import React, { useEffect, useState } from 'react';
import {getStudentById} from "../remoteMethods/Student/student";

const useGetStudentById = (studentId) => {
  const [ student, setStudent ] = useState();
  const [ loading, setLoading ] = useState(true);
  useEffect(() => getStudent(), [studentId]);
  const getStudent = () => {
    if (studentId) {
      setLoading(true);
      getStudentById(studentId).then(student => {
        setStudent(student);
        setLoading(false);
      }).catch(error => {
        setStudent();
        setLoading(false);
      });
    }
  }
  return [ loading, student ];
}

export default useGetStudentById;