import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from "../vars/config";

const getDepartment = props => {
  const [ department, setDepartments ] = useState([]);
  useEffect(() => {
    axios.get(`${apiUrl}/`)
  }, []);
  return departments;
}