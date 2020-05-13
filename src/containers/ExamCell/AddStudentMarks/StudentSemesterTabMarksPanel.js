import React, {Fragment, useState, useEffect} from 'react';
import { Button, Paper, Typography, Grid, Tabs, Tab, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import GradeIcon from "@material-ui/icons/Grade";
import StudentAddMarksDialog from "./StudentAddMarksDialog";

const StudentSemesterTabMarksPanel = props => {
  const { currentTab, subjects, marks, semester, saveMarks, setStudent, student } = props;
  const [ isMarksEdit, setMarksEdit ] = useState(false);
  const [ isMarksDialogOpen, setMarksDialogOpen ] = useState(false);
  const [ currentSubjectIndex, setCurrentSubjectIndex ] = useState(0);
  const [ currentSubjectMarks, setCurrentSubjectMarks ] = useState();
  const addOrEditMarksOpenHandler = (isOpen) => {
    const isEdit = !!currentSubjectMarks;
    setMarksEdit(isEdit);
    setMarksDialogOpen(isOpen);
  }
  useEffect(() => {
    if (subjects) {
      setCurrentSubjectMarks(marks.find(mark => (
        subjects[currentSubjectIndex].subjectId === mark.subjectId
      )));
    }
  },[marks, semester, subjects]);
  const handleSubjectChange = (event, newValue) => {
    setCurrentSubjectMarks(marks.find(mark => (
      subjects[newValue].subjectId === mark.subjectId
    )));
    setCurrentSubjectIndex(newValue);
  }
  const showPanelByCurrentTabValue = () => {
    return (
      <Paper style={{ padding: 16 }} elevation={4}>
        <Grid container spacing={2}>
            <Grid item xs={3} style={{ margin: 0 }}>
              <Tabs
                orientation="vertical"
                value={currentSubjectIndex}
                onChange={handleSubjectChange}
              >
                {
                  subjects && subjects.map((subject => (
                    <Tab key={subject.id} label={subject.subjectId} />
                  )))
                }
              </Tabs>
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                {!props.view && <Grid item xs={12} style={{ textAlign: "right" }}>
                  <ThemeProvider theme={theme}>
                    <Button style={{ color: "white" }} size={"small"} onClick={() => addOrEditMarksOpenHandler(true)} color="primary" variant={"contained"}>
                      { currentSubjectMarks ? "Edit Marks" : "Add Marks" }
                    </Button>
                  </ThemeProvider>
                </Grid>}
                <Grid item xs={12}>
                  {currentSubjectMarks &&
                  <List>
                    <ListItem dense>
                      <ListItemAvatar>
                        <Avatar>
                          <GradeIcon/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Internal Exam Marks"
                        secondary={currentSubjectMarks.internalExamMarks}
                      />
                    </ListItem>
                      <ListItem dense>
                        <ListItemAvatar>
                          <Avatar>
                            <GradeIcon/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Internal Extra Marks"
                          secondary={currentSubjectMarks.internalExtraMarks}
                        />
                      </ListItem>
                      <ListItem dense>
                        <ListItemAvatar>
                          <Avatar>
                            <GradeIcon/>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="External Exam Marks"
                          secondary={currentSubjectMarks.externalMarks}
                        />
                      </ListItem>
                    </List>
                  }
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </Paper>
    )
  }
  return (
    <Fragment>
      {showPanelByCurrentTabValue()}
      <StudentAddMarksDialog
        isMarksDialogOpen={isMarksDialogOpen}
        isMarksEdit={isMarksEdit}
        currentSubjectMarks={currentSubjectMarks}
        setCurrentSubjectMarks={setCurrentSubjectMarks}
        addOrEditMarksOpenHandler={addOrEditMarksOpenHandler}
        setMarksEdit={setMarksEdit}
        saveMarks={saveMarks}
        subjects={subjects}
        currentSubjectIndex={currentSubjectIndex}
        setMarksDialogOpen={setMarksDialogOpen}
        setStudent={setStudent}
        student={student}
      />
    </Fragment>
  )
}

const theme = createMuiTheme({
  palette: {
    primary: { main: green[700] }
  }
})

export default StudentSemesterTabMarksPanel;