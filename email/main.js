const domEmail = prompt('inserisci la tua email');

let whiteList = ['carlo@gmail.com', 'giulia@libero.it', 'giovanni@hotmail.it'];

for(let i = 0; i < domEmail.length;  i++) {
    if (domEmail == whiteList[0]){
        console.log('Benvenuto');
    }
    else if (whiteList[1] == domEmail){
        console.log('Benvenuto');
    }
    else if (whiteList[2] == domEmail){
        console.log('Benvenuto');
    }
    else {
        console.log('errato');
    }
}