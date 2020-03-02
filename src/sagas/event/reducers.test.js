/* eslint-disable */
import moment from 'moment';

import events from './reducers';

const initialState = {
  data: {},
  errorsApi: {},
  isLoading: false
};

const fakeEvent = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  email: 'jan.kowalski@gmail.com',
  eventDate: moment().utc().format()
};

describe('event reducers tests', () => {
  it('CREATE_EVENT_REQUEST action', () => {
  
    const reducer = events(initialState, { type: 'CREATE_EVENT_REQUEST', payload: fakeEvent });
  
    expect(reducer).toEqual({
      data: fakeEvent,
      errorsApi: {},
      isLoading: true
    });
  });

  it('CREATE_EVENT_DONE action', () => {
  
    const reducer = events(initialState, { type: 'CREATE_EVENT_DONE', payload: 'SUCCESS' });
  
    expect(reducer).toEqual({
      data: 'SUCCESS',
      errorsApi: {},
      isLoading: false
    });
  });

  it('CREATE_EVENT_FAILED action', () => {
  
    const reducer = events(initialState, { type: 'CREATE_EVENT_FAILED', payload: { firstName: 'Field blank!' } });
  
    expect(reducer).toEqual({
      data: {},
      errorsApi: { firstName: 'Field blank!' },
      isLoading: false
    });
  });
});
