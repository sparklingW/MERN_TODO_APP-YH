import React from 'react';
import styled from "styled-components";
import EditEvent from "../../edit-component/edit-component";
import axios from "axios";

const Back = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 3;
	background-color: rgba(0,0,0,0.8);
	//background-color: red;
`;

class ModalEdit extends React.Component {
	render() {
		// Render nothing if the "show" prop is false
		if(!this.props.show) {
			return null;
		}

		return (
			<Back>
				<EditEvent
					_id={this.props.id}
					onClose={() => this.props.onClose()}
				/>
			</Back>
		);
	}
}
export default ModalEdit;
