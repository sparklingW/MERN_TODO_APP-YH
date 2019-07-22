import styled from "styled-components";
/*
* font-family: 'Inconsolata', monospace;
* font-family: 'Muli', sans-serif;
* font-family: 'Muli', sans-serif;
* */

export const GlobalHolder = styled.div`
	background-color: #f1f1f1;
	font-family: 'Muli', sans-serif;
	display: flex;
	flex-direction: column;
`;
export const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background-color: #fafafa;
	box-shadow: 2px 2px 2px #e0e0e0;
	color: #212121;
	padding: 10px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const ContentWrapper = styled.div`
	//border: 1px solid green;
	background-color: #f1f1f1;
	display: flex;
	flex-direction: column;
	padding: 10px 10px 0 10px;
	min-height: 567px;
	margin: 56px 0 0 0;
`;
export const EventsNumero = styled.div`
	border: 1px solid #7986cb;
	background-color: #b2dfdb;
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const EventHolder = styled.div`
	//border: 1px solid red;
	background-color: #f1f1f1;
	display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  //min-height: 631px;
`;
export const EventBlock = styled.div`
	border: 1px solid #fafafa;
	background-color: #fafafa;
	box-shadow: 2px 2px 2px #e0e0e0;
	color: #212121;
	border-radius: 3px 3px;
	display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 0 0 21.1%;
  padding: 15px;
  margin: 10px;
	//padding: 10px;
	//display: flex;
	//flex-direction: row;
	//justify-content: space-between;
	//align-items: center;
`;
export const UserInfo = styled.div`
	width: 35%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
export const TextHolder = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;
export const Text = styled.span`
	font-family: 'Muli', sans-serif;
	//margin: 15px 0 0 0;
`;
export const CreateButtonHeader = styled.button`
	cursor: pointer;
	font-family: 'Muli', sans-serif;
	width: 150px;
	padding: 10px;
	text-align: center;
	color: #f1f1f1;
	border: 1px solid #e76165;
	background: #e76165;
	border-radius: 4px;
`;
export const LogoutButton = styled.button`
	cursor: pointer;
	height: 24px;
	width: 110px;
	font-family: 'Muli', sans-serif;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid rgba(182,182,182,0.76);
  color: #212121;
  background-color: #fafafa;
  //padding: 10px;
	margin: 0 20px 0 0;
`;
export const ButtonsBlock = styled.div`
	//border: 1px solid black;
	margin: 15px 0 0 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
export const Edit = styled.div`
	outline: none;
	cursor: pointer;
`;
export const Delete = styled.div`
	outline: none;
	cursor: pointer;
	margin: 0 0 0 10px;
	padding: 3px;
`;
export const CreateCircle = styled.div`
	color: #f1f1f1;
	cursor: pointer;
	font-family: 'Muli', sans-serif;
	width: 62px;
	height: 62px;
	background-color: #e76165;
	box-shadow:  0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0px rgba(0,0,0,0.14), 0 1px 18px 0px rgba(0,0,0,0.12);
	font-size: 1.2em;
	border-radius: 50%;
	position: fixed;
	bottom: 10px;
	right: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: rgba(231,97,101,0.78);
	}
`;
