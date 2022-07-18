import React from 'react'
import styled from 'styled-components';
const StyledDataProcessingCheckBoxBlock = styled.div`
position: relative;
`
const StyledDataProcessingCheckBox = styled.input`
width: 20px;
  height: 20px;
  position: absolute;
  top: -9px;
  left: 160px;
  outline: ${({errors}) => errors?.processing && '2px solid red'}
  
`
const StyledDataProcessingCheckBoxError = styled.div`

color:red;
padding-top:30px;
`
const DataProcessingCheckBox = ({register,errors}) => {
    return (
        <StyledDataProcessingCheckBoxBlock>
            <label>Allow data processing:</label>
            <StyledDataProcessingCheckBox  errors={errors} type='checkbox' {...register('processing', {
                required: 'You have to allow data processing',
            })} />
            <StyledDataProcessingCheckBoxError >{errors?.processing && <p>{errors?.processing?.message || "Error!"}</p>}</StyledDataProcessingCheckBoxError>
        </StyledDataProcessingCheckBoxBlock>
    )
}

export default DataProcessingCheckBox