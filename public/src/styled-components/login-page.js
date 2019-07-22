import styled from 'styled-components';
import _logo from '../imgs/cactus-candle-desk-947845.jpg';

export const Wrapper = styled.div`
	//border: 1px solid red;
  background-image: url(${_logo});
  background-size: 100%;
  background-repeat: no-repeat;
  filter: contrast(90%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 635px;
`;
export const ElementsWrapper = styled.div`
	//border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //margin: 10px 0 10px 0;
`;
export const Title = styled.h1`
  color: #e76165;
  font-size: 1.5em;
  font-family: 'Muli', sans-serif;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const InfoBlock = styled.div`
  color: #33313b;
  font-family: 'Muli', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input`
  color: #212121;
  outline: #adadad;
  width: 300px;
  border:1px solid #adadad;
  background-color: #fff;
  border-radius: 5px 3px 5px 3px;
  font-size: 16px;
  margin: 10px 0 10px 0;
  padding: 5px 5px;
  font-family: 'Muli', sans-serif;
`;
export const RegisterWrapper = styled.div`
	//border: 1px solid green;
	padding: 10px;
	margin: 10px 0 0 0;
  //background-color: rgba(33,32,41,0.54);
  border-radius: 7px 7px;
  //box-shadow: #33313b 2px 2px 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 550px;
`;
export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Submit = styled.button`
  width: 100%;
  background: #e76165;
  margin: 5px;
  color: #fff;
  border: 1px solid #e76165;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  font-family: 'Muli', sans-serif;
  &:hover {
      background: #e76165;
  }
`;
export const Error = styled.span`
  color: red;
`;
export const InputsWrapper = styled.div`
	//border: 1px solid crimson;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
export const ButtonsWrapper = styled.div`
	//border: 1px solid orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
margin: 5px 15px 5px 15px;
font-size: 19px;
color: #cbcbcb;
`;

export const InputHolders = styled.div`
  //border: 1px solid #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  
`;
export const ActionHolder = styled.div`
  //border: 1px solid brown;
`;
export const ToLogin = styled.span`
  width: 100%;
  margin: 5px;
  font-size: 0.9em;
  color: #e76165;
  display: flex;
  justify-content: center;
  background: none;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  font-family: 'Muli', sans-serif;
`;
export const Blured = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PlaceholderError = styled.div`
  align-self: flex-start;
  font-family: 'Muli', sans-serif;
  color: rgba(255,0,0,0.96);
  font-size: 13px;
`;

export const PlaceholderSuccess = styled(PlaceholderError)`
  color: #f6f5f5;
`;

export const Holder = styled.div`
	//border: 1px solid green;
	//margin: 10px 0 10px 0;
`;
