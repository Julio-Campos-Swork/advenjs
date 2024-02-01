/*


Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

 -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]

El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.

Los elfos se inspiraron en este reto de Code Wars.

*/


/*
function cyberReindeer(road, time) {
  // Code here
  let result = []
  let timePassed = 0
  let pos = 0
  let aux = '.'
  while (time > 0) {
    result.push(road)
    time--
    timePassed++
    if (timePassed >= 5) road = road.replace(/\|/gi, '*')
    if (road[pos + 1] === '.' || road[pos + 1] === '*') {
      road = road.split('')
      road[pos] = aux
      aux = road[pos + 1]
      road[pos + 1] = 'S'
      road = road.join('')
      pos++
    }
  }
  return result
}

*/

/*
const result = []
  let stepTime = 0
  let positionS = 0
  const roadLen = road.length
  road = road.replace('S', '.')
  for (; stepTime < time; stepTime++) {
    if (stepTime === 5) road = road.replaceAll('|', '*')
    const roadIndex = road[positionS]
    if (roadIndex !== '|' || stepTime > 4) positionS += 1
    const start = road.substring(0, positionS - 1)
    const end = road.substring(positionS, roadLen)
    result.push(start + 'S' + end)
  }
  return result
*/

function cyberReindeer(road, time) {
  // Code here
  let currentPosition = road.indexOf('S')
  let result = []
  for (let i = 0; i < time; i++) {
    result.push(road)

    if (i + 1 == 5) {
      road = road.replaceAll('|', '*')
    }
    if (road[currentPosition + 1] === '|') {
    } else {
      if (currentPosition + 1 === road.length) {
        break
      }

      if (road[currentPosition + 1] === '*') {
        road =
          road.substring(0, currentPosition) +
          road[currentPosition + 1] + '.' +
          '*' +
          road.substring(currentPosition + 2)
      }
      road =
        road.substring(0, currentPosition) +
        road[currentPosition + 1] +
        'S' +
        road.substring(currentPosition + 2)

        
      currentPosition++
    }
  }
  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

console.log(result)
