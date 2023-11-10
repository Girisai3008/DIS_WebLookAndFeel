document.addEventListener('DOMContentLoaded', function () {
    // Data for double bar graph
    var doubleBarData = {
        labels: ['Dogs', 'Cats', 'Bird', 'Rabbits', 'Rest'],
        datasets: [
            {
                label: 'Lost',
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                data: [76, 84, 0, 0, 0],
            },
            {
                label: 'Found',
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
                data: [80, 106, 2, 4, 20],
            },
            {
                label: 'Adoptable',
                backgroundColor: 'rgba(99, 66, 12, 0.7)',
                data: [20, 34, 0, 12, 5],
            }
        ],
    };

    // Data for pie chart
    var totalLost = doubleBarData.datasets[0].data.reduce((a, b) => a + b, 0);
    var totalFound = doubleBarData.datasets[1].data.reduce((a, b) => a + b, 0);
    var totalAdoptable = doubleBarData.datasets[2].data.reduce((a, b) => a + b, 0);

    var pieData = {
        labels: ['LOST', 'FOUND', 'ADOPTABLE'],
        datasets: [
            {
                data: [((totalLost / (totalLost + totalFound + totalAdoptable)) * 100).toFixed(2),
                ((totalFound / (totalLost + totalFound + totalAdoptable)) * 100).toFixed(2),
                ((totalAdoptable / (totalLost + totalFound + totalAdoptable)) * 100).toFixed(2)],
                backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(75, 192, 192, 0.7)', 'rgba(255, 205, 86, 0.7)'],
            },
        ],
    };

    // Get canvas elements
    var doubleBarCanvas = document.getElementById('doubleBarChart');
    var pieCanvas = document.getElementById('pieChart');
    var pieChartValues = document.getElementById('pieChartValues');

    // Create double bar graph
    var doubleBarChart = new Chart(doubleBarCanvas, {
        type: 'bar',
        data: doubleBarData,
        options: {
            scales: {
                x: {
                    stacked: false,
                },
                y: {
                    stacked: false,
                },
            },
        },
    });

    // Create pie chart
    var pieChart = new Chart(pieCanvas, {
        type: 'pie',
        data: pieData,
        options: {
            responsive: false, // Disable resizing to fit the container
            maintainAspectRatio: false, // Disable maintaining aspect ratio
            plugins: {
                legend: {
                    position: 'bottom',
                },
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map(data => {
                            sum += data;
                        });
                        let percentage = (value * 100 / sum).toFixed(2) + "%";
                        return percentage;
                    },
                    color: 'white',
                    labels: {
                        title: {
                            font: {
                                size: '16'
                            }
                        }
                    }
                }
            }
        },
    });

    // Display computed values on top of the pie chart
    pieChartValues.innerHTML = `
    <p style="margin-left:6px;">Lost: ${totalLost}&nbsp;&nbsp;&nbsp;&nbsp;Found: ${totalFound}&nbsp;&nbsp;&nbsp;&nbsp;Adoptable: ${totalAdoptable}</p>
    `;
});
