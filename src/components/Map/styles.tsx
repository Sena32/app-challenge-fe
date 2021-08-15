import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  background-color: #0064c2;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
  div{
    margin: 0 auto; 
    background: rgba(0,0,0,0.5);
    font-family: 'open sans';
    font-size: 0.85em;
    line-height: 1.6em;  
    border-radius: 15px;
    width: 150px;
    height: auto;
    color: #fff;
    padding: 20px;
    position: relative;
    margin-top: -65px;
    margin-left: -34px;
    &:before{
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      /*Faz seta "apontar para baixo. Definir o valor como 'top' fará ela "apontar para cima" */
      /*Aqui entra a cor da "aba" do balão */
      border-top: 15px solid rgba(0,0,0,0.4);
      top: 54px; /*localização. Experimente alterar para 'bottom'*/
      left: 20%;
    }
  }
`;