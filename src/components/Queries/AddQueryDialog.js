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
import { connect } from "react-redux";
import {sendQuery} from "../../remoteMethods/Announcement/announcement";
import dropdownStyles from "../../styles/dropdownStyles";
import Select from "react-select";

const AddQueryDialog = props => {
  const { open, setOpen, setStartSearch, faculties } = props;
  const [ querySubject, setQuerySubject ] = useState("");
  const [ queryDescription, setQueryDescription ] = useState("");
  const [ facultyId, setFacultyId ] = useState("");
  const closeModalHandler = () => {
    setQuerySubject("");
    setQueryDescription("");
    setFacultyId("");
    setOpen(false);
  }
  const saveQueryButtonHandler = () => {
    sendQuery(facultyId, props.user.userId, querySubject, queryDescription)
      .then(() => {
        setStartSearch(true);
        closeModalHandler();
      })
      .catch(error => {
        console.log(error);
        closeModalHandler();
      });
  }
  return (
    <Dialog fullWidth open={open} onClose={closeModalHandler} aria-labelledby="form-dialog-title">
      <DialogTitle>Ask Query</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Query Heading"
          value={querySubject}
          variant={"outlined"}
          onChange={event => setQuerySubject(event.target.value)}
          fullWidth
        />
        <TextField
          margin="dense"
          label="Query Description"
          value={queryDescription}
          variant={"outlined"}
          onChange={event => setQueryDescription(event.target.value)}
          fullWidth
        />
        <Select
          styles={dropdownStyles}
          options={faculties.map(faculty => ({ label: faculty.fullName, value: faculty.id }))}
          placeholder={"Choose Faculty"}
          onChange={selectedVal => setFacultyId(selectedVal.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={saveQueryButtonHandler} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AddQueryDialog);