import React, {useState} from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@material-ui/lab';
import StarIcon from "@material-ui/icons/Star";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUserShield, faChalkboardTeacher, faBook } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";

const LoginTypeSwitcher = props => {
  const [ openSwitcher, setOpenSwitcher ] = useState(false);
  const actions = [
    { route: 'student', name: 'Student Login', icon: <FontAwesomeIcon icon={faUserGraduate} /> },
    { route: 'admin', name: 'AdminSection Login', icon: <FontAwesomeIcon icon={faUserShield} /> },
    { route: 'faculty', name: 'Faculty Login', icon: <FontAwesomeIcon icon={faChalkboardTeacher} /> },
    { route: 'exam', name: 'Exam Cell Login', icon: <FontAwesomeIcon icon={faBook} /> }
  ];
  return (
    <SpeedDial
      icon={<SpeedDialIcon openIcon={<StarIcon />} />}
      onClose={() => setOpenSwitcher(false)}
      onOpen={() => setOpenSwitcher(true)}
      open={openSwitcher}
      ariaLabel={"test"}>
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          title={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => props.history.push(`/login/${action.route}`)}
        />
      ))}
    </SpeedDial>
  );
}

export default withRouter(LoginTypeSwitcher);