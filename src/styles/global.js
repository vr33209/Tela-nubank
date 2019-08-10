import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html, body, #root{
    height:100%;
    background: #FFF ;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:0;
}
 
#root {
  margin: 0 auto;
}

a{
  text-decoration:none;
}

ul{
  list-style:none;
}

button{
  cursor:pointer;
}

`;

export default GlobalStyle;
