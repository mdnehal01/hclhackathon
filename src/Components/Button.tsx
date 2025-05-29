import React from 'react';
import styled from 'styled-components';

interface ButtonProps{
    classname?: string;
    title?: string;
    children?: React.ReactNode;
    onclick:() => void;
}

const Button:React.FC<ButtonProps> = ({
    classname, title, onclick
}) => {
  return (
    <StyledWrapper onClick={onclick}>
      <button className={classname}>
        {title ? title : "Hover Me"}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background-color: white;
    color: black;
    border-radius: 10em;
    font-size: 17px;
    font-weight: 600;
    padding: 1em 2em;
    cursor: pointer;
    transition: all 0.05s ease-in-out;
    border: 1px solid black;
    transform: translateY(-4px) translateX(-2px);
    box-shadow: 2px 5px 0 0 black;
  }


  button:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  };`;

export default Button;
