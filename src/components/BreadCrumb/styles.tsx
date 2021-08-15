import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 10px 0px;
`;
export const Crumb = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  color: #1950b6;
  margin-right: 5px;
`;

export const ArrowNext = styled(IoIosArrowBack)`
  margin: 5px;
  color: #1950b6;
  transform: rotate(180deg);
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #1950b6;
  transition: all 0.2s;
  &:hover {
    color: #000931;
  }
  &:active {
    color: #bbb;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  margin: 10px 0px;
  align-items: center;
`;

export const LinkActual = styled(LinkItem)`
  color: #4e4e4e;
  &:hover {
    color: #7a7a7a;
  }
`;
