// CHART 1
	var createChart = function(data, hist_class, group_name, group_class, group_g, group_g_class, group_s, group_s_class, group_b, group_b_class, year, year_label){
		var nest = d3.nest().key(function(d){return d.medal}).entries(data);
		var hist = d3.select(hist_class);
		var group = hist.selectAll(group_class).data(nest).enter().append("div").attr("class", group_name);
		var nGold = data.filter(function(d) {return d.medal === "Gold" }).length;
		var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
		var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
		var nTotal = nGold + nSilver + nBronze;
		var groupType = d3.selectAll(group_class).attr("class", function(d){ var groupTypeClass; if (d.key == "Gold") { groupTypeClass = group_g; return groupTypeClass;} else if (d.key == "Silver") { groupTypeClass = group_s; return groupTypeClass; } else if (d.key == "Bronze") { groupTypeClass = group_b; return groupTypeClass; }});
		d3.select(group_g_class).append("p").attr("class", "chart2-count").text(nGold);
		d3.select(group_s_class).append("p").attr("class", "chart2-count").text(nSilver);
		d3.select(group_b_class).append("p").attr("class", "chart2-count").text(nBronze);
		group.selectAll(".chart2-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart2-block").style("background-color", function(d){ var medalColor; if (d.medal == "Gold") { medalColor = "#ffd700"; } else if (d.medal == "Silver") { medalColor = "#c0c0c0"; } else if (d.medal == "Bronze") { medalColor = "#c88857"; } return medalColor;}).style("border", function(d){var medalBorder; if (d.medal == "Gold") { medalBorder = "1px solid #b29600"; } else if (d.medal == "Silver") { medalBorder = "1px solid #868686"; } else if (d.medal == "Bronze") { medalBorder = "1px solid #8d440c"; } return medalBorder;});
		var yearLabel = d3.select(year_label).append("p").attr("class", "chart2-year").text(year);
		var totalLabel = yearLabel.append("p").attr("class", "chart2-total").text(nTotal + " medals");
	}

	d3.json("data/chart2/data82.json", function(data82){
		createChart(data82, ".chart2-hist1", "chart2-group1", ".chart2-group1", "chart2-groupGold1", ".chart2-groupGold1", "chart2-groupSilver1", ".chart2-groupSilver1", "chart2-groupBronze1", ".chart2-groupBronze1", "1982", ".chart2-div1")
	});

// CHART 2
	d3.json("data/chart2/data86.json", function(data86){
		createChart(data86, ".chart2-hist2", "chart2-group2", ".chart2-group2", "chart2-groupGold2", ".chart2-groupGold2", "chart2-groupSilver2", ".chart2-groupSilver2", "chart2-groupBronze2", ".chart2-groupBronze2", "1986", ".chart2-div2")
	});

// CHART 3
	d3.json("data/chart2/data90.json", function(data90){
		createChart(data90, ".chart2-hist3", "chart2-group3", ".chart2-group3", "chart2-groupGold3", ".chart2-groupGold3", "chart2-groupSilver3", ".chart2-groupSilver3", "chart2-groupBronze3", ".chart2-groupBronze3", "1990", ".chart2-div3")
	});

// CHART 4
	d3.json("data/chart2/data94.json", function(data94){
		createChart(data94, ".chart2-hist4", "chart2-group4", ".chart2-group4", "chart2-groupGold4", ".chart2-groupGold4", "chart2-groupSilver4", ".chart2-groupSilver4", "chart2-groupBronze4", ".chart2-groupBronze4", "1994", ".chart2-div4")
	});

// CHART 5
	d3.json("data/chart2/data98.json", function(data98){
		var chart98 = createChart(data98, ".chart2-hist5", "chart2-group5", ".chart2-group5", "chart2-groupGold5", ".chart2-groupGold5", "chart2-groupSilver5", ".chart2-groupSilver5", "chart2-groupBronze5", ".chart2-groupBronze5", "1998", ".chart2-div5")
	});

// CHART 6
	d3.json("data/chart2/data02.json", function(data02){
		createChart(data02, ".chart2-hist6", "chart2-group6", ".chart2-group6", "chart2-groupGold6", ".chart2-groupGold6", "chart2-groupSilver6", ".chart2-groupSilver6", "chart2-groupBronze6", ".chart2-groupBronze6", "2002", ".chart2-div6")
	});

// CHART 7
	d3.json("data/chart2/data06.json", function(data06){
		createChart(data06, ".chart2-hist7", "chart2-group7", ".chart2-group7", "chart2-groupGold7", ".chart2-groupGold7", "chart2-groupSilver7", ".chart2-groupSilver7", "chart2-groupBronze7", ".chart2-groupBronze7", "2006", ".chart2-div7")
	});

// CHART 8
	d3.json("data/chart2/data10.json", function(data10){
		createChart(data10, ".chart2-hist8", "chart2-group8", ".chart2-group8", "chart2-groupGold8", ".chart2-groupGold8", "chart2-groupSilver8", ".chart2-groupSilver8", "chart2-groupBronze8", ".chart2-groupBronze8", "2010", ".chart2-div8")
	});

// CHART 9
	d3.json("data/chart2/data14.json", function(data14){
		createChart(data14, ".chart2-hist9", "chart2-group9", ".chart2-group9", "chart2-groupGold9", ".chart2-groupGold9", "chart2-groupSilver9", ".chart2-groupSilver9", "chart2-groupBronze9", ".chart2-groupBronze9", "2014", ".chart2-div9")
	});

// CHART 10
	d3.json("data/chart2/data18.json", function(data18){
		createChart(data18, ".chart2-hist10", "chart2-group10", ".chart2-group10", "chart2-groupGold10", ".chart2-groupGold10", "chart2-groupSilver10", ".chart2-groupSilver10", "chart2-groupBronze10", ".chart2-groupBronze10", "2018", ".chart2-div10")
	});