const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];
const car = carMakers[0];
const myCar = carMakers.pop();
// carMakers.push(100);
carMakers.map((car) => {
    return car.toUpperCase();
});
const importantDates = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
