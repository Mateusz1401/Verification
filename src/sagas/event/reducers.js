
import * as types from './constants';

const initialState = {
  data: {},
  errorsApi: {},
  isLoading: false
};

const actions = {
  [types.CREATE_EVENT_REQUEST]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: true,
      data: payload
    };

    return { ...data };
  },
  [types.CREATE_EVENT_DONE]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: false,
      data: payload
    };

    return { ...data };
  },
  [types.CREATE_EVENT_FAILED]: (state, { payload }) => {
    const data = {
      ...state,
      isLoading: false,
      errorsApi: payload
    };

    return { ...data };
  }
};

export default (state = initialState, action) => {
  if (actions[action.type]) return actions[action.type](state, action);
  return state;
};