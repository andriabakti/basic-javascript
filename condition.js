
// function getAverage() {
// }

// Expression
// const getAverage = function() {
// }

// Arrow Function

const getAverage = (mtk, bahasaIndo, bahasaInggris, ipa) => {
  // ternary operator
  mtk != null ? console.log('Nilai mtk harus diisi') : mtk
  mtk === null

  let grade
  const average = (mtk + bahasaIndo + bahasaInggris + ipa) / 4
  console.log('Rata-rata: ', average)
  if (average >= 90) {
    grade = 'A'
  } else if (average >= 80) {
    grade = 'B'
  } else if (average >= 70) {
    grade = 'C'
  } else if (average >= 60) {
    grade = 'D'
  } else {
    grade = 'E'
  }
  return grade
}

console.log('Grade: ', getAverage(null, 90, 89, 69))