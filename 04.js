/*En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus
Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.


*/

// function decode(message) {
//   // Code here
//   let reverse = []
//   let newMessage = message.split('')
//   const firstIndex = newMessage.indexOf('(')
//   const lastIndex = newMessage.lastIndexOf(')')
//   for (let i = firstIndex; i <= lastIndex; i++) {
//     if (newMessage[i] !== '(' && newMessage[i] !== ')') {
//       reverse.push(newMessage[i])
//     }
//   }
//   reverse = reverse.reverse().join('')
//   newMessage.splice(firstIndex, lastIndex, reverse).join('')

//   return newMessage
// }

function decode(message) {
  let stack = []
  let result = []

  for (let i = 0; i < message.length; i++) {
    if (message[i] === '(') {
      stack.push(result)
      result = ''
    } else if (message[i] === ')') {
      let previous = stack.pop()
      result = previous + result.split('').reverse().join('')
    } else {
      result += message[i]
    }
  }

  return result
}
const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus
