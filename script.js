const calcAverage = (a, b, c) => {
    return (a + b + c) / 3
}

function averageKoala(a,b,c) {
    const scoreKoala = calcAverage(a,b,c)
    return scoreKoala
}
function averageDelfin () {
    const scoreDelfin = calcAverage()
    return scoreDelfin
}

function checkWinner(averageKoala, averageDelfin){
    return (averageKoala > averageDelfin) ? "Koalas is the winner" : "Delfins is the winner"
}

console.log(averageKoala(10,10,10));
console.log(checkWinner(averageKoala(10, 10, 10), averageDelfin(20,20,20)));