var data = [
	{"country":"China","gold":1487,"silver":1020,"bronze":758,"total":3265},
	{"country":"Japan","gold":1032,"silver":1036,"bronze":986,"total":3054},
	{"country":"South Korea","gold":746,"silver":660,"bronze":827,"total":2233},
	{"country":"India","gold":152,"silver":201,"bronze":312,"total":665}
];

var dataLength = data.length;


//CHINA
	var gold = data[0].gold;
	var silver = data[0].silver;
	var bronze = data[0].bronze;
	var silverAndGold = data[0].gold + data[0].silver;
	var total = data[0].total;

	var chinaWaffle = d3.select("#chart5-china");
		chinaWaffle.append("p").attr("class", "chart5-rank").text("Rank #1");
		chinaWaffle.append("p").attr("class", "chart5-label").text("China");
		chinaWaffle.append("p").attr("class", "chart5-total").text(d3.format(",")(total) + " medals");

	var chinaMeta = chinaWaffle.append("div").attr("class", "chart5-meta").attr("id", "chart5-china-meta");
	var chinaGold = chinaMeta.append("div").attr("class", "chart5-meta-gold");
		chinaGold.append("span").attr("class", "chart5-gold-span").append("span").text("1");
		chinaGold.append("p").attr("class", "chart5-value").text(d3.format(",")(gold));

	var chinaSilver = chinaMeta.append("div").attr("class", "chart5-meta-silver");
		chinaSilver.append("span").attr("class", "chart5-silver-span").append("span").text("2");
		chinaSilver.append("p").attr("class", "chart5-value").text(d3.format(",")(silver));

	var chinaBronze = chinaMeta.append("div").attr("class", "chart5-meta-bronze");
		chinaBronze.append("span").attr("class", "chart5-bronze-span").append("span").text("3");
		chinaBronze.append("p").attr("class", "chart5-value").text(bronze);

	var numbers = d3.range(total);

	var buildChina = chinaWaffle.selectAll(".chart5-medal")
								.data(numbers)
								.enter()
								.append("div")
								.attr("class", "chart5-medal")
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

//JAPAN

	var gold2 = data[1].gold;
	var silver2 = data[1].silver;
	var bronze2 = data[1].bronze;
	var silverAndGold2 = data[1].gold + data[1].silver;
	var total2 = data[1].total;

	var japanWaffle = d3.select("#chart5-japan");
		japanWaffle.append("p").attr("class", "chart5-rank").text("Rank #2");
		japanWaffle.append("p").attr("class", "chart5-label").text("Japan");
		japanWaffle.append("p").attr("class", "chart5-total").text(d3.format(",")(total2) + " medals");

	var japanMeta = japanWaffle.append("div").attr("class", "chart5-meta").attr("id", "chart5-japan-meta");
	var japanGold = japanMeta.append("div").attr("class", "chart5-meta-gold");
		japanGold.append("span").attr("class", "chart5-gold-span").append("span").text("1");
		japanGold.append("p").attr("class", "chart5-value").text(d3.format(",")(gold2));

	var japanSilver = japanMeta.append("div").attr("class", "chart5-meta-silver");
		japanSilver.append("span").attr("class", "chart5-silver-span").append("span").text("2");
		japanSilver.append("p").attr("class", "chart5-value").text(d3.format(",")(silver2));

	var japanBronze = japanMeta.append("div").attr("class", "chart5-meta-bronze");
		japanBronze.append("span").attr("class", "chart5-bronze-span").append("span").text("3");
		japanBronze.append("p").attr("class", "chart5-value").text(bronze2);

	var numbers2 = d3.range(total);

	var buildJapan = japanWaffle.selectAll(".chart5-medal")
								.data(numbers)
								.enter()
								.append("div")
								.attr("class", "chart5-medal")
								.style("background-color", function(d){
									var medalColor;
									if (d >= 0 && d <= gold2) { medalColor = "#ffd700"; }
									else if (d >= d3.sum(gold2+1) && d <= silverAndGold2) { medalColor = "#c0c0c0"; }
									else if (d >= d3.sum(silverAndGold2+1) && d <= total2) { medalColor = "#c88857"; }
									return medalColor;
								})
								.style("border", function(d){
							   		var medalBorder;
							   		if (d >= 0 && d <= gold2) { medalBorder = "0.5px solid rgba(178, 150, 0, 0.5)"; }
							   		else if (d >= d3.sum(gold2+1) && d <= silverAndGold2) { medalBorder = "0.5px solid rgba(134, 134, 134, 0.5)"; }
							   		else if (d >= d3.sum(silverAndGold2+1) && d <= total2) { medalBorder = "0.5px solid rgba(141, 68, 12, 0.5)"; }
							   		return medalBorder;
							     });

