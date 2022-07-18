import React from 'react'
import styled from 'styled-components'
const StyledAddress = styled.input`
    outline: ${({ errors }) => errors?.adress && '2px solid red'}
`
const StyledAddressError = styled.div`
    color:red;
`
const StyledSuggestionLocation = styled.p`
    background: rgb(255, 255, 255);
    color: black;
    font-weight: 700;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    transition: .5s background;
    margin-top: -20px;
  &:hover{
    background-color: #b5c0e0;
  }
`
const Address = ({ register, errors, handleChangeAdress, adress, locationState, onClickOnSuggestion }) => {
    return (
        <label>
            Your address:
            <StyledAddress errors={errors} value={adress} {...register('adress', {

                onChange: (e) => handleChangeAdress(e),
                required: 'Adress is required field',
            })} />
            <StyledAddressError>{errors?.adress && <p>{errors?.adress?.message || "Error!"}</p>}</StyledAddressError>
            {adress && locationState && locationState.map(location => <StyledSuggestionLocation key={location} onClick={() => onClickOnSuggestion(location)}>{location}</StyledSuggestionLocation>)}
        </label>
    )
}

export default Address