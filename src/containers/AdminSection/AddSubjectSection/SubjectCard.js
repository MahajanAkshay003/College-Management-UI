import React from 'react';
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {teal, yellow, blue, orange} from "@material-ui/core/colors";
import {withRouter} from "react-router-dom";

const SubjectCard = props => {
  return (
    <Card elevation={4} style={{
      borderRadius: "16px",
      background: `linear-gradient(34deg, ${orange[600]} 0%, ${orange[400]} 29%, ${orange[600]} 92%)`
    }}>
      <CardContent>
        <Grid container justify={"center"}>
          <Grid item xs={8} style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "left"
          }}>
            <Typography variant={"body2"} style={{
              fontWeight: 500,
              color: "white"
            }}>
              BVCOE
            </Typography>
            <Typography variant={"h5"} style={{
              fontWeight: 300,
              color: "white"
            }}>
              Add Subject
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <Button
                  variant={"contained"}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: "white",
                    borderRadius: "16px",
                  }}
                  onClick={() => props.history.push("/dashboard/subject/add")}
                  fullWidth
                >
                  Add +
                </Button>
              </Grid>

              <Grid item xs={5}>
                <Button
                  variant={"contained"}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: "white",
                    borderRadius: "16px",
                  }}
                  onClick={() => props.history.push("/dashboard/subject/list")}
                  fullWidth
                >
                  List
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <CardMedia style={{
              height: "120px",
              width: "120px",
              marginLeft: "auto",
              marginRight: "auto"
            }} image={require("../../../assets/department.png")} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default withRouter(SubjectCard);