import { useState } from 'react';
import { TodoCounter } from './TodoCounter.jsx';
import { TodoSearch } from './TodoSearch.jsx';
import { TodoItem } from './TodoItem.jsx';
import { TodoList } from './TodoList.jsx';
import { CreateTodoButton } from './CreateTodoButton.jsx';
// import './App.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Ver streams', completed: true },
  { text: 'Cantar', completed: false },
];

export function App() {
  // Estado inicial de nuestros ToDos
  const [todos, setTodos] = useState(defaultTodos);
  // Estado inicial de la búsqueda
  const [inputValue, setInputValue] = useState('');
  // Cantidad de ToDos completados
  const completedTodos = todos.filter((todo) => todo.completed).length;
  // Cantidad de ToDos totales
  const totalTodos = todos.length;

  // Crearemos una nueva variable donde se guardaran las concidencias de busqueda
  let searchedTodos = [];

  // Logica para filtrar
  if (!inputValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const inputValueText = inputValue.toLowerCase();
      return todoText.includes(inputValueText);
    });
  }



  return (
    <section className="Todo">
      <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </section>
  );
}
