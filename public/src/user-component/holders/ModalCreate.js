import React from 'react';
import styled from "styled-components";
import CreateEvent from "../../create-component/create-event";

const Back = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.8);
`;

class ModalCreate extends React.Component {
	state = {
		name: '',
		date: new Date().toJSON().slice(0,10),
		min: new Date().toJSON().slice(0,10),
		max: '2019-12-31',
		defValue: new Date().toJSON().slice(0,10),
		nameError: '',
		nameLength: 40,
		validName: true,
	};
	render() {
		// Render nothing if the "show" prop is false
		if(!this.props.show) {
			return null;
		}

		return (
			<Back>
				<CreateEvent
					onClose={() => this.props.onClose()}
				/>
			</Back>
		);
	}
}
export default ModalCreate;
