import {createStore, combineReducers} from 'redux';
import {todoReducer, components} from './reducers';
const rootReducer = combineReducers({
  todos: todoReducer,
  components: components,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
