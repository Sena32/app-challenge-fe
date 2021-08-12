import styled from 'styled-components';
import { theme } from '../../styles/global';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0px;

`;


export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 20px 0px;

`;

export const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 650px;
    margin-bottom: 10px;
    background: #FFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    transition: all .5s ease-in;
    &:hover{
        cursor: pointer;
        background: #fff3f3;
    }
`;

export const Title = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;
    width: 100%;
    color: ${props=> theme.palette['primary']};
    font-size: 26px;
    font-weight: 400;

`;


export const HeadBarTitle = styled.div`
    span {
    font-weight: 400;
    font-size: 10px;
    color: ${props=> theme.palette['black']};
    display: block;
    width: 100%;
}
`;
