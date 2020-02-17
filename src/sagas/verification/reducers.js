
import * as types from './constants';

const initialState = {
  data: [],
  errors: {},
  isLoading: false,
  isError: null
};

const actions = {
  [types.VERIFY_REQUEST]: state => {
    const data = {
      ...state,
      isLoading: true
    };

    return { ...data };
  },
  [types.VERIFICATION_DONE]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: false,
      data: payload
    };

    return { ...data };
  },
  [types.VERIFICATION_FAILED]: state => {
    const data = {
      ...state,
      isLoading: false,
      isError: true
    };

    return { ...data };
  }
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};