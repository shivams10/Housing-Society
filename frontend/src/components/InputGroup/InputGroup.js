import React from 'react'
import StyledInputGroup from "./style"

function InputGroup({children}) {
  return (
    <StyledInputGroup>
        {children}
    </StyledInputGroup>
    )
}

export default InputGroup