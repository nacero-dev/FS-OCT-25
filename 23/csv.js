// 3.2 mini capa de acceso a datos generica, basada en ficheros CSV

const fs = require('fs');

const writeCSV = (path, data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]).join(',')); /* @ profundizar mas sintaxis este map*/

    const csvContent = [headers.join(','), ...rows].join('\n');
    fs.writeFileSync("data/" + path + ".csv", csvContent, 'utf8');
};

/*

path → nombre base ("persons" → data/persons.csv)
Usa las claves del primer objeto como cabecera. const headers = Object.keys(data[0]);
Genera cada fila uniendo valores por , const rows = data.map(obj => headers.map(header => obj[header]).join(','));
Escribe todo al archivo.

*/


const readCSV = (path) => {
    const data = fs.readFileSync("data/" + path + ".csv", 'utf8');
    const [headers, ...rows] = data.split('\n').map(row => row.split(',')); /* @ profundizar mas sintaxis este map*/

    return rows.map(row =>
        row.reduce((obj, value, index) => {
            obj[headers[index]] = value;
            return obj;
        }, {})
    ); /* profundizar */
};

/*

Lee el archivo completo. const data = fs.readFileSync("data/" + path + ".csv", 'utf8');
Primera línea → headers. const [headers, ...rows] = data.split('\n').map(row => row.split(','));
Resto → rows.
Cada fila se convierte en objeto { header0: valor0, header1: valor1, ... }.
Importante: todo lo que sale de aquí son strings: luego se decide si se transformas.


Del cliente al servidor:
El cliente convierte el objeto en string JSON (JSON.stringify), Express lo reconvierte a objeto (express.json).

Del servidor al cliente:
Express convierte el objeto en string JSON (res.json), el navegador lo reconvierte a objeto (response.json).

*/


module.exports = { writeCSV, readCSV };
