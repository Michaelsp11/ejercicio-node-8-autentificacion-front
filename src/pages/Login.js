import { useState } from "react";
import { NavLink } from "react-router-dom";
export const Login = (props) => {
  const { error, loguearse } = props;
  const datosIniciales = {
    usuario: "",
    password: "",
  };
  const [usuario, setUsuario] = useState(datosIniciales);
  const setDato = (e) => {
    setUsuario({
      ...usuario,
      [e.target.id]: e.target.value,
    });
  };
  const enviarUsuario = (event) => {
    event.preventDefault();
    loguearse(usuario);
  };
  return (
    <main className="container my-3">
      <h2>Login de usuario</h2>
      <form noValidate className="mt-3" onSubmit={enviarUsuario}>
        <div className="form-group">
          <label htmlFor="usuario">Nombre de usuario:</label>
          <input
            type="text"
            id="usuario"
            value={usuario.usuario}
            onChange={setDato}
            className="input-group"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={usuario.password}
            onChange={setDato}
            className="input-group"
          />
        </div>
        {error && <p className="text-danger">Credenciales incorrectas!</p>}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};
