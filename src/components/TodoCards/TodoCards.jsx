import './TodoCards.css'
import "../../variables.css";

function TodoCards({
  icon,
  number,
  description,
  backgroundName,
  colorText = "color-default"
}) {
  return (
    <div className={`todo-card__container ${backgroundName}`}>
      {icon}
      <div className={`todo-card__text ${colorText}`}>
        <span className="todo-card__number">{number}</span>
        <span className="todo-card__description">{description}</span>
      </div>
    </div>
  );
}

export { TodoCards };
