import '../styles/main.css';
import React, { useState } from 'react';
import Form from '../components/Form';
import FilterButton from '../components/Buttons';
import List from '../components/List';
import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import useContextGetter from '../hooks/useContextGetter';

// const DATA = [
//   { id: 'list-1', text: 'Pay Bills', desc: 'Electricity', class: 'checked' },
//   { id: 'list-2', text: 'Hit the gym', desc: 'burpees', class: '' },
//   { id: 'list-3', text: 'Buy eggs', desc: '2 trays', class: '' },
//   { id: 'list-4', text: 'Buy milk', desc: '2 litres', class: '' },
// ];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.class,
  Completed: (task) => task.class,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Home() {
  // states
  const [filter, setFilter] = useState('All');

  const context = useContextGetter;
  const history = useHistory();
  console.log(context);

  useLayoutEffect(() =>{
    if (!context.state.isUserLoggedIn) {
      history.push('/login');
    }
  }, [context.state, history])

  // filter tasks button, (all, active, completed)
  const filterList = FILTER_NAMES.map((text) => (
    <FilterButton
      key={text}
      text={text}
      isPressed={text === filter}
      setFilter={setFilter}
    />
  ));

  // task list
  const taskList = context.state.tasks
    .filter(FILTER_MAP[filter])
    .map(function (task) {
     return (<List
        key={task.id}
        task = {task}
      />);
    });

  // the number of tasks remaining heading
  const tasksNoun = taskList.length !== 0 ? 'tasks' : 'task';
  const listHeading = `${taskList.length} ${tasksNoun} remaining`;
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>To-Do</h1>
      </header>
      <section>
        <Form />

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

export default Home;
