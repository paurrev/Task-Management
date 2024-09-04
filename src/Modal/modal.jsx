import { createPortal } from 'react-dom';
import './modal.css';
import { TodoContext } from '../TodoProvider/TodoProvider';
import { useContext, useRef } from 'react';
import Draggable from 'react-draggable';

export function Modal({ children }) {
  const { clickPosition } = useContext(TodoContext);
  const modalRef = useRef(null);

  const handleDragStart = (event) => {
    // Evitar el arrastre si el evento se origina en un input o botón
    if (event.target.tagName === 'input' || event.target.tagName === 'button') {
      event.stopPropagation();
    }
  };

  return createPortal(
    <Draggable nodeRef={modalRef}>
      <div
        className="ModalBackground"
        style={{
          position: 'absolute',
          top: clickPosition.y,
          left: clickPosition.x,
        }}
        ref={modalRef}
        onMouseDown={handleDragStart}
      >
        {children}
      </div>
    </Draggable>,
    document.getElementById('modal')
  );
}
