import React, { useContext, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import Login from '../pages/Login';
import Users from '../pages/Users/Create';
import PrivateRoutes from './PrivateRoutes';



const Routes: React.FC = () => {
  const {signed, verifyToken} = useContext(AuthContext)

  useEffect(() => {
    const storagedToken = localStorage.getItem('@App:token');
      verifyToken(storagedToken)

  }, []);

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