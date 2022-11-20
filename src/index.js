import * as ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AutenticacaoProvider } from './contexts/AuthenticationProvider';
import App from './App';
import "./reset.css";

ReactDom.render(
<BrowserRouter>
    <AutenticacaoProvider>
        <App/>
    </AutenticacaoProvider>
</BrowserRouter>
, document.getElementById ('root'))