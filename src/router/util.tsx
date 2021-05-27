import { lazy, FC } from "react";
import { IRoute } from "../configs/router/routes";
import { Route } from "react-router-dom";

interface LazyComponentProps {
  component: string;
  props?: any;
}

const LazyComponent: FC<LazyComponentProps> = ({ component, props }) => {
  const Component = lazy(() => import(`../pages/${component}`));
  return <Component {...props} />;
};

export const renderRouteList = (routes: Record<string, IRoute>) =>
  Object.entries(routes).map(([key, route]) => {
    const { page, ...rest } = route;
    return (
      <Route
        key={key}
        {...rest}
        render={() => <LazyComponent component={page} />}
      />
    );
  });
