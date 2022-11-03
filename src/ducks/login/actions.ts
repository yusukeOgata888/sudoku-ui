export const SIGH_IN = "SIGH_IN";
export const signInAction = (userState: {
  isSignedIn: boolean;
  userId: any;
  userName: any;
}) => {
  return {
    type: "SIGH_IN",
    payload: {
      isSignedIn: true,
      userId: userState.userId,
      userName: userState.userName,
    },
  };
};

export const SIGH_OUT = "SIGH_OUT";
export const signOutAction = () => {
  return {
    type: "SIGH_OUT",
    payload: {
      isSignedIn: false,
      userId: "",
      userName: "",
    },
  };
};
