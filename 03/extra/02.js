const clc = require('cli-color');

function logSuccess(msg) {
  console.log(clc.green(`✔ SUCCESS: ${msg}`));
}

function logWarning(msg) {
  console.log(clc.yellow(`⚠ WARNING: ${msg}`));
}

function logError(msg) {
  console.log(clc.red(`✖ ERROR: ${msg}`));
}

logSuccess('La operación se completó correctamente');
logWarning('Este valor es inesperado, pero se maneja');
logError('Ha ocurrido un problema crítico');