import React, { Component, lazy, Suspense } from 'react';
import {
  Title,
  Create,
  EventsWrapper,
  Block,
  Info,
  Content,
  Placeholder,
  TitleBlock,
  Div,
  Buttons,
  GeneralInfo,
} from '../styled-components/user-page';
import { connect } from "react-redux";
import history from '../history';
import * as func from '../actions/events';
import ModalEdit from "./holders/ModalEdit";
import List from './user-list';
// const List = lazy(() => import('./user-list'));

class Events extends Component {
  state = {
    data: [],
    show: false,
    id: '',
  };

  componentDidMount() {
    if(!this.state.data.length) {
      this.uploadEvents();
    }
  }
  toggleModal = (obj) => {
    console.log(obj);
    this.setState({
      show: !this.state.show,
      id: obj,
    }, () => console.log(this.state.id));
  };
  uploadEvents = () => {
    this.props.showEvents(this.props.events);
  };
  componentDidUpdate() {
    this.uploadEvents();
  }
  onCreate = () => {
      history.push('/events/create');
  };
  onEdit = (eventId) => {
    console.log(eventId);
    this.toggleModal(eventId);
    // history.push('/events/edit/' + eventId);
  };
  onDelete = id => {
    console.log(id);
    this.props.onDelete(id);
    // this.uploadEvents();
  };
  render() {
    return (
      <div style={{width: "100%"}}>
        <ModalEdit
          id={this.state.id}
          show={this.state.show}
          onClose={() => this.toggleModal()}
        />
        <div style={{display: "flex",flexDirection: "row", flexWrap: "wrap"}}>
		      {
			      this.props.events.map((el, i) => (
				      <List
					      events={el}
					      key={el._id}
					      id={el._id}
					      onEdit={() => this.onEdit(el._id)}
					      onDelete={() => this.onDelete(el._id)}
				      />
			      ))
		      }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.evenstReducer.events,
});

const mapDispatchToProps = dispatch => ({
  onDelete: (id) => dispatch(func.deleteEvent(id)),
  showEvents: (events) => dispatch(func.showEvents(events)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Events);
