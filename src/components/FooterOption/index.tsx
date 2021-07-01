import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends BorderlessButtonProps {
  title: string;
}

export function FooterOption({ title, ...rest }: Props) {
  return (
    <Container {...rest} >
      <Title>{title}</Title>
    </Container>
  )
}