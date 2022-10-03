// var

// object => isinya key dan value
const biodata = {
  name: 'Argos',
  age: 9,
  hobbies: ['Main game', 'Mancing', 'dst'],
  isMarried: false,
  schoolList: [
    {
      name: 'SMa',
      yearIn: 2013,
      yearOut: 2016,
      major: 'IPA'
    },
    {
      name: 'UIN',
      yearIn: 2016,
      yearOut: 2019,
      major: 'Kedokteran'
    },
  ],
  skills: [
    {
      skillName: 'JavaScript',
      level: 'Beginner'
    }
  ],
  interestInCoding: true
}
const {isMarried, skills, interestInCoding} = biodata
// console.log(biodata.schoolList[1])

let nama = 'Raiden'
// nama = ''

let hasil = []
const string = `Hasil 5 + 5 adalah ${hasil}`
// console.log(typeof(string))
// console.log(Array.isArray(hasil))

console.log(biodata.schoolList.map((item) => item))