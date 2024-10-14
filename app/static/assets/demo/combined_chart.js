document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("combinedChart");

    if (ctx) {
        
        var combinedChart = new Chart(ctx, {
            type: 'bar', // 선형 차트
            data: {
                labels: [
                    "롯데월드타워",
                    "롯데월드",
                    "경복궁",
                    "전쟁기념박물관",
                    "국립중앙박물관",
                    "덕수궁",
                    "북촌 한옥마을",
                    "광화문",
                    "광화문",
                    "창덕궁"
                  ],
                datasets: [{
                    label: "리뷰 수",
                    lineTension: 0.3,
                    backgroundColor: "rgba(75,192,192,0.2)",
                    borderColor: "rgba(75,192,192,1)",
                    pointRadius: 5,
                    pointBackgroundColor: "rgba(75,192,192,1)",
                    pointBorderColor: "rgba(255,255,255,0.8)",
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHitRadius: 50,
                    pointBorderWidth: 2,
                    data: [
                        13492,
                        13061,
                        12779,
                        6163,
                        5788,
                        5077,
                        4848,
                        4150,
                        4012,
                        3657
                      ],
                    yAxisID: 'y-axis-cases' // 왼쪽 Y축
                },
                {
                    label: "평점",
                    lineTension: 0.3,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    pointRadius: 5,
                    pointBackgroundColor: "rgba(255,99,132,1)",
                    pointBorderColor: "rgba(255,255,255,0.8)",
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(255,99,132,1)",
                    pointHitRadius: 50,
                    pointBorderWidth: 2,
                    data: [
                        4.3,
                        4.2,
                        4.6,
                        4.5,
                        4.6,
                        4.4,
                        4.3,
                        4.5,
                        4.5,
                        4.6
                      ],
                    yAxisID: 'y-axis-deaths' // 오른쪽 Y축
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'date'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 7
                        }
                    }],
                    yAxes: [{
                        id: 'y-axis-cases', // 왼쪽 Y축
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '리뷰 수'
                        }
                    }, {
                        id: 'y-axis-deaths', // 오른쪽 Y축
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            beginAtZero: true
                        },
                        scaleLabel: {
                            display: true,
                            labelString: '평점'
                        },
                        gridLines: {
                            drawOnChartArea: false // 오른쪽 축의 격자선을 그리지 않음
                        }
                    }]
                },
                legend: {
                    display: true
                }
            }
        });
    }
});
