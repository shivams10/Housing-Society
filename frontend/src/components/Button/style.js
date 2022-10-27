import styled from "styled-components";

export const StyledButton = styled.button `
width: ${props => props.full ? '100%': null};
min-width: 64px;
border: 0px;
border-radius: 4px;
padding: 8px 16px;
outline: none;
background-color: #2f8bfd;
color: #ffffff;
font-size: 0.85rem;
font-weight: 500;
line-height: 1.5;
letter-spacing: 0.03;
cursor: pointer;
transition: all 0.2s;
&:hover {background-color: #0072ff}
`;