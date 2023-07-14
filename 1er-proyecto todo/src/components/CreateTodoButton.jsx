import './CreateTodoButton.css' 

export function CreateTodoButton (props){
  const onClickButton = () => {
    props.setOpenModal(true)
  }
  return (
    <button className="todo-button-add" onClick={onClickButton}>
      + add new task
    </button>
  );
}