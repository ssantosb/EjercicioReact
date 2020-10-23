import React, { useState } from "react";
import Form from "./form";

let Forms = ()=> {
  let [fields, setFields] = useState([
    { id: 1, name: "Nombre", type: "text", placeholder: "Escribir tu nombre" },
    { id: 2, name: "HeladoFavorito", type: "text", placeholder: "Escribe tu helado favorito" },
    { id: 3, name: "Correo", type: "email", placeholder: "Ingresa tu correo" },
    { id: 4, name: "GeneroMusical", type: "text", placeholder: "Escribe tu género musical favorito" },
  ]);

  const renderForm = () => {
    return (
      <>
        <Form fields={fields} />
      </>
    );
  };

  return <div>{renderForm()}</div>;
}

export default Forms;
