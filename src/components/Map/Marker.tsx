import React from 'react';
import {Wrapper} from './styles';


const Marker = ({ text, lat, lng, onClick }) => (
  <Wrapper
    onClick={onClick}
  >
      {text}
</Wrapper>
);


export default Marker;