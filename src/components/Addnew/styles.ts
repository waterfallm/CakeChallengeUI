import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
max-width: 80rem;
background: #B0C4DE;
margin: 0 auto;
padding: 3.5rem 1rem;
`;

export const Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: black;
  margin-bottom: 1.5rem;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;

  justify-content: space-between;
  
`;

export const Group = styled.div`
  flex: 2;
`;

export const Label = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75rem;
  color: #ffffff60;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
flex: 1;
text-align: center;
padding: 0.5rem 1.5rem !important;
justify-content: center;
font-family: "Roboto";
font-style: normal;
font-weight: 400;
font-size: 0.875rem;
line-height: 1.75rem;
color: #ffffff;
background-color: #157ff9;
border-radius: 1rem;
display: block;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
border: none;
user-select: none;
cursor: pointer;
&:hover {
  color: #ffffff;
  background-color: #0566d6;
}
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  border-radius: 0.15em;
  overflow: hidden;
`;

export const Select = styled.select`
  display: block;
  flex: 1;
  width: 100%;
  height: 44px;
  padding: 0.5rem 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75rem;
  color: hsla(0, 0%, 100%, 0.7);
  background: none;
  background-color: #2a3e89;
  border: none;
  box-shadow: none;
  outline: none;
`;

export const Input = styled.input`
width: 80%;
align-content: center;
`;



export const Image = styled.image`
  flex: 1;
  padding: 0.5rem 1.5rem !important;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75rem;
  color: #ffffff;
  background-color: #157ff9;
  border-radius: 0.15em;
  display: block;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  border: none;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #0566d6;
  }
`;


export const Link = styled(NavLink)`


`;

export const InputWraper = styled.div`
  max-width: 80rem;
  background: #B0C4DE;
  margin: 0 auto;
  padding: 3.5rem 1rem;

`;

export const InputHeader = styled.h5`

`;

export const InputBox = styled.div`

  padding: 2px 16px;
  background: #fff;
  display: block;
  margin: 20px 10px;
  border: #4979ff;
  &:hover {
    border-left: #4979ff;
  }
`;

