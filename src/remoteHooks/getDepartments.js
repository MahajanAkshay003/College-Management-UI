import React, { useState, useEffect } from 'react';
import { getAllDepartments } from "../remoteMethods/Department/Department";

const useGetDepartments = props => {
  const [ loading, setLoading ] = useState(false);
  const [ departments, setDepartments ] = useState([]);
  const [ error, setError ] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllDepartments().then(departments => {
      setDepartments(departments);
      setLoading(false);
      setError(false);
    });
  }, []);
  return [ departments, loading, error ];
}

export default useGetDepartments;