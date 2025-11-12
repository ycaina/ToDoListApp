import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/Task';

const STORAGE_KEY = '@tasks';

export async function saveTasks(tasks: Task[]): Promise<void> {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Erro ao salvar tarefas:', e);
  }
}

export async function loadTasks(): Promise<Task[]> {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Erro ao carregar tarefas:', e);
    return [];
  }
}
