import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const StudentInfoCard = props => {
  const { student, editStudentDetails } = props;
  return (
    <Card elevation={4} style={{ marginTop: -8 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h6">
            {`${student.firstName} ${student.middleName} ${student.lastName}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Roll Number: {student.rollNumber}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Current Semester: {student.semester}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.history.push(`/dashboard/view/${student.id}`)}>
          View
        </Button>
        {
          props.user.userType === "admin" && <Button size="small" color="primary" onClick={editStudentDetails}>
            Edit
          </Button>
        }
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(StudentInfoCard));