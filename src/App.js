import { Cabecera } from "./componentes/Cabecera";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Inicial } from "./pages/Inicial";
import { Lista } from "./pages/Lista";
import { Login } from "./pages/Login";
function App() {
  return (
    <Router>
      <Cabecera />
      <Switch>
        <Route path="/inicio" exact>
          <Inicial />
        </Route>
        <Route path="/lista" exact>
          <Lista />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/" exact>
          <Redirect to="/inicio" />
        </Route>
        <Route path="**" exact>
          <Redirect to="/inicio" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
