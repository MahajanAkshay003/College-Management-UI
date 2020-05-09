import React, {Fragment} from 'react';
import Header from "../../components/Helpers/Header/Header";
import {Grid} from "@material-ui/core";
import DashboardDrawer from "../../components/DashboardDrawer/DashboardDrawer";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import AdminSection from "../AdminSection/AdminSection";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import StudentProfile from "../StudentSection/StudentProfile/StudentProfile";
import AddStudentSection from "../AdminSection/AddStudentSection/AddStudentSection";
import AddStudentMarksSection from "../AdminSection/AddStudentMarksSection/AddStudentMarksSection";
import DepartmentContainer from "../AdminSection/DepartmentSection/DepartmentContainer/DepartmentContainer";
import BatchContainer from "../AdminSection/BatchSection/BatchContainer";
import AddFacultySectionContainer from "../AdminSection/AddFacultySection/AddFacultySectionContainer";
import TrainingPlacementCellDashboard from "../TrainingPlacementCellSection/TrainingPlacementCellDashboard";
import ExamCellDashboard from "../ExamCell/ExamCellDashboard/ExamCellDashboardContainer";
import StudentMarksContainer from "../ExamCell/AddStudentMarks/StudentMarksContainer";
import FacultyAttendancePanelContainer
  from "../AdminSection/FacultyAttendanceSection/Panel/FacultyAttendancePanelContainer";
import SubjectContainer from "../AdminSection/AddSubjectSection/SubjectContainer/SubjectContainer";
import ListSubjectContainer from "../AdminSection/AddSubjectSection/ListSubjectContainer/ListSubjectContainer";

const Dashboard = props => {
  return (
    // <BrowserRouter>
    <Fragment>
      <Header/>
      <Grid container spacing={2} style={{ marginTop: 60 }}>
        <Grid item xs={1} style={{ marginLeft: -8, marginTop: -10 }}>
          <DashboardDrawer/>
        </Grid>
        <Grid item xs={11}>
          <Switch>
            {/*<Route path={"/dashboard"} render={props => <AdminSection/>} exact/>*/}
            {/*<Route path={"/dashboard"} render={props => <TrainingPlacementCellDashboard />} exact />*/}
            <Route path={"/dashboard"} render={props => <ExamCellDashboard />} exact />
            <Route path={"/dashboard/announcements"} render={props => <AnnouncementList />}/>
            <Route path={"/dashboard/profile"} render={props => <StudentProfile />}/>
            <Route path={"/dashboard/student/:action"} render={props => <AddStudentSection { ...props } />} />
            <Route path={"/dashboard/editMarks/:studentId"} render={props => <StudentMarksContainer { ...props } />} />
            <Route path={"/dashboard/faculty/add"} render={props => <AddFacultySectionContainer { ...props } />} />
            <Route path={"/dashboard/faculty/attendance"} render={props => <FacultyAttendancePanelContainer { ...props } />} />
            <Route path={"/dashboard/department/add"} render={props => <DepartmentContainer { ...props } />} />
            <Route path={"/dashboard/batch/add"} render={props => <BatchContainer { ...props } />} />
            <Route path={"/dashboard/subject/add"} render={props => <SubjectContainer { ...props} />} />
            <Route path={"/dashboard/subject/list"} render={props => <ListSubjectContainer { ...props} />} />
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default Dashboard;