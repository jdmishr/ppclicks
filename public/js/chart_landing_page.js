document.addEventListener("DOMContentLoaded", function () {

    // Conversion Rate Chart
    new Chart(document.getElementById("conversionRateChart"), {
        type: "line",
        data: {
            labels: ["Before", "Week 1", "Week 2", "Week 3", "After"],
            datasets: [{
                label: "Conversion Rate (%)",
                data: [1.8, 2.4, 3.1, 4.7, 6.3],
                borderWidth: 3,
                fill: false,
            }]
        }
    });

    // Revenue Per Visitor Chart
    new Chart(document.getElementById("revenuePerVisitorChart"), {
        type: "bar",
        data: {
            labels: ["Before", "After"],
            datasets: [{
                label: "Revenue Per Visitor ($)",
                data: [2.9, 7.1],
                borderWidth: 2,
            }]
        }
    });

    // Bounce Rate Chart
    new Chart(document.getElementById("bounceRateChart"), {
        type: "line",
        data: {
            labels: ["Before", "After"],
            datasets: [{
                label: "Bounce Rate (%)",
                data: [62, 29],
                borderWidth: 3,
                fill: false,
            }]
        }
    });

    // Form Completion Rate Chart
    new Chart(document.getElementById("formCompletionChart"), {
        type: "bar",
        data: {
            labels: ["Before", "After"],
            datasets: [{
                label: "Form Completion Rate (%)",
                data: [19, 35],
                borderWidth: 2,
            }]
        }
    });

    // Page Speed Impact Chart
    new Chart(document.getElementById("pageSpeedChart"), {
        type: "line",
        data: {
            labels: ["6s", "4s", "2s", "1s"],
            datasets: [{
                label: "Conversion Rate (%)",
                data: [1.5, 2.4, 3.8, 5.2],
                borderWidth: 3,
                fill: false,
            }]
        }
    });

    // Mobile vs Desktop Chart
    new Chart(document.getElementById("mobileDesktopChart"), {
        type: "bar",
        data: {
            labels: ["Mobile Before", "Mobile After", "Desktop Before", "Desktop After"],
            datasets: [{
                label: "Conversion Rate (%)",
                data: [0.8, 4.7, 2.1, 6.1],
                borderWidth: 2
            }]
        }
    });

    // Case Study Revenue Growth
    new Chart(document.getElementById("caseStudyRevenueChart"), {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 8", "Week 12"],
            datasets: [{
                label: "Revenue ($)",
                data: [12000, 14500, 16900, 21400, 32700, 47300],
                borderWidth: 3,
                fill: false
            }]
        }
    });

});
