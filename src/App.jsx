import './App.css';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import Form from './components/Form';
import FilterButton from './components/Buttons';
import List from './components/List';

const DATA = [
  { id: 'list-1', text: 'Pay Bills', desc: 'Electricity', class: 'checked' },
  { id: 'list-2', text: 'Hit the gym', desc: 'burpees', class: '' },
  { id: 'list-3', text: 'Buy eggs', desc: '2 trays', class: '' },
  { id: 'list-4', text: 'Buy milk', desc: '2 litres', class: '' },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.class,
  Completed: (task) => task.class,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {
  // states
  const [tasks, setTasks] = useState(DATA);
  const [filter, setFilter] = useState('All');

  console.log(FILTER_NAMES);

  // task completed function
  const toggleClassName = (id) => {
    const updatedTask = tasks.map((task) => {
      if (id === task.id) {
        if (task.class === 'checked') {
          return { ...task, class: '' };
        } else {
          return { ...task, class: 'checked' };
        }
      }
      return task;
    });
    setTasks(updatedTask);
  };

  // delete task function
  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    console.log(remainingTasks);
    setTasks(remainingTasks);
  };
  // edit task function
  const editTask = (id, newText, newDesc) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, text: newText, desc: newDesc };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  //assingn icons to the filter buttons
  // const icon = FILTER_NAMES.map(text => {

  // });
  // const icon = FILTER_NAMES.map((text) => {
  //   switch(text){
  //     case 'All' : return <FontAwesomeIcon icon={faTasks} />;
  //     break;
  //     case 'Active' :return <FontAwesomeIcon icon={faPlay} />;
  //   }
      // if ('All') {
      //   return <FontAwesomeIcon icon={faTasks} />;
      // } else if ('Active') {
      //   return <FontAwesomeIcon icon={faPlay} />;
      // } else if (text.key === 2) {
      //   return <FontAwesomeIcon icon={faCheck} />;
      // }

    // console.log(icon);

  // filter tasks button, (all, active, completed)
  const filterList = FILTER_NAMES.map((text) => (
    <FilterButton
      key={text}
      text={text}
      // icon={icon}
      isPressed={text === filter}
      setFilter={setFilter}
    />
  ));

  // task list
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <List
        id={task.id}
        text={task.text}
        desc={task.desc}
        class={task.class}
        key={task.id}
        toggleClassName={toggleClassName}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  // add tasks to the list function ... manipulates the onsubmit on the form
  const addTask = (text, desc) => {
    const newTask = {
      id: 'list-' + nanoid(),
      text: text,
      desc: desc,
      class: '',
    };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  // the number of tasks remaining heading
  const tasksNoun = taskList.length !== 0 ? 'tasks' : 'task';
  const listHeading = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To-Do List</h1>
      </header>
      <section>
        <Form submit={addTask} />

        <div className='btns'>{filterList}</div>

        <div className='list'>
          <h2 className='list-heading'>{listHeading}</h2>

          <ul id='myList'>{taskList}</ul>
        </div>
      </section>
      <footer>
        <p>&copy; purity.rono 2021</p>
      </footer>
    </div>
  );
}

export default App;
