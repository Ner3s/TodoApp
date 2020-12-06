import React, { InputHTMLAttributes } from 'react';
import { ContainerInput } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = ( props ) => {
  return (
    <ContainerInput>
      <input type="text" {...props} />
    </ContainerInput>
  );
}

export default Input;
