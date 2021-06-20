import { createContext, useReducer } from 'react';

export const AppContext = createContext();

//reducer function
function reducer(state, action) {
  let stateCopy = { ...state };

  stateCopy.action = action;

  // if action.type is ADD_ITEM, add payload to list
  if (action.type ==='ADD_TASK'){
    if(stateCopy.isEditing){
      stateCopy.tasks = stateCopy.tasks.map(task => {
        if(task.id === stateCopy.currentlyEditing){
          task.text = stateCopy.text;
          task.desc = stateCopy.desc;
        }
        return task;
      });
    }else{
      stateCopy.tasks.unshift(action.payload);
    }
  }
  //if action.type is LOGIN, setUserLoggedIn to true & set userLogin to payload
  if (action.type === 'LOGIN') {
    stateCopy.isUserLoggedIn = true;
    stateCopy.userLogin = action.payload;
  }

  //if action.type is LOGOUT, setUserLoggedIn to false & set userLogin to null
  if (action.type === 'LOGOUT') {
    stateCopy.isUserLoggedIn = false;
    stateCopy.userLogin = null;
  }

  if (action.type === 'DELETE') {
    stateCopy.tasks = stateCopy.tasks.filter(
      (task) => task.id !== action.payload.id
    );
  }

  if(action.type === 'UPDATE_TITLE'){
    stateCopy.text = action.payload;
  }

  if (action.type === 'UPDATE_DESC') {
    stateCopy.desc = action.payload;
  }

  if (action.type === 'EDIT') {
    stateCopy.text = action.payload.text;
    stateCopy.desc = action.payload.desc;
    stateCopy.isEditing = true;
    stateCopy.currentlyEditing = action.payload.id;
  }

  if(action.type ==='UPDATE'){
    stateCopy.tasks = stateCopy.tasks.map(task =>{
      if(task.id === stateCopy.currentlyEditing){
        if(task.class ==='checked'){
          task.class = stateCopy.class
        }else{
          task.class = ''
        }
      }
      return task;
    })
  }
}

const initialState = {
  tasks: [
    { id: 'list-1', text: 'Pay Bills', desc: 'Electricity', class: 'checked' },
    { id: 'list-2', text: 'Hit the gym', desc: 'burpees', class: '' },
    { id: 'list-3', text: 'Buy eggs', desc: '2 trays', class: '' },
    { id: 'list-4', text: 'Buy milk', desc: '2 litres', class: '' },
  ],
  isUserLoggedIn: false,
  userLogin: null,
  text: '',
  desc: '',
  class: '',
  isEditing: false,
  currentlyEditing: '',
};
function State({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextObject = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <AppContext.Provider value={contextObject}>{children}</AppContext.Provider>
  );
}

export default State;
