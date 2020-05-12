import React, {Fragment, useState} from 'react';
import { Fab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Chip, List, ListSubheader, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { connect } from "react-redux";
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useGetFaculties from "../../remoteHooks/getFaculties";
import AddQueryDialog from "./AddQueryDialog";
import useGetQueries from "../../remoteHooks/getQueries";

const QueryList = props => {
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
                <Chip label={query.faculty.fullName} color={"primary"} style={{ marginRight: 4 }} />
                <Chip label={new Date(query.createdAt).toDateString()} />
              </Grid>
            </Grid>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography variant={"body2"}>
              {
                query.isAnswered
                &&
                <Fragment>
                  <List
                    subheader={
                      <ListSubheader component="div">
                        Answers to your Queries
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
              {!query.isAnswered && <Typography variant={"body2"}>Your Query will be answered soon!</Typography> }
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
      <div style={{ position: "fixed", bottom: 24, right: 24 }}>
        <Fab style={{ backgroundColor: green[500], color: "white" }} aria-label="add" variant="extended" onClick={() => setOpen(true)}>
          <AddIcon />
          Ask Query
        </Fab>
      </div>
      <AddQueryDialog faculties={faculties} open={open} setOpen={setOpen}  setStartSearch={setStartSearch} />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(QueryList);