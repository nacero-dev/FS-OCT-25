// const fs = require('fs');

// const writeCSV = (path, data) => {
//     const headers = Object.keys(data[0]);
//     const rows = data.map(obj => headers.map(header => obj[header]).join(','));

//     const csvContent = [headers.join(','), ...rows].join('\n');
//     fs.writeFileSync("data/" + path + ".csv", csvContent, 'utf8');
// };

// const readCSV = (path) => {
//     const data = fs.readFileSync("data/" + path + ".csv", 'utf8');
//     const [headers, ...rows] = data.split('\n').map(row => row.split(','));

//     return rows.map(row =>
//         row.reduce((obj, value, index) => {
//             obj[headers[index]] = value;
//             return obj;
//         }, {})
//     );
// };

// module.exports = { writeCSV, readCSV };


const fs = require('fs');

const readCSV = (name) => {
  const filePath = `data/${name}.csv`;

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf8').trim();
  if (!content) return [];

  const [headerLine, ...rows] = content.split('\n');
  const headers = headerLine.split(',');

  return rows
    .filter((row) => row.trim() !== '')
    .map((row) => {
      const values = row.split(',');
      const obj = {};
      headers.forEach((header, index) => {
        obj[header] = values[index];
      });
      return obj;
    });
};

const writeCSV = (name, data) => {
  if (!Array.isArray(data) || data.length === 0) {
    fs.writeFileSync(`data/${name}.csv`, '', 'utf8');
    return;
  }

  const headers = Object.keys(data[0]);
  const rows = data.map((obj) =>
    headers.map((header) => obj[header] ?? '').join(',')
  );

  const csvContent = [headers.join(','), ...rows].join('\n');
  fs.writeFileSync(`data/${name}.csv`, csvContent, 'utf8');
};

module.exports = { readCSV, writeCSV };
