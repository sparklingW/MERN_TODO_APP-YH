import styled from 'styled-components';
import img_one from '../imgs/bank-3.jpg';
import img_two from '../imgs/for-welcome.jpg';

export const Wrapper = styled.div`
  //border: 1px solid black;
  background-image: url(${img_two});
  background-size: cover;
  background-repeat: no-repeat;
  //background-color: #33313b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 635px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  color: #f6f5f5;
  	font-family: 'Muli', sans-serif;
  letter-spacing: 3px;
`;
export const SiteInfo = styled.h3`
  color: #f6f5f5;
	font-family: 'Muli', sans-serif;
`;
export const ButtonsWrapper = styled.div`
  //border: 2px solid bisque;
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 12px 0 0 0;
  align-items: center;
`;
export const ButtonsContainer = styled.div`
  //border: 4px solid white;
  padding: 25px;
`;
export const ButtonRegister = styled.button`
  background: #e76165;
  font-family: 'Muli', sans-serif;
  color: #f1f1f1;
  border: 1px solid #e76165;
  margin: 0 25px 0 0; 
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  width: 150px;
  &:hover {
      background: #e76165;
  }
`;
export const ButtonLogin = styled.button`
  background: #e76165;
  font-family: 'Muli', sans-serif;
  margin: 0 0 0 25px; 
  color: #f1f1f1;
  border: 1px solid #e76165;
  padding: 12px;
  border-radius: 6px 6px;
  cursor: pointer;
  width: 150px;
`;
