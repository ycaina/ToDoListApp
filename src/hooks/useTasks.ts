import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import { loadTasks, saveTasks } from '../storage/taskStorage';
import uuid from 'react-native-uuid';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    (async () => {
      const stored = await loadTasks();
      setTasks(stored);
    })();
  }, []);

  async function addTask(title: string) {
    if (!title.trim()) return;
    const newTask: Task = { id: String(uuid.v4()), title, done: false };
    const updated = [...tasks, newTask];
    setTasks(updated);
    await saveTasks(updated);
  }

  async function toggleTask(id: string) {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(updated);
    await saveTasks(updated);
  }

  async function editTask(id: string, newTitle: string) {
    const updated = tasks.map(t =>
      t.id === id ? { ...t, title: newTitle } : t
    );
    setTasks(updated);
    await saveTasks(updated);
  }

  async function removeTask(id: string) {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    await saveTasks(updated);
  }

  return { tasks, addTask, toggleTask, editTask, removeTask };
}
