import Axios from 'axios';
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Container, Spinner } from '../components/Spinner/styles';
// import {post} from '../services/api';
import api from '../services/api';
// import auth from '../services/auth';

interface User {
    name?:string;
    email?:string;
    password?: string;
  }

interface AuthContextData {
    signed: boolean;
    loading: boolean;
    user: User;
    signIn(user:User): Promise<any>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState({});

    const verifyToken = async(token)=>{
      console.log(token)
      api.post('/token/verify', {
        token
      }).then((resp)=>{
        if(resp){
          setStatus(resp)
        }

      })
    }
    console.log(status)
    useEffect(() => {
      if (!status) {
        signOut()

      }
      // eslint-disable-next-line eqeqeq

    }, []);

    useEffect(() => {
      const storagedUser = localStorage.getItem('@App:user');
      const storagedToken = localStorage.getItem('@App:token');
  
      if (storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));
        verifyToken(storagedToken)
      }
      // eslint-disable-next-line eqeqeq

    }, []);


    async function signIn(user: User) {
        try {
        setLoading(true)
        // const response = await auth.signIn({email: user.email, password: user.password});
        const response = await api.post('token/', {
          username: user.name,
          password: user.password
        })
        localStorage.setItem('@App:user', JSON.stringify({email: "teste", name: "Ailton Sena"}));
        localStorage.setItem('@App:token', response.data.access);
        setUser({email: "teste", name: "Ailton Sena"})
        setLoading(false)
        return <Redirect to='/app'  />
        } catch (error) {
          console.log(error);
          setLoading(false)
          return <Redirect to='/'  />
        }
        
        
    }

    function signOut() {
      setUser(null);
  
      localStorage.clear()
    }
    return (
      <AuthContext.Provider value={{ signed: !!user, loading, user, signIn, signOut }}>
        {loading? (<Container><Spinner/></Container>): children}
      </AuthContext.Provider>
    );
   };

export default AuthContext;