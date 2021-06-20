import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import useContextGetter from '../hooks/useContextGetter';

const Form = () => {

  const context = useContextGetter();

  function handleSubmit(e) {
    e.preventDefault();
    //add new task to the list on from submission
    const newTask = {
      text: context.state.text,
      desc: context.state.desc,
      id: 'list-' + nanoid(),
      class: ''
    };

    context.dispatch({
      type: 'ADD_TASK',
      payload: newTask,
    });

    //reset form
    context.dispatch({type: 'RESET_INPUTS'});
  };

  const setTitle = e =>{
    context.dispatch({
      type: 'UPDATE_TITLE',
      payload: e.target.value,
    })
  }

  const setDesc = (e) => {
    context.dispatch({
      type: 'UPDATE_DESC',
      payload: e.target.value,
    });
  };

  return (
    <form id='Form' onSubmit={handleSubmit}>
      <input
        type='text'
        id='title'
        name='title'
        placeholder='Add title...'
        value={context.state.title}
        required
        onChange={setTitle}
      />
      <textarea
        name='desc'
        id='desc'
        cols='30'
        rows='10'
        placeholder='Description...'
        onChange={setDesc}
        value={context.state.desc}
      ></textarea>
      <button type='submit' id='btn' className='form-btn'>
        <FontAwesomeIcon icon={faPlus} /> &nbsp; ADD
      </button>
    </form>
  );
};

export default Form;
