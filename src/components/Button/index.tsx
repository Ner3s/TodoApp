import React, { ButtonHTMLAttributes } from 'react';
import { FaPlus } from 'react-icons/fa';
import { ContainerButton } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button: React.FC<ButtonProps> = ( props ) => {
  return (
    <ContainerButton>
      <button type="submit" {...props}>
        <FaPlus />
      </button>
    </ContainerButton>
  );
}

export default Button;