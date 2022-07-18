import React from 'react'
import styled from 'styled-components'

const StyledLastName = styled.input`
    outline: ${({ errors }) => errors?.lastName && '2px solid red'}
`
const StyledLastNameError = styled.div`
    color:red;
`
const LastName = ({register,errors}) => {
  return (
    <label>
          Last Name:
          <StyledLastName errors={errors} {...register('lastName', {
            required: 'Last Name is required field',
            minLength: {
              value: 2,
              message: "At least 2 symbols"
            }
          })} />
          <StyledLastNameError>{errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}</StyledLastNameError>
        </label>
  )
}

export default LastName