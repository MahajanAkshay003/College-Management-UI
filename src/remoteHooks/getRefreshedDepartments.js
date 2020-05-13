import React, { useState, useEffect } from 'react';
import { getAllDepartments } from "../remoteMethods/Department/Department";

const useGetRefreshedDepartments = () => {
  const [ departments, setDepartments ] = useState([]);
  const [ search, setSearch ] = useState(true);
  useEffect(() => {
    if (search) {
      getAllDepartments()
        .then((departments) => {
          setSearch(false);
          setDepartments(departments);
        }).catch(error => {
          setSearch(false);
          setDepartments([]);
        });
    }
  }, [search]);
  return [ departments, setSearch ];
}

export default useGetRefreshedDepartments;