import axios from 'axios';
import { apiUrl } from '../../../vars/config';
import {loginUser, logoutUser} from "../actionObjects/collegeUserActions";
import { notifyUser } from "../../extraActions/actionDispatcher/actionDispatcher";

export const loginUserAction = (email, password, userType) => dispatch => {
    axios({
        method: 'POST',
        url: `${apiUrl}/CollegeUsers/loginUser`,
        data: { email, password, userType }
    }).then(loginUserData => {
        dispatch(loginUser(loginUserData));
        dispatch(notifyUser("success", "Login Successful!"))
    }).catch(error => {
        dispatch(notifyUser("error", error));
    });
}

export const logoutUserAction = () => dispatch => {
    axios({
        method: 'POST',
        url: `${apiUrl}/CollegeUsers/logout`
    }).then(() => {
        dispatch(logoutUser());
        dispatch(notifyUser("success", "Logout Successful!"))
    }).catch(error => {
        dispatch(notifyUser("error", error));
    });
}