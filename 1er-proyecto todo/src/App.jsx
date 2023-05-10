import { TodoCounter } from './TodoCounter.jsx';
import { TodoSearch } from './TodoSearch.jsx';
import { TodoItem } from './TodoItem.jsx';
import { TodoList } from './TodoList.jsx';
import { CreateTodoButton } from './CreateTodoButton.jsx';
// import './App.css'

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
];

export function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} todo={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
