import { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { Input } from './styles';


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & TextFieldProps;

const InputCustom:React.FC<Props> = ({...props}:Props)=>{
    
    return(
        <Input {...props} />
    )
}

export default InputCustom;