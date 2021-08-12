import React from 'react';
import {HeadMain} from "./styles"

interface Props{
    children: any;
}
const Header: React.FC<Props> =({children}:Props)=>{
    return(
        
        <HeadMain>
            <div>
                {children}
            </div>
        </HeadMain>
    )
}

export default Header;