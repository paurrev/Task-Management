import { useState } from 'react';
import { TodoCounter } from './components/TodoCounter.jsx';
import { TodoSearch } from './components/TodoSearch.jsx';
import { TodoItem } from './components/TodoItem.jsx';
import { TodoList } from './components/TodoList.jsx';
import { CreateTodoButton } from './components/CreateTodoButton.jsx';
// import './App.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Ver streams', completed: false },
  { text: 'Cantar', completed: false },
];

export function App() {
  // Traemos todos los ToDos almacenados
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  // Iniicalizamos la variable de los ToDos
  let parsedTodos;

  if (!localStorageTodos) {
    // Si el usuario es nuevo y no existe un item en localStorage, por lo tanto guardamos con un array vacio
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    // Si exite items en localStorage, transformamos el texto a objeto normal de ToDos
    parsedTodos = JSON.parse(localStorageTodos);
  }

  // Estado inicial de nuestros ToDos
  const [todos, setTodos] = useState(parsedTodos);
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

  // Logica para guardar los ToDos en localStorage
  const saveTodos = (newTodos) => {
    // Convertimos a String nuestros ToDos
    const stringifyTodos = JSON.stringify(newTodos);
    // Guardamos en localStorage
    localStorage.setItem('TODOS_V1', stringifyTodos);
    // Actualizamos el estado de los ToDos
    setTodos(newTodos);
  };

  //Logica para marcar como completado un ToDo
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  //Logica para eliminar un ToDo
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
            onCompleted={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </section>
  );
}
