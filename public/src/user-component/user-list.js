import React, { Component } from 'react';
// import {
//   ButtonHolder,
//   Delete,
//   Edit,
//   EventContainer,
//   ListWrapper,
//   GeneralInfo,
//   Buttons,
//   Holder,
//   TextHolder,
//   TitleBlock,
// } from "../styled-components/user-page";
import * as comp from "../styled-components/events-show";
import edit_btn from "../imgs/edit_png.png";
import delete_btn from "../imgs/trash_png.png";
class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dateString: this.props.events.date,
		}
	}
  render() {
    const { name, date, _id } = this.props.events;
    return (
      <comp.EventBlock>
	      <comp.Text>{new Date(date).toLocaleString().slice(0,10)}</comp.Text>
				<comp.Text style={{marginTop: "15px"}}>{name}</comp.Text>
	      <comp.ButtonsBlock>
		      <comp.Edit onClick={() => this.props.onEdit(_id)}>
			      <img src={edit_btn} alt='Edit' style={{width: "20px", height: "20px"}}/>
		      </comp.Edit>
		      <comp.Delete onClick={() => this.props.onDelete(_id)}>
			      <img src={delete_btn} alt='delete' style={{width: "20px", height: "20px"}}/>
		      </comp.Delete>
	      </comp.ButtonsBlock>
      </comp.EventBlock>
    )
  }
}

export default List;

{/*<EventContainer>*/}
{/*	<Holder>*/}
{/*		<GeneralInfo>*/}
{/*			<TextHolder>Name: {name}</TextHolder>*/}
{/*			<TextHolder>Date: {date.slice(0,10)}</TextHolder>*/}
{/*		</GeneralInfo>*/}
{/*		<Buttons>*/}
{/*			<Edit onClick={() => this.props.onEdit(_id)}>Edit</Edit>*/}
{/*			<Delete onClick={() => this.props.onDelete(_id)}>Delete</Delete>*/}
{/*		</Buttons>*/}
{/*	</Holder>*/}
{/*</EventContainer>*/}



{/*<EventContainer>*/}
{/*	<Holder>*/}
{/*		<GeneralInfo>*/}
{/*			<TextHolder><span>Name: {name}</span></TextHolder>*/}
{/*			<TextHolder><span>Date: {date.slice(0,10)}</span></TextHolder>*/}
{/*		</GeneralInfo>*/}
{/*		<Buttons>*/}
{/*			<Edit onClick={() => this.props.onEdit(_id)}>Edit</Edit>*/}
{/*			<Delete onClick={() => this.props.onDelete(_id)}>Delete</Delete>*/}
{/*		</Buttons>*/}
{/*	</Holder>*/}
{/*</EventContainer>*/}
