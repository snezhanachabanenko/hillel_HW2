function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += symbol;
    }
    console.log(row);
  }
}

function drawTriangle(height, symbol) {
  for (let i = 1; i <= height; i++) {
    const row = symbol.repeat(i);
    console.log(row);
  }
}