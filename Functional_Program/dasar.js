// Contoh penggunaan imperatif
const barangFariz = ['Laptop', 'Earphone', 'Dumbell'];

const newBarangFariz = [];

for (let i = 0; i < barangFariz.length; i++) {
    newBarangFariz.push(`${barangFariz[i]}!!`);
}

console.log(newBarangFariz);

// Contoh pengggunaaan deklaratif
const deklaratif = ['Laptop', 'Earphone', 'Dumbell'];

const newDeklaratif = deklaratif.map((barang) => `${barang}!!`);

console.log(newDeklaratif);