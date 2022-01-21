import { createGlobalStyle } from 'styled-components';
import { Colors, Typografy, Layout} from './designTokens';

export default createGlobalStyle`
  ${Colors};
  ${Typografy};
  ${Layout};
  
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  body{
    background-color:var(---background);
    -webkit-font-smoothing: antialiased;
  }
  button{
      cursor:pointer;
  }
`;