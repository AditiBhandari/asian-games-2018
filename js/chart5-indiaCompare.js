var china = [{"gold":1487,"silver":1020,"bronze":758,"total":3265}];
var japan = [{"gold":1032,"silver":1036,"bronze":986,"total":3054}];
var southKorea = [{"gold":746,"silver":660,"bronze":827,"total":2233}];
var india = [{"gold":152,"silver":201,"bronze":312,"total":665}];

var waffleChart = function(data, country_id, rank, country_name, ){
	var gold = data.gold;
	var silver = data.silver;
	var bronze = data.bronze;
	var silverAndGold = data.gold + data.silver;
	var total = data.total;

	var waffle = d3.select(country_id);
		waffle.append("p").attr("class", "chart5-rank").text(rank);
		waffle.append("p").attr("class", "chart5-label").text(country_name);
		waffle.append("p").attr("class", "chart5-total").text(d3.format(",")(total) + " medals");

	var meta = waffle.append("div").attr("class", "chart5-meta");
	var goldMedal = meta.append("div").attr("class", "chart5-meta-gold");
		goldMedal.append("span").attr("class", "chart5-gold-span").append("span").text("1");
		goldMedal.append("p").attr("class", "chart5-value").text(d3.format(",")(gold));

	var silverMedal = meta.append("div").attr("class", "chart5-meta-silver");
		silverMedal.append("span").attr("class", "chart5-silver-span").append("span").text("2");
		silverMedal.append("p").attr("class", "chart5-value").text(d3.format(",")(silver));

	var bronzeMedal = meta.append("div").attr("class", "chart5-meta-bronze");
		bronzeMedal.append("span").attr("class", "chart5-bronze-span").append("span").text("3");
		bronzeMedal.append("p").attr("class", "chart5-value").text(bronze);

	var numbers = d3.range(total);

	var build = waffle.selectAll(".chart5-medal").data(numbers).enter().append("div").attr("class", "chart5-medal")
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
	   		if (d >= 0 && d <= gold) { medalBorder = "0.5px solid rgba(178, 150, 0, 0.5)"; }
	   		else if (d >= d3.sum(gold+1) && d <= silverAndGold) { medalBorder = "0.5px solid rgba(134, 134, 134, 0.5)"; }
	   		else if (d >= d3.sum(silverAndGold+1) && d <= total) { medalBorder = "0.5px solid rgba(141, 68, 12, 0.5)"; }
	   		return medalBorder;
	     });
};

waffleChart(china, "#chart5-china", "Rank 1", "China");
waffleChart(japan, "#chart5-japan", "Rank 2", "Japan");
waffleChart(southKorea, "#chart5-southKorea", "Rank 3", "South Korea");
waffleChart(india, "#chart5-india", "Rank 4", "India");