var fs = require('fs')
var obj = {
    "first_name": "Anahit",
    "last_name": "Dzvakeryan",
    "age": 18,
    "tumo_student": true
}

var myJSON = JSON.stringify(obj);
fs.writeFileSync("obj.json",myJSON)