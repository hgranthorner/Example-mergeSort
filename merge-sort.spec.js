const req = require('./merge-sort')
const mergeSort = req.mergeSort
const merge = req.merge
describe('function mergeSort', () => {
  it('exists', () => {
    expect(mergeSort).toBeTruthy()
  })

  it('returns an array', () => {
    let testArray = []

    expect(mergeSort(testArray)).toEqual([])
  })

  it('requires an array', () => {
    let testVal = 5
    expect(mergeSort(testVal)).toBe('please pass me an array')
  })

  it('requires an array of numbers', () => {
    let testArray = ['a', 'b']
    expect(mergeSort(testArray)).toBe('please pass me an array of numbers')
  })

  it('returns a sorted array of numbers', () => {
    expect(mergeSort([2, 1])).toEqual([1, 2])
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3])
    let testArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))

    expect(mergeSort(testArray)).toEqual(testArray.sort())
  })
})

describe('function merge', () => {
  it('is a function', () => {
    expect(typeof merge).toBe('function')
  })

  it('returns an array', () => {
    expect(Array.isArray(merge([1, 2], [4, 3]))).toBeTruthy()
  })

  it('merges and sorts two arrays, as long as those arrays are sorted', () => {
    expect(merge([3, 4], [2, 5])).toEqual([2, 3, 4, 5])
  })
})
