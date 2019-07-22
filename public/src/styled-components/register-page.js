import styled from 'styled-components';
import _logo from '../imgs/cactus-candle-desk-947845.jpg';

export const Wrapper = styled.div`
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
	//border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-color: rgba(253,85,78,0.02);
  z-index: 1000;
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
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  border: 1px solid #adadad;
  outline: #adadad;
  width: 300px;
  //width: 100%;
  //background-color: #fff;
  border-radius: 5px 3px 5px 3px;
  font-size: 16px;
  margin: 10px 0;
  padding: 5px 5px;
  font-family: 'Muli', sans-serif;
`;

export const RegisterWrapper = styled.div`
  //border: 1px solid green;
  //background-color: rgba(33,32,41,0.54);
  //box-shadow: #33313b 2px 2px 2px;
  border-radius: 7px 7px;
  display: flex;
  justify-content: center;
  //min-height: 400px;
  //height: 400px;
  //max-height: 400px;
`;
export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Submit = styled.button`
  width: 312px;
  background: ${props => props.disabled ? "rgba(15,44,15,0.25)" : "#e76165"};
  color: #fff;
  border: ${props => props.disabled ? "1px solid rgba(15,44,15,0.25)" : `1px solid #e76165`};
  //margin: -10px 0 0 0; 
  padding: 12px;
  //height: 24px;
  border-radius: 6px 6px;
  cursor: pointer;
  font-family: 'Muli', sans-serif;
  &:hover {
    background: ${props => props.disabled ? "rgba(15,44,15,0.25)" : "#e76165"};
  }
`;
export const Error = styled.span`
  color: red;
`;
export const InputsWrapper = styled.div`
  //border:3px dashed darkgoldenrod;
  padding: 10px;
  display: flex;
  //flex-basis: 550px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //position: relative;
`;
export const ButtonsWrapper = styled.div`
  //border: 1px solid blueviolet;
  margin: 0 0 10px 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
export const ActionHolder = styled.form`
  //border: 1px solid brown;
`;
export const ToLogin = styled.span`
  width: 100%;
  margin: 10px 0 -5px 0;
  text-align: center;
  background: none;
  color: #e76165;
  font-size: 0.9em;
  padding: 12px;
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

export const PlaceholderError = styled.span`
	//border: 1px solid blue;
	//margin: 5px 5px;
  align-self: flex-start;
  font-family: 'Muli', sans-serif;
  font-size: 13px;
  color: rgba(0,0,0,0);
  //color:#f6f5f5;
`;
export const PlaceholderSuccess = styled(PlaceholderError)`
  color: rgba(0,0,0,0);
`;
export const InfoElementName = styled.div`
  border-radius: 10px 10px;
  padding: 3px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35px;
  right: 40px;
`;
export const Holder = styled.div`
	//border: 1px solid black;
	display: flex;
	flex-direction: column;
	
`;
