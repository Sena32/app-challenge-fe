/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import { formatInitialName } from "../../helpers/formaters";
import { Brand, Container, NavRight, Navtop } from "./styles";


const NavTop: React.FC = () =>{
  const { user, signOut} = useContext(AuthContext);

  const name = formatInitialName(user.name)

    return (
        <Container>
        
        <Navtop>
            <Brand ><Link to="/app">Challenge</Link></Brand>
            <NavRight>
                {/* <p>{name}</p> */}
                <a onClick={()=>signOut()}><FaSignOutAlt /> Logout</a>
            </NavRight>
        </Navtop>
        </Container>

    );
}

export default NavTop;