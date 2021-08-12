import React from 'react';
import {Card as Container} from "./styles";

interface Props{
    children: any;
    type?: string
}
const Card: React.FC<Props> =({type,children}:Props)=>{
    return(
        <Container>
                {children}
        </Container>
    )
}

export default Card;