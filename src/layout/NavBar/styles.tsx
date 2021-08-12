import styled from "styled-components";
import { theme } from '../../styles/global';

export const Container = styled.div`
    background: #fff;
    margin: 0 auto;
    width: 100%;
    background-color: transparent;
`;

export const Navtop = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Brand = styled.div`
    a {
        font-weight: 700;
        color: ${props => theme.palette['black']};
        text-decoration: none;
        font-size: 24px;
        transition: all .3s;
        width: 200px !important;
        &:hover{
            color: #696969;
        }
    }
`;


export const NavRight = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background: ${props => theme.palette['primary']};
        color:${props => theme.palette['white']} !important;
        font-weight: bold;
        border-radius: 50%;
        font-size: 1rem !important;
    }
    a {

        font-weight: 700;
        color: ${props => theme.palette['primary']} !important;
        text-decoration: none;
        font-size: 24px;
        margin-left: 20px;
        transition: all .3s;
        &:hover{
            color:${props => theme.palette['primaryHover']} !important;
        }
        &:link{
            font-weight: 900;
        }

    }
`;


