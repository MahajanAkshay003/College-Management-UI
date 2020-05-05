import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from "@material-ui/core";

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
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary" onClick={editStudentDetails}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default StudentInfoCard;