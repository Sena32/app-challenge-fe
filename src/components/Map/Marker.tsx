import React from 'react';
import {Wrapper} from './styles';


const Marker = ({ text, lat, lng, onClick }) => (
  <Wrapper
    onClick={onClick}
  >
      <div>{text}</div>
</Wrapper>
);


export default Marker;