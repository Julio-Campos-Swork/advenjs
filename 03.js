/*
En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''


A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía
*/

// function findNaughtyStep(original, modified) {
//   // Code here
//   if (original == '') return ''
//   if (original.length == modified.length) return ''

//   let indexSize = 0
//   if (original.length > modified.length) {
//     indexSize = original.length
//   } else {
//     indexSize = modified.length
//   }
//   let found = ''
//   const splitOriginal = original.split('')
//   const splitModified = modified.split('')
//   for (let i = 0; i < indexSize; i++) {
//     if (splitOriginal[i] != splitModified[i]) {
//       if (splitOriginal.length > splitModified.length) found = splitOriginal[i]
//       else found = splitModified[i]
//       break
//     }
//   }

//   return found
// }

// const original = 'stepfor'
// const modified = 'stepor'
// console.log(findNaughtyStep(original, modified))

function findNaughtyStep(original, modified) {
  if (original.length === modified.length) return ''

  const minLength = Math.min(original.length, modified.length)

  for (let i = 0; i < minLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i]
    }
  }

  return original.length > modified.length
    ? original[minLength]
    : modified[minLength]
}

const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified))
