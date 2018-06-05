const fs = require('fs');


console.log('Start naive');
fs.readFile('message.txt', (error, data) =>{
    console.log(data.toString());
})
console.log('Stop naive');
