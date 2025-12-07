const fs = require('fs');

const writeCSV = (path, data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(obj => headers.map(header => obj[header]).join(','));

    const csvContent = [headers.join(','), ...rows].join('\n');
    fs.writeFileSync("data/" + path + ".csv", csvContent, 'utf8');
};

/*

writeCSV(path, data):
toma las claves del primer objeto como cabeceras
genera filas con .join(',')
escribe el archivo completo de nuevo.

*/

const readCSV = (path) => {
    const data = fs.readFileSync("data/" + path + ".csv", 'utf8');
    const [headers, ...rows] = data.split('\n').map(row => row.split(','));

    return rows.map(row =>
        row.reduce((obj, value, index) => {
            obj[headers[index]] = value;
            return obj;
        }, {})
    );
};

/*

readCSV(path):
abre "data/" + path + ".csv"
separa cabeceras y filas
devuelve un array de objetos { columna1: valor1, columna2: valor2, ... }

*/


module.exports = { writeCSV, readCSV };
