import React, {useState} from 'react';
import { Grid } from "@material-ui/core";
import FacultyFilters from "./FacultyFilters";
import FacultyTable from "./FacultyTable";
import useGetFaculties from "../../../../remoteHooks/getFaculties";

const FacultyAttendancePanelContainer = props => {
  const [ fullName, setFullName ] = useState("");
  const [ faculties, setStartSearch ] = useGetFaculties(fullName);
  const startSearch = () => setStartSearch(true);
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
        <FacultyFilters fullName={fullName} setFullName={setFullName} startSearch={startSearch} />
      </Grid>
      <Grid item xs={12}>
        <FacultyTable faculties={faculties} startSearch={startSearch} />
      </Grid>
    </Grid>
  );
}

export default FacultyAttendancePanelContainer;