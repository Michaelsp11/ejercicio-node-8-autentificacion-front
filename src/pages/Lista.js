export const Lista = (props) => {
  const { datos } = props;
  return (
    <main className="container my-3">
      <h2>Listado de items</h2>
      <ul className="list-unstyled">
        {datos.length === 0 ? (
          <li>No hay items para mostrar de este usuario</li>
        ) : (
          datos.map((item, i) => (
            <li key={i}>
              <p>Nombre: {item.nombre}</p>
              <p>Precio: {item.precio}€</p>
            </li>
          ))
        )}
      </ul>
    </main>
  );
};
