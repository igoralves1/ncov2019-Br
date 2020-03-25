

// const https = require('https');
// https.get('https://brasil.io/api/dataset/covid19/caso/data?format=json', (resp) => {
//   let data = '';

//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data));
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });


let myObject = {};

let fs = require('fs');
const x = fs.readFileSync('numi.csv', 'utf8');
//console.log(x);

x.toString().split("\n").forEach(function(line, index, arr) {
    if (index === arr.length - 1 && line === "") { return; }
    // console.log(index + " " + line);
    const lnArr = line.split(",");

    myObject[lnArr[3]]= {
        "nm_municip":lnArr[2],
        "lat":lnArr[4],
        "lon":lnArr[5].replace(/(\r\n|\n|\r)/gm, "")
    }
});

fs.writeFile("muni.json", JSON.stringify(myObject), function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  })
// console.log(myObject);