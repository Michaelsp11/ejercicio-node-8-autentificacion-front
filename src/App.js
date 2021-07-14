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
import { useState } from "react";
function App() {
  const [error, setError] = useState(false);
  const [logueado, setLogueado] = useState(false);
  const [datos, setDatos] = useState([]);
  const loguearse = async (usuario) => {
    const resp = await fetch("http://localhost:4000/usuarios/login", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (resp.ok) {
      setError(false);
      const { token } = await resp.json();
      localStorage.setItem("token", token);
      setLogueado(true);
    } else {
      setError(true);
      setLogueado(false);
    }
  };
  const cargarItems = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const resp = await fetch("http://localhost:4000/items/listado", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const datosApi = await resp.json();
    setDatos(datosApi);
  };

  const desloguearse = () => {
    localStorage.removeItem("token");
    setLogueado(false);
  };
  return (
    <Router>
      <Cabecera
        logueado={logueado}
        cargarItems={cargarItems}
        desloguearse={desloguearse}
      />
      <Switch>
        <Route path="/inicio" exact>
          <Inicial />
        </Route>
        <Route path="/lista" exact>
          <Lista datos={datos} />
        </Route>
        <Route path="/login" exact>
          <Login error={error} loguearse={loguearse} />
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
