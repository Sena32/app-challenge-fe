import React from 'react';
import { Container, Wrapper } from './styles';


interface Props {
  children: any;
}

const SubHeader: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default SubHeader;
