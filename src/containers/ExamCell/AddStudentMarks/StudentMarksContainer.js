import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@material-ui/core";
import StudentBasicProfile from "./StudentBasicProfile";
import StudentSemesterTabSection from "./StudentSemesterTabsSection";
import useGetStudentById from "../../../remoteHooks/getStudentById";
import useGetSubjectsByDepartmentAndSemester from "../../../remoteHooks/getSubjectsByDepartmentAndSemesterHook";

const StudentMarksContainer = props => {
  const [ loading, student ] = useGetStudentById(props.match.params.studentId);
  const [ departmentId, setDepartmentId ] = useState();
  const [ semester, setSemester ] = useState("1");
  const subjects = useGetSubjectsByDepartmentAndSemester(departmentId, semester);
  useEffect(() => {
    if (student) {
      setDepartmentId(student.departmentId);
    }
  }, [student]);
  return (
    <Grid container justify={"center"}>
      <Grid item xs={12}>
        <StudentBasicProfile student={student} loading={loading} />
      </Grid>
      <Grid item xs={11}>
        <StudentSemesterTabSection subjects={subjects} setSemester={setSemester} semester={semester} student={student} />
      </Grid>
    </Grid>
  );
}

export default StudentMarksContainer;