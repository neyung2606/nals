import { Redirect, Switch } from "react-router-dom";
import { restrictedRoutes } from "../configs/router/routes";
import { renderRouteList } from "./util";

const RestrictedRoute = () => {
  return (
    <Switch>
      {renderRouteList(restrictedRoutes)}
      <Redirect to={restrictedRoutes.login.path} />
    </Switch>
  );
};

export default RestrictedRoute