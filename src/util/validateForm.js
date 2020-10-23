export default function validateForm(values) {

    const errors = {};
    for (const prop in values) {
      if (prop.toLocaleLowerCase() === "nombre" && values[prop].length === 0) {
        errors["Nombre"] = "Por favor ingresa un nombre";
      }
      if (prop.toLocaleLowerCase() === "heladofavorito" && values[prop].length === 0) {
        errors["HeladoFavorito"] = "Por favor ingresa tu helado favorito";
      }
      if (prop.toLocaleLowerCase() === "correo" && values[prop].length === 0) {
        errors["Correo"] = "Por favor ingresa un correo";
      }
      if (prop.toLocaleLowerCase() === "generomusical" && values[prop].length === 0) {
        errors["GeneroMusical"] = "Por favor ingresa un género musical";
      }
    }
  
    return errors;
}  