var data = [
	{
		discipline: "4x400m Relay",
		medals: { Women: 11, Men: 3, Mixed: 1}
	},
	{
		discipline: "400m",
		medals: { Women: 9, Men: 5, Mixed: 0}
	},
	{
		discipline: "800m",
		medals: { Women: 9, Men: 4, Mixed: 0}
	},
	{
		discipline: "Discus Throw",
		medals: { Women: 6, Men: 6, Mixed: 0}
	},
	{
		discipline: "1500m",
		medals: { Women: 7, Men: 3, Mixed: 0}
	},
	{
		discipline: "Shot Put",
		medals: { Women: 0, Men: 8, Mixed: 0}
	},
	{
		discipline: "5000m",
		medals: { Women: 5, Men: 1, Mixed: 0}
	},
	{
		discipline: "3000m Steelple-chase",
		medals: { Women: 3, Men: 3, Mixed: 0}
	},
	{
		discipline: "400m Hurdles",
		medals: { Women: 2, Men: 3, Mixed: 0}
	}
];

// Add a total value for each discipline
var gender = data.map(function(d) {
	var medals = d3.entries(d.medals);
	var total = d3.sum(medals, function(c){ return c.value; });
	return { discipline: d.discipline, medals, total };
});

// create a Y scale for the data
var scaleY = d3.scaleLinear()
	.range([0, 250])
	.domain([0, 15]);

// create a color scale for the data where Women is red
var scaleColor = d3.scaleOrdinal()
	.range(["#fd8d3c", "#fdd0a2", "#fee6ce"])
	.domain(["Women", "Men", "Mixed"]);

// Select the figure element
var stack = d3.select(".chart7-container");

// Add a div for each discipline
var group = stack.selectAll(".chart7-group")
	.data(gender)
	.enter()
	.append("div")
	.attr("class", "chart7-group");

// Add a discipline label
var label = group.append("p")
	.text(function(d){ return d.discipline})
	.attr("class", "chart7-label");

// Add a block for each social media type
var block = group.selectAll(".chart7-block")
	.data(function(d){ return d.medals })
	.enter()
	.append("div")
	.attr("class", "chart7-block")
	// And scale the height of the box based on the value
	.style("width", function(d){ return `${scaleY(d.value)}px` })
	.style("height", "20px")
	// Scale the color based on the social media type
	.style("background-color", function(d){ return scaleColor(d.key)});




var count = group.append("p")
	.text(function(d){ return (d.total)})
	.attr("class", "chart7-count");
