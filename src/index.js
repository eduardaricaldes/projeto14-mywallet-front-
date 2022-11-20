import * as ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { AutenticacaoProvider } from './contexts/AuthenticationProvider';
import { UsuarioProvider } from './contexts/UserProvider';

import App from './App';
import "./reset.css";

ReactDom.render(
<BrowserRouter>
    <AutenticacaoProvider>
        <UsuarioProvider>
            <App/>
        </UsuarioProvider>
    </AutenticacaoProvider>
</BrowserRouter>
, document.getElementById ('root'))