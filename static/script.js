function submitForm() {
    var userInput = document.getElementById('myTextInput').value;
    alert('You entered: ' + userInput)
}

// const spawner = require('child_process').spawn;
// const data_to_pass_in = 'fart';

// console.log('Data sent to python: ' , data_to_pass_in);

// const python_process = spawner('python3', ['./main.py', JSON.stringify(data_to_pass_in)]);

// python_process.stdout.on('data', (data) => {
//     console.log('Data recieved from python script: ', data.toString());
// });

const { FlightRadar24API } = require("flightradarapi");
const frAPI = new FlightRadar24API();
let airportDetails = await frAPI.getAirportDetails("YUL");
console.log(airportDetails)