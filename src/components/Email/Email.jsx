import React from 'react'
import styled from 'styled-components'
const StyledEmail = styled.input`
    outline: ${({ errors }) => errors?.email && '2px solid red'}
`
const StyledEmailError = styled.div`
    color:red;
`
const Email = ({register,errors}) => {
    return (
        <label>
            Email:
            <StyledEmail errors={errors} {...register('email', {
                required: 'Email is required field',
                pattern: {
                    value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                }
            })} />
            <StyledEmailError>{errors?.email && <p>{errors?.email?.message || "Enter a valid email!"}</p>}</StyledEmailError>
        </label>
    )
}

export default Email