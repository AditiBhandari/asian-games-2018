// CHART 1
	var data = [
		{ name: "Randhir Singh", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Silver" },
		{ name: "Sharad Chauhan", medal: "Silver" }
	];

	var nest = d3.nest()
				 .key(function(d){return d.medal})
				 .entries(data);

	var hist = d3.select(".chart6-hist1");

	var group = hist.selectAll(".chart6-group1")
					.data(nest)
					.enter()
					.append("div")
					.attr("class", "chart6-group1");

	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;

	var groupType = d3.selectAll(".chart6-group1")
						.attr("class", function(d){
							var groupTypeClass;
							if (d.key == "Gold"){
								groupTypeClass = "chart6-groupGold1";
								return groupTypeClass;
							}
							else if (d.key == "Silver"){
								groupTypeClass = "chart6-groupSilver1";
								return groupTypeClass;
							}
							else if (d.key == "Bronze"){
								groupTypeClass = "chart6-groupBronze1";
								return groupTypeClass;
							}
						});
	d3.select(".chart6-groupGold1")
				.append("p")
				.attr("class", "chart6-count")
				.text(nGold);
	d3.select(".chart6-groupSilver1")
				.append("p")
				.attr("class", "chart6-count")
				.text(nSilver);
	d3.select(".chart6-groupBronze1")
				.append("p")
				.attr("class", "chart6-count")
				.text(nBronze);

	group.selectAll(".chart6-block")
		 .data(function(d){return d.values})
		 .enter()
		 .append("div")
		 .attr("class", "chart6-block");

	var yearLabel = d3.select(".chart6-div1").append("p").attr("class", "chart6-year").text("'82");
	var totalLabel = d3.select(".chart6-hist1").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 2
	var data = [
		{ name: "Soma Dutta", medal: "Bronze" },
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Soma Dutta", medal: "Silver" }
	];

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist2");
	var group = hist.selectAll(".chart6-group2").data(nest).enter().append("div").attr("class", "chart6-group2");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;	
	d3.select(".chart6-groupGold2").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver2").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze2").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div2").append("p").attr("class", "chart6-year").text("'86");
	var totalLabel = d3.select(".chart6-hist2").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 3
	var data = [
		{ name: "Soma Dutta", medal: "Bronze" }
	];

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist3");
	var group = hist.selectAll(".chart6-group3").data(nest).enter().append("div").attr("class", "chart6-group3");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold3").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver3").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze3").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div3").append("p").attr("class", "chart6-year").text("'90");
	var totalLabel = d3.select(".chart6-hist3").append("p").attr("class", "chart6-total").text(nTotal);


// CHART 4
	var data = [
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Jaspal Rana", medal: "Gold" }
	];

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist4");
	var group = hist.selectAll(".chart6-group4").data(nest).enter().append("div").attr("class", "chart6-group4");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold4").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver4").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze4").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div4").append("p").attr("class", "chart6-year").text("'94");
	var totalLabel = d3.select(".chart6-hist4").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 5
	var data = [
		{ name: "Men's Shooting Team", medal: "Bronze" },
		{ name: "Jaspal Rana", medal: "Silver" },
		{ name: "Men's Shooting Team", medal: "Silver" }
	];

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist5");
	var group = hist.selectAll(".chart6-group5").data(nest).enter().append("div").attr("class", "chart6-group5");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold5").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver5").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze5").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div5").append("p").attr("class", "chart6-year").text("'98");
	var totalLabel = d3.select(".chart6-hist5").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 6
	var data = [
		{ name: "Men's Shooting Team", medal: "Silver" },
		{ name: "Women's Shooting Team", medal: "Silver" }
	];
	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist6");
	var group = hist.selectAll(".chart6-group6").data(nest).enter().append("div").attr("class", "chart6-group6");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold6").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver6").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze6").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div6").append("p").attr("class", "chart6-year").text("'02");
	var totalLabel = d3.select(".chart6-hist6").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 7
	var data = [
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

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist7");
	var group = hist.selectAll(".chart6-group7").data(nest).enter().append("div").attr("class", "chart6-group7");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold7").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver7").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze7").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div7").append("p").attr("class", "chart6-year").text("'06");
	var totalLabel = d3.select(".chart6-hist7").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 8
	var data = [
		{ name: "Mixed Shooting Team", medal: "Bronze" },
		{ name: "Mixed Shooting Team", medal: "Bronze" },
		{ name: "Vijay Kumar", medal: "Bronze" },
		{ name: "Vijay Kumar", medal: "Bronze" },
		{ name: "Gagan Narang", medal: "Silver" },
		{ name: "Mixed Shooting Team", medal: "Silver" },
		{ name: "Women's Shooting Team", medal: "Silver" },
		{ name: "Ronjan Sodhi", medal: "Gold" }
	];

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist8");
	var group = hist.selectAll(".chart6-group8").data(nest).enter().append("div").attr("class", "chart6-group8");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold8").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver8").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze8").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div8").append("p").attr("class", "chart6-year").text("'10");
	var totalLabel = d3.select(".chart6-hist8").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 9
	var data = [
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

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist9");
	var group = hist.selectAll(".chart6-group9").data(nest).enter().append("div").attr("class", "chart6-group9");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold9").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver9").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze9").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div9").append("p").attr("class", "chart6-year").text("'14");
	var totalLabel = d3.select(".chart6-hist9").append("p").attr("class", "chart6-total").text(nTotal);

// CHART 10
	var data = [
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

	var nest = d3.nest().key(function(d){return d.medal}).entries(data);
	var hist = d3.select(".chart6-hist10");
	var group = hist.selectAll(".chart6-group10").data(nest).enter().append("div").attr("class", "chart6-group10");
	var nGold = data.filter(function(d) { return d.medal === "Gold" }).length;
	var nSilver = data.filter(function(d) { return d.medal === "Silver" }).length;
	var nBronze = data.filter(function(d) { return d.medal === "Bronze" }).length;
	var nTotal = nGold + nSilver + nBronze;
	d3.select(".chart6-groupGold10").append("p").attr("class", "chart6-count").text(nGold);
	d3.select(".chart6-groupSilver10").append("p").attr("class", "chart6-count").text(nSilver);
	d3.select(".chart6-groupBronze10").append("p").attr("class", "chart6-count").text(nBronze);
	group.selectAll(".chart6-block").data(function(d){return d.values}).enter().append("div").attr("class", "chart6-block");
	var yearLabel = d3.select(".chart6-div10").append("div").attr("class", "chart6-year").text("'18");
	var totalLabel = d3.select(".chart6-hist10").append("p").attr("class", "chart6-total").text(nTotal);



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
		 })
	   	 .style("font-size", "0.7em")
	     .style("font-family", "Open Sans")
	     .style("font-weight", "700")
	     .style("text-align", "center");

