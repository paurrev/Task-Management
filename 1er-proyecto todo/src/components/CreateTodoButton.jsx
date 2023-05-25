import './CreateTodoButton.css' 
const onClickButton = (msg) => {
  alert(msg)
}

export function CreateTodoButton (){
  return (
    <button 
    className="todo-button-add"
    onClick={() => onClickButton('Aquí se deberia de abrir la modal')}
    >
    + add new task
    </button>
  )
}