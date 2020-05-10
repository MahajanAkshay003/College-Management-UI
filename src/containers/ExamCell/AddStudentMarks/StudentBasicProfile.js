import React, { Fragment } from "react";
import {Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography} from "@material-ui/core";

const StudentBasicProfile = props => {
  const { student, loading } = props;
  return (
    <Fragment>
      {student ?
        <Grid container justify={"center"}>
          <Grid item xs={12}>
            <CardMedia component={"img"} style={{
              width: "120px",
              height: "120px",
              position: "relative",
              left: "45%",
              zIndex: "1000",
            }} image={require("../../../assets/student-male.png")} />
          </Grid>
          <Grid item xs={6}>
            <Card style={{ position: "relative", top: "-32px" }} elevation={4}>
              <CardActionArea style={{ textAlign: "center", paddingTop: "24px" }}>
                <CardContent>
                  <Typography variant={"h4"} style={{ fontWeight: 300 }}>
                    {student.fullName}
                  </Typography>
                  <Typography variant={"body1"} style={{ fontWeight: 400 }}>
                    Roll Number: {student.rollNumber}
                  </Typography>
                  <div style={{ marginTop: "8px" }}>
                    <Chip label={student.email} />
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        :
        loading ?
          <Typography variant={"body2"}>
            Loading student profile .....
          </Typography>
          :
          <Typography variant={"body2"}>
            No student found.
          </Typography>
      }
    </Fragment>
  )
}

export default StudentBasicProfile;