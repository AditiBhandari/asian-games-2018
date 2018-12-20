var data = [
	{"country":"India","gold":91,"silver":128,"bronze":235,"total":454}
];

var dataLength = data.length;

var gold = data[0].gold;
var silver = data[0].silver;
var bronze = data[0].bronze;
var silverAndGold = data[0].gold + data[0].silver;
var total = data[0].total;

var numbers = d3.range(total);

var buildIndia = d3.select(".chart1-allMedals").selectAll(".chart1-medal")
							.data(numbers).enter().append("div").attr("class", "chart1-medal")
							.style("background-color", function(d){
								var medalColor;
								if (d >= 0 && d <= gold) { medalColor = "#ffd700"; }
								else if (d >= d3.sum(gold+1) && d <= silverAndGold) { medalColor = "#c0c0c0"; }
								else if (d >= d3.sum(silverAndGold+1) && d <= total) { medalColor = "#c88857"; }
								else {return "white"}
								return medalColor;
							})
						   .style("border", function(d){
						   		var medalBorder;
						   		if (d >= 0 && d <= gold) { medalBorder = "1px solid #b29600"; }
						   		else if (d >= d3.sum(gold+1) && d <= silverAndGold) { medalBorder = "1px solid #868686"; }
						   		else if (d >= d3.sum(silverAndGold+1) && d <= total) { medalBorder = "1px solid #8d440c"; }
						   		return medalBorder;
						   })
						   .style("color", function(d){
						   		var medalShadow;
						   		if (d >= 0 && d <= gold) { medalShadow = "#b29600"; }
						   		else if (d >= d3.sum(gold+1) && d <= silverAndGold) { medalShadow = "#868686"; }
						   		else if (d >= d3.sum(silverAndGold+1) && d <= total) { medalShadow = "#8d440c"; }
						   		return medalShadow;
						   })
						   .text(function(d){
						   		var medalText;
						   		if (d >= 0 && d <= gold) { medalText = 1; }
						   		else if (d >= d3.sum(gold+1)) { medalText = 2; }
						   		else if (d >= d3.sum(silverAndGold+1) && d <= total) { medalText = 3; }
						   		return medalText;}
						   		);