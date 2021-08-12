import React, { useContext } from "react";
import { Route, RouteProps } from "react-router-dom";
import AuthContext from "../contexts/auth";
import Layout from "../layout";
import CreateClient from "../pages/Client/Create";
import ListClient from "../pages/Client/List";
import Home from "../pages/Home";

const AuthRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { signed } = useContext(AuthContext);

  if (signed) return <Route {...rest} />;

  return null;
};

const PrivateRoutes: React.FC = () => {
  return (
    <>
      <Layout>
      <AuthRoute exact path="/app/clients/new" component={CreateClient} />
      <AuthRoute exact path={`/app/clients/update/:id`} component={CreateClient} />
      <AuthRoute exact path="/app/clients" component={ListClient} />
      <AuthRoute exact path="/app" component={ListClient} />
      </Layout>
    </>
  );
};

export default PrivateRoutes;
