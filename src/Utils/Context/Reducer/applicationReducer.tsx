export const initialStore: any = {
  user: {
    email: "",
    accessToken: "",
    refreshToken: "",
  },
  appLoading: false,
};

export const applicationReducer = (state: any, action: any) => {
  switch (action.type) {
    case "UPDATE_STORE":
      return { ...state, ...action.payload };
  }

  return state;
};
