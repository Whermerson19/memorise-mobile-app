import React from 'react';
import { TextInputProps } from 'react-native'

import { Container, Icon, Input as TextInput } from './styles';

interface Props extends TextInputProps {
  icon?: string;
}

export function Input({icon, ...rest}: Props) {

  return (
    <Container>
      {icon && <Icon name={icon} />}
      <TextInput
        
        {...rest}
      />
    </Container>
  )
}