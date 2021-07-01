import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.colors.background};

  padding-top: ${RFValue(50)}px;
`;

export const LogoContainer = styled.View`
  width: ${RFValue(250)}px;
  height: ${RFValue(110)}px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${props => props.theme.fonts.bold};
  color: ${ props => props.theme.colors.text };
  align-self: center;
`;

export const Form = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${RFValue(30)}px;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(50)}px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  border-top-width: 3px;
  border-color: ${(props) => props.theme.colors.gray};
  border-style: solid;
  background-color: ${(props) => props.theme.colors.background};
`;

