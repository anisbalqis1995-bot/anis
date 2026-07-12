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

       // --- FORMULA BARU (MESRA INPUT TUNGGAL) ---
        get totalTerimaan() {
            // Jika jenis transaksi adalah Duit Masuk, ambil nilai dari input JUMLAH (RM)
            return this.jenisTransaksi === 'Duit Masuk' ? (parseFloat(this.inputJumlah) || 0) : 0;
        },

        get totalPembayaran() {
            // Jika jenis transaksi adalah Duit Keluar, ambil nilai dari input JUMLAH (RM)
            return this.jenisTransaksi === 'Duit Keluar' ? (parseFloat(this.inputJumlah) || 0) : 0;
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
