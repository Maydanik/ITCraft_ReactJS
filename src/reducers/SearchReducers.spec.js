import { searchReducer } from './SearchReducers';

describe('Search reducers', () => {
  test('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual({
      search: '',
    });
  });
});
