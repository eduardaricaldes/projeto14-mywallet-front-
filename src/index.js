import * as ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./reset.css";

ReactDom.render(
<BrowserRouter>
    <App/>
</BrowserRouter>
, document.getElementById ('root'))