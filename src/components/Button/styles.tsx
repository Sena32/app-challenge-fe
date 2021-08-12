import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from '../../styles/global';


export const ButtonComponent = styled(({ color, ...otherProps }) => <Button {...otherProps} />)`
  height: 3rem;
  width: 100%;
  font-family: 'DIN Pro Medium';
  background: ${props => theme.palette[props.color]} !important;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  color: ${props => props.color === 'primary' ? theme.palette['white']: theme.palette['black']} !important;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
    0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 1.2rem;
  margin-bottom: 1.3rem;
  cursor: pointer;
  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    background: ${props => props.color === 'primary' ? theme.palette['primaryHover']: theme.palette['secondaryHover']} !important;
  }
  &:disabled {
    background: #b9b9b9;
    cursor: not-allowed;
  }
`;
