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
            return (parseFloat(this.input.sumbanganAm) || 0) + (parseFloat(this.input.sumbanganKhas) || 0) + 
                   (parseFloat(this.input.hasilSewaan) || 0) + (parseFloat(this.input.pelaburan) || 0) + 
                   (parseFloat(this.input.deposit) || 0) + (parseFloat(this.input.hibahBank) || 0) + 
                   (parseFloat(this.input.lainTerimaan) || 0);
        },

        get totalPembayaran() {
            return (parseFloat(this.input.pentadbiran) || 0) + (parseFloat(this.input.pembangunan) || 0) + 
                   (parseFloat(this.input.dakwah) || 0) + (parseFloat(this.input.khidmatSosial) || 0) + 
                   (parseFloat(this.input.penjanaanEkonomi) || 0) + (parseFloat(this.input.pelbagai) || 0);
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
            
            // Pilihan: Reset input selepas tambah
            this.input = { sumbanganAm: 0, sumbanganKhas: 0, hasilSewaan: 0, pelaburan: 0, deposit: 0, hibahBank: 0, lainTerimaan: 0, pentadbiran: 0, pembangunan: 0, dakwah: 0, khidmatSosial: 0, penjanaanEkonomi: 0, pelbagai: 0 };
        },

        formatCurrency(val) {
            return 'RM ' + parseFloat(val).toLocaleString('ms-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        },

        setTab(tab) {
            this.activeTab = tab;
        }
    }
}
