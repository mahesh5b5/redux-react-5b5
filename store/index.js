import {combineReducers, createStore} from 'redux';

const countState = {
  count:0
}

const nameState = {
  name: 'Hello'
}

const incrementReducer = (state=countState, action) => {
  if(action.type === 'INCR') {
    console.log('reducer count', state, action);
    return Object.assign({}, state, {count: state.count + 1});
  }
  return state;
}

const nameReducer = (state=nameState, action) => {
  if(action.type === 'SAVE_NAME') {
    console.log('reducer name', state, action);
    return Object.assign({}, state, {name: action.name});
  }
  if(action.type === 'UPDATE_NAME'){
    return Object.assign({}, state, )
  }
  return state;
}

const reducer = combineReducers({
  incrementReducer,
  nameReducer
});

const store = createStore(reducer);

export default store;