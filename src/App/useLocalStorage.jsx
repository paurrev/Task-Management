import { useState, useEffect } from 'react';

export function useLocalStorage(itemName, initialValue) {
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
        let parsedItems

        if (!localStorageItems) {
          // Si el usuario es nuevo y no existe un item en localStorage, por lo tanto guardamos con un array vacio
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          // Si exite items en localStorage, transformamos el texto a objeto normal de ToDos
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems);
        }
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 1000);
  }, []);

  
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
      setError(true);
    }
  };

  return {
    items,
    saveItems,
    loading,
    error,
  };
}
