var data = [
	{
		year: "'82",
		medals: { Women: 9, Men:47, Mixed: 1 }
	},
	{
		year: "'86",
		medals: { Women: 9, Men:28, Mixed: 0  }
	},
	{
		year: "'90",
		medals: { Women: 9, Men:14, Mixed: 0 }
	},
	{
		year: "'94",
		medals: { Women: 8, Men:15, Mixed: 0 }  
	},
	{
		year: "'98",
		medals: { Women: 11, Men:23,  Mixed: 1 }  
	},
	{
		year: "'02",
		medals: { Women: 13, Men:21,  Mixed: 2 }
	},
	{
		year: "'06",
		medals: { Women: 17, Men:33,  Mixed: 2 }  
	},
	{
		year: "'10",
		medals: { Women: 20, Men:43,  Mixed: 2 }  
	},
	{
		year: "'14",
		medals: { Women: 27, Men:29,  Mixed: 1 }  
	},
	{
		year: "'18",
		medals: { Women: 27, Men:38,  Mixed: 4 }  
	}
];

// Add a total value for each year
var gender = data.map(function(d) {
	var medals = d3.entries(d.medals);
	var total = d3.sum(medals, function(c){ return c.value; });
	return { year: d.year, medals, total };
});

// create a Y scale for the data
var scaleY = d3.scaleLinear()
	.range([0, 250])
	.domain([0, 69]);

// create a color scale for the data where Women is red
var scaleColor = d3.scaleOrdinal()
	.range(["#fd8d3c", "#fdd0a2", "#fee6ce"])
	.domain(["Women", "Men", "Mixed"]);

// Select the figure element
var stack = d3.select(".chart3-container");

// Add a div for each year
var group = stack.selectAll(".chart3-group")
	.data(gender)
	.enter()
	.append("div")
	.attr("class", "chart3-group");

// Add a block for each social media type
var block = group.selectAll(".chart3-block")
	.data(function(d){ return d.medals })
	.enter()
	.append("div")
	.attr("class", "chart3-block")
	// And scale the height of the box based on the value
	.style("height", function(d){ return `${scaleY(d.value)}px` })
	// Scale the color based on the social media type
	.style("background-color", function(d){ return scaleColor(d.key)});

// Add a year label
var label = group.append("p")
	.text(function(d){ return d.year})
	.attr("class", "chart3-label");

// Add a total count label
// var count = group.append("p")
// 	.text(function(d){ return d3.format("0.2s")(d.total)})
// 	.attr("class", "count");




