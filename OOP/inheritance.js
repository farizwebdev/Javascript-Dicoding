class Manusia {
    constructor(nama, umur) {
        this.nama = nama;
        this.umur = umur;
    }
}

class Mahasiswa extends Manusia {
    constructor (nama, umur, hobi) {
        super(nama, umur);
        this.hobi = hobi;
    }

    Keseharian() {
        console.log(`Keseharianku adalah belajar ${this.hobi}`);
    }
}

const fariz = new Mahasiswa('Fariz', 20, 'Ngoding');
console.log(fariz);

// Manggil Method yakk..
fariz.Keseharian();