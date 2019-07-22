import {
  ON_SHOW_EVENTS,
  ON_SHOW_EVENTS_ERROR,
  ON_SHOW_EVENTS_SUCCESS,
  ON_CREATE_EVENT,
  ON_CREATE_EVENT_SUCCESS,
  ON_CREATE_EVENT_ERROR,
  ON_DELETE_EVENT,
  ON_DELETE_EVENT_SUCCESS,
  ON_DELETE_EVENT_ERROR,
  ON_EDIT_EVENT_SUCCESS,
  ON_EDIT_EVENT_ERROR,
  ON_EDIT_EVENT
} from '../consts';

const initialState = {
  events: [],
  name: '',
  date: '',
  owner: ''
};


export const evenstReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_SHOW_EVENTS:
      return {
        ...state,
      };
    case ON_SHOW_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.events,
      };
    case ON_CREATE_EVENT:
      return {
        ...state,
        name: action.name,
        date: action.date,
        owner: action.owner
      };
    case ON_CREATE_EVENT_SUCCESS:
      return {
        ...state,
        name: action.name,
        date: action.date,
        owner: action.owner
      };
    case ON_DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(el => el.id !== action.id),
        // id: action.id
      };
    case ON_DELETE_EVENT_SUCCESS:
      return {
        ...state,
        events: state.events.filter(el => el.id !== action.id),
        // id: action.id
      };
    case ON_EDIT_EVENT_SUCCESS:
      return {
        ...state,
        events: state.events.map(event => {
          if(event._id === action.id){
            return {
              _id: action.id,
              name: action.name,
              date: action.date,
            };
          }
          return event;
        }),
      };
    default:
      return state;
  }
};