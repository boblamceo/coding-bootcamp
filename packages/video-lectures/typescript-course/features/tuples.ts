const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = [ 'brown', true, 40 ];
const sprite: Drink = [ 'clear', true, 40 ];
const tea: Drink = [ 'brown', true, 0 ];

const carSpecs: [number, number] = [ 400, 3354 ];

const carStats = {
    horsepower: 400,
    weight: 3354,
};
