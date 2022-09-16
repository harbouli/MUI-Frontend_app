import UserAction from "../actions/UserAction";

const initialState = {
  UID: "Hr",
  user: {
    firstname: "mohamed",
    lastname: "harbouli",
    email: "mohamed@harbouli.com",
    phone: "0623839627",
  },
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserAction.types.ADD_USER:
      return {...state, user: action.payload};
    case UserAction.types.SET_UID:
      return {...state, UID: action.payload};
    default:
      return state;
  }
};
export default UserReducer;
