import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dps = [{x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}, {x: "", y: 0}]
var xVal = ""
var yVal = 15;
var updateInterval = 1000;

class DynamicLineChart extends Component {
	constructor() {
		super();
		this.updateChart = this.updateChart.bind(this);
		this.timer = null;
		this.value = 0;
	}
	componentDidMount() {
		if(this.timer == null)
			this.timer = setTimeout(this.updateChart, updateInterval);
	}

	
	updateChart() {
		if(this.chart) {
            //atualizar value
			//console.log(this.props.value)
			yVal = parseInt(this.props.value);
			dps.push({x: xVal,y: yVal});
			xVal++;
			if (dps.length >  10 ) {
				dps.shift();
			}
			this.chart.render();
			setTimeout(this.updateChart, updateInterval);
		}
	}
	render() {
		const options = {
			animationEnabled: true,
			title :{
				text: "PPG"
			},
			data: [{
				type: "spline",
				dataPoints : dps
			}],
			axisX:{
				lineThickness: 0,
				tickThickness: 0
			},
			axisY:{
				lineThickness: 0,
				gridThickness: 0,
				tickLength: 0
			}
		}
		
		return (
		<div>
			<h1>Tempo real</h1>
			<CanvasJSChart options = {options} 
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default DynamicLineChart;