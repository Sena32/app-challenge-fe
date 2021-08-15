import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from 'react-router';
import AuthContext, { User } from '../../contexts/auth';

const FbBtn = ()=> {
  const { addUserFacebook } = useContext(AuthContext);
  const nav = useHistory();

  function responseFacebook(response: { name: any; email: any; }) {
    const user: User ={
      name: response.name,
      email: response.email
    }
    addUserFacebook(user)
    if(response.name){
      nav.push('/Account')
    }
  }


    return (
      <FacebookLogin
        appId={process.env.API_KEY_FACEBOOK || '243706510357500'}
        autoLoad={false}
        textButton= "Login Com Facebook"
        icon="fa-facebook"
        fields="name,email,picture"
        scope="public_profile,user_friends"
        callback={(response: { name: any; email: any; })=>(responseFacebook(response))}
      />
    )
}

export default FbBtn;