import ReactDom from "react-dom";
import "./css/reset.css";
import "./css/style.css";

import App from "./Componentes/App";

const root = document.querySelector('.root');
const app = <App />;

ReactDom.render(app, root);