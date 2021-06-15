import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function handleChange1(e) {
    setTitle(e.target.value);
  }

  function handleChange2(e) {
    setDesc(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.submit(title, desc);
    setTitle('');
    setDesc('');
  }

  return (
    <form id='Form' onSubmit={handleSubmit}>
      <input
        type='text'
        id='title'
        name='title'
        placeholder='Add title...'
        value={title}
        required
        onChange={handleChange1}
      />
      <textarea
        name='desc'
        id='desc'
        cols='30'
        rows='10'
        placeholder='Description...'
        onChange={handleChange2}
        value={desc}
      ></textarea>
      <button type='submit' id='btn' className='form-btn'>
        <FontAwesomeIcon icon={faPlus} /> &nbsp; ADD
      </button>
    </form>
  );
};

export default Form;
