import React, { useState, useEffect } from "react";
import {getEmployeesByUserType} from "../remoteMethods/CollegeUser/CollegeUser";

const useGetEmployeesByType = (userType, fullName) => {
  const [ employees, setEmployees ] = useState();
  const [ startSearch, setStartSearch ] = useState(true);
  useEffect(() => {
    if (startSearch) {
      getEmployeesByUserType(userType, fullName)
        .then(employees => {
          setEmployees(employees);
          setStartSearch(false);
        }).catch(error => {
          setStartSearch(false);
        })
    }
  }, [startSearch]);
  return [ employees, setStartSearch ];
}

export default useGetEmployeesByType;