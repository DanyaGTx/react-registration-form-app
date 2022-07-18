import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
    outline: ${({ errors }) => errors?.gender && '2px solid red'}
`
const StyledSelectError = styled.div`
    color:red;
`
const Gender = ({register,errors}) => {
    return (
        <label>
            Choose your gender:
            <StyledSelect errors={errors} {...register("gender", {
                required: 'Please, choose your gender',
            })}>
                <option value="" selected>Gender:</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </StyledSelect>
            <StyledSelectError>{errors?.gender && <p>{errors?.gender?.message || "Error!"}</p>}</StyledSelectError>
        </label>
    )
}

export default Gender