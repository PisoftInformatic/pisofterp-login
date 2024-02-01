

  
    //   ************     Chart 1 (total hours in week) js      ***********
    const xValues = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const yValues = [420, 320, 244, 620, 615, 42, 405, 323];  // Values are in the form of Minutes
    const barColors = ["red", "green", "blue", "orange", "brown"];

    // Calculate total hours
    const totalHours = yValues.reduce((total, hours) => total + hours, 0);

    // Convert total minutes back to the desired format
    const totalHoursDisplay = `${Math.floor(totalHours / 60)}h ${(totalHours % 60).toString().padStart(2, '0')}m`;

    // Update the hours-heading div
    document.querySelector('.chart1-time').textContent = totalHoursDisplay;

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                data: yValues,
                backgroundColor: '#7AD5FC'
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: `Total Hours This Week`
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });

 


  
    //   ************     Chart 2 (total hours in week) js      ***********
    const c2xValues = ["P1", "P2"];
    const c2yValues = [65, 209];  // Values are in the form of Minutes
   

    // Calculate total hours
    const c2totalHours = c2yValues.reduce((total, hours) => total + hours, 0);

    // Convert total minutes back to the desired format
    const c2totalHoursDisplay = `${Math.floor(c2totalHours / 60)}h ${(c2totalHours % 60).toString().padStart(2, '0')}m`;

    // Update the hours-heading div
    document.querySelector('.chart2-time').textContent = c2totalHoursDisplay;

    new Chart("myChart2", {
        type: "bar",
        data: {
            labels: c2xValues,
            datasets: [{
                data: c2yValues,
                backgroundColor: '#B6B4FA'
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: `Graph 2`
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero: true, // Adjust the y-axis to start from zero
                        suggestedMax: Math.ceil(Math.max(...c2yValues) / 10) * 10 // Suggested max based on data
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });

    // Update Last Week Time
    document.querySelector('#last-week-time').textContent = '34h 20m';
 


  
    //   ************     Chart 3 (total hours in week) js      ***********
    const c3xValues = ["P1", "P2"];
    const c3yValues = [145, 209];  // Values are in the form of Minutes
   

    // Calculate total hours
    const c3totalHours = c3yValues.reduce((total, hours) => total + hours, 0);

    // Convert total minutes back to the desired format
    const c3totalHoursDisplay = `${Math.floor(c3totalHours / 60)}h ${(c3totalHours % 60).toString().padStart(2, '0')}m`;

    // Update the hours-heading div
    document.querySelector('.chart3-time').textContent = c3totalHoursDisplay;

    new Chart("myChart3", {
        type: "bar",
        data: {
            labels: c3xValues,
            datasets: [{
                data: c3yValues,
                backgroundColor: '#7AD5FC'
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: false,
                text: `Graph 3`
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false,
                        beginAtZero: true, // Adjust the y-axis to start from zero
                        suggestedMax: Math.ceil(Math.max(...c3yValues) / 10) * 10 // Suggested max based on data
                    },
                    gridLines: {
                        display: false
                    }
                }]
            }
        }
    });

    // Update Last Week Time
    document.querySelector('#mostp-activity').textContent = '14h 20m';
 





  
    //   ************     Chart 4 (total hours in week) js      ***********
    // const c4xValues = ["P1"];
    const c4yValues = [65];  // Values are in the form of Minutes
    document.querySelector('.chart4-time').textContent = `${c4yValues[0]}%`;

    // // Update the hours-heading div

    // new Chart("myChart4", {
    //     type: "horizontalBar",
    //     data: {
    //         labels: c4xValues,
    //         datasets: [{
    //             data: [c4yValues[0]], // Use the actual value directly
    //             backgroundColor: '#7AD5FC',
              
    //         }]
    //     },
    //     options: {
    //         legend: {
    //             display: false
    //         },
    //         title: {
    //             display: false,
    //             text: `Graph 3`
    //         },
    //         scales: {
    //             xAxes: [{
    //                 display: true,   // Show x-axis labels
    //                 gridLines: {
    //                     display: false
    //                 },
    //                 ticks: {
    //                     beginAtZero: true,
    //                     max: 100  // Set the maximum value of the x-axis
    //                 }
    //             }],
    //             yAxes: [{
    //                 display: true,   // Show y-axis labels
    //                 gridLines: {
    //                     display: false
    //                 },
    //                 ticks: {
    //                     beginAtZero: true,
    //                     max: 100  // Set the maximum value of the y-axis
    //                 }
    //             }]
    //         }
    //     }
    // });
 

