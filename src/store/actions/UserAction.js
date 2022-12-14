const types = {
  ADD_USER: "ADD_USER",
  SET_UID: "SET_UID",
};

const adduser = (userInfo) => {
  return {
    type: types.ADD_USER,
    payload: {
      firstname: userInfo?.firstname,
      lastname: userInfo?.lastname,
      email: userInfo?.email,
      phone: userInfo?.phone,
    },
  };
};
const addUID = (UID) => {
  return {
    type: types.SET_UID,
    payload: UID,
  };
};

export default {types, adduser, addUID};
