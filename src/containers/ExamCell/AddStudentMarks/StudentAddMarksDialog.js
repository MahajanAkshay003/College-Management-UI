import React, {useState} from 'react';
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
  const { isMarksDialogOpen, isMarksEdit, addOrEditMarksOpenHandler } = props;
  const subjectLists = [{ value: "physics", label: "Physics" }, { value: "chemistry", label: "Chemistry" }, { value: "maths", label: "Mathematics" }];
  const marksType = [{ value: "midTerm", label: "Mid Term Exams" }, { value: "extraMarks", label: "Extra Marks" }, { value: "externalMarks", label: "External Marks" }];
  const [ selectedSubject, setSelectedSubject ] = useState("");
  const [ selectedMarksType, setSelectedMarksType ] = useState("");
  const [ marks, setMarks ] = useState("");
  const closeModalHandler = () => {
    setMarks("");
    setSelectedSubject("");
    setSelectedMarksType("");
    addOrEditMarksOpenHandler(isMarksEdit, !isMarksDialogOpen);
  }
  return (
    <Dialog fullWidth open={isMarksDialogOpen} onClose={closeModalHandler} aria-labelledby="form-dialog-title">
      <DialogTitle>{isMarksEdit ? "Edit Marks" : "Add Marks"}</DialogTitle>
      <DialogContent>
        <div style={{ marginBottom: 16 }}>
          <Select
            styles={dropdownStyles}
            options={subjectLists}
            defaultValue={selectedSubject}
            onChange={selectedVal => setSelectedSubject(selectedVal.value)}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <Select
            styles={dropdownStyles}
            options={marksType}
            defaultValue={selectedMarksType}
            onChange={selectedVal => setSelectedMarksType(selectedVal.value)}
          />
        </div>
        <div style={{ marginBottom: 70 }}>
          <TextField
            autoFocus
            margin="dense"
            label="Enter Marks"
            value={marks}
            variant={"outlined"}
            onChange={event => setMarks(event.target.value)}
            fullWidth
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={closeModalHandler} color="primary">
          Save Marks
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default StudentAddMarksDialog;