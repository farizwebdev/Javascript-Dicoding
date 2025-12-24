const barangFariz = ['Laptop', 'Earphone', 'Dumbell'];

const newBarangFariz = [];

for (let i = 0; i < barangFariz.length; i++) {
    barangFariz.push(`${barangFariz[i]}!!`);
}

console.log(newBarangFariz);