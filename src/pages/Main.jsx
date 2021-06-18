import { useState } from 'react';
import '../styles/App.css';
import '../styles/main.css';
import list from '../list.svg';

const Main = () => {
  return (
    <div className='main'>
      <header className='App-header'>
        <h1>To-Do</h1>
      </header>
      <div className='vl'>
        <span className='vl-innertext'></span>
      </div>
      <div className='row'>
        <div className='column'>
          <img src={list} alt='List' />
        </div>
        <div className='column'>
          <div className='column-btn'>
            <button>
              <a href='/login'>Login</a>
            </button>
            <button>
              <a href='/register'>Register</a>
            </button>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; purity.rono 2021</p>
      </footer>
    </div>
  );
};

export default Main;
