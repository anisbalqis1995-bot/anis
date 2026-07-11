function vcmsApp() {
    return {
        // --- STATE ---
        activeTab: 'dashboard',
        selectedYear: '2026',
        selectedMonth: 'Jun',
        kariahName: 'Surau Al-Falahiah KV Kajang',
        
        // Data Transaksi
        newTxDetails: '',
        newTxDate: new Date().toISOString().split('T')[0],

        // Input Kategori (Untuk Formula)
        input: {
            sumbanganAm: 0, sumbanganKhas: 0, hasilSewaan: 0, pelaburan: 0, deposit: 0, hibahBank: 0, lainTerimaan: 0,
            pentadbiran: 0, pembangunan: 0, dakwah: 0, khidmatSosial: 0, penjanaanEkonomi: 0, pelbagai: 0
        },

        // --- FORMULA PENGIRAAN ---
        get totalTerimaan() {
            return (parseFloat(this.input.sumbanganAm) + parseFloat(this.input.sumbanganKhas) + parseFloat(this.input.hasilSewaan) + 
                    parseFloat(this.input.pelaburan) + parseFloat(this.input.deposit) + parseFloat(this.input.hibahBank) + parseFloat(this.input.lainTerimaan));
        },

        get totalPembayaran() {
            return (parseFloat(this.input.pentadbiran) + parseFloat(this.input.pembangunan) + parseFloat(this.input.dakwah) + 
                    parseFloat(this.input.khidmatSosial) + parseFloat(this.input.penjanaanEkonomi) + parseFloat(this.input.pelbagai));
        },

        // --- MOCK DATABASE ---
        data: {
            '2026': {
                'Jun': {
                    bukuTunai: { bakiAkhir: 15000, transaksi: [] }
                }
            }
        },

        // --- FUNGSI LOGIK ---
        addTransaction() {
            // Gabungkan data input dengan jumlah formula
            const newEntry = {
                tarikh: this.newTxDate,
                butiran: this.newTxDetails,
                ...this.input,
                totalTerimaan: this.totalTerimaan,
                totalPembayaran: this.totalPembayaran
            };

            this.data[this.selectedYear][this.selectedMonth].bukuTunai.transaksi.push(newEntry);
            alert('Transaksi berjaya ditambah!');
        },

        formatCurrency(val) {
            return 'RM ' + parseFloat(val).toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        setTab(tab) {
            this.activeTab = tab;
        }
    }
}
