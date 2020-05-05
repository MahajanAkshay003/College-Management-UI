import React, {useEffect, useState} from 'react';

const useGetStudentByRollNumber = rollNumber => {
  const [ student, setStudent ] = useState();
  useEffect(() => {

  }, [rollNumber]);
  return student;
}