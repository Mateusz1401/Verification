
import * as types from './constants';

const initialState = {
  data: [],
  errors: {},
  isLoading: false
};

const actions = {
  [types.VERIFY_REQUEST]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: true,
      data: payload
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
  [types.VERIFICATION_FAILED]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: false,
      errors: payload
    };

    return { ...data };
  }
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};