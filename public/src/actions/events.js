import {
  ON_SHOW_EVENTS,
  ON_SHOW_EVENTS_ERROR,
  ON_SHOW_EVENTS_SUCCESS,
  ON_CREATE_EVENT,
  ON_CREATE_EVENT_SUCCESS,
  ON_CREATE_EVENT_ERROR,
  ON_DELETE_EVENT,
  ON_DELETE_EVENT_SUCCESS,
  ON_EDIT_EVENT_SUCCESS,
  ON_EDIT_EVENT
} from '../consts';

export const showEvents = (events) => ({
  type: ON_SHOW_EVENTS,
  events,
});

export const showEventsSuccess = (events) => ({
  type: ON_SHOW_EVENTS_SUCCESS,
  events,
});

export const showEventsError = () => ({
  type: ON_SHOW_EVENTS_ERROR,
});

export const createEvent = ({name, date, owner}) => ({
  type: ON_CREATE_EVENT,
  name,
  date,
  owner
});

export const createEventSuccess = ({name, date, owner}) => ({
  type: ON_CREATE_EVENT_SUCCESS,
  name,
  date,
  owner
});

export const createEventError = () => ({
  type: ON_CREATE_EVENT_ERROR,
});

export const deleteEvent = (id) => ({
  type: ON_DELETE_EVENT,
  id
});

export const deleteEventSuccess = (id) => ({
  type: ON_DELETE_EVENT_SUCCESS,
  id
});

// export const deleteEventError = () => ({
//   type: ON_DELETE_EVENT_ERROR
// });

export const eventEdit = (payload) => ({
  type: ON_EDIT_EVENT,
  payload,
});

export const eventEditSuccess = (payload) => ({
  type: ON_EDIT_EVENT_SUCCESS,
  ...payload,
});