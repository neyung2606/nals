export interface IRoute {
  page: string;
  exact: boolean;
  path: string;
}

export const restrictedRoutes: Readonly<Record<string, IRoute>> = {
  login: {
    page: "login",
    exact: true,
    path: "/login",
  },
  register: {
    page: "register",
    exact: true,
    path: "/register",
  },
};

export const protectedRoutes: Readonly<Record<string, IRoute>> = {
  users: {
    page: "user",
    exact: true,
    path: "/user",
  },
};
