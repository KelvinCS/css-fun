for (let rowIndex = 0; rowIndex < 50; rowIndex++) {
  let row = document.createElement('div')
  row.classList.add('row')

  for (let columnIndex = 0; columnIndex < 25; columnIndex++) {
    let pixel = document.createElement('div')
    pixel.classList.add('pixel')
    pixel.id = `pixel${rowIndex}-${columnIndex}`

    row.appendChild(pixel)
  }

  document.body.appendChild(row)
}
