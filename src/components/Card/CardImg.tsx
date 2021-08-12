import React from 'react';
import {CardImg as Container} from "./styles";

interface Props{
    children: any;
    type?: string
}
const CardImg: React.FC<Props> =({type,children}:Props)=>{
    return(
        <Container>
                {children}
        </Container>
    )
}

export default CardImg;