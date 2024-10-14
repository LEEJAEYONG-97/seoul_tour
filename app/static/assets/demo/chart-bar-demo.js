// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


/// Assuming `review_length` is not declared elsewhere in the same script or global scope

// Data: review_length
const review = [
    188, 31, 352, 32, 144, 155, 31, 188, 36, 67, 193, 33, 19, 10, 43, 100, 7, 36, 52, 3, 15, 2, 3, 15, 6, 14, 85,
    3, 9, 82, 6, 18, 158, 127, 66, 181, 63, 88, 127, 303, 17, 347, 225, 230, 359, 199, 180, 376, 42, 150, 107, 104, 
    19, 201, 316, 190, 101, 134, 273, 205, 233, 387, 12, 148, 105, 106, 137, 71, 119, 139, 392, 50, 87, 151, 88, 
    201, 100, 35, 17, 28, 49, 28, 170, 380, 82, 66, 60, 54, 84, 253, 200, 388, 35, 104, 173, 276, 59, 98, 41, 102, 
    77, 160, 202, 385, 131, 354, 103, 131, 61, 50, 96, 44, 72, 385, 93, 144, 23, 91, 58, 28, 30, 49, 16, 40, 78, 98,
    60, 76, 29, 63, 12, 23, 103, 55, 61, 301, 193, 95, 116, 162, 18, 47, 371, 180, 399, 113, 102, 132, 106, 397, 
    123, 160, 179, 177, 43, 297, 136, 92, 144, 217, 45, 319, 92, 100, 70, 65, 376, 19, 106, 17, 74, 106, 79, 69, 62,
    90, 343, 114, 191, 389, 37, 34, 13, 56, 34, 86, 150, 37, 234, 74, 131, 85, 18, 15, 41, 30, 28, 78, 22, 52, 17,
    266, 279, 151, 106, 376, 218, 95, 27, 42, 81, 291, 113, 63, 206, 54, 137, 159, 89, 92, 114, 43, 316, 71, 27, 
    110, 79, 64, 193, 117, 65, 10, 38, 57, 94, 22, 26, 78, 36, 187, 11, 228, 20, 39, 157, 27, 74, 110, 74, 14, 35,
    32, 19, 2, 91, 26, 220, 284, 4, 16, 7, 21, 16, 372, 12, 25, 5, 74, 107, 84, 139, 62, 96, 317, 16, 43, 276, 16,
    12, 37, 80, 37, 82, 5, 18, 63, 46, 49, 28, 13, 17, 31, 60, 44, 195, 43, 15, 36, 109, 32, 7, 218, 85, 49, 62,
    187, 283, 117, 351, 38, 144, 398, 8, 309, 26, 170, 108, 99, 99, 143, 101, 242, 101, 373, 350, 379, 83, 15, 
    33, 176, 263, 335, 18, 33, 181, 102, 176, 14, 92, 108, 111, 73, 173, 88, 14, 112, 259, 25, 81, 17, 32, 15, 
    15, 104, 37, 20, 12, 72, 66, 8, 257, 378, 359, 44, 114, 96, 35, 90, 400, 23, 22, 100, 43, 26, 50, 14, 32, 
    46, 14, 76, 22, 76, 46, 63, 254, 344, 329, 180, 208, 215, 282, 373, 51, 37, 37, 45, 21, 183, 92, 70, 69, 105,
    144, 84, 156, 65, 92, 38, 379, 60, 119, 32, 50, 35, 124, 41, 50, 24, 265, 301, 36, 23, 31, 45, 21, 79, 38,
    34, 41, 135, 108, 80, 117, 60, 58, 143, 26, 64, 110, 42, 59, 66, 43, 17, 99, 263, 141, 75, 148, 364, 330, 78,
    16, 52, 47, 42, 25, 48, 70, 74, 262, 73, 16, 32, 29, 4, 54, 72, 19, 30, 27, 23, 19, 32, 40, 15, 104, 66, 23,
    13, 10, 17, 99, 36, 10, 1, 21, 21, 31, 86, 4, 3, 4, 50, 280, 371, 389, 363, 376, 295, 310, 308, 343, 361, 228,
    359, 237, 365, 361, 338, 320, 366, 273, 349
  ];
  
  // Compute frequency of review_length within ranges of 10
  const maxRg = Math.max(...review);
  const minRg = Math.min(...review);
  const rgStep = 10;
  
  const lbs = [];
  const data = [];
  
  // Initialize bins
  for (let i = minRg; i <= maxRg; i += rgStep) {
    lbs.push(`${i}-${i + rgStep - 1}`);
    data.push(0);
  }
  
  // Calculate frequencies
  review.forEach(value => {
      const index = Math.floor(value / rgStep) * rgStep;
    if (index >= minRg && index <= maxRg) {
        data[Math.floor((index - minRg) / rgStep)]++;
    }
  });
  
  // Bar Chart Example
  const bct = document.getElementById("myBarChart").getContext('2d');
  const myBarChart = new Chart(bct, {
    type: 'bar',
    data: {
        labels: lbs,
        datasets: [{
            label: "리뷰 길이",
            backgroundColor: "rgba(2,117,216,1)",
            borderColor: "rgba(2,117,216,1)",
            data: data,
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
  