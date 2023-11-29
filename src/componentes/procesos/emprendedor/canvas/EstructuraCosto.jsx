

import React, { useState } from 'react';

export const EstructuraCosto = () => {
  const [costoFijo, setCostoFijo] = useState({ nombre: '', monto: '' });
  const [listaCostosFijos, setListaCostosFijos] = useState([]);
  const [costoVariable, setCostoVariable] = useState({ nombre: '', monto: '' });
  const [listaCostosVariable, setListaCostosVariable] = useState([]);
  const [totalMonto, setTotalMonto] = useState(0);
  const [totalMontoVariable, setTotalMontoVariable] = useState(0);
 let totalVariable=0
  const agregarFijo = () => {
    if (costoFijo.nombre && costoFijo.monto) {
        const nuevoMonto = parseFloat(costoFijo.monto);
      setListaCostosFijos([...listaCostosFijos, costoFijo]);
      setCostoFijo({ nombre: '', monto: '' });
      setTotalMonto((prevTotal) => prevTotal + nuevoMonto);
   
    }
    
   
  };
  const agregarVariable = () => {
    if (costoVariable.nombre && costoVariable.monto) {
        const nuevoMonto = parseFloat(costoVariable.monto);
      setListaCostosVariable([...listaCostosVariable, costoVariable]);
      setCostoVariable({ nombre: '', monto: '' });
      setTotalMontoVariable((prevTotal) => prevTotal + nuevoMonto);
    }
  };


  return (
    <>
      <h2>Estructura de Costos</h2>
      <h3>Costos Fijos</h3>
      <div className="input-group mb-3">
      

        <input
          name="nombre"
          type="text"
          className="form-control"
          placeholder="Nombre del Costo"
          aria-label="Nombre del Costo"
          value={costoFijo.nombre}
          onChange={(e) => setCostoFijo({ ...costoFijo, nombre: e.target.value })}
        />

        <input
          name="monto"
          type="number"
          className="form-control"
          placeholder="Monto"
          aria-label="Monto"
          value={costoFijo.monto}
          onChange={(e) => setCostoFijo({ ...costoFijo, monto: e.target.value })}
        />

        <button onClick={agregarFijo} className="btn btn-success m-2">
          Agregar
        </button>
      </div>

      {listaCostosFijos.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Monto</th>
              <th scope="col">total</th>
              
            </tr>
          </thead>
          <tbody>
            {listaCostosFijos.map((fijo, index) => (
              <tr key={index}>
                <td>{fijo.nombre}</td>
                <td>{fijo.monto}</td>
          
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <h3>Costos Variables</h3>
      <div className="input-group mb-3">
      

        <input
          name="nombre"
          type="text"
          className="form-control"
          placeholder="Nombre del Costo"
          aria-label="Nombre del Costo"
          value={costoVariable.nombre}
          onChange={(e) => setCostoVariable({ ...costoVariable, nombre: e.target.value })}
        />

        <input
          name="monto"
          type="text"
          className="form-control"
          placeholder="Monto"
          aria-label="Monto"
          value={costoVariable.monto}
          onChange={(e) => setCostoVariable({ ...costoVariable, monto: e.target.value })}
        />

        <button onClick={agregarVariable} className="btn btn-success m-2">
          Agregar
        </button>
      </div>

      {listaCostosVariable.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Monto</th>
            </tr>
          </thead>
          <tbody>
            {listaCostosVariable.map((fijo, index) => (
              <tr key={index}>
                <td>{fijo.nombre}</td>
                <td>{fijo.monto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
       <div>
            <strong>Total Fijo: {totalMonto.toFixed(2)}</strong>
          </div>
          <div>
            <strong>Total Variable: {totalMontoVariable.toFixed(2)}</strong>
          </div>
    </>
  );
};
