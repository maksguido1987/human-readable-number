module.exports = function toReadable (number) {
    number = number.toString()

  const numBase = {
    "0" : "zero",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
  }
  const numBase2 = {
    "11" : "eleven",
    "12" : "twelve",
    "13" : "thirteen",
    "14" : "fourteen",
    "15" : "fifteen",
    "16" : "sixteen",
    "17" : "seventeen",
    "18" : "eighteen",
    "19" : "nineteen",
  }
  const numBase3 = {
    "10" : "ten",
    "20" : "twenty",
    "30" : "thirty",
    "40" : "forty",
    "50" : "fifty",
    "60" : "sixty",
    "70" : "seventy",
    "80" : "eighty",
    "90" : "ninety",
  }


  if (number < 10) {
    return numBase[number]; // до 10ти
  }
  else if (number.length == 2 && number[1] == 0) {
    return numBase3[number] // 10 20 30 40 ...
  }
  else if (number > 10 && number < 20) {
    return numBase2[number] // 11-19
  }
  else if (number > 20 && number.length == 2) {
    return numBase3[number[0] + '0'] + " " + numBase[number[1]] // 21 - 29 ....
  }
  else if (number.length == 3 && number[1] + number[2] == "00") {
    return numBase[number[0]] + ' hundred' // 100, 200, 300 ......
  }
  else if (number.length == 3 && number[1] == "0" && number[2] > 0) {
    return numBase[number[0]] + ' hundred ' + numBase[number[2]] // 101, 102, 103 ...
  }
  else if (number.length == 3 && number[1] > "0" && number[2] == "0") {
    return numBase[number[0]] + " hundred " + numBase3[number[1] + number[2]] // 110, 120, 130 ....
  }
  else if (number.length == 3 && number[1] > 1 && number[1] <= 9) {
    return numBase[number[0]] + ' hundred ' + numBase3[number[1] + '0'] + ' ' + numBase[number[2]]
  }
  else if (number.length == 3 && number[1] == 1 && number[1] <= 9) {
    return numBase[number[0]] + ' hundred ' + numBase2[number[1] + number[2]]
  }
}
