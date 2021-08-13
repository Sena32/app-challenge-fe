import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FbBtn extends React.Component {
  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <FacebookLogin
        appId="EAADdplf6sZCwBAHEnl2tXMVuLzEvK1af2jJsZB7jYDSNCUjYF7Q64ZAHd98AVqb1biPZCk7POnJbDQBIFRVJTUfxDfjnI5MZCUvSDZCt3UqLmsj420JC3bvHKxfOiDNvfGcZB2UvDWKZC5etdLltniP3xclZCPavZAaqJZCO3Egn6HcAuiHSmAVWIex"
        autoLoad={true}
        fields="name,email,picture"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
      />
    )
  }
}

export default FbBtn;