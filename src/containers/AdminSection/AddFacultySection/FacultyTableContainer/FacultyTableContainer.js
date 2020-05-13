import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import FacultyFilters from "./FacultyFilters";
import FacultyTable from "../../FacultyAttendanceSection/Panel/FacultyTable";
import useGetFaculties from "../../../../remoteHooks/getFaculties";
import useGetDepartments from "../../../../remoteHooks/getDepartments";

const FacultyTableContainer = props => {
  const [ fullName, setFullName ] = useState("");
  const [ departmentId, setDepartmentId ] = useState();
  const [ departments, loading, error ] = useGetDepartments();
  const [ faculties, setStartSearch ] = useGetFaculties(fullName, departmentId);
  const startSearch = () => setStartSearch(true);
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
        <FacultyFilters
          fullName={fullName}
          setFullName={setFullName}
          startSearch={startSearch}
          setDepartmentId={setDepartmentId}
          departments={departments}
        />
      </Grid>
      <Grid item xs={12}>
        <FacultyTable faculties={faculties} startSearch={startSearch} view={true} />
      </Grid>
    </Grid>
  )
}

export default FacultyTableContainer;