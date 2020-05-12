const initialState = {
  isAuthenticated: false,
  token: null,
  userType: null,
  userId: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        isAuthenticated: true,
        token: action.payload.id,
        userType: action.payload.userType,
        userId: action.payload.userId
      }
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
}

export default userReducer;