// app.js
function vcmsApp() {
    return {
        // --- STATE ---
        activeTab: 'dashboard',
        selectedYear: '2026',
        selectedMonth: 'Jun',
        selectedWeek: 'Minggu 1',
        kariahName: 'Surau Al-Falahiah KV Kajang',
        
        // Data Transaksi
        newTxType: 'masuk',
        newTxDetails: '',
        newTxAmount: 0,
        newTxDate: new Date().toISOString().split('T')[0],

        // --- MOCK DATABASE ---
        data: {
            '2026': {
                'Jun': {
                    bukuTunai: { 
                        bakiAkhir: 15000, 
                        transaksi: [
                            { tarikh: '05/06/2026', butiran: 'Sumbangan Kebajikan', rujukan: 'RES-011', masuk: 15000, keluar: 0, baki: 15000 },
                            { tarikh: '12/06/2026', butiran: 'Penyelenggaraan Audio', rujukan: 'VOU-012', masuk: 0, keluar: 3500, baki: 11500 }
                        ] 
                    }
                }
            }
        },

        // --- FUNGSI LOGIK ---
        
        // Menambah transaksi baru ke dalam senarai
        addTransaction() {
            const amount = parseFloat(this.newTxAmount);
            const isMasuk = this.newTxType === 'masuk';
            
            const newEntry = {
                tarikh: this.newTxDate,
                butiran: this.newTxDetails,
                rujukan: 'AUTO-' + Math.floor(Math.random() * 1000),
                masuk: isMasuk ? amount : 0,
                keluar: !isMasuk ? amount : 0,
                baki: isMasuk 
                    ? this.data[this.selectedYear][this.selectedMonth].bukuTunai.bakiAkhir + amount
                    : this.data[this.selectedYear][this.selectedMonth].bukuTunai.bakiAkhir - amount
            };

            // Simpan ke data
            this.data[this.selectedYear][this.selectedMonth].bukuTunai.transaksi.push(newEntry);
            this.data[this.selectedYear][this.selectedMonth].bukuTunai.bakiAkhir = newEntry.baki;
            
            // Reset form
            this.newTxDetails = '';
            this.newTxAmount = 0;
        },

        // Fungsi Helper Format Mata Wang
        formatCurrency(val) {
            return 'RM ' + val.toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        // Fungsi navigasi tab
        setTab(tab) {
            this.activeTab = tab;
        }
    }
}
