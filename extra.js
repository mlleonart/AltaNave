            // Función para leer texto en voz alta
function leerTexto(texto) {
  const speech = new SpeechSynthesisUtterance(texto);
  speech.lang = 'es-ES'; // Idioma: Español
  speech.rate = 1; // Velocidad de lectura
  window.speechSynthesis.speak(speech);
}

function leerTextoId(id) {
  const elemento = document.getElementById(id);
  if (elemento) {
    const texto = elemento.textContent || elemento.innerText;
    const speech = new SpeechSynthesisUtterance(texto);
    speech.lang = 'es-ES'; // Español
    speech.rate = 1; // Velocidad de lectura
    window.speechSynthesis.speak(speech);
  } else {
    console.error(`Elemento con ID "${id}" no encontrado.`);
  }
}


 // THUMBS -- Función para generar la URL de la miniatura a partir de la URL principal
  const getThumbUrl = (largeImage, size = 640) => {
    const commonsIndex = largeImage.indexOf('/commons/') + 9;
    const beforeCommons = largeImage.slice(0, commonsIndex);
    const afterCommons = largeImage.slice(commonsIndex);
    const fileNameIndex = afterCommons.lastIndexOf('/') + 1;
    const pathToFile = afterCommons.slice(0, fileNameIndex);
    const fileName = afterCommons.slice(fileNameIndex);
    return `${beforeCommons}thumb/${pathToFile}${fileName}/${size}px-${fileName}`;
  };
