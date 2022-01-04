d3.json('/data/data.json',function (data) {
    console.log(data);
});
d3.csv('/data/data.csv',function (data) {
    console.log(data);
});
d3.tsv('/data/data.tsv',function (data) {
    console.log(data);
});

// min age
d3.json('/data/data.json',function (data) {
    const min = d3.min(data, function (d) {
        return d.age;
    });
    console.log(min); // 13
});

// max age
d3.json('/data/data.json',function (data) {
    const max = d3.max(data, function (d) {
        return d.age;
    });
    console.log(max); // 38
});

// min and max age
d3.json('/data/data.json',function (data) {
    const extent = d3.extent(data, function (d) {
        return d.age;
    });
    console.log(extent); // [13, 38]

    var scale = d3.scaleLinear()
        .domain(extent)
        .range([0,600]);

    console.log(scale(13)); // 0
    console.log(scale(38)); // 600

    var ages = d3.set(data, function (d) {
        return d.age;
    });
    console.log(ages.values()); // ['23', '38', '13', '37']
});
