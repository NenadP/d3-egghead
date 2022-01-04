const margin = {
    top: 10,
    right: 20,
    bottom: 60,
    left: 40
}
const width = 425 - margin.left - margin.right;
const height = 625 - margin.top - margin.bottom;

let fullWidth = width + margin.left + margin.right;
let fullHeight = height + margin.top + margin.bottom;

const chart = d3.select('.chart')
    .append('svg')
        .attr('width', fullWidth)
        .attr('height', fullHeight)
       // .attr('viewBox', `0 0 ${fullWidth / 2} ${fullHeight / 2}`) // demoing viewBox
        .call(responsivefy)
    .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

const data = [
    { score: 63, subject: 'Mathematics' },
    { score: 82, subject: 'Geography' },
    { score: 74, subject: 'Spelling' },
    { score: 97, subject: 'Reading' },
    { score: 52, subject: 'Science' },
    { score: 74, subject: 'Chemistry' },
    { score: 97, subject: 'Physics' },
    { score: 52, subject: 'ASL' }
];

const yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

const yAxis = d3.axisLeft(yScale)
    .ticks(5);

const xScale = d3.scaleBand()
    .domain(data.map(d => d.subject))
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.5);

const xAxis = d3.axisBottom(xScale)
    .ticks(5)
    .tickSize(10)
    .tickPadding(5);

chart.call(yAxis)
    .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)
        .selectAll('text')
        .attr('transform', 'rotate(-45)')
        .style('text-anchor', 'end');

chart.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
        .attr('x', d => xScale(d.subject))
        .attr('y', d => yScale(d.score))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.score))
        .attr('fill', '#f5f5f5')
        .attr('stroke', '#333')
        .attr('stroke-width', '1px');

function responsivefy(svg) {
    // get container + svg aspect ratio
    var container = d3.select(svg.node().parentNode),
        width = parseInt(svg.style("width")),
        height = parseInt(svg.style("height")),
        aspect = width / height;

    // add viewBox and preserveAspectRatio properties,
    // and call resize so that svg resizes on inital page load
    svg.attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMinYMid")
        .call(resize);

    // to register multiple listeners for same event type,
    // you need to add namespace, i.e., 'click.foo'
    // necessary if you call invoke this function for multiple svgs
    // api docs: https://github.com/mbostock/d3/wiki/Selections#on
    d3.select(window).on("resize." + container.attr("id"), resize);

    // get width of container and resize svg to fit it
    function resize() {
        var targetWidth = parseInt(container.style("width"));
        svg.attr("width", targetWidth);
        svg.attr("height", Math.round(targetWidth / aspect));
    }
}
