function analyzeCarMileage(cars) {
    const totalMiles = cars.reduce((sum, car)=> sum + car.mileage,0);
    const averageMiles = totalMiles / cars.length;
    const highestMileageCar = cars.reduce((high, car)=> (car.mileage > high.mileage ? car : high), cars[0]);
     const lowestMileageCar = cars.reduce((high, car)=> (car.mileage < high.mileage ? car : high), cars[0]);
     return{
        averageMileage: parseFloat(averageMiles.toFixed(2)),
        highestMileageCar,
        lowestMileageCar,
        totalMiles,
     };
}


const cars = [
  { make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800.22 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 32000.12 },
  { make: 'Chevrolet', model: 'Impala', year: 2021, mileage: 17500 },
  { make: 'Audi', model: 'R8', year: 2020, mileage: 13000 },
  { make: 'Tesla', model: 'Model 3', year: 2018, mileage: 50000 },
];

const result = analyzeCarMileage(cars);
console.log(result);
module.exports = analyzeCarMileage;
