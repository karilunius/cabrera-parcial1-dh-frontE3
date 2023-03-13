import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
	box-sizing: border-box;
	font-family: "Lato", sans-serif;
}

body {
	margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ecf0f3;
}

input {
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    margin: 15px 15px;
    width: 210px;
    color: dodgerblue;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: dodgerblue;
    opacity: 0.5;
}

link, a{
    text-align: center;
}

`;
