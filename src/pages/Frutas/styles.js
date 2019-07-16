import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #8a05be;
`;

export const Mensagem = styled.Text`
  font-weight: bold;
  color: #ccc;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Cesta = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Fruits = styled.Text`
  font-size: 25;
  margin-bottom: 10px;
  color: #fff;
`;

export const Detail = styled(RectButton)`
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #fff;
  border-radius: 40px;
  margin-bottom: 20px;
`;

export const DetailText = styled.Text`
  color: #8a05be;
`;
