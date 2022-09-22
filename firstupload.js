function printAllTriples(n) {
    let firstLetter = 97;
    let secondLetter = 97;
    let thirdLetter = 97;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(String.fromCharCode(firstLetter + i) + String.fromCharCode(secondLetter + j) + String.fromCharCode(thirdLetter + k));
            }
        }
    }
}

printAllTriples(3);
