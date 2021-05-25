const calcAverage = (a, b, c) => {
    return (a + b + c) / 3
}

let scoreKoala = calcAverage(99,100,100);
let scoreDelfin = calcAverage(100,100,100);
    
function checkWinner(scoreKoala, scoreeDelfin){
    if(scoreKoala > scoreeDelfin * 2) {
        return "Koalas is the winner" 
    } else if (scoreeDelfin > (scoreKoala * 2)){
        return "Delfins is the winner"
    } else if (scoreKoala === scoreeDelfin){
        return "remis"
    } else {
        return "No one wins"
    }
}

console.log(checkWinner(scoreKoala, scoreDelfin));

scoreKoala = calcAverage(10,10,10);
scoreDelfin = calcAverage(10,10,10);
console.log(checkWinner(scoreKoala, scoreDelfin));