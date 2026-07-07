// app.js
function vcmsApp() {
    return {
        // STATE
        activeTab: 'dashboard',
        selectedYear: '2026',
        selectedMonth: 'Jun',
        charts: {},
        data: { /* Masukkan data penuh anda di sini */ },

        // FUNGSI INISIALISASI
        initApp() {
            // ... (Kod initApp anda)
            this.initCharts();
        },

        // LOGIK PENGIRAAN
        formatCurrency(val) {
            return 'RM ' + val.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        recalculateBukuTunai(year, month) {
            // ... (Kod recalculate anda)
        },

        // LOGIK CARTA (CHART.JS)
        updateCharts() {
            // ... (Kod updateCharts anda)
        },

        // Semua fungsi lain (getAnggaranHasil, dll)
        // ...
    }
}
