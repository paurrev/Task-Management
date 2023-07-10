import { useState, useEffect } from 'react';
import { TodoCounter } from './components/TodoCounter.jsx';
import { TodoSearch } from './components/TodoSearch.jsx';
import { TodoItem } from './components/TodoItem.jsx';
import { TodoList } from './components/TodoList.jsx';
import { CreateTodoButton } from './components/CreateTodoButton.jsx';
// import './App.css'

// Creamos un array de ToDos por defecto
const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Ver streams', completed: false },
  { text: 'Cantar', completed: false },
];

function useLocalStorage (itemName, initialValue){
  // Creamos un estado para saber si hubo un error
  const [error, setError] = useState(false);
  // Creamos un estado para saber si estamos cargando los ToDos
  const [loading, setLoading] = useState(true);
  // Podemos utilizar otros hooks!!
  const [items, setItem] = useState(initialValue);

  
  useEffect(() => {
    setTimeout(() => {
      try {
        // Traemos todos los ToDos almacenados
        const localStorageItems = localStorage.getItem(itemName);
        // Iniicalizamos la variables de los ToDos
        let parsedItems;
      
        if (!localStorageItems) {
          // Si el usuario es nuevo y no existe un item en localStorage, por lo tanto guardamos con un array vacio
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = [];
        } else {
          // Si exite items en localStorage, transformamos el texto a objeto normal de ToDos
          parsedItems = JSON.parse(localStorageItems);
        }
  
        setItem(parsedItems)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000);
  })



  // Logica para guardar los ToDos en localStorage
  const saveItems = (newItems) => {
    try {
      // Convertimos a String nuestros ToDos
      const stringifyItems = JSON.stringify(newItems);
      // Guardamos en localStorage
      localStorage.setItem(itemName, stringifyItems);
      // Actualizamos el estado de los ToDos
      setItem(newItems);
    } catch (error) {
      setError(error)
    }
  };

  return{ 
    items,
    saveItems,
    loading,
    error
  }
}

export function App() {
  
  const {
    items: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
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
    <section className="Todo">
      <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoList>

        {error && <p>Desespérate, hubo un error 😢</p>}
        {loading && <p>Estamos cargando... ⌛</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO ✏️</p>}      
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
