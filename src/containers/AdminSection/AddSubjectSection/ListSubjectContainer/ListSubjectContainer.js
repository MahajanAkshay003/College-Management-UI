import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import ListSubjectTable from "./ListSubjectTable";
import ListSubjectFilters from "./ListSubjectFilters";
import useGetDepartments from "../../../../remoteHooks/getDepartments";
import useGetBatchesByDepartment from "../../../../remoteHooks/getBatchesByDepartment";
import useGetSubjectsByDepartmentAndSemester from "../../../../remoteHooks/getSubjectsByDepartmentAndSemesterHook";
import {getSubjectsByDepartmentAndSemester} from "../../../../remoteMethods/Subject/Subject";

const ListSubjectContainer = props => {
  const [ departmentId, setDeoartmentId ] = useState("");
  const [ semester, setSemester ] = useState("1");
  const [departments, loading, error] = useGetDepartments();
  const [ subjects, setSubjects ] = useState();
  const searchSubjects = () => {
    getSubjectsByDepartmentAndSemester(departmentId, semester).then(data => {
      setSubjects(data.subjects);
    }).catch(error => {
      setSubjects([]);
    })
  }
  const semesters = Array(8).fill().map((val, index) => ({ value: `${index + 1}`, label: `Semester ${index + 1}` }));
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
        <ListSubjectFilters searchSubjects={searchSubjects} departments={departments} semesters={semesters} setSemester={setSemester} setDepartmentId={setDeoartmentId} />
      </Grid>
      <Grid item xs={12}>
        <ListSubjectTable subjects={subjects} />
      </Grid>
    </Grid>
  );
}

export default ListSubjectContainer;