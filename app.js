let btnEncriptar = document.getElementById("btnEncripta");
let btnDesencriptar = document.getElementById("btnDesencriptar");
let btnCopy = document.getElementById("btnCopy");
let msgOne = document.querySelector(".mensaje-one");
let msgTwo = document.querySelector(".mensaje-two");
let imgMuñeca = document.querySelector(".img-muñeca");
let textArea = document.getElementById("textoEncriptado");

function encriptar() {
  let texto = document.getElementById("textoDesencriptado").value.toLowerCase();

  var textoEncriptado = texto.replace(/e/gim, "enter");
  var textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
  var textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
  var textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");

  document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
  btnCopy.style.display = "block";
  msgOne.style.display = "none";
  msgTwo.style.display = "none";
  imgMuñeca.style.display = "none";
  textArea.style.display = "block";
  limpiar();
}

function desencriptar() {
  let texto = document.getElementById("textoDesencriptado").value.toLowerCase();

  var textoEncriptado = texto.replace(/enter/gim, "e");
  var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
  var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

  textArea.innerHTML = textoEncriptado;
  limpiar();
}

function limpiar() {
  document.getElementById("textoDesencriptado").value = "";
}

function copyTextEncriptado() {
  let contenido = document.getElementById("textoEncriptado");
  //primera forma de seleccioanr
  contenido.select();
  document.execCommand("copy");

  //segunda forma de seleccionar
  // navigator.clipboard.writeText(contenido.textContent);

  limpiar();
}
