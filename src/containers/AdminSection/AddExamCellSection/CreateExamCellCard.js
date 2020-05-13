import React from 'react';
import {Card, CardContent, Grid, CardMedia, Typography, Button} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import {blue, indigo, teal} from "@material-ui/core/colors";

const CreateExamCellCard = props => {
  return (
    <Card elevation={4} style={{
      borderRadius: "16px",
      background:
        `linear-gradient(34deg, ${teal[600]} 0%, ${teal[400]} 29%, ${teal[600]} 92%)`
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
              BACHELOR OF TECHNOLOGY
            </Typography>
            <Typography variant={"h5"} style={{
              fontWeight: 300,
              color: "white"
            }}>
              Add Exam Cell User
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
                  fullWidth
                  onClick={() => props.history.push("/dashboard/examcell/add")}
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
                  fullWidth
                  onClick={() => props.history.push("/dashboard/examcell/list")}
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
            }} image={require("../../../assets/employee.png")} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default withRouter(CreateExamCellCard);