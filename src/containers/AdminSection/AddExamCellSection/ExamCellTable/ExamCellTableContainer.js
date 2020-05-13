import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import TnpFilters from "../../AddTnpSection/TnpTableContainer/TnpFilters";
import EmployeeTable from "../../EmployeeTable/EmployeeTable";
import useGetEmployeesByType from "../../../../remoteHooks/getEmployeesByType";

const ExamCellTableContainer = props => {
  const [ fullName, setFullName ] = useState("");
  const [ employees, setStartSearch ] = useGetEmployeesByType("examcell", fullName);
  const startSearch = () => setStartSearch(true);
  return (
    <Grid container style={{ paddingLeft: 8 }}>
      <Grid item xs={12} style={{ marginBottom: 8 }}>
        <TnpFilters
          fullName={fullName}
          setFullName={setFullName}
          startSearch={startSearch}
        />
      </Grid>
      <Grid item xs={12}>
        <EmployeeTable employees={employees} />
      </Grid>
    </Grid>
  )
}

export default ExamCellTableContainer;