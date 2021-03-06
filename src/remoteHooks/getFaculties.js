import React, {useEffect, useState} from 'react';
import {getFaculties} from "../remoteMethods/Faculty/Faculty";

const useGetFaculties = (fullName, departmentId) => {
  const [ startSearch, setStartSearch ] = useState(true);
  const [ faculties, setFaculties ] = useState([]);
  useEffect(() => {
    if (startSearch) {
      getFaculties(fullName, departmentId).then(faculties => {
        setFaculties(faculties);
        setStartSearch(false);
      }).catch(error => {
        setStartSearch(false);
      })
    }
  }, [startSearch]);
  return [ faculties, setStartSearch ];
}

export default useGetFaculties;