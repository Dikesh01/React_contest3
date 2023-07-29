

const userReducer = (state = null, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return action.payload;
      case 'LOGOUT':
        return null;
      default:
        return state;
    }
  };
  
  export default userReducer;
  