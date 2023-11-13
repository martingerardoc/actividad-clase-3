import React from 'react';

const Products = (props) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
  <img src="https://images.app.goo.gl/https://images.app.goo.gl/364BqGVoPwgDrHzK8F7" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">
    </p>
    <ul>
        <li>Nombre: {props.nombre}</li>
        <li>Descripcion: {props.descripcion}</li>
        <li>Precio: {props.precio}</li>
        <li>SKU: {props.sku}</li>
        <li>Stock: {props.stoc}</li>
    </ul>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
        </div>
    );
}

export default Products;
