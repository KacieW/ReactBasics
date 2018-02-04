import {FETCH_WEATHER} from '../actions/index';

export default function (state=[], action){
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
      //make new array, with action and state
  }
  return state;
}
