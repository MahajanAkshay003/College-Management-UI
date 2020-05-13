import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  Button
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import StudentIcon from "../../../assets/student.png"
import StudentInfoCard from "./StudentInfoCard";

const SearchStudentSection = props => {
  const { rollNumber, setRollNumber, getStudentDetails, student, editStudentDetails } = props;
  return (
    <Grid container style={{ marginTop: 16 }} justify={"center"}>
      <Grid item xs={4}/>
      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <Paper style={{ borderRadius: "50%", ...styles.cardMedia, height: 175, width: 175, zIndex: 10, position: "relative" }} elevation={4}>
              <CardMedia style={{...styles.cardMedia, position: "relative", top: 32}} image={StudentIcon}/>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} />
      <Grid item xs={6}>
        <Card style={{position: "relative", top: "-32px", zIndex: 0 }} elevation={4}>
          <CardContent style={{textAlign: "center", paddingTop: "42px"}} >
            <Typography variant={"h4"} style={{ fontWeight: 300 }}>
              Search Student
            </Typography>
            <Grid container justify={"center"} style={{ marginTop: 16 }}>
              <Grid item xs={8}>
                <TextField
                  label="Enter Roll Number"
                  variant="outlined"
                  value={rollNumber}
                  onChange={event => setRollNumber(event.target.value)}
                  autoFocus={true}
                  fullWidth
                />
              </Grid>
              <Grid item xs={1}>
                <Button variant={"contained"} color={"primary"} size={"small"} onClick={getStudentDetails}>
                  <IconButton><SearchIcon style={{ color: "white" }} /></IconButton>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {student && <StudentInfoCard editStudentDetails={editStudentDetails} student={student} />}
      </Grid>
    </Grid>
  );
}

const styles = {
  cardMedia: {
    height: "120px",
    width: "120px",
    marginLeft: "auto",
    marginRight: "auto"
  }
}

export default SearchStudentSection;