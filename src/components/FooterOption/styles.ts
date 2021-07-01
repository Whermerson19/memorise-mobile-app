import styled from 'styled-components/native'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(BorderlessButton)`
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(25)}px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.medium};
`;