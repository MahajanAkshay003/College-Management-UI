import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@material-ui/core";
import StudentBasicProfile from "./StudentBasicProfile";
import StudentSemesterTabSection from "./StudentSemesterTabsSection";
import useGetStudentById from "../../../remoteHooks/getStudentById";
import useGetSubjectsByDepartmentAndSemester from "../../../remoteHooks/getSubjectsByDepartmentAndSemesterHook";
import {addNewMarks, editExisitingMarks} from "../../../remoteMethods/Student/marks";

const StudentMarksContainer = props => {
  const [ loading, student, setStudent ] = useGetStudentById(props.match.params.studentId);
  const [ departmentId, setDepartmentId ] = useState();
  const [ semester, setSemester ] = useState("1");
  const subjects = useGetSubjectsByDepartmentAndSemester(departmentId, semester);
  useEffect(() => {
    if (student) {
      setDepartmentId(student.departmentId);
    }
  }, [student]);
  const saveMarks = async (isEdit, subjectId, internalExamMarks, internalExtraMarks, externalMarks, marksId) => {
    if (isEdit) {
      const { result } = await editExisitingMarks(student.id, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks, marksId);
      return result;
    } else {
      const { result } = await addNewMarks(student.id, semester, subjectId, internalExamMarks, internalExtraMarks, externalMarks);
      return result;
    }
  }
  return (
    <Grid container justify={"center"}>
      <Grid item xs={12}>
        <StudentBasicProfile student={student} loading={loading} />
      </Grid>
      <Grid item xs={11}>
        <StudentSemesterTabSection
          subjects={subjects}
          setSemester={setSemester}
          semester={semester}
          student={student}
          saveMarks={saveMarks}
          setStudent={setStudent}
        />
      </Grid>
    </Grid>
  );
}

export default StudentMarksContainer;