// Data: Words and Frequencies
const data2 = {
    labels: ["아이", "시간", "사람", "경복궁", "방문", "놀이기구", "전시", "광화문", "관람", "창덕궁", "박물관", "역사", "정말", "생각", "서울", "설명", "공원", "광장", "해설", "궁궐"],
    datasets: [{
        label: "단어 빈도",
        backgroundColor: "rgba(2,117,216,1)",
        borderColor: "rgba(2,117,216,1)",
        data: [1.000000, 0.578947, 0.550239, 0.478469, 0.478469, 0.459330, 0.454545, 0.425837, 0.354067, 0.349282, 0.339713, 0.330144, 0.311005, 0.306220, 0.296651, 0.291866, 0.287081, 0.287081, 0.272727, 0.263158],
    }],
};

// Bar Chart Example
const cv2 = document.getElementById("myBarChart2").getContext('2d');
const myBarChart2 = new Chart(cv2, {
    type: 'bar',
    data: data2,
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    maxTicksLimit: 20
                },
                title: {
                    display: true,
                    text: '단어'
                }
            },
            y: {
                ticks: {
                    beginAtZero: true
                },
                grid: {
                    display: true
                },
                title: {
                    display: true,
                    text: '빈도'
                }
            },
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}`;
                    }
                }
            }
        }
    }
});
