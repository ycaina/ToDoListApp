import React, { useState } from 'react';
import { Container, Input, Button, ButtonText } from './styles';


interface Props {
  onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: Props) {
  const [value, setValue] = useState('');

  function handleAdd() {
    onAdd(value);
    setValue('');
  }

  return (
    <Container>
      <Input
        placeholder="Nova tarefa..."
        value={value}
        onChangeText={setValue}
      />
      <Button onPress={handleAdd}>
        <ButtonText>Adicionar</ButtonText>
      </Button>
    </Container>
  );
}
