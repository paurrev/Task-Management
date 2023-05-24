import './TodoSearch.css'

export function TodoSearch ({ inputValue, setInputValue}){
  

  const onSearchValueChange = (event) =>{
    console.log(event.target.value)
    setInputValue(event.target.value)
  }
  return (
    <div className="todo-header">
      <input 
      className='todo-header_search' 
      placeholder="Create a new task..." 
      value = {inputValue}
      onChange={onSearchValueChange}
      autoFocus
      />
      <span className="material-symbols-outlined todo-header_icon">search</span>
    </div>
  );
}