import { NavLink } from "react-router-dom";
import styled from "styled-components";



export const Container = styled.div`
  padding: 2px 16px;
  background: #fff;
  display: block;
  margin: 20px 10px;
  border: #4979ff;
  &:hover {
    border-left: #4979ff;
  }
`;

export const Title = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.875rem;
  color: #ffffff80;
  margin-bottom: 1.5rem;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-center;
  justify-content: space-between;
  @media (max-width: 992px) {
    align-items: stretch;
    flex-direction: column;
  }
  & > * {
    &:not(:first-child) {
      margin-left: 1rem;
      @media (max-width: 992px) {
        margin-left: 0;
        margin-top: 1rem;
      }
    }
  }
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
  max-width: 10%;
    padding: 0.5rem 1.5rem !important;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75rem;
  color: #ffffff;
  background-color: red;
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
  display: block;
  width: 100%;
  flex: 3;
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

export const InputLabel = styled.span`
  padding: 0.5rem 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.75rem;
  color: hsla(0, 0%, 100%, 0.7);
  background-color: #2a3e89;
  border: none;
`;

export const Image = styled.img`
  height: 3rem;

`;


export const Link = styled(NavLink)`
  display:flex;
  width: 100%;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75rem;
  color: #6495ED;
  justify-content: space-between;
  &:hover {
    color: #ffffff;
    background-color: grey;
  }
`;