for (let i = 0; i < 5; i++) {
  let line = '';
  for (let j = 0; j < 5; j++) {
    if (i === 0 || i === 4 || j === 0 || j === 4) {
      line += '*';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}
