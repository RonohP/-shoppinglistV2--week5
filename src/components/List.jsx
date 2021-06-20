import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';
import useContextGetter from '../hooks/useContextGetter';

const List = (task) => {

  const context = useContextGetter();

  const handleDelete = () => {
    context.dispatch({
      type: 'DELETE',
      payload: task,
    });
  };

  const handleEdit = () => {
    context.dispatch({
      type: 'EDIT',
      payload: task,
    });
  };

  // // task completed function
  const toggleClassName = () => {
    context.dispatch({
      type: 'UPDATE',
      payload: task,
    });
  };

  return (
    <li className={task.class} id={task.id}>
      <h3>{task.text}</h3>
      <h5>{task.desc}</h5>
      <span className='complete' onClick={toggleClassName}>
        {<FontAwesomeIcon icon={faCheck} />}
      </span>
      <span className='edit' onClick={handleEdit}>
        {<FontAwesomeIcon icon={faEdit} />}
      </span>
      <span className='delete' onClick={handleDelete}>
        {<FontAwesomeIcon icon={faTrash} />}
      </span>
    </li>
  );
};

export default List;
