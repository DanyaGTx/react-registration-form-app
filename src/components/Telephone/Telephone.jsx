import React from 'react'
import styled from 'styled-components'

const StyledTelephone = styled.input`
    outline: ${({ errors }) => errors?.tel && '2px solid red'}
`
const StyledEmailTelephone = styled.div`
    color:red;
`
const Telephone = ({register,errors}) => {
  return (
    <label>
          Telephone:
          <StyledTelephone errors={errors}  type='number' {...register('tel', {
            required: 'Telephone is required field',
            minLength: {
              value: 10,
              message: "At least 10 numbers"
            },
            maxLength: {
              value: 18,
              message: "Maximum is 18 numbers"
            }
          })} />
          <StyledEmailTelephone>{errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}</StyledEmailTelephone>
        </label>

  )
}

export default Telephone