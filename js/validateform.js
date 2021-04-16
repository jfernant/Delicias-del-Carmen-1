
var validators = {
    "telefono": /^\+?\(?504\)?-?[1-9]\d{3}-?\d{4}$/,
    "correo": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    "isEmpty": /^[a-zA-ZÑÁÉÍÓÚáéíóú][a-zA-Zñáéíóú ]+$/,
    "doublespace":/\s{2,}/
  };
  var formInputs = {
    txtName: null,
    txtEmail: null,
    txtTel: null,
  };
  
  var formInputsErrors = {
    txtName: null,
    txtEmail: null,
    txtTel: null,
  };
  
  document.addEventListener("DOMContentLoaded", function(e){
    formInputs.txtName = document.getElementById("txtName");
    formInputsErrors.txtName = document.getElementById("txtNameError");
    formInputs.txtTel = document.getElementById("txtTel");
    formInputs.txtEmail = document.getElementById("txtEmail");
    document.getElementById("formContacto").addEventListener("submit", validateForm);
  });
  
  
  function validateForm(e){
    e.preventDefault();
    e.stopPropagation();
    var errors = [];
    if (!validators.isEmpty.test(formInputs.txtName.value)){
      errors.push("El Nombre solo debe contener caracteres de [a - z]");
    }
    if (validators.doublespace.test(formInputs.txtName.value)) {
      errors.push("No debe contener doble espacios entre valores");
    }
    if (!validators.telefono.test(formInputs.txtTel.value)){
      errors.push("Error en el formato del teléfono");
    }
    if (!validators.correo.test(formInputs.txtEmail.value)) {
      errors.push("El correo no tiene el formato adecuado.");
    }
    if(errors.length > 0){
      document.getElementById("error").innerHTML = errors.join("  |  ");
    } else {
      document.getElementById("error").innerHTML = errors.join("");
      document.getElementById("formContacto").submit();
    }
  }
