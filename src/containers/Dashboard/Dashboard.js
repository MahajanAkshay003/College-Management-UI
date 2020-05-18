import React, {Fragment} from 'react';
import {Grid} from "@material-ui/core";
import { connect } from "react-redux";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "../../components/Helpers/Header/Header";
import DashboardDrawer from "../../components/DashboardDrawer/DashboardDrawer";
import AdminSection from "../AdminSection/AdminSection";
import StudentProfile from "../StudentSection/StudentProfile/StudentProfile";
import AddStudentSection from "../AdminSection/AddStudentSection/AddStudentSection";
import AddStudentMarksSection from "../AdminSection/AddStudentMarksSection/AddStudentMarksSection";
import DepartmentContainer from "../AdminSection/DepartmentSection/DepartmentContainer/DepartmentContainer";
import BatchContainer from "../AdminSection/BatchSection/BatchContainer";
import AddFacultySectionContainer from "../AdminSection/AddFacultySection/AddFacultySectionContainer";
import TrainingPlacementCellDashboard from "../TrainingPlacementCellSection/TrainingPlacementCellDashboard";
import ExamCellDashboard from "../ExamCell/ExamCellDashboard/ExamCellDashboardContainer";
import StudentMarksContainer from "../ExamCell/AddStudentMarks/StudentMarksContainer";
import FacultyAttendancePanelContainer from "../AdminSection/FacultyAttendanceSection/Panel/FacultyAttendancePanelContainer";
import SubjectContainer from "../AdminSection/AddSubjectSection/SubjectContainer/SubjectContainer";
import ListSubjectContainer from "../AdminSection/AddSubjectSection/ListSubjectContainer/ListSubjectContainer";
import AddAdminSection from "../AdminSection/AddAdminSection/AddAdminSection";
import AddExamCellSection from "../AdminSection/AddExamCellSection/AddExamCellSection";
import AddTnpSection from "../AdminSection/AddTnpSection/AddTnpSection";
import Announcements from "../../components/Announcements/Announcements";
import FacultyTableContainer from "../AdminSection/AddFacultySection/FacultyTableContainer/FacultyTableContainer";
import ExamCellTableContainer from "../AdminSection/AddExamCellSection/ExamCellTable/ExamCellTableContainer";
import AdminEmployeesTableContainer
  from "../AdminSection/AddAdminSection/AdminEmployeesTableContainer/AdminEmployeesTableContainer";
import TnpTableContainer from "../AdminSection/AddTnpSection/TnpTableContainer/TnpTableContainer";
import DepartmentTableContainer
  from "../AdminSection/DepartmentSection/DepartmentTableContainer/DepartmentTableContainer";

const Dashboard = props => {
  const { userType, userId } = props.user;
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
            <Route path={"/dashboard"} render={props => {
              switch (userType) {
                case "student": return props.history.push("/dashboard/announcements");
                case "faculty": return props.history.push("/dashboard/student/edit")
                case "admin": return <AdminSection {...props} />;
                case "examcell": return <ExamCellDashboard {...props} />;
                case "tnp": return <TrainingPlacementCellDashboard {...props} />;
                default:
              }
            }} exact/>
            <Route path={"/dashboard/announcements"} render={props => <Announcements />}/>
            <Route path={"/dashboard/sendAnnouncement"} render={props => <ExamCellDashboard { ...props } />} />
            <Route path={"/dashboard/profile"} render={props => {
              if (userType === "student") return props.history.push(`/dashboard/view/${userId}`);
              else return props.history.push("/dashboard");
            }}/>
            <Route path={"/dashboard/student/:action"} render={props => <AddStudentSection { ...props } />} />
            <Route path={"/dashboard/admin/add"} render={props => <AddAdminSection { ...props } />} />
            <Route path={"/dashboard/examcell/add"} render={props => <AddExamCellSection { ...props } />} />
            <Route path={"/dashboard/tnp/add"} render={props => <AddTnpSection { ...props } />} />
            <Route path={"/dashboard/editMarks/:studentId"} render={props => <StudentMarksContainer view={false} { ...props } />} />
            <Route path={"/dashboard/view/:studentId"} render={props => <StudentMarksContainer view={true} { ...props } />} />
            <Route path={"/dashboard/faculty/add"} render={props => <AddFacultySectionContainer { ...props } />} />
            <Route path={"/dashboard/faculty/list"} render={props => <FacultyTableContainer { ...props } />} />
            <Route path={"/dashboard/examcell/list"} render={props => <ExamCellTableContainer { ...props } />} />
            <Route path={"/dashboard/admin/list"} render={props => <AdminEmployeesTableContainer { ...props } />} />
            <Route path={"/dashboard/tnp/list"} render={props => <TnpTableContainer { ...props } />} />
            <Route path={"/dashboard/faculty/attendance"} render={props => <FacultyAttendancePanelContainer { ...props } />} />
            <Route path={"/dashboard/department/add"} render={props => <DepartmentContainer { ...props } />} />
            <Route path={"/dashboard/department/list"} render={props => <DepartmentTableContainer { ...props } />} />
            <Route path={"/dashboard/batch/add"} render={props => <BatchContainer { ...props } />} />
            <Route path={"/dashboard/subject/add"} render={props => <SubjectContainer { ...props} />} />
            <Route path={"/dashboard/subject/list"} render={props => <ListSubjectContainer { ...props} />} />
          </Switch>
        </Grid>
      </Grid>
    </Fragment>
  )
};

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(Dashboard);