/*
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

drawGift(4, '+')


   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####


// drawGift(5, '*')

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####


drawGift(1, '^')

#

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".


*/

function drawGift(size, symbol) {
  const endLines = []

  let box = ''
  box += ' '.repeat(size - 1)
  box += '#'.repeat(size)

  let lineTwo = ''

  if (size > 1) {
    box += '\n'
    endLines.push(box.trim())

    const sizeLineTwo = size - 2
    lineTwo =
      ' '.repeat(sizeLineTwo) +
      '#' +
      symbol.repeat(sizeLineTwo < 0 ? 0 : sizeLineTwo) +
      '##\n'
    box += lineTwo
  }

  if (size > 2) {
    endLines.push(lineTwo.trim())

    for (let i = 3; i < size; i++) {
      const longLine = size + i - 1
      const symbolAmount = i - 2
      let currentLine =
        ' '.repeat(size - i) +
        '#' +
        symbol.repeat(longLine - 3 - symbolAmount) +
        '#' +
        symbol.repeat(symbolAmount) +
        '#\n'
      box += currentLine
      endLines.push(currentLine.trim())
    }

    const middleLine = '#'.repeat(size) + symbol.repeat(size - 2) + '#\n'
    box += middleLine
  }

  return box + endLines.reverse().join('\n') + '\n'
}
console.log(drawGift(5, '*'))
