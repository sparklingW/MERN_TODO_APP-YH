import axios from 'axios';
import { showEventsSuccess, createEventSuccess, deleteEventSuccess, eventEditSuccess } from '../actions/events';
import { takeLatest, call, put } from 'redux-saga/effects';
import history from "../history";

function getAllEventsAPI() {
  const token = localStorage.getItem('token');
  const owner = localStorage.getItem('owner');
  return axios.get(
    'http://localhost:3001/events/show',
    {headers: {'x-auth-token':token, owner: owner}}
  )
}

function deleteEventByIdAPI(id) {
  const token = localStorage.getItem('token');

  console.log(id);
  return axios.delete(
    `http://localhost:3001/events/delete/${id}`,
    {headers: {'x-auth-token':token}}
  )
}

function editEventByIdAPI(data) {
  const token = localStorage.getItem('token');
 console.log('Id from saga', data);
 return axios.put(
   `http://localhost:3001/events/edit/${data.id}`,
   data,
   {headers: {'x-auth-token': token}}
 )
}

function* editEvent({payload}) {
  try{
    const data = {
      ...payload,
    };
    console.log('From edit',data);
    yield call(editEventByIdAPI, data);
    yield history.push('/events/show');
    yield put(eventEditSuccess(data));
    yield history.push('/events/show');
  } catch (e) {
    console.log(e);
  }
}

function* deleteEvent({id}) {
  try {
    let deleteEvent = yield call(deleteEventByIdAPI(id));
    console.log(deleteEvent);
    yield put(deleteEventSuccess(deleteEvent))
  } catch (e) {

  }
}

function createEventsAPI(event) {
  const token = localStorage.getItem('token');
  return axios.post(
    'http://localhost:3001/events/create',
    event,
    {headers: {'x-auth-token':token}}
  )
}

function* showUserEvents() {
  try {
    let events = yield call(getAllEventsAPI);
    const eventsData = events.data;
    // const _event = eventsData.map((el) => ({
    //   id: el._id,
    //   name: el.name,
    //   date: el.date.toString(),
    // }));
    // console.log('Events: ', _event);
    yield put(showEventsSuccess(eventsData));
  } catch(e) {

  }
}

function* createEvent({name, date}) {
  const owner = localStorage.getItem('owner');
  try {
    let newEvent = {
      name,
      date,
      owner,
    };
    console.log('From saga --> ',newEvent);
    let event = yield call(createEventsAPI, newEvent);
    console.log(event);
    yield put(createEventSuccess(newEvent));
    yield history.push('/events/show');
  } catch (e) {

  }
}


export function* eventsWatcher() {
  yield takeLatest('ON_SHOW_EVENTS', showUserEvents);
  yield takeLatest('ON_CREATE_EVENT', createEvent);
  yield takeLatest('ON_DELETE_EVENT', deleteEvent);
  yield takeLatest('ON_EDIT_EVENT', editEvent);
}