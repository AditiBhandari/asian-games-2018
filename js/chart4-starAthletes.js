// CHART 1
	var createChart = function(data, hist_class, label_text){
		// nest the data by medal
			var nest = d3.nest().key(function(d){return d.medal}).entries(data);
		// select the figure element
			var hist = d3.select(hist_class);
			var label = hist.append("p").attr("class", "chart4-label").text(label_text);
		// Add 3 groups one for each medal
			var group = hist.selectAll(".chart4-group").data(nest).enter().append("div").attr("class", "chart4-group");
			var total = data.length;
			hist.append("p").attr("class", "chart4-total").text(total);
		// in each group add the appropriate number of blocks
			group.selectAll(".chart4-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart4-block").append("div").attr("class", "chart4-medal");
	};

	usha = [{ medal: "Gold" },{ medal: "Gold" },{ medal: "Gold" },{ medal: "Gold" },{ medal: "Silver" },{ medal: "Silver" },{ medal: "Silver" },{ medal: "Silver" },{ medal: "Silver" },{ medal: "Silver" },{ medal: "Silver" }];
	createChart(usha, ".chart4-hist1", "P. T. Usha");

// CHART 2
	paes = [{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(paes, ".chart4-hist2", "Leander Paes");

// CHART 3
	rana = [{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" }];;
	createChart(rana, ".chart4-hist3", "Jaspal Rana");

// CHART 4
	mirza = [{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(mirza, ".chart4-hist4", "Sania Mirza");

// CHART 5
	bhupathi = [{ "medal": "Gold" },{ "medal": "Gold" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(bhupathi, ".chart4-hist5", "Mahesh Bhupathi");

// CHART 6
	tarapore = [{ "medal": "Gold" },{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(tarapore, ".chart4-hist6", "Farokh Tarapore");

// CHART 7
	ghosal = [{ "medal": "Gold" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(ghosal, ".chart4-hist7", "Saurav Ghosal");

// CHART 8
	kumar = [{ "medal": "Gold" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(kumar, ".chart4-hist8", "Vijay Kumar");

// CHART 9
	sandhu = [{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Bronze" }];
	createChart(sandhu, ".chart4-hist9", "Manavjit Singh Sandhu");

// CHART 10
	karthik = [{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(karthik, ".chart4-hist10", "Dipika Pallika Karthik");

// CHART 11
	narang = [{ "medal": "Silver" },{ "medal": "Silver" },{ "medal": "Bronze" },{ "medal": "Bronze" },{ "medal": "Bronze" }];
	createChart(narang, ".chart4-hist11", "Gagan Narang");

// STYLE THE MEDALS
	var styleBlock = d3.selectAll(".chart4-medal")
						  .style("background-color", function(d){
						  	var medalColor;
					   	    if (d.medal == "Gold") { medalColor = "#ffd700"; }
					   		else if (d.medal == "Silver") { medalColor = "#c0c0c0"; }
					   		else if (d.medal == "Bronze") { medalColor = "#c88857"; }
					   		return medalColor;
						  })
						  .style("border-color", function(d){
					   		var medalBorder;
					   		if (d.medal == "Gold") { medalBorder = "#b29600"; }
					   		else if (d.medal == "Silver") { medalBorder = "#868686"; }
					   		else if (d.medal == "Bronze") { medalBorder = "#8d440c"; }
					   		return medalBorder;
					   })
					   .style("color", function(d){
					   		var medalShadow;
					   		if (d.medal == "Gold") { medalShadow = "#b29600"; }
					   		else if (d.medal == "Silver") { medalShadow = "#868686"; }
					   		else if (d.medal == "Bronze") { medalShadow = "#8d440c"; }
					   		return medalShadow;
					   })
					   .append("span").attr("class", "chart4-span").text(function(d){
					   		var medalText;
					   		if (d.medal == "Gold") { medalText = 1; }
					   		else if (d.medal == "Silver") { medalText = 2; }
					   		else if (d.medal == "Bronze") { medalText = 3; }
					   		return medalText;});