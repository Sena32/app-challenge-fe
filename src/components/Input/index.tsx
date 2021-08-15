import { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Input } from './styles';

type typeFeedback = "valid" | "invalid"

// type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & TextFieldProps;
type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    typeFeedback?: typeFeedback;
    label?: string;
    tooltip: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    field?: string;
    value: string | number | string[]
    children?: any
    icon?: string
};

const InputCustom:React.FC<Props> = ({ children, name,label, required, type, placeholder, defaultValue, typeFeedback, tooltip, field, isValid, isInvalid, onChange, onBlur, value, icon}:Props)=>{
    
    return(
        // <Input {...props} />
        <InputGroup className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Input
          name={name}
          required={required}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          isValid={isValid}
          isInvalid={isInvalid}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          aria-describedby={icon}
        />
        {!!icon && (
            <InputGroup.Text id={icon}>{children}</InputGroup.Text>
        )}
        
        <Input.Feedback type={typeFeedback} tooltip={tooltip}>{typeFeedback === 'valid'? '': typeFeedback === 'invalid' && `Escreva um ${field} válido`}</Input.Feedback>
        </InputGroup>
    )
}

export default InputCustom;