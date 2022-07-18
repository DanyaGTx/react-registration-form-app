import React from 'react'
import styled from 'styled-components'
const StyledFirstName = styled.input`
    outline: ${({ errors }) => errors?.firstName && '2px solid red'}
`
const StyledFirstNameError = styled.div`
    color:red;
`
const FirstName = ({register,errors}) => {
    return (
        <label>
            First Name:
            <StyledFirstName errors={errors} name='firstName' {...register('firstName', {
                required: 'First Name is required field',
                minLength: {
                    value: 2,
                    message: "At least 2 symbols"
                }
            })} />
            <StyledFirstNameError>{errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}</StyledFirstNameError>
        </label>
    )
}

export default FirstName