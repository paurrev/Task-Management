import { createContext, useState } from 'react';
import { useLocalStorage } from '../App/useLocalStorage.jsx';

const TodoContext = createContext();

function TodoProvider({ children }) {
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  // Estado inicial de la búsqueda
  const [inputValue, setInputValue] = useState('');

  const [openModal, setOpenModal] = useState(false);
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
      const todoText = todo.text.toLocaleLowerCase();
      const inputValueText = inputValue.toLocaleLowerCase();
      return todoText.includes(inputValueText);
    });
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    });
    saveTodos(newTodos);
  };

  //Logica para marcar como completado un ToDo
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        inputValue,
        setInputValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
