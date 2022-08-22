import styled from "styled-components";

/**
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
*/

export const loginStyles = {
    Button : styled.button`
    background: "white";
    color: "black";
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 3px;
`,
    Container : styled.div`
    background: "gray";
    display: "flex";
    flex-direction: "column";
    width: 500px;
    border: 2px solid black;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`,
    Input : styled.input`
    width: 80%;
    border-radius: 10px;
    height: 34px;
    margin: 1em;
    margin-bottom: 0;
    border-color: black;
    font-color: black;
`,
    Title : styled.h1`
    color: "gray"
`}
