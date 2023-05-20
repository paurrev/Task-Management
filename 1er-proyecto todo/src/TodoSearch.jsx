import './TodoSearch.css'

export function TodoSearch (){
  const onSearchValueChange = (event) =>{
    console.log(event.target.value)
  }
  return (
    <div className="todo-header">
      <input 
      className='todo-header_search' 
      placeholder="Create a new task..." 
      onChange={onSearchValueChange}
      />
      <span class="material-symbols-outlined todo-header_icon">search</span>
    </div>
  );
}