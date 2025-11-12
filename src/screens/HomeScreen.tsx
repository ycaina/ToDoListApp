import React from 'react';
import { FlatList } from 'react-native';
import { Header } from '../components/Header/Header';
import { TaskInput } from '../components/TaskInput/TaskInput';
import { TaskItem } from '../components/TaskItem/TaskItem';
import { useTasks } from '../hooks/useTasks';

export function HomeScreen() {
  const { tasks, addTask, toggleTask, editTask, removeTask } = useTasks();

  return (
    <>
      <Header />
      <TaskInput onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={toggleTask}
            onEdit={editTask}
            onDelete={removeTask}
          />
        )}
      />
    </>
  );
}
