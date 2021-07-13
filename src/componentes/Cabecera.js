import { NavLink } from "react-router-dom";

export const Cabecera = () => {
  return (
    <header className="cabecera container navbar navbar-fixed-top">
      <div className="row align-items-center w-100">
        <h1 className="col-8 m-0 text-dark">Autentificación</h1>
        <nav className="col-4">
          <ul className="navegacion list-unstyled d-flex justify-content-between m-0">
            <li>
              <NavLink to="/inicio" activeClassName="actual">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/lista" activeClassName="actual">
                Lista
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="actual">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="actual">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
