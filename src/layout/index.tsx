import React from 'react';
import FooterMain from './Footer/FooterMain';
import SideBar from './SideBar/SideBar';
import Sidebar from './siderbar';
import { Main, Wrapper } from './styles';


const Layout: React.FC = ({children}) => {

  return(
    <Wrapper>
        {/* <Sidebar logout={()=>console.log()}/> */}
        <SideBar/>
        <Main>
          {children}
        </Main>
        <FooterMain />
    </Wrapper>
  )
  ;
}

export default Layout;