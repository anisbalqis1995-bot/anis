function vcmsApp() {
    return {
        // Data asas
        inputJumlah: 0,
        jenisTransaksi: 'Duit Masuk',

        // Formula pengiraan
        get totalTerimaan() {
            return this.jenisTransaksi === 'Duit Masuk' ? parseFloat(this.inputJumlah) || 0 : 0;
        },

        get totalPembayaran() {
            return this.jenisTransaksi === 'Duit Keluar' ? parseFloat(this.inputJumlah) || 0 : 0;
        },

        // Fungsi format duit
        formatCurrency(value) {
            return 'RM ' + parseFloat(value).toLocaleString('ms-MY', { minimumFractionDigits: 2 });
        }
    }
}
