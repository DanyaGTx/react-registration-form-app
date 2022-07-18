import React from 'react'
import styled from 'styled-components'
const StyledButtonSubmit = styled.input`
    position: relative;
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    font-weight: 600;
    margin-top: 20px;
    padding: 20px;
    font-size: 16px;
    letter-spacing: 2px;
    display: block;
    appearance: none;
    border-radius: 4px;
    width: 100%;
    font-weight: 400;
    letter-spacing: 0.5rem;
    transition: 0.3s all;
    cursor:pointer;
    &:hover {
    background: #bf1650;
    color: white;
  }
  &:active {
    transition: 0.3s all;
    top: 2px;
  }

}

`
const ButtonSubmit = () => {
  return (
    <StyledButtonSubmit type="submit" />
  )
}

export default ButtonSubmit