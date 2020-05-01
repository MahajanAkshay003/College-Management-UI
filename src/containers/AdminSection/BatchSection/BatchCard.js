import React from 'react';
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import { blue, indigo, teal } from "@material-ui/core/colors";
import { withRouter } from "react-router-dom";

const BatchCard = props => {
  return (
    <Card elevation={4} style={{
      borderRadius: "16px",
      background:
        `linear-gradient(34deg, ${blue[600]} 0%, ${teal[400]} 29%, ${indigo[600]} 92%)`
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
              Add Batch
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
                  onClick={() => props.history.push("/dashboard/batch/add")}
                >
                  Add +
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <CardMedia style={{
              height: "120px",
              width: "155px",
              marginLeft: "auto",
              marginRight: "auto",
            }} image={require("../../../assets/batch.png")} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

export default withRouter(BatchCard);