//SOUTH KOREA

	var gold3 = data[2].gold;
	var silver3 = data[2].silver;
	var bronze3 = data[2].bronze;
	var silverAndGold3 = data[2].gold + data[2].silver;
	var total3 = data[2].total;

	var koreaWaffle = d3.select("#chart5-southKorea");
		koreaWaffle.append("p").attr("class", "chart5-rank").text("Rank #3");
		koreaWaffle.append("p").attr("class", "chart5-label").text("South Korea");
		koreaWaffle.append("p").attr("class", "chart5-total").text(d3.format(",")(total3) + " medals");

	var koreaMeta = koreaWaffle.append("div").attr("class", "chart5-meta").attr("id", "chart5-southKorea-meta");
	var koreaGold = koreaMeta.append("div").attr("class", "chart5-meta-gold");
		koreaGold.append("span").attr("class", "chart5-gold-span").append("span").text("1");
		koreaGold.append("p").attr("class", "chart5-value").text(gold3);

	var koreaSilver = koreaMeta.append("div").attr("class", "chart5-meta-silver");
		koreaSilver.append("span").attr("class", "chart5-silver-span").append("span").text("2");
		koreaSilver.append("p").attr("class", "chart5-value").text(silver3);

	var koreaBronze = koreaMeta.append("div").attr("class", "chart5-meta-bronze");
		koreaBronze.append("span").attr("class", "chart5-bronze-span").append("span").text("3");
		koreaBronze.append("p").attr("class", "chart5-value").text(bronze3);

	var numbers2 = d3.range(total);

	var buildKorea = koreaWaffle.selectAll(".chart5-medal")
								.data(numbers)
								.enter()
								.append("div")
								.attr("class", "chart5-medal")
								.style("background-color", function(d){
									var medalColor;
									if (d >= 0 && d <= gold3) { medalColor = "#ffd700"; }
									else if (d >= d3.sum(gold3+1) && d <= silverAndGold3) { medalColor = "#c0c0c0"; }
									else if (d >= d3.sum(silverAndGold3+1) && d <= total3) { medalColor = "#c88857"; }
									return medalColor;
								})
								.style("border", function(d){
							   		var medalBorder;
							   		if (d >= 0 && d <= gold3) { medalBorder = "0.5px solid rgba(178, 150, 0, 0.5)"; }
							   		else if (d >= d3.sum(gold3+1) && d <= silverAndGold3) { medalBorder = "0.5px solid rgba(134, 134, 134, 0.5)"; }
							   		else if (d >= d3.sum(silverAndGold3+1) && d <= total3) { medalBorder = "0.5px solid rgba(141, 68, 12, 0.5)"; }
							   		return medalBorder;
							     });

	//INDIA

	var gold4 = data[3].gold;
	var silver4 = data[3].silver;
	var bronze4 = data[3].bronze;
	var silverAndGold4 = data[3].gold + data[3].silver;
	var total4 = data[3].total;

	var indiaWaffle = d3.select("#chart5-india");
		indiaWaffle.append("p").attr("class", "chart5-rank").text("Rank #4");
		indiaWaffle.append("p").attr("class", "chart5-label").text("India");
		indiaWaffle.append("p").attr("class", "chart5-total").text(total4 + " medals");

	var indiaMeta = indiaWaffle.append("div").attr("class", "chart5-meta").attr("id", "chart5-india-meta");
	var indiaGold = indiaMeta.append("div").attr("class", "chart5-meta-gold");
		indiaGold.append("span").attr("class", "chart5-gold-span").append("span").text("1");
		indiaGold.append("p").attr("class", "chart5-value").text(gold4);

	var indiaSilver = indiaMeta.append("div").attr("class", "chart5-meta-silver");
		indiaSilver.append("span").attr("class", "chart5-silver-span").append("span").text("2");
		indiaSilver.append("p").attr("class", "chart5-value").text(silver4);

	var indiaBronze = indiaMeta.append("div").attr("class", "chart5-meta-bronze");
		indiaBronze.append("span").attr("class", "chart5-bronze-span").append("span").text("3");
		indiaBronze.append("p").attr("class", "chart5-value").text(bronze4);

	var numbers2 = d3.range(total);

	var buildIndia = indiaWaffle.selectAll(".chart5-medal")
								.data(numbers)
								.enter()
								.append("div")
								.attr("class", "chart5-medal")
								.style("background-color", function(d){
									var medalColor;
									if (d >= 0 && d <= gold4) { medalColor = "#ffd700"; }
									else if (d >= d3.sum(gold4+1) && d <= silverAndGold4) { medalColor = "#c0c0c0"; }
									else if (d >= d3.sum(silverAndGold4+1) && d <= total4) { medalColor = "#c88857"; }
									return medalColor;
								})
								.style("border", function(d){
							   		var medalBorder;
							   		if (d >= 0 && d <= gold4) { medalBorder = "0.5px solid rgba(178, 150, 0, 0.5)"; }
							   		else if (d >= d3.sum(gold4+1) && d <= silverAndGold4) { medalBorder = "0.5px solid rgba(134, 134, 134, 0.5)"; }
							   		else if (d >= d3.sum(silverAndGold4+1) && d <= total4) { medalBorder = "0.5px solid rgba(141, 68, 12, 0.5)"; }
							   		return medalBorder;
							     });
