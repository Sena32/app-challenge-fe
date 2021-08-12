import styled, { keyframes } from 'styled-components';
import { theme } from '../../styles/global';

export const Wrapper = styled.div`
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;

`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35vw;
    min-width: 400px;
    gap: 20px;
    height: 500px;
    background: #FFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
    h1 {
        color: ${props=> theme.palette['primary']};
    }
    h5{
      cursor: pointer;
      transition: all .3s;
      &:hover{
        color: #001;
      }
    }
    form{
      display: flex;
      flex-direction: column;
      gap: 10px;
      div {
        svg {
          cursor: pointer;
        }
      }
    }

`;

// Create the keyframes
const rotate = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Transition = styled.div`
  display: inline-block;
  animation: ${rotate} .5s ease-in ;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;