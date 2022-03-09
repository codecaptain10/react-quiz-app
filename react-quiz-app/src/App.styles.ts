import styled, { createGlobalStyle } from "styled-components";
import BGCImage from "./img/background.jpg";

export const GlobalStyle = createGlobalStyle`

html{
    height:100%;
}

body{
    background-image:url(${BGCImage});
    background-size:cover;
    margin:0;
    padding:0 20px;
    display:flex;
    justify-content:center;
}

*{
    box-sizing:bordr-box;
    font-family: 'Catamaran', sans-serif;
}
`;
