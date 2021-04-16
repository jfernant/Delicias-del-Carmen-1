function validar() {
    var inpObj = document.getElementById("txtExc");
    if (!inpObj.checkValidity()) {
      document.getElementById("error").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("error").innerHTML = "";
    } 
  } 