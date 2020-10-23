import React from "react";
import useForm from "../hooks/useForm.js";
import validateForm from "../util/validateForm.js"


let Form = (props)=> {


    const { handleChange, handleSubmit, errors } = useForm(
      validateForm,
      props.fields
    );



    const fields = props.fields.map((fieldInfo) => {
      return (
        <div className="form-group" key={fieldInfo.id}>
          <RenderCampo err={errors} f={handleChange} campo={fieldInfo} />
        </div>
      );
    });


    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    {fields}
                </div>
              <button type="submit" className="btn btn-primary">
                Sumbit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  

let RenderCampo = ({err, f, campo})=>{
    return (<><label htmlFor={campo.name}>{campo.name}:</label>
        <input
          className="form-control"
          type={campo.type}
          name={campo.name}
          placeholder={campo.placeholder}
          onChange={f}
          id={campo.id}
        />
        {err[campo.name] && <p>{err[campo.name]}</p>}</>);
}

export default Form;
