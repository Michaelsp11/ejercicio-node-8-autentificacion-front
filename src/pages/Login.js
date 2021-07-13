export const Login = () => {
  return (
    <main className="container my-3">
      <h2>Login de usuario</h2>
      <form noValidate className="mt-3">
        <div className="form-group">
          <label htmlFor="nombre-usuario">Nombre de usuario:</label>
          <input type="text" id="nombre-usuario" className="input-group" />
        </div>
        <div className="form-group">
          <label htmlFor="pass">Contraseña:</label>
          <input type="password" id="pass" className="input-group" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
};
