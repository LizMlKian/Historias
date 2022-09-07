import React from "react";
import "../estilo/Backlog.css";

function Backlog(props){
  return (
    <div className= "contenedor-historia">
      <p className= "id-historia">ID {props.id}</p>
      <p className= "alias-historia">{props.alias}</p>
      <p className= "enunciado-historia">{props.enunciado}</p>
    </div>
  );
}
export default Backlog; 