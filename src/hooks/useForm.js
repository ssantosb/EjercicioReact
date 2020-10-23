import { useState } from "react";

const useForm = (validateForm, fields) => {

  let nombresCampos = {};

  fields.map((f) => {
    let nom = f.name;
    //Inicializo el arreglo de cada campo del formulario
    nombresCampos[nom] = "";
  });

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(nombresCampos);

  const handleChange = (e) => {
    setValues({
      ...values,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
  };
  return { handleChange, handleSubmit, errors };
};

export default useForm;
