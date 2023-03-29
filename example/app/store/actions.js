import {nanoid} from 'nanoid';

export const ADD_TODO = 'store/add-todo';
export const TOGGLE_TODO = 'store/toggle-todo';
export const ADD_COMPONENT = 'store/add-component';

export const addComponent = ({id, code}) => ({
  type: ADD_COMPONENT,
  id,
  code,
});

export const toggleTodo = ({id, completed}) => ({
  type: TOGGLE_TODO,
  payload: {id, completed},
});
