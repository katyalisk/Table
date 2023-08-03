am4core.useTheme(am4themes_animated);
am4core.options.autoDispose = true;

let num = document.getElementById("number");
let table = document.querySelector("#table");
let count = document.querySelector("#count");
let cnt = 0;

let data = [];

const tHandler = () => {
	let x = Math.round(Math.random() * 100);
	cnt++;

	data.push({series: cnt, value: x});
	drawChart(data);
	num.innerHTML = x;
	count.innerHTML = cnt;

	let el = document.createElement("tr");
	el.innerHTML = `<td>¹${cnt}</td> <td>${x}</td>`;
	table.appendChild(el);
};

let timer = setInterval(tHandler, 1000);

const drawChart = (genData) => {
	let chart = am4core.create("chartdiv", am4charts.XYChart);
	chart.paddingRight = 20;

	chart.data = genData;

	let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
	xAxis.title.text = "Series Number";

	let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
	yAxis.title.text = "Result";

	let series = chart.series.push(new am4charts.LineSeries());
	series.dataFields.valueX = "series";
	series.dataFields.valueY = "value";
	series.tooltipText = "{valueY}";
	series.tooltip.pointerOrientation = "vertical";
	series.tooltip.background.fillOpacity = 0.5;

	chart.cursor = new am4charts.XYCursor();
	chart.cursor.xAxis = xAxis;
};