let fs = require('fs');
const x = fs.readFileSync('numi.csv', 'utf8');
//console.log(x);
let myObject = {};
x.toString().split("\n").forEach(function(line, index, arr) {
    if (index === arr.length - 1 && line === "") { return; }
    
    const lnArr = line.split(",");

    myObject[lnArr[3]]= {
        "nm_municip":lnArr[2],
        "cd_geocmu":lnArr[3],
        "lat":lnArr[4],
        "lon":lnArr[5].replace(/(\r\n|\n|\r)/gm, "")
    }
});

fs.writeFile("muniLatLong.json", JSON.stringify(myObject, null, 4), function (err) {
    if (err) return console.log(err);
    console.log('muniLatLong.json CREATED');
  })
// console.log(myObject);