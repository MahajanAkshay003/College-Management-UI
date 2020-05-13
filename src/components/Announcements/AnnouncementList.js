import React, {Fragment, useState} from 'react';
import {Chip, Divider, Fab, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import useGetAnnouncementsHook from "../../remoteHooks/getAnnouncementsHook";
import {green} from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";

const AnnouncementList = props => {
  const { userId, userType } = props.user;
  const announcements = useGetAnnouncementsHook(userId, userType);
  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Issued By</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Issued At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {announcements && announcements.map(announcement => {
            if (props.user.userType === "student") {
              return (
                <TableRow>
                  <TableCell>{announcement.announcement.subject}</TableCell>
                  <TableCell>{announcement.announcement.description}</TableCell>
                  <TableCell>{announcement.announcement.faculty.fullName}</TableCell>
                  <TableCell>
                    <Chip label={announcement.announcement.senderType} color={"secondary"} />
                  </TableCell>
                  <TableCell>{new Date(announcement.announcement.announcementDate).toDateString()}</TableCell>
                </TableRow>
              )
            } else {
              return (
                <TableRow>
                  <TableCell>{announcement.subject}</TableCell>
                  <TableCell>{announcement.description}</TableCell>
                  <TableCell>{announcement.admin.fullName}</TableCell>
                  <TableCell>
                    <Chip label={announcement.senderType} color={"secondary"} />
                  </TableCell>
                  <TableCell>{new Date(announcement.announcementDate).toDateString()}</TableCell>
                </TableRow>
              )
            }
          })}
        </TableBody>
      </Table>
      <div style={{ position: "fixed", bottom: 24, right: 24 }}>
        <Fab style={{ backgroundColor: green[500], color: "white" }} aria-label="add" variant="extended" onClick={() => props.history.push("/dashboard/sendAnnouncement")}>
          <AddIcon />
          Announcement
        </Fab>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps)(AnnouncementList));