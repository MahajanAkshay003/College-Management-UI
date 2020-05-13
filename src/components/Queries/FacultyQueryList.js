import React, {Fragment, useState} from 'react';
import { Fab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Chip, List, ListSubheader, ListItem, ListItemIcon, ListItemText, Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useGetFaculties from "../../remoteHooks/getFaculties";
import AddQueryDialog from "./AddQueryDialog";
import useGetQueries from "../../remoteHooks/getQueries";
import AnswerQueryDialog from "./AnswerQueryDialog";

const FacultyQueryList = props => {
  const [ faculties, startSearch ] = useGetFaculties("");
  const [ queries, setQueries, setStartSearch ] = useGetQueries(props.user.userType, props.user.userId);
  const [ panelOpenId, setPanelOpenId ] = useState();
  const [ open, setOpen ] = useState(false);
  return (
    <Fragment>
      {queries && queries.map(query => (
        <ExpansionPanel expanded={panelOpenId === query.id} onChange={() => {
          if (panelOpenId === query.id) setPanelOpenId();
          else setPanelOpenId(query.id)
        }}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container>
              <Grid item xs={3}>
                <Typography variant={"body2"}><b>{query.questionTitle}</b></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant={"body2"}>{query.questionDescription}</Typography>
              </Grid>
              <Grid item xs={3} style={{ textAlign: "right" }}>
                <Chip label={query.student.fullName} color={"primary"} style={{ marginRight: 4 }} />
                <Chip label={new Date(query.createdAt).toDateString()} />
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item xs={12}>
                {
                  query.isAnswered
                  &&
                  <Fragment>
                    <List
                      subheader={
                        <ListSubheader component="div">
                          Your Answers
                          <Button size={"small"} variant={"contained"} style={{ color: "white", backgroundColor: green[500], position: "absolute", right: 10, top: 10 }}>Answer Query</Button>
                        </ListSubheader>
                      }
                    >
                      {query.answers.map(answer => (
                        <ListItem button>
                          <ListItemIcon>
                            <SendIcon style={{ fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText secondary={answer.answer}/>
                        </ListItem>
                      ))}
                    </List>
                  </Fragment>
                }
              </Grid>
              <Grid item xs={12} style={{ position: "relative" }}>
                <Typography variant={"body2"}>
                  {!query.isAnswered && <Typography variant={"body2"}>This query requires your answer.</Typography> }
                </Typography>
                {!query.isAnswered && <Button size={"small"} variant={"contained"} style={{ color: "white", backgroundColor: green[500], position: "absolute", right: 10, top: 0 }} onClick={() => setOpen(true)}>Answer Query</Button> }
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      <AnswerQueryDialog open={open} setOpen={setOpen} setStartSearch={setStartSearch} id={panelOpenId} />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(FacultyQueryList);