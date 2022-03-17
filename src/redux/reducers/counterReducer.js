import { COUNTER } from '../actions/index';

const INITIAL_STATE = {
  counter: 0,
  score: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case COUNTER:
    return { ...state, score: state.score + action.counter };
  default:
    return state;
  }
}
export default counterReducer;
