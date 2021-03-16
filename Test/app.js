var button = document.getElementById('newCar')
button.addEventListener("click", function(){newCar()})

var myCar = new Object()
myCar.brand = 'Toyota'
myCar.model = 'Supra'
myCar.year = 2019
myCar.color = 'black'

var myOtherCar = {
    brand: 'Toyota',
    model: 'Hilux',
    year: 2018,
    color: 'red'
}

var myCars = []
myCars.push(myCar)
myCars.push(myOtherCar)
console.log(myCars)

var colorArr = ['black', 'yellow', 'red', 'white', 'blue', 'gray']

var carsArr = {
    Toyota: ['Hilux', 'Supra', 'Yaris', 'Rav4', 'Corolla', 'Auris'],
    Ford: ['Mondeo', 'Focus', 'Mustang', 'Fiesta'],
    Tesla: ['S', 3, 'X', 'Y'],
    Opel: ['Escort', 'Vectra', 'Astra', 'Mocca', 'Insignia'],
    Volkswagen: ['Golf', 'Passat', 'id.3', 'tiguan', 'transporter']
}
//console.log(carsArr)
var yearArr = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021]

function newCar() {
    let myNewCar = new Object();
   
    var keys = Object.keys(carsArr);
    var randomBrand = keys[Math.floor(keys.length * Math.random())]
    var randomModel = carsArr[randomBrand]

    myNewCar.brand = randomBrand
    myNewCar.model = randomModel[Math.floor(randomBrand.length * Math.random())]
    myNewCar.year = yearArr[Math.floor(Math.random() * yearArr.length)];
    myNewCar.color = colorArr[Math.floor(Math.random() * colorArr.length)];
    
    console.log(myNewCar);

    //console.log(Object.keys(carsArr))
    //console.log(carsArr[randomBrand])
    //console.log(carsArr[randomBrand[Math.floor(randomBrand.length * Math.random())]])
}
