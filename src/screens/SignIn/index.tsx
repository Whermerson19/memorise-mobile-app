import React from 'react';
import { StatusBar } from 'react-native'

import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components'

import LogoImg from '../../assets/logo.png'

import { Button } from '../../components/Button';
import { FooterOption } from '../../components/FooterOption';
import { InputForm } from '../../components/InputForm';

import { 
  Container,
  LogoContainer, 
  Logo, 
  Title, 
  Form, 
  InputContainer, 
  Footer, 
} from './styles';

export function SignIn() {

  const { control, handleSubmit } = useForm()
  const theme = useTheme()

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <LogoContainer>
        <Logo style={{
          resizeMode: 'contain',
          maxWidth: '100%',
          maxHeight: '100%'
        }} source={LogoImg} />
      </LogoContainer>



      <Title>Entrar</Title>
        <Form>
          <InputContainer>
            <InputForm
              placeholder="username / email"
              control={control}
              name="loginField"
              icon="log-in" 
            />

            <InputForm  
              placeholder="password"
              control={control}
              name="password"
              icon="lock" 
            />
          </InputContainer>

          <Button title="Entrar" onPress={handleSubmit(() => console.log('click'))} />
        </Form>
      <Footer>
        <FooterOption title="Esqueçeu a senha" />
        <FooterOption title="Crie uma conta" />
      </Footer>
    </Container>
  )
}