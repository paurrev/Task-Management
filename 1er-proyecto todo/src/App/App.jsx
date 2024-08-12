import { TodoProvider } from '../TodoContext/TodoProvider';
import { AppUI } from './AppUI';
import { SkeletonTheme } from 'react-loading-skeleton';

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
      <SkeletonTheme baseColor="#0c2f6e" highlightColor="#83B0D4">
        <AppUI />
      </SkeletonTheme>
    </TodoProvider>
  );
}
