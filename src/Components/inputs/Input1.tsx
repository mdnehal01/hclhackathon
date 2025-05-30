import React from 'react';
import styled from 'styled-components';

interface Input1Props{
    classname?:string;
    onchange?:() => void;
}

const Input1:React.FC<Input1Props> = (
    {classname, onchange}
) => {
  return (
    <StyledWrapper>
      <div className={`inputContainer ${classname}`}>
        <input onChange={onchange} id="inputField" placeholder="Username" type="text" />
        <label className="usernameLabel" htmlFor="inputField">Username</label>
        <svg viewBox="0 0 448 512" className="userIcon"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .inputContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  #inputField {
    border: 2px solid white;
    background-color: transparent;
    border-radius: 10px;
    padding: 12px 15px;
    color: black;
    font-weight: 500;
    outline: none;
    caret-color: rgb(155, 78, 255);
    transition-duration: .3s;
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  }

  .userIcon {
    position: absolute;
    fill: rgb(155, 78, 255);
    width: 12px;
    top: -23px;
    left: -15px;
    opacity: 0;
    transition: .2s linear;
  }

  .usernameLabel {
    position: absolute;
    top: -25px;
    left: 5px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    font-family: Whitney, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    overflow: hidden;
    transition: .2s linear;
    opacity: 0;
  }

  #inputField:focus ~ .usernameLabel,
  #inputField:valid ~ .usernameLabel {
    transform: translateX(20px);
    opacity: 1;
  }

  #inputField:focus ~ .userIcon,
  #inputField:valid ~ .userIcon {
    transform: translateX(20px);
    opacity: 1;
  }

  #inputField:focus,
  #inputField:valid {
    background-color: #ddd;
    transition-duration: .3s;
  }`;

export default Input1;
