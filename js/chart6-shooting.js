var buildColumn = function(data, hist_number, group_number_div, group_number_name, groupGold, groupSilver, groupBronze, chart_div){
	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(hist_number);
	var group = hist.selectAll(group_number_div).data(nest).enter().append("div").attr("class", group_number_name);
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;	
	d3.select(groupGold).append("p").attr("class", "chart6-count").text(nGold);
	d3.select(groupSilver).append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(groupBronze).append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(chart_div).append("p").attr("class", "chart6-year").text("'86");
	var totalLabel = d3.select(hist_number).append("p").attr("class", "chart6-total").text(nTotal);
};

// CHART 1
	var data82 = [
		{ name: "Randhir Singh", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Silver" },
		{ name: "Sharad Chauhan", medal: "Silver" }
	];

	buildColumn(data82, ".chart6-hist1", ".chart6-group1", "chart6-group1", ".chart6-groupGold1", ".chart6-groupSilver1", ".chart6-groupBronze1", ".chart6-div1");

// CHART 2
	var data86 = [
		{ name: "Soma Dutta", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Soma Dutta", medal: "Silver" }
	];

	buildColumn(data86, ".chart6-hist2", ".chart6-group2", "chart6-group2", ".chart6-groupGold2", ".chart6-groupSilver2", ".chart6-groupBronze2", ".chart6-div2");

// CHART 3
	var data90 = [{ name: "Soma Dutta", medal: "Bronze" }];

	buildColumn(data90, ".chart6-hist3", ".chart6-group3", "chart6-group3", ".chart6-groupGold3", ".chart6-groupSilver3", ".chart6-groupBronze3", ".chart6-div3");

// CHART 4
	var data94 = [
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Jaspal Rana", medal: "Gold" }
	];

	buildColumn(data94, ".chart6-hist4", ".chart6-group4", "chart6-group4", ".chart6-groupGold4", ".chart6-groupSilver4", ".chart6-groupBronze4", ".chart6-div4");

// CHART 5
	var data98 = [
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Jaspal Rana", medal: "Silver" },
		{ name: "Men's Shooting Team", medal: "Silver" }
	];

	buildColumn(data98, ".chart6-hist5", ".chart6-group5", "chart6-group5", ".chart6-groupGold5", ".chart6-groupSilver5", ".chart6-groupBronze5", ".chart6-div5");

// CHART 6
	var data02 = [
		{ name: "Men's Shooting Team", medal: "Silver" },
		{ name: "Women's Shooting Team", medal: "Silver" }
	];
	
	buildColumn(data02, ".chart6-hist6", ".chart6-group6", "chart6-group6", ".chart6-groupGold6", ".chart6-groupSilver6", ".chart6-groupBronze6", ".chart6-div6");

// CHART 7
	var data06 = [
		{ name: "Gagan Narang", medal: "Bronze" },
		{ name: "Mixed Shooting Team", medal: "Bronze" },
		{ name: "Mixed Shooting Team", medal: "Bronze" },
		{ name: "Rajyavardhan Singh Rathore", medal: "Bronze" },
		{ name: "Vijay Kumar", medal: "Bronze" },
		{ name: "Women's Shooting Team", medal: "Bronze" },
		{ name: "Manavjit Singh Sandhu", medal: "Silver" },
		{ name: "Mixed Shooting Team", medal: "Silver" },
		{ name: "Mixed Shooting Team", medal: "Silver" },
		{ name: "Mixed Shooting Team", medal: "Silver" },
		{ name: "Women's Shooting Team", medal: "Silver" },
		{ name: "Jaspal Rana", medal: "Gold" },
		{ name: "Jaspal Rana", medal: "Gold" },
		{ name: "Mixed Shooting Team", medal: "Gold" }
	];

	buildColumn(data06, ".chart6-hist7", ".chart6-group7", "chart6-group7", ".chart6-groupGold7", ".chart6-groupSilver7", ".chart6-groupBronze7", ".chart6-div7");

// CHART 8
	var data10 = [
		{ name: "Mixed Shooting Team", medal: "Bronze" },
		{ name: "Mixed Shooting Team", medal: "Bronze" },
		{ name: "Vijay Kumar", medal: "Bronze" },
		{ name: "Vijay Kumar", medal: "Bronze" },
		{ name: "Gagan Narang", medal: "Silver" },
		{ name: "Mixed Shooting Team", medal: "Silver" },
		{ name: "Women's Shooting Team", medal: "Silver" },
		{ name: "Ronjan Sodhi", medal: "Gold" }
	];

	buildColumn(data10, ".chart6-hist8", ".chart6-group8", "chart6-group8", ".chart6-groupGold8", ".chart6-groupSilver8", ".chart6-groupBronze8", ".chart6-div8");

// CHART 9
	var data14 = [
		{ name: "Abhinav Bindra", medal: "Bronze" },
		{ name: "Chain Singh", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Shweta Chaudhary", medal: "Bronze" },
		{ name: "Women's Shooting Team", medal: "Bronze" },
		{ name: "Women's Shooting Team", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Silver" },
		{ name: "Jitu Rai", medal: "Gold" }
	];

	buildColumn(data14, ".chart6-hist9", ".chart6-group9", "chart6-group9", ".chart6-groupGold9", ".chart6-groupSilver9", ".chart6-groupBronze9", ".chart6-div9");

// CHART 10
	var data18 = [
		{ name: "Abhishek Verma", medal: "Bronze" },
		{ name: "Apurvi Chandela", medal: "Bronze" },
		{ name: "Heena Sidhu", medal: "Bronze" },
		{ name: "Ravi Kumar", medal: "Bronze" },
		{ name: "Deepak Kumar", medal: "Silver" },
		{ name: "Lakshay Sheoran", medal: "Silver" },
		{ name: "Sanjeev Rajput", medal: "Silver" },
		{ name: "Shardul Vihan", medal: "Silver" },
		{ name: "Saurabh Chaudhary", medal: "Gold" },
		{ name: "Rahi Jeevan Sarnobat", medal: "Gold" }
	];

	buildColumn(data18, ".chart6-hist10", ".chart6-group10", "chart6-group10", ".chart6-groupGold10", ".chart6-groupSilver10", ".chart6-groupBronze10", ".chart6-div10");

// STYLES
	d3.selectAll(".chart6-block").style("background-color", function(d){
		  	var medalColor;
	   	    if (d.medal == "Gold") { medalColor = "#ffd700"; }
	   		else if (d.medal == "Silver") { medalColor = "#c0c0c0"; }
	   		else if (d.medal == "Bronze") { medalColor = "#c88857"; }
	   		return medalColor;
		 })
		 .style("border", function(d){
	   		var medalBorder;
	   		if (d.medal == "Gold") { medalBorder = "1px solid #b29600"; }
	   		else if (d.medal == "Silver") { medalBorder = "1px solid #868686"; }
	   		else if (d.medal == "Bronze") { medalBorder = "1px solid #8d440c"; }
	   		return medalBorder;
	   	 })
	   	 .style("color", function(d){
	   		var medalShadow;
	   		if (d.medal == "Gold") { medalShadow = "#b29600"; }
	   		else if (d.medal == "Silver") { medalShadow = "#868686"; }
	   		else if (d.medal == "Bronze") { medalShadow = "#8d440c"; }
	   		return medalShadow;
	   	 })
	   	 .text(function(d){
	   		var medalText;
	   		if (d.medal == "Gold") { medalText = 1; }
	   		else if (d.medal == "Silver") { medalText = 2; }
	   		else if (d.medal == "Bronze") { medalText = 3; }
	   		return medalText;
		 });