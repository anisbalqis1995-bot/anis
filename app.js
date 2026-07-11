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
<script>
        function vcmsApp() {
            return {
                activeTab: 'dashboard',
                selectedYear: '2026',
                selectedMonth: 'Jun',
                selectedWeek: 'Minggu 1',
                searchQuery: 2026,
                kariahName: 'Surau Al-Falahiah KV Kajang',
                showModularBoxes: true, 
                charts: {},
                
                // Tambahan State Tempatan Bagi Buku Tunai Langsung
                newTxType: 'masuk',
                newTxDetails: '',
                newTxAmount: '',
                newTxDate: '',
                bukuTunaiSearchQuery: '',

                // MOCK DATABASE KEWANGAN DIASINGKAN MENGIKUT TAHUN, BULAN & MINGGU
                data: {
                    '2026': {
                        Januari: {
                            anggaran: {
                                penerimaan: { sumbanganAm: 18000, sumbanganKhas: 12000, hasilSewaan: 5000, tahlil: 1500, sumbanganElaun: 3000, hibahPelaburan: 1000, deposit: 500, hibahBank: 200, lainTerimaan: 800 },
                                pembayaran: { pentadbiran: 3000, sumberManusia: 11000, pembangunan: 8000, dakwah: 3000, khidmatSosial: 1500, pembelianAset: 1000, belanjaKhas: 0, pelbagai: 500 }
                            },
                            bukuTunai: {
                                bakiAkhir: 14000, jumlahMasuk: 35000,
                                transaksi: [
                                    { tarikh: '05/01/2026', butiran: 'Sumbangan Awal Tahun Korporat', rujukan: 'RES-001', masuk: 12000, keluar: 0, baki: 12000 }
                                ]
                            },
                            kutipanTabung: {
                                'Minggu 1': { tabungAm: 1200, tabungKebajikan: 800, tabungPembangunan: 1000, tabungPendidikan: 500 },
                                'Minggu 2': { tabungAm: 1100, tabungKebajikan: 750, tabungPembangunan: 900, tabungPendidikan: 450 },
                                'Minggu 3': { tabungAm: 1300, tabungKebajikan: 900, tabungPembangunan: 1100, tabungPendidikan: 600 },
                                'Minggu 4': { tabungAm: 1400, tabungKebajikan: 950, tabungPembangunan: 1200, tabungPendidikan: 650 }
                            },
                            kutipanJumaat: [2200, 2400, 2100, 2500]
                        },
                        Jun: {
                            anggaran: {
                                penerimaan: { sumbanganAm: 19000, sumbanganKhas: 11000, hasilSewaan: 4800, tahlil: 2200, sumbanganElaun: 3000, hibahPelaburan: 1200, deposit: 500, hibahBank: 200, lainTerimaan: 1100 },
                                pembayaran: { pentadbiran: 3000, sumberManusia: 11000, pembangunan: 7000, dakwah: 3500, khidmatSosial: 2000, pembelianAset: 1000, belanjaKhas: 0, pelbagai: 500 }
                            },
                            bukuTunai: {
                                bakiAkhir: 15000, jumlahMasuk: 40000,
                                transaksi: [
                                    { tarikh: '05/06/2026', butiran: 'Sumbangan Kebajikan Agensi', rujukan: 'RES-011', masuk: 15000, keluar: 0, baki: 15000 },
                                    { tarikh: '12/06/2026', butiran: 'Penyelenggaraan Audio System', rujukan: 'VOU-012', masuk: 0, keluar: 3500, baki: 11500 },
                                    { tarikh: '19/06/2026', butiran: 'Kutipan Dana Pembangunan', rujukan: 'RES-013', masuk: 8500, keluar: 0, baki: 20000 },
                                    { tarikh: '26/06/2026', butiran: 'Bil Syarikat Air & Elektrik', rujukan: 'VOU-014', masuk: 0, keluar: 5000, baki: 15000 }
                                ]
                            },
                            kutipanTabung: {
                                'Minggu 1': { tabungAm: 1100, tabungKebajikan: 750, tabungPembangunan: 950, tabungPendidikan: 400 },
                                'Minggu 2': { tabungAm: 1250, tabungKebajikan: 850, tabungPembangunan: 1050, tabungPendidikan: 500 },
                                'Minggu 3': { tabungAm: 1300, tabungKebajikan: 900, tabungPembangunan: 1100, tabungPendidikan: 550 },
                                'Minggu 4': { tabungAm: 1400, tabungKebajikan: 950, tabungPembangunan: 1200, tabungPendidikan: 650 }
                            },
                            kutipanJumaat: [2100, 2350, 2200, 2500]
                        }
                    },
                    '2025': {
                        Jun: {
                            anggaran: {
                                penerimaan: { sumbanganAm: 15000, sumbanganKhas: 10000, hasilSewaan: 4000, tahlil: 1000, sumbanganElaun: 3000, hibahPelaburan: 1000, deposit: 500, hibahBank: 200, lainTerimaan: 500 },
                                pembayaran: { pentadbiran: 2500, sumberManusia: 10000, pembangunan: 6000, dakwah: 3000, khidmatSosial: 1500, pembelianAset: 1000, belanjaKhas: 0, pelbagai: 500 }
                            },
                            bukuTunai: {
                                bakiAkhir: 12000, jumlahMasuk: 36000,
                                transaksi: []
                            },
                            kutipanTabung: {
                                'Minggu 1': { tabungAm: 1000, tabungKebajikan: 700, tabungPembangunan: 900, tabungPendidikan: 400 },
                                'Minggu 2': { tabungAm: 1100, tabungKebajikan: 750, tabungPembangunan: 950, tabungPendidikan: 450 },
                                'Minggu 3': { tabungAm: 1150, tabungKebajikan: 800, tabungPembangunan: 1000, tabungPendidikan: 500 },
                                'Minggu 4': { tabungAm: 1200, tabungKebajikan: 850, tabungPembangunan: 1050, tabungPendidikan: 550 }
                            },
                            kutipanJumaat: [1900, 2100, 2000, 2150]
                        }
                    }
                },

                // MEMULAKAN SISTEM & BACA KETETAPAN DEEP-LINKING
                initApp() {
                    const savedKariah = localStorage.getItem('vcms_selected_kariah');
                    const savedYear = localStorage.getItem('vcms_selected_year');
                    
                    if (savedKariah) {
                        this.kariahName = savedKariah;
                    }
                    if (savedYear) {
                        this.selectedYear = savedYear;
                        this.searchQuery = parseInt(savedYear);
                    }

                    // Menjamin kewujudan semua bulan untuk tahun standard
                    const yearsToCheck = ['2025', '2026', '2027'];
                    yearsToCheck.forEach(y => {
                        if (!this.data[y]) {
                            this.data[y] = this.generateBlankYearData(y);
                        } else {
                            const allMonths = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
                            allMonths.forEach(m => {
                                if (!this.data[y][m]) {
                                    this.data[y][m] = this.generateBlankMonthData(y, m);
                                }
                            });
                        }
                    });

                    // Parse parameters daripada query string (Pautan Pintar)
                    const urlParams = new URLSearchParams(window.location.search);
                    const tabParam = urlParams.get('tab');
                    const monthParam = urlParams.get('month');
                    const yearParam = urlParams.get('year');

                    if (tabParam) {
                        if (tabParam === 'anggaran') this.activeTab = 'anggaran';
                        else if (tabParam === 'buku-tunai') this.activeTab = 'bukutunai';
                        else if (tabParam === 'kutipan-tabung') this.activeTab = 'tabung';
                        else if (tabParam === 'kutipan-jumaat') this.activeTab = 'jumaat';
                        else if (tabParam === 'laporan-bulanan') this.activeTab = 'laporan';
                        else if (tabParam === 'penyata-kewangan') this.activeTab = 'penyata';
                    }
                    if (monthParam) {
                        this.selectedMonth = monthParam;
                    }
                    if (yearParam) {
                        this.selectedYear = yearParam;
                        this.searchQuery = parseInt(yearParam);
                    }
                    
                    // Buat pengiraan awal buku tunai untuk semua tahun & bulan
                    for (let y in this.data) {
                        for (let m in this.data[y]) {
                            this.recalculateBukuTunai(y, m);
                        }
                    }

                    this.initCharts();
                },

                setTab(tab) {
                    this.activeTab = tab;
                    this.$nextTick(() => {
                        this.updateCharts();
                    });
                },

                setWeek(week) {
                    this.selectedWeek = week;
                    this.$nextTick(() => {
                        this.updateTabungChart();
                    });
                },

                searchYear() {
                    let targetYear = String(this.searchQuery);
                    if (!this.data[targetYear]) {
                        this.data[targetYear] = this.generateBlankYearData(targetYear);
                        this.recalculateBukuTunai(targetYear, this.selectedMonth);
                    }
                    this.selectedYear = targetYear;
                    this.updateData();
                },

                prevYear() {
                    let current = parseInt(this.selectedYear);
                    this.searchQuery = current - 1;
                    this.searchYear();
                },

                nextYear() {
                    let current = parseInt(this.selectedYear);
                    this.searchQuery = current + 1;
                    this.searchYear();
                },

                // Menjana set data tahunan kosong yang lengkap (12 Bulan)
                generateBlankYearData(year) {
                    const months = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
                    let yearData = {};
                    months.forEach(m => {
                        yearData[m] = this.generateBlankMonthData(year, m);
                    });
                    return yearData;
                },

                generateBlankMonthData(year, month) {
                    return {
                        anggaran: {
                            penerimaan: { sumbanganAm: 15000, sumbanganKhas: 10000, hasilSewaan: 4000, tahlil: 1000, sumbanganElaun: 3000, hibahPelaburan: 1000, deposit: 500, hibahBank: 200, lainTerimaan: 500 },
                            pembayaran: { pentadbiran: 2500, sumberManusia: 10000, pembangunan: 6000, dakwah: 3000, khidmatSosial: 1500, pembelianAset: 1000, belanjaKhas: 0, pelbagai: 500 }
                        },
                        bukuTunai: {
                            bakiAkhir: 10000, jumlahMasuk: 30000,
                            transaksi: [
                                { tarikh: '01/01/' + year, butiran: 'Baki Pembuka', rujukan: 'BAL-OPEN', masuk: 30000, keluar: 0, baki: 30000 }
                            ]
                        },
                        kutipanTabung: {
                            'Minggu 1': { tabungAm: 1000, tabungKebajikan: 500, tabungPembangunan: 800, tabungPendidikan: 300 },
                            'Minggu 2': { tabungAm: 1000, tabungKebajikan: 500, tabungPembangunan: 800, tabungPendidikan: 300 },
                            'Minggu 3': { tabungAm: 1000, tabungKebajikan: 500, tabungPembangunan: 800, tabungPendidikan: 300 },
                            'Minggu 4': { tabungAm: 1000, tabungKebajikan: 500, tabungPembangunan: 800, tabungPendidikan: 300 }
                        },
                        kutipanJumaat: [1500, 1500, 1500, 1500]
                    };
                },

                // LOGIK KAWALAN BUKU TUNAI (MULA)
                getActualTotalKeluar() {
                    let txs = this.data[this.selectedYear][this.selectedMonth].bukuTunai.transaksi || [];
                    return txs.reduce((sum, tx) => sum + (tx.keluar || 0), 0);
                },

                filteredTransactions() {
                    let txs = this.data[this.selectedYear][this.selectedMonth].bukuTunai.transaksi || [];
                    if (this.bukuTunaiSearchQuery.trim() !== '') {
                        let q = this.bukuTunaiSearchQuery.toLowerCase();
                        return txs.filter(tx => tx.butiran.toLowerCase().includes(q));
                    }
                    return txs;
                },

                addTransaction() {
                    let year = this.selectedYear;
                    let month = this.selectedMonth;
                    
                    if (!this.newTxDetails || !this.newTxAmount || !this.newTxDate) {
                        return;
                    }
                    
                    // Parse Tarikh dd/mm/yyyy
                    let parts = this.newTxDate.split('-');
                    let formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
                    
                    let isMasuk = (this.newTxType === 'masuk');
                    let tx = {
                        tarikh: formattedDate,
                        butiran: this.newTxDetails,
                        rujukan: isMasuk ? 'RES-' + String(Date.now()).slice(-3) : 'VOU-' + String(Date.now()).slice(-3),
                        masuk: isMasuk ? parseFloat(this.newTxAmount) : 0,
                        keluar: !isMasuk ? parseFloat(this.newTxAmount) : 0,
                        baki: 0
                    };
                    
                    this.data[year][month].bukuTunai.transaksi.unshift(tx);
                    this.recalculateBukuTunai(year, month);
                    
                    // Reset Form
                    this.newTxDetails = '';
                    this.newTxAmount = '';
                    this.newTxDate = '';
                },

                deleteTransaction(index) {
                    let year = this.selectedYear;
                    let month = this.selectedMonth;
                    this.data[year][month].bukuTunai.transaksi.splice(index, 1);
                    this.recalculateBukuTunai(year, month);
                },

                recalculateBukuTunai(year, month) {
                    let mObj = this.data[year][month];
                    if (!mObj) return;
                    
                    let totalMasuk = 0;
                    let totalKeluar = 0;
                    let currentBaki = 0;
                    
                    let txs = mObj.bukuTunai.transaksi || [];
                    // Kira kumulatif dari transaksi paling lama (hujung senarai) ke baru
                    for (let i = txs.length - 1; i >= 0; i--) {
                        totalMasuk += txs[i].masuk || 0;
                        totalKeluar += txs[i].keluar || 0;
                        currentBaki += (txs[i].masuk || 0) - (txs[i].keluar || 0);
                        txs[i].baki = currentBaki;
                    }
                    
                    mObj.bukuTunai.jumlahMasuk = totalMasuk;
                    mObj.bukuTunai.bakiAkhir = currentBaki;
                },
                // LOGIK KAWALAN BUKU TUNAI (TAMAT)

                // PENGIRAAN ANGGARAN HASIL
                getAnggaranHasil() {
                    let p = this.data[this.selectedYear][this.selectedMonth].anggaran.penerimaan;
                    return (p.sumbanganAm || 0) + (p.sumbanganKhas || 0) + (p.hasilSewaan || 0) + (p.tahlil || 0) + (p.sumbanganElaun || 0) + (p.hibahPelaburan || 0) + (p.deposit || 0) + (p.hibahBank || 0) + (p.lainTerimaan || 0);
                },

                getAnggaranBelanja() {
                    let b = this.data[this.selectedYear][this.selectedMonth].anggaran.pembayaran;
                    return (b.pentadbiran || 0) + (b.sumberManusia || 0) + (b.pembangunan || 0) + (b.dakwah || 0) + (b.khidmatSosial || 0) + (b.pembelianAset || 0) + (b.belanjaKhas || 0) + (b.pelbagai || 0);
                },

                getAnggaranSurplus() {
                    return this.getAnggaranHasil() - this.getAnggaranBelanja();
                },

                getTotalIncome() {
                    return this.data[this.selectedYear][this.selectedMonth].bukuTunai.jumlahMasuk;
                },

                getTotalExpenses() {
                    return this.getAnggaranBelanja();
                },

                getCurrentBalance() {
                    return this.getTotalIncome() - this.getTotalExpenses();
                },

                getAnnualBudget() {
                    let total = 0;
                    for (let m in this.data[this.selectedYear]) {
                        let p = this.data[this.selectedYear][m].anggaran.penerimaan;
                        total += (p.sumbanganAm || 0) + (p.sumbanganKhas || 0) + (p.hasilSewaan || 0) + (p.tahlil || 0) + (p.sumbanganElaun || 0) + (p.hibahPelaburan || 0) + (p.deposit || 0) + (p.hibahBank || 0) + (p.lainTerimaan || 0);
                    }
                    return total;
                },

                getMonthlyTabungTotal() {
                    let total = 0;
                    const bulanan = this.data[this.selectedYear][this.selectedMonth].kutipanTabung;
                    for (let key in bulanan) {
                        total += bulanan[key].tabungAm + bulanan[key].tabungKebajikan + bulanan[key].tabungPembangunan + bulanan[key].tabungPendidikan;
                    }
                    return total;
                },

                getWeeklyTabungTotal() {
                    const minggu = this.data[this.selectedYear][this.selectedMonth].kutipanTabung[this.selectedWeek];
                    return minggu.tabungAm + minggu.tabungKebajikan + minggu.tabungPembangunan + minggu.tabungPendidikan;
                },

                getJumaatTotal() {
                    return this.data[this.selectedYear][this.selectedMonth].kutipanJumaat.reduce((a, b) => a + b, 0);
                },

                formatCurrency(val) {
                    return 'RM ' + val.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                },

                formatRaw(val) {
                    return val.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                },

                getTabTitle() {
                    switch(this.activeTab) {
                        case 'dashboard': return 'Dashboard Utama';
                        case 'anggaran': return 'Belanjawan Anggaran (image_01a05c.png)';
                        case 'bukutunai': return 'Buku Tunai Sebenar & Log';
                        case 'tabung': return 'Kutipan Tabung Mingguan';
                        case 'jumaat': return 'Kutipan Jumaat';
                        case 'laporan': return 'Laporan Bulanan';
                        case 'penyata': return 'Penyata Bulanan';
                        default: return 'Sistem VCMS';
                    }
                },

                updateData() {
                    this.updateCharts();
                },

                initCharts() {
                    this.$nextTick(() => {
                        this.updateCharts();
                    });
                },

                updateCharts() {
                    // 1. Chart Tabung
                    if (this.activeTab === 'tabung') {
                        this.updateTabungChart();
                        
                        const ctxPerbandingan = document.getElementById('chartPerbandinganMinggu');
                        if (ctxPerbandingan) {
                            if (this.charts.perbandingan) this.charts.perbandingan.destroy();
                            
                            const kTabung = this.data[this.selectedYear][this.selectedMonth].kutipanTabung;
                            const labels = Object.keys(kTabung);
                            const dataSet = labels.map(label => {
                                return kTabung[label].tabungAm + kTabung[label].tabungKebajikan + kTabung[label].tabungPembangunan + kTabung[label].tabungPendidikan;
                            });

                            this.charts.perbandingan = new Chart(ctxPerbandingan, {
                                type: 'bar',
                                data: {
                                    labels: labels,
                                    datasets: [{
                                        label: 'Jumlah Kutipan Mingguan (RM)',
                                        data: dataSet,
                                        backgroundColor: 'rgba(245, 158, 11, 0.85)',
                                        borderColor: '#d97706',
                                        borderWidth: 1.5,
                                        borderRadius: 6
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: { y: { beginAtZero: true } }
                                }
                            });
                        }
                    }

                    // 2. Chart Jumaat
                    if (this.activeTab === 'jumaat') {
                        const ctxJumaat = document.getElementById('chartJumaat');
                        if (ctxJumaat) {
                            if (this.charts.jumaat) this.charts.jumaat.destroy();
                            this.charts.jumaat = new Chart(ctxJumaat, {
                                type: 'line',
                                data: {
                                    labels: this.data[this.selectedYear][this.selectedMonth].kutipanJumaat.map((_, i) => 'Jumaat ' + (i+1)),
                                    datasets: [{
                                        label: 'Aliran Kutipan (RM)',
                                        data: this.data[this.selectedYear][this.selectedMonth].kutipanJumaat,
                                        borderColor: '#6366f1',
                                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                                        fill: true,
                                        tension: 0.3,
                                        borderWidth: 3
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: { y: { beginAtZero: true } }
                                }
                            });
                        }
                    }

                    // 3. Chart Trend Bulanan
                    if (this.activeTab === 'laporan') {
                        const ctxTrend = document.getElementById('chartTrendBulanan');
                        if (ctxTrend) {
                            if (this.charts.trend) this.charts.trend.destroy();
                            
                            const bulanLabels = ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'];
                            const penerimaanData = [];
                            const pembayaranData = [];

                            bulanLabels.forEach(bln => {
                                const mObj = this.data[this.selectedYear][bln];
                                if (mObj) {
                                    penerimaanData.push(mObj.bukuTunai.jumlahMasuk);
                                    let b = mObj.anggaran.pembayaran;
                                    let sumBelanja = (b.pentadbiran || 0) + (b.sumberManusia || 0) + (b.pembangunan || 0) + (b.dakwah || 0) + (b.khidmatSosial || 0) + (b.pembelianAset || 0) + (b.belanjaKhas || 0) + (b.pelbagai || 0);
                                    pembayaranData.push(sumBelanja);
                                } else {
                                    penerimaanData.push(0);
                                    pembayaranData.push(0);
                                }
                            });

                            this.charts.trend = new Chart(ctxTrend, {
                                type: 'line',
                                data: {
                                    labels: bulanLabels,
                                    datasets: [
                                        {
                                            label: 'Penerimaan Sebenar (RM)',
                                            data: penerimaanData,
                                            borderColor: '#10b981',
                                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                            tension: 0.3,
                                            fill: true,
                                            borderWidth: 3
                                        },
                                        {
                                            label: 'Anggaran Pembayaran (RM)',
                                            data: pembayaranData,
                                            borderColor: '#f43f5e',
                                            backgroundColor: 'rgba(244, 63, 94, 0.1)',
                                            tension: 0.3,
                                            fill: true,
                                            borderWidth: 3
                                        }
                                    ]
                                },
                                options: {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    scales: { y: { beginAtZero: true } }
                                }
                            });
                        }
                    }
                },

                updateTabungChart() {
                    const ctxTabung = document.getElementById('chartTabungMinggu');
                    if (ctxTabung) {
                        const m_data = this.data[this.selectedYear][this.selectedMonth].kutipanTabung[this.selectedWeek];
                        if (this.charts.tabung) this.charts.tabung.destroy();
                        this.charts.tabung = new Chart(ctxTabung, {
                            type: 'doughnut',
                            data: {
                                labels: ['Am/Sewa', 'Kebajikan', 'Pembangunan', 'Pendidikan'],
                                datasets: [{
                                    data: [m_data.tabungAm, m_data.tabungKebajikan, m_data.tabungPembangunan, m_data.tabungPendidikan],
                                    backgroundColor: ['#10b981', '#3b82f6', '#8b5cf6', '#f43f5e'],
                                    hoverOffset: 4
                                }]
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                    legend: { position: 'bottom' }
                                }
                            }
                        });
                    }
                }
            };
        }
    </script>
