const https = require('https');
let fs = require('fs');

let coviData
let muniObject = {}

let url = "https://brasil.io/api/dataset/covid19/caso/data?format=json";
https.get(url,(res) => {
    let body = "";
    res.on("data", (chunk) => {
        body += chunk;
    });
    res.on("end", () => {
        try {
            let jsonVar = JSON.parse(body);
            coviData = JSON.parse(body);
            // console.log(jsonVar)
            // console.log(coviData)

            // ===================
            const x = fs.readFileSync('numi.csv', 'utf8');
            
            x.toString().split("\n").forEach(function(line, index, arr) {
                if (index === arr.length - 1 && line === "") { return; }
                
                const lnArr = line.split(",");
            
                muniObject[lnArr[3]]= {
                    "nm_municip":lnArr[2],
                    "cd_geocmu":lnArr[3],
                    "lat":lnArr[4],
                    "lon":lnArr[5].replace(/(\r\n|\n|\r)/gm, "")
                }
            });
            
            // console.log(typeof(muniObject['5300108']));
            console.log(typeof(muniObject));
            console.log(typeof(coviData));

            // fs.writeFile("muniLatLong.json", JSON.stringify(muniObject, null, 4), function (err) {
            //     if (err) return console.log(err);
            //     console.log('muniLatLong.json CREATED');
            //   })
            // console.log(myObject);
            // ===================  

        } catch (error) {
            console.error(error.message);
        };
    });
}).on("error", (error) => {
    console.error(error.message);
});
