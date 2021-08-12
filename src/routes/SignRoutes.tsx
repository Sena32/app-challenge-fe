import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import Login from '../pages/Login';
import Users from '../pages/Users/Create';
import PrivateRoutes from './PrivateRoutes';



const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext)

if(!signed){
    
 return (
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Account" component={Users} />
        <Redirect to="/Login" />
      </Switch>
 );
}
return (
        <Switch>
            <Route path="/app" component={PrivateRoutes} />
            <Redirect to="/app" />
        </Switch>
);
};

export default Routes;