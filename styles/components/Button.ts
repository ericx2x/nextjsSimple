import styled from "styled-components";

/**
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
*/
interface ButtonProps {
    primary: boolean;
}

export const Button = styled.button<ButtonProps>`
    background: "white";
    color: "black";
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
    background: ${props => props.primary ? "palevioletred" : "white"};
`;