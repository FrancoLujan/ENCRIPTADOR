// obtener texto
const encriptar = document.querySelector(".boton_encriptado");
const desincriptador = document.querySelector(".boton_desincriptado");
const rect_text = document.querySelector(".mensaje");
const rectangulo = document.querySelector(".rectangulo");

encriptar.onclick = function () {
  let texto_crudo = document.querySelector("#texto").value;
  if (texto_crudo !== "") {
    let texto_encriptado = encrip(texto_crudo);
    rect_text.innerHTML = texto_encriptado;
    rect_text.style.top = 0;
    rect_text.style.color = "rgb(81, 85, 89)";
    rectangulo.style.background = "none";
    rectangulo.style.background = "rgb(255,255,255)";
  }
};

desincriptador.onclick = function () {
  let texto_crudo = document.querySelector("#texto").value;
  if (texto_crudo !== "") {
    let texto_desincriptado = descrip(texto_crudo);
    rect_text.innerHTML = texto_desincriptado;
    rect_text.style.top = 0;
    rect_text.style.color = "rgb(81, 85, 89)";
    rectangulo.style.background = "none";
    rectangulo.style.background = "rgb(255,255,255)";
  }
};





/**comienzo de encriptado
 * Las "llaves" de encriptación que utilizaremos son las siguientes:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
 */

function encrip(txt_c) {
  let text = txt_c;
  text = text.replace(/a/g, "ai");
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");

  return text;
}

function descrip(txt_c) {
  let text = txt_c;
  text = text.replace(/ai/g, "a");
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");
  text = text.replace(/mes/g, "");

  return text;
}
