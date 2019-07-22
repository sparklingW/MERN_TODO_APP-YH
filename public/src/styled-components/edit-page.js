import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 633px ;
  //border: 1px solid black;
  //background-color: #f6f5f5;
  margin: 0 0;
  padding: 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;
export const Holder = styled.div`
  margin: 0 0;
  padding: 10px;
  width: 350px;
  //height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(246,244,244,0.8);
  border-radius: 7px 7px;
  box-shadow: #33313b 2px 2px 2px;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-family: 'Muli', sans-serif;
  font-size: 20px;
  //margin: 0 0 0 20px;
  color: #212121;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //margin: 30px 0 0 0;
`;
export const Input = styled.input`
    color: #212121;
    width: 300px;
    border: none;
    border-radius: 5px 3px 5px 3px;
    font-size: 19px;
    margin: 10px 0 10px 0;
    padding: 5px 5px;
    font-family: 'Muli', sans-serif;
`;
export const Submit = styled.button`
    border: none;
    width: 270px;
    cursor: pointer;
    height: 40px;
    margin: 5px 0 0 0;
    font-family: 'Muli', sans-serif;
    &:hover {
      background-color: hotpink;
      color: #f6f5f5;
    }
`;
export const Cancel = styled.button`
	outline: none;
  width: 150px;
  background: none;
  color: #f1f1f1;
  border: none;
  background: #cb575b;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  font-family: 'Muli', sans-serif;
  &:hover {
    border: 1px solid #cb575b;
    background: #cb575b;
    color: #f1f1f1;
  }
`;
export const Label = styled.label`
  margin: 5px 0 5px 5px;
  font-size: 19px;
  color: #cbcbcb;
`;

export const ButtonsWrapper = styled.div`
	//border: 1px solid pink;
	width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Create = styled.button`
  width: 150px;
  outline: none;
  //margin: 25px 0 10px 0;
  //cursor: not-allowed;
  background: none;
  color: ${props => props.disabled ? "rgba(132,132,132,0.76)" : "#f6f4f4"};
  border: 1px solid #e76165;
  background: ${props => props.disabled ? "rgba(15,44,15,0.25)" : "#e76165"};
  border: ${props => props.disabled ? "1px solid rgba(15,44,15,0.25)" : `1px solid #e76165`};
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  font-family: 'Muli', sans-serif;
  &:hover {
      background: ${props => props.disabled ? "rgba(15,44,15,0.25)" : "#e76165"};
      border: ${props => props.disabled ? "1px solid rgba(15,44,15,0.25)" : `1px solid #e76165`};
      color: ${props => props.disabled ? "rgba(132,132,132,0.76)" : "#f6f4f4"};
  }
`;

export const PlaceholderError = styled.div`
	//border: 1px solid pink;
  align-self: flex-start;
  font-family: 'Muli', sans-serif;
  font-size: 13px;
  margin: 0 0;
  color: rgba(171,0,0,0.87);
  //color:#f6f5f5;
`;
export const PlaceholderSuccess = styled(PlaceholderError)`
  color: rgba(0,0,0,0);
`;
