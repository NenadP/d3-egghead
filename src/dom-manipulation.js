// select
const link1 = d3.select('div');
const link2 = d3.select('a');
const link3 = d3.selectAll('a');

console.log(link1.nodes()); // [div.title]
console.log(link2.nodes()); // [a]
console.log(link3.nodes()); // [a, a, a, a.action]

const div = d3.select('div');
const divLinks = div.selectAll('a');
console.log(divLinks.nodes()); // [a, a, a]

console.log(d3.selectAll('div a').nodes()); // [a, a, a]

const actionLink = d3.select('.action');
console.log(actionLink.nodes()); // [a.action]

// update

const secondLink = d3.select('a:nth-child(2)');
secondLink.attr('href'); // getter
secondLink.attr('href', 'https://www.google.com'); // setter

d3.select('a:nth-child(2)')
    //.style('color', 'red')
    .classed('red', true)
    // .text('Inventory');
    .html('inventory <strong>SALE</strong>');

// create
d3.select('.title')
    //.append('button')
    .insert('button', 'a:nth-child(2)')
        .html('Add <b>Item</b>')
    .append('div')
        .style('display', 'block')
        .html('<p>New Item</p>');

// remove
d3.select('.action')
    .remove();
