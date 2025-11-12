import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 12px;
  margin: 6px 16px;
`;

const Title = styled.Text<{ done: boolean }>`
  font-size: 16px;
  color: ${({ done }) => (done ? '#999' : '#333')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  font-size: 16px;
  width: 180px;
`;

export { Container, Title, Row, Input };