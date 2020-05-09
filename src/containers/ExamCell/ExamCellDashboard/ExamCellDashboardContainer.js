import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import StudentSearchContainer from "./StudentSearch";
import StudentTableSectionContainer from "./StudentTableSectionContainer";
import useGetStudents from "../../../remoteHooks/getStudents";

const TrainingPlacementCellDashboard = props => {
  const [ activeStep, setActiveStep ] = useState(0);
  const [ fullName, setFullName ] = useState("");
  const [ selectedDepartment, setSelectedDepartment ] = useState("");
  const [ selectedBatch, setSelectedBatch ] = useState("");
  const [ selectedSemester, setSelectedSemester ] = useState("");
  const [ students, setStartSearch ] = useGetStudents(fullName, selectedDepartment, selectedBatch, selectedSemester);
  const filterStudentsClickHandler = () => {
    setStartSearch(true);
    setActiveStep(1);
  }
  const showPanelByActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <StudentSearchContainer
          setStartSearch={setStartSearch}
          selectedDepartment={selectedDepartment}
          selectedBatch={selectedBatch}
          selectedSemester={selectedSemester}
          setSelectedDepartment={setSelectedDepartment}
          setSelectedBatch={setSelectedBatch}
          setSelectedSemester={setSelectedSemester}
          filterStudentsClickHandler={filterStudentsClickHandler}
        />;
      case 1:
        return <StudentTableSectionContainer
          fullName={fullName}
          setFullName={setFullName}
          setStartSearch={setStartSearch}
          students={students}
          startSearch={() => setStartSearch(true)}
        />;
    }
  }
  return (
    <Grid container>
      {showPanelByActiveStep()}
    </Grid>
  );
}

export default TrainingPlacementCellDashboard;