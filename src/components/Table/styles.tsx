import styled from 'styled-components';
import { Link as ReactLink } from 'react-router-dom';
import { theme } from '../../styles/global';
import { Table } from 'react-bootstrap';

interface PropsSpace {
  size: number;
}

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1rem;
  min-height: 80vh;
  width: 100%;
`;

export const Init = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props=> theme.palette['primary']};
  width: 100%;
  margin-bottom: 2rem;
  button {
    /* width: 200px; */
  }
`;

export const ContentTable = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.8rem;
  max-width: 60rem;
  width: 90vw;
  /* background: #ffffff;
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
  border-radius: 4px; */
  p {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
`;

export const TableWrapper = styled(Table)`
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TbHeadTr = styled.tr`
  background: rgba(245, 246, 248, 0.7);
  border-radius: 4px 4px 0px 0px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem;
  height: 3rem;
  width: 100%;

  background: rgba(245, 246, 248, 0.7);
  border-radius: 4px 4px 0px 0px;
`;

export const TH = styled.th`
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: -0.05px;
  padding: 1rem;
  color: #3a3b3f;
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;

  letter-spacing: -0.05px;

  color: #3a3b3f;

  &:first-child {
    margin-left: 1.5rem;
  }
`;

export const ContentData = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border: 1px solid #000 !important;
  height: 2rem;
  width: 100%;

  border: 1px solid #ebeff2;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 1.25rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.4rem;
  height: 2rem;
  width: 100%;

  border: 1px solid #ebeff2;
  box-sizing: border-box;
  border-radius: 4px;

  padding: 1.25rem;
`;

export const TR = styled.tr`
  height: 2rem !important;
  width: 100%;
  border: 1px solid #ebeff2;
  border-radius: 4px;
`;

export const TBody = styled.tbody``;
export const TD = styled.td`
  font-family: Roboto;
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: -0.05px;
  padding-left: 5px;
  color: #3a3b3f;
  div {
    display: flex;
    > button {
      margin-right: 20px;
    }
  }
`;
export const Label = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 100;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: -0.05px;

  color: #3a3b3f;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;

  letter-spacing: -0.05px;

  color: #3a3b3f;
  margin-bottom: 1.8rem;
`;

export const Link = styled(ReactLink)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.05px;
  text-decoration-line: underline;

  color: #072e84;
`;

export const Space = styled.p<PropsSpace>`
  display: inline-block;
  width: ${props => `${props.size}px`};
`;
