import { combineReducers } from 'redux';
import { INITIAL_STATE } from './actions';

const reducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case 'ADD_NAME':
      return {...state, name: action.name}
    case 'DELETE_NAME':
      return {...state, name: ''}
    default:
      return state;
  }
};

export const reducers = combineReducers({
  user: reducer
});
