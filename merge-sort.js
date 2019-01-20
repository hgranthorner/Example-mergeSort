function mergeSort(arr) {
  // Type requirements: needs to be array of numbers
  if (!Array.isArray(arr)) {
    return 'please pass me an array'
  }
  if (!arr.every(val => typeof val == 'number') && arr.length > 0) {
    return 'please pass me an array of numbers'
  }
  if (arr.length <= 1) return arr
  let { left, right } = split(arr)
  return merge(mergeSort(left), mergeSort(right))
}

function split(arr) {
  let midpoint = Math.floor(arr.length / 2)
  let left = arr.slice(0, midpoint)
  let right = arr.slice(midpoint)
  return { left, right }
}

function merge(left, right) {
  const mergedArr = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) mergedArr.push(right.shift())
    else mergedArr.push(left.shift())
  }
  return mergedArr.concat(left).concat(right)
}

module.exports = {
  mergeSort,
  merge
}

mergeSort(5)
