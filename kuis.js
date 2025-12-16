function addEmployee(name, email, JoinYear) {
    return {
        name: name, 
        email: email, 
        JoinYear: JoinYear,
    }

    const employees = [name, email, JoinYear];
}

// Menampilkan Hasil 
console.log(addEmployee('Fariz', 'fariz@gmail.com', 2025));
console.log(addEmployee('Abdurrahman', 'abdur@gmail.com', 2024));
console.log(addEmployee('Muhammad', 'muhammad@gmail.com', 2023));