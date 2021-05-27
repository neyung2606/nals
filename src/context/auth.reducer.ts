export interface IAuthState {
  isAuthenticated: boolean;
}

export type AuthAction =
  | {
      type: "LOGIN"
    }
  | {
      type: "LOGOUT";
    };

const checkLocal = () => {
  return localStorage.getItem('access-token') !== null
}

export const inititalAuthState: IAuthState = {
  isAuthenticated: checkLocal(),
};

export const authReducer = (preState: IAuthState, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...preState,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...preState,
        isAuthenticated: false,
      };
    default:
      return preState;
  }
};
