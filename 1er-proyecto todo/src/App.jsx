import { TodoProvider } from './App/logic';
import { AppUI } from './App/AppUI';

// import './App.css'

// Creamos un array de ToDos por defecto
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Tormar el curso de intro a react', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Ver streams', completed: false },
//   { text: 'Cantar', completed: false },
// ];

export function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
