// https://github.com/reactjs/react-redux/blob/master/src/utils/shallowEqual.js
// the bulk of shallowEqual was taken from react-redux
// I bolted on line 8 for "shallow" array comparison

const hasOwn = Object.prototype.hasOwnProperty

function is(x, y) {
  if (x instanceof Array && y instanceof Array) {
      return x.length === y.length && x.every((v, i) => v === y[i]);
  }

  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    return x !== x && y !== y
  }
}

export default function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false
  }

  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
        !is(objA[keysA[i]], objB[keysA[i]])) {
      return false
    }
  }

  return true
}
