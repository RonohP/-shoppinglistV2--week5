import '../styles/main.css';
import React from 'react';
import Form from '../components/Form';
// import FilterButton from '../components/Buttons';
import List from '../components/List';
import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';
import useContextGetter from '../hooks/useContextGetter';

function Home() {
  
  const history = useHistory();
  const context = useContextGetter;

  useLayoutEffect(() => {
    if (!context.state.isUserLoggedIn) {
      history.push('/login');
    }
  }, [context.state, history]);

  // task list
  console.log(context.state.tasks)
  const taskList = context.state.tasks
    .map(function (task) {
      return <List key={task.id} task={task} />;
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

        {/* <div className='btns'>{filterList}</div> */}

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
