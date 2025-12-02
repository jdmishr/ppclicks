document.addEventListener("DOMContentLoaded", function () {
    
// -----------------------------
// Customer Acquisition Cost (CAC)
// -----------------------------
new Chart(document.getElementById("cacChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "CAC ($)",
            data: [310, 280, 250, 220, 190, 158],
            borderWidth: 3,
            tension: 0.3
        }]
    }
});

// -----------------------------
// Monthly Lead Volume
// -----------------------------
new Chart(document.getElementById("leadVolumeChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Leads",
            data: [140, 165, 190, 230, 260, 300],
            borderWidth: 2
        }]
    }
});

// -----------------------------
// Revenue from Search Ads
// -----------------------------
new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Revenue ($)",
            data: [3200, 4800, 6200, 7100, 8500, 9200],
            borderWidth: 3,
            tension: 0.3
        }]
    }
});

// -----------------------------
// Funnel Conversion Chart
// -----------------------------
new Chart(document.getElementById("funnelChart"), {
    type: "bar",
    data: {
        labels: ["CTR", "Landing Conversion", "Customer Conversion"],
        datasets: [{
            label: "Rate (%)",
            data: [5.4, 12.3, 6.4],
            borderWidth: 2
        }]
    }
});

// -----------------------------
// ROAS Over Time
// -----------------------------
new Chart(document.getElementById("roasChart"), {
    type: "line",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "ROAS (%)",
            data: [220, 260, 310, 370, 450, 520],
            borderWidth: 3,
            tension: 0.3
        }]
    }
});

// -----------------------------
// Impression Share Growth
// -----------------------------
new Chart(document.getElementById("impressionShareChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Impression Share (%)",
            data: [24, 32, 38, 44, 53, 61],
            borderWidth: 2
        }]
    }
});

// -----------------------------
// Industry Comparison Chart
// -----------------------------
new Chart(document.getElementById("industryComparisonChart"), {
    type: "bar",
    data: {
        labels: ["Search Ads", "Shopping Ads", "Remarketing", "Brand Campaigns"],
        datasets: [{
            label: "ROAS (%)",
            data: [520, 680, 740, 830],
            borderWidth: 2
        }]
    }
});

// -----------------------------
// Case Study Performance Chart
// -----------------------------
new Chart(document.getElementById("caseStudyChart"), {
    type: "line",
    data: {
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        datasets: [
            {
                label: "CAC ($)",
                data: [380, 320, 270, 220, 180, 142],
                borderWidth: 3,
                tension: 0.3
            },
            {
                label: "Conversion Rate (%)",
                data: [1.8, 2.3, 3.8, 4.9, 5.8, 6.4],
                borderWidth: 3,
                tension: 0.3
            }
        ]
    }
});

});
