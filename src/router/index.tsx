import { Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ProtectedRoute from "./ProtectedRoute";
import RestrictedRoute from "./RestrictedRoute";

const AppRouter = () => {
  const { authState } = useContext(AuthContext);
  return (
    <Router>
      <Suspense fallback="...Loading">
        <Switch>
          <Route
            path="/"
            render={() => {
              if (authState?.isAuthenticated) return <ProtectedRoute />;
              else return <RestrictedRoute />;
            }}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
