import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #8a05be;
  justify-content: center;
  align-items: center;
`;

export const ButtonBasket = styled(RectButton)`
  justify-content: center;
  align-items: center;
  border-radius: 120;
  padding: 30px;
  background: #8a05be;
`;

export const Textinho = styled.Text`
  font-weight: bold;
  color: #fff;
`;
