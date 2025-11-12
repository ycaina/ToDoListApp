import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

 const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

 const Input = styled.TextInput`
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
`;

 const Button = styled(TouchableOpacity)`
  background-color: #4e6ef2;
  padding: 10px 16px;
  border-radius: 8px;
`;

 const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export { Container, Input, Button, ButtonText };