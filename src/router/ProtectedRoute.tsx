import { Redirect, Switch } from "react-router-dom";
import { protectedRoutes } from "../configs/router/routes";
import Layout from "../layout";
import { renderRouteList } from "./util";

const ProtectedRoute = () => {
  return (
    <Layout>
      <Switch>
        {renderRouteList(protectedRoutes)}
        <Redirect to={protectedRoutes.users.path} />
      </Switch>
    </Layout>
  );
};

export default ProtectedRoute;
