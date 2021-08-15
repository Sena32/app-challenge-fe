import { PropTypes } from '@material-ui/core';
import React, { InputHTMLAttributes } from 'react';
import { ButtonComponent } from './styles';

type ButtonProps = InputHTMLAttributes<HTMLButtonElement>  & {
  color?: PropTypes.Color,
  variant?: string
};

export type Props = ButtonProps;

const Button: React.FC<Props> = ({
  type,
  children,
  className,
  color,
  variant,
  onClick,
}) => {
  return (
      <ButtonComponent
        type={type ? 'button' : 'submit'}
        color={color}
        onClick={onClick}
        className={className}
        variant={variant}
      >
        {children}
      </ButtonComponent>
  );
};

export default Button;
