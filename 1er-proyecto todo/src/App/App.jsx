import { TodoProvider } from '../TodoContext/TodoProvider';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Ver streams', completed: false },
  { text: 'Cantar', completed: false },
];

export function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
