import React, {useEffect, useState} from 'react';
import {getSubjectsByDepartmentAndSemester} from "../remoteMethods/Subject/Subject";

const useGetSubjectsByDepartmentAndSemester = (departmentId, semester) => {
  const [ subjects, setSubjects ] = useState();
  useEffect(() => {
    if (departmentId && semester) {
      getSubjectsByDepartmentAndSemester(departmentId, semester).then(data => {
        setSubjects(data.subjects);
      }).catch(error => {
        setSubjects([]);
      })
    }
  }, [departmentId, semester]);
  return subjects;
}

export default useGetSubjectsByDepartmentAndSemester;