import './TodoSearch.css'

export function TodoSearch (){
  return (
    <div className="todo-header">
      <input className='todo-header_search' placeholder="Create a new task..." />
      <span class="material-symbols-outlined todo-header_icon">search</span>
    </div>
  );
}