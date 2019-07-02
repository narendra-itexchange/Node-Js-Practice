fs = require('fs')
const validator = require('validator')
const add = require('./utils')
console.log(add('Narendra',4))
fs.writeFileSync('message.txt', 'Hi Andu  ');

console.log(validator.isEmail('abc@gmailm'))