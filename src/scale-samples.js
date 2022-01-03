document.body.innerHTML = `<h1>Hello from ${d3.version}</h1>`;

// Linear Scale
const linearScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 600])
    .clamp(true);

console.log(linearScale(-20)); // 0
console.log(linearScale(50)); // 300
console.log(linearScale(100)); // 600
console.log(linearScale(105)); // 600

console.log(linearScale.invert(300)); // 50

// Time scale
const timeScale = d3.scaleTime()
    .domain([new Date(2016, 0, 1), new Date(2017, 0, 1)])
    .range([0, 100]);

console.log(timeScale(new Date(2016, 4, 15)));
console.log(timeScale(new Date(2017, 0, 1)));
console.log(timeScale.invert(50));

// Quantize scale
const quantizeScale = d3.scaleQuantize()
    .domain([0, 100])
    .range(['red', 'green', 'blue']);

console.log(quantizeScale(10));
console.log(quantizeScale(40));
console.log(quantizeScale(80));
console.log(quantizeScale.invertExtent('green'));

// Ordinal scale

const ordinalScale = d3.scaleOrdinal()
    .domain(['poor', 'good', 'great'])
    .range(['red', 'green', 'blue']);

console.log(ordinalScale('good'));


