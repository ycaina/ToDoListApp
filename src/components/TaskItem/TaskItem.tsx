
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { Task } from '../../types/Task';
import { Container, Title, Row, Input } from './styles';




interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onEdit, onDelete }: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return (
    <Container>
      {editing ? (
        <Row>
          <Input
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={() => {
              onEdit(task.id, title);
              setEditing(false);
            }}
          />
        </Row>
      ) : (
        <TouchableOpacity onPress={() => onToggle(task.id)}>
          <Title done={task.done}>{task.title}</Title>
        </TouchableOpacity>
      )}

      <Row>
        <TouchableOpacity onPress={() => setEditing(!editing)}>
          <Icon name="edit" size={22} color="#4e6ef2" style={{ marginRight: 10 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDelete(task.id)}>
          <Icon name="delete" size={22} color="#e63946" />
        </TouchableOpacity>
      </Row>
    </Container>
  );
}

