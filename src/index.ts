/*
 * This is Man and Median
 *
 * @author  Lily
 * @version 1.0
 * @since   2022-09-28
 */

// get arguments
//
import { readFileSync } from 'fs'

/**
 *
 * 'Mean' is the "average" where you add up all the numbers
 * and then divide by the number of numbers.
 *
 * @param {Array<number>} intArray list of integers
 * @returns {number} total The average
 */
function Mean(intArray: number[]): number {
  let total = 0
  const arrayLength = intArray.length

  for (let i = 0; i < arrayLength; i++) {
    total += intArray[i]
  }

  return total / arrayLength
}

/**
 *
 * 'Median' is the middle number of a list of number.
 *
 * @param {Array<number>} intArray list of integers
 * @returns {number} median The average
 */
function Median(intArray: number[]): number {
  let median = 0

  const sortedArray = intArray.sort(function(a, b) {
    return a - b
  })

  const arrayLength = intArray.length

  if (arrayLength % 2 === 0) {
    median =
      (sortedArray[arrayLength / 2] + sortedArray[arrayLength / 2 - 1]) / 2
  } else {
    median = sortedArray[(arrayLength - 1) / 2]
  }

  return median
}

const filePath = './set3.txt'

const file = readFileSync(filePath, 'utf8')
const newArray = file.split(/\r?\n/)

// Removes the last element because it is always empty
newArray.pop()

// Converts every number in the array into a data type number
const numArray = []

for (let i = 0; i < newArray.length; i++) {
  numArray.push(Number(newArray[i]))
}

// Prints out all of the averages for Mean, Median and Mode.
const arrayCont = numArray.toString()
console.log(`[${arrayCont}]`)

console.log('\nCalculating stats...')
console.log(`Mean: ${String(Mean(numArray))}`)
console.log(`Median: ${String(Median(numArray))}`)

console.log('\nDone.')
