<template>
  <div style="max-height: 80vh;">
    <div style="display: none;">
      <label for="chartType">Select Chart Type:</label>
      <select disabled id="chartType" v-model="selectedChartType" @change="updateChartType">
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
        <option value="doughnut">Doughnut Chart</option>
        <option value="polarArea">Polar Area Chart</option>
        <option value="radar">Radar Chart</option>
        <option value="pie">Pie Chart</option>
      </select>
    </div>

    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import axios from 'axios';
import Chart from 'chart.js/auto';

export default {
  props: {
    route: String,
    chart: String,
  },
  data() {
    return {
      chartData: null,
      selectedChartType: 'bar', // Default chart type is bar
      chartInstance: null, // Store the chart instance
    };
  },
  mounted() {
    this.selectedChartType = this.chart;
    this.fetchChartData();
  },
  methods: {
    fetchChartData() {
      axios.get(this.route).then((response) => {
        this.chartData = response.data.data;
        // console.log('test', response.data.data)
        this.createChart();
      })
    },
    createChart() {
      if (!this.chartData) return;
      const ctx = document.getElementById('myChart').getContext('2d');

      let scales = {};
      if (this.selectedChartType === 'line' || this.selectedChartType === 'bar') {
        scales = {
          y: {
            title: {
              display: true,
              text: this.chartData.titles[0],
            },
          },
          x: {
            title: {
              display: true,
              text: this.chartData.titles[1],
            },
          },
        };
      }
      this.chartData.datasets[0].backgroundColor = 'red';
      this.chartData.datasets[1].backgroundColor = 'blue';
      this.chartInstance = new Chart(ctx, {
        type: this.selectedChartType, // Use the selected chart type
        data: this.chartData,
        options: {
          scales,
          plugins: {
            title: {
              display: true,
              position: 'bottom',
              text: this.chartData.legend
            },

          },
        },
      });
    },
    updateChartType() {
      if (this.chartInstance) {
        this.chartInstance.destroy();
        this.createChart();
      }
    },
  },
};
</script>
