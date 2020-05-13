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
import {saveQueryAnswer} from "../../remoteMethods/Announcement/announcement";

const AnswerQueryDialog = props => {
  const { open, setOpen, setStartSearch, id } = props;
  const [ answer, setAnswer ] = useState("");
  const closeModalHandler = () => {
    setAnswer("");
    setOpen(false);
  }
  const answerQuery = () => {
    saveQueryAnswer(id, answer)
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
    <Dialog fullWidth open={open} onClose={closeModalHandler}>
      <DialogTitle>Answer Query</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Answer"
          value={answer}
          variant={"outlined"}
          onChange={event => setAnswer(event.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={answerQuery} color="primary">
          Answer
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(AnswerQueryDialog);