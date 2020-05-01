import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Typography} from "@material-ui/core";

const StudentBasicProfile = props => {
  return (
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
                Akshay Mahajan
              </Typography>
              <Typography variant={"body1"} style={{ fontWeight: 400 }}>
                Roll Number: 00811502816
              </Typography>
              <div style={{ marginTop: "8px" }}>
                <Chip label="vomaksh@gmail.com" />
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  )
}

export default StudentBasicProfile;