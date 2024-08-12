import { useContext } from 'react';


import { TodoContext } from '../TodoContext/TodoProvider.jsx';
import { Modal } from '../Modal/modal.jsx';
import { TodoForm } from '../components/TodoForms/TodoForms.jsx';

import { Infopanel } from '../components/Infopanel/Infopanel.jsx';
import { Navbar } from '../components/Sidebar/Navbar.jsx';
import { MainContent } from '../components/MainContent/MainContent.jsx';

export function AppUI() {
  const {
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  return (
    <>
      <Navbar />
      <main className="todo-main">
        <Infopanel/>
        <MainContent/>
      </main>
      <div>
        {openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal} />
          </Modal>
        )}
      </div>
    </>
  );
}
