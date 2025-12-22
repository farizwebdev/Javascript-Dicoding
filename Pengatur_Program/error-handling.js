const harga_vape = 10000;
const duetku = 5000;

if (duetku < harga_vape) {
    throw new Error("Duitku gak cukup buat beli vape");
};