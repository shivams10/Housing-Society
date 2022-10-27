import React from 'react'
import{StyledButton} from "./style"

function Button({children, ...props}) {
  return (
    <StyledButton {...props}>
        {children}
    </StyledButton>
  )
}

export default Button