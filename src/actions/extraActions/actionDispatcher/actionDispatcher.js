import { notify } from "../actionObjects/actionObjects";

export const notifyUser = (type, message) => dispatch => dispatch(notify(type, message));