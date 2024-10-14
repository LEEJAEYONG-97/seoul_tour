// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


// New Data: review_length
const review_length = [
    3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 5, 1, 4, 1, 1, 3, 1, 1, 2, 1, 1, 4, 5, 2, 
    1, 1, 8, 1, 2, 9, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 1, 1, 1, 16, 12, 1, 1, 14, 11, 1, 
    1, 1, 1, 1, 12, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 8, 1, 1, 1, 3, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 
    2, 1, 1, 1, 1, 1, 4, 1, 3, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 2, 2, 1, 1, 3, 1, 5, 1, 1, 1, 1, 1, 3, 1, 21, 1, 1, 
    1, 2, 2, 20, 1, 1, 1, 4, 1, 1, 1, 1, 15, 16, 1, 1, 1, 4, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 1, 1, 1, 2, 1, 
    2, 1, 1, 3, 1, 1, 1, 1, 1, 3, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 2, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 2, 1, 1, 4, 1, 3, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 10, 1, 8, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 27, 28, 
    24, 26, 20, 23, 14, 18, 17, 25, 11, 16, 9, 21, 13, 22, 6, 19, 8, 5
];

// Define the range intervals and calculate frequency
const rangeStep = 1;
const maxRange = Math.max(...review_length);
const ranges = Array.from({ length: Math.ceil(maxRange / rangeStep) }, (_, i) => i * rangeStep + rangeStep);
const frequencies = new Array(ranges.length).fill(0);

// Calculate frequency for each range
review_length.forEach(value => {
    const rangeIndex = Math.floor(value / rangeStep);
    if (rangeIndex < frequencies.length) {
        frequencies[rangeIndex]++;
    }
});

// Create labels for the ranges
const labels = ranges.map((range, i) => `${i * rangeStep}`);

// Render the chart
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: "재방문 수",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: frequencies,
        }],
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 10
                }
            },
            y: {
                ticks: {
                    beginAtZero: true
                },
                grid: {
                    display: true
                }
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
