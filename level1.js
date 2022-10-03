let named =  '30 Days Of JavaScript'
console.log(named)
console.log(named.length)

let newNamed = named.toUpperCase()
console.log(newNamed)

let lowNamed = named.toLowerCase()
console.log(lowNamed)

let subStrOrSubString = named.substring(3, 7)
console.log(subStrOrSubString)

let newSlice = named.slice(3,7)
console.log(newSlice)

let checkWord = named.includes('Script')
console.log(checkWord)

let splitWord = named.split()
console.log(splitWord)

let splitSpace = named.split("")
console.log(splitSpace)

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(' '))

let replaceName = named.replace('JavaScript', 'Python')
console.log(replaceName)

let checkIndex = named.charAt(15)
console.log(checkIndex)

let codeName = named.charCodeAt(11)
console.log(codeName)

let nameIndexOf = named.indexOf('a')
console.log(nameIndexOf)

let nameLastOf = named.lastIndexOf('a')
console.log(nameLastOf)

let newLastOf = 'You cannot end a sentence with because because because is a conjunction'

let findIndeOf = newLastOf.indexOf('because')
console.log(findIndeOf)

let findLastOfi = newLastOf.lastIndexOf('because')
console.log(findLastOfi)

let searchNewIndex = newLastOf.search('because')
console.log(searchNewIndex)