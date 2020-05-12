import React from 'react';
import {Chip, Divider, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import { connect } from "react-redux";
import useGetAnnouncementsHook from "../../remoteHooks/getAnnouncementsHook";

const AnnouncementList = props => {
  const { userId, userType } = props.user;
  const announcements = useGetAnnouncementsHook(userId, userType);
  return (
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
        {announcements.map(announcement => (
          <TableRow>
            <TableCell>{announcement.announcement.subject}</TableCell>
            <TableCell>{announcement.announcement.description}</TableCell>
            <TableCell>{announcement.announcement.faculty.fullName}</TableCell>
            <TableCell>
              <Chip label={announcement.announcement.senderType} color={"secondary"} />
            </TableCell>
            <TableCell>{new Date(announcement.announcement.announcementDate).toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(AnnouncementList);