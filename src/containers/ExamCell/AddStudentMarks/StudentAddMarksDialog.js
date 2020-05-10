import React, {useEffect, useState} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  DialogContentText,
  Grid
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Select from "react-select";
import dropdownStyles from "../../../styles/dropdownStyles";

const StudentAddMarksDialog = props => {
  const { isMarksDialogOpen, isMarksEdit, setMarksEdit, setMarksDialogOpen, currentSubjectMarks, setCurrentSubjectMarks, subjects, currentSubjectIndex, saveMarks, student, setStudent } = props;
  const [ internalExamMarks, setInternalExamMarks ] = useState("");
  const [ internalExtraMarks, setInternalExtraMarks ] = useState("");
  const [ externalExamMarks, setExternalExamMarks ] = useState("");
  const closeModalHandler = () => {
    setInternalExamMarks("");
    setInternalExtraMarks("");
    setExternalExamMarks("");
    setMarksDialogOpen(false);
    setMarksEdit(!isMarksEdit);
  }
  useEffect(() => {
    if (isMarksEdit && currentSubjectMarks) {
      const { internalExamMarks, internalExtraMarks, externalMarks } = currentSubjectMarks;
      setInternalExamMarks(internalExamMarks);
      setInternalExtraMarks(internalExtraMarks);
      setExternalExamMarks(externalMarks);
    }
  }, [isMarksEdit, currentSubjectMarks]);
  const saveOrEditMarksClickHandler = () => {
    if (isMarksEdit) {
      saveMarks(
        true,
        currentSubjectMarks.subjectId,
        internalExamMarks,
        internalExtraMarks,
        externalExamMarks,
        currentSubjectMarks.id
      )
        .then(marks => {
          setCurrentSubjectMarks(marks);
          closeModalHandler();
        })
        .catch(error => console.log(error));
    } else {
      console.log(subjects[currentSubjectIndex]);
      saveMarks(
        false,
        subjects[currentSubjectIndex].subjectId,
        internalExamMarks,
        internalExtraMarks,
        externalExamMarks,
      )
        .then(marks => {
          setStudent({ ...student, marks: [...student.marks, marks ]});
          setCurrentSubjectMarks(marks);
          closeModalHandler();
        })
        .catch(error => console.log(error));
    }
  }
  return (
    <Dialog fullWidth open={isMarksDialogOpen} onClose={closeModalHandler} aria-labelledby="form-dialog-title">
      <DialogTitle>{isMarksEdit ? "Edit Marks" : "Add Marks"}</DialogTitle>
      <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Internal Exam Marks"
            value={internalExamMarks}
            variant={"outlined"}
            onChange={event => setInternalExamMarks(event.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Internal Extra Marks"
            value={internalExtraMarks}
            variant={"outlined"}
            onChange={event => setInternalExtraMarks(event.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="External Exam Marks"
            value={externalExamMarks}
            variant={"outlined"}
            onChange={event => setExternalExamMarks(event.target.value)}
            fullWidth
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={saveOrEditMarksClickHandler} color="primary">
          Save Marks
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StudentAddMarksDialog;