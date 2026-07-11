function vcmsApp() {
    return {
        inputJumlah: 0,
        jenisTransaksi: 'Duit Masuk',

        get totalTerimaan() {
            return this.jenisTransaksi === 'Duit Masuk' ? (parseFloat(this.inputJumlah) || 0) : 0;
        },

        get totalPembayaran() {
            return this.jenisTransaksi === 'Duit Keluar' ? (parseFloat(this.inputJumlah) || 0) : 0;
        },

        formatCurrency(value) {
            return 'RM ' + parseFloat(value).toLocaleString('ms-MY', { minimumFractionDigits: 2 });
        }
    }
}
