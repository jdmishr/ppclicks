document.addEventListener("DOMContentLoaded", function () {

// -----------------------------
// Conversion Rate Improvement
// -----------------------------
const conversionCtx = document.getElementById('conversionChart').getContext('2d');
new Chart(conversionCtx, {
    type: 'line',
    data: {
        labels: ['Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
        datasets: [{
            label: 'Conversion Rate (%)',
            data: [1.2, 1.5, 1.9, 2.3, 2.6, 3.1], // shows 2.8x improvement trend
            borderWidth: 3,
            borderColor: '#2563eb',
            tension: 0.35,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: false } }
    }
});

// -----------------------------
// ROAS Improvement Chart
// -----------------------------
const roiCtx = document.getElementById('roiChart').getContext('2d');
new Chart(roiCtx, {
    type: 'bar',
    data: {
        labels: ['Before','After'],
        datasets: [{
            label: 'ROAS (x)',
            data: [1.2, 4.8], // matches case study + general metrics
            backgroundColor: ['#f97316','#16a34a']
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// -----------------------------
// Cost Per Conversion Reduction
// -----------------------------
const costCtx = document.getElementById('costChart').getContext('2d');
new Chart(costCtx, {
    type: 'line',
    data: {
        labels: ['Month 1','Month 2','Month 3','Month 4','Month 5'],
        datasets: [{
            label: 'Cost Per Conversion ($)',
            data: [40, 32, 28, 22, 18], // ~68% overall reduction
            borderColor: '#9333ea',
            borderWidth: 3,
            tension: 0.3,
            fill: true,
            backgroundColor: 'rgba(147, 51, 234, 0.15)'
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: false } }
    }
});

// -----------------------------
// Revenue Growth Chart
// -----------------------------
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [150000, 210000, 330000, 460000, 690000, 820000], 
            backgroundColor: '#f59e0b'
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: false } }
    }
});

// -----------------------------
// Case Study 90-Day Chart
// -----------------------------
const caseCtx = document.getElementById('caseStudyChart').getContext('2d');
new Chart(caseCtx, {
    type: 'line',
    data: {
        labels: ['Day 0','Day 15','Day 30','Day 45','Day 60','Day 75','Day 90'],
        datasets: [
            {
                label: 'Conversion Rate (%)',
                data: [1.2, 1.8, 2.4, 3.1, 3.7, 4.1, 4.8],
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.15)',
                borderWidth: 3,
                tension: 0.35
            },
            {
                label: 'Recovered Carts (%)',
                data: [0, 8, 17, 25, 31, 38, 43],
                borderColor: '#16a34a',
                backgroundColor: 'rgba(22, 163, 74, 0.15)',
                borderWidth: 3,
                tension: 0.35
            },
            {
                label: 'ROAS (x)',
                data: [1.2, 1.8, 2.3, 3.2, 3.8, 4.3, 4.8],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                borderWidth: 3,
                tension: 0.35
            }
        ]
    },
    options: {
        responsive: true,
        scales: { 
            y: { beginAtZero: false } 
        }
    }
});

});
