import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const List = (props) => {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleChange1 = (e) => {
    setNewName(e.target.value);
  };

  const handleChange2 = (e) => {
    setNewDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(props.id, newName, newDesc);
    setNewName('');
    setNewDesc('');
    setEditing(false);
  };

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <h3>{props.text}</h3>
      <input
        type='text'
        name='title'
        id={props.id}
        value={newName}
        onChange={handleChange1}
      />
      <textarea
        name='desc'
        id='desc'
        cols='10'
        rows=''
        onChange={handleChange2}
        value={newDesc}
      ></textarea>
      <button
        type='button'
        className='form-btn'
        onClick={() => setEditing(false)}
      >
        {<FontAwesomeIcon icon={faTimes} />} &nbsp;
        Cancel
      </button>
      <button type='submit' className='form-btn' onClick=''>
        {<FontAwesomeIcon icon={faSave} />} &nbsp;
        Save
      </button>
    </form>
  );

  const viewTemplate = (
    <li
      className={props.class}
      id={props.id}
      // onClick={() => props.toggleClassName(props.id)}
    >
      <h3>{props.text}</h3>
      <h5>{props.desc}</h5>
      <span className='complete' onClick={() => props.toggleClassName(props.id)}>
        {<FontAwesomeIcon icon={faCheck} />}
      </span>
      <span className='edit' onClick={() => setEditing(true)}>
        {<FontAwesomeIcon icon={faEdit} />}
      </span>
      <span
        className='close'
        onClick={(e) => {
          // stop the click event from bubbling to the parent component
          // e.stopPropagation();
          props.deleteTask(props.id);
        }}
      >
        {<FontAwesomeIcon icon={faTrash} />}
      </span>
    </li>
  );
  return <>{isEditing ? editingTemplate : viewTemplate}</>;
};

export default List;
