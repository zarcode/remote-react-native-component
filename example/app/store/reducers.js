import {ADD_TODO, ADD_COMPONENT, TOGGLE_TODO} from './actions';

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state?.map(a => {
        if (a.id === action.payload.id) {
          return {...a, completed: action.payload.completed};
        }
        return a;
      });
    default:
      return state;
  }
};

export const components = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMPONENT:
      return {
        [action.id]: action.code,
      };
    default:
      return state;
  }
};
