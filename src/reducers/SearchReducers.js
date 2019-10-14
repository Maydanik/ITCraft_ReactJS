import { SEARCH_COINS } from '../actions/SearchActions';

const initialState = {
  search: '',
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COINS:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}


