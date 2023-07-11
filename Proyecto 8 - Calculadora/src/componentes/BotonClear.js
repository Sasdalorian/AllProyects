import React from "react";
import "../css/BotonClear.css"

export const BotonClear = (props) => {
  return (
    <div className="boton_contenedor botonClear" onClick={props.manejarClear}>
      {props.children}
    </div>
  )
};