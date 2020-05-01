import React from 'react';
import StudentProfile from "../StudentSection/StudentProfile/StudentProfile";
import FacultyProfile from "../FacultySection/FacultyProfile/FacultyProfile";
import EmployeeProfile from "../../components/EmployeeProfile/EmployeeProfile";

const Profile = props => {
  const { isDrawerOpen, setDrawerOpen } = props;
  const renderProfileByUserType = () => {
    const userType = "student";
    switch (userType) {
      case "student":
        return <StudentProfile isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />;
      case "faculty":
        return <FacultyProfile isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />;
      default:
        return <EmployeeProfile isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />;
    }
  }
  return renderProfileByUserType();
}

export default Profile;