
let whiteList = ['carlo@gmail.com', 'giulia@libero.it', 'giovanni@hotmail.it'];

//Punto al bottone e inserisco tutto al suo interno per eseguire il programma solo una volta premuto
const domButton = document.getElementById('btn');
domButton.addEventListener('click',
    function(){
        //punto all'input email e prendo il suo contenuto
        const domEmail = document.getElementById('email');
        const email = domEmail.value;
        //creo un ciclo che conta quanti elementi ci sono nell'array
        for(let i = 0; i < whiteList.length;  i++) {
            
            if (email == whiteList[i]){
                document.getElementById('text-email').innerHTML = `benvenuto ${email}`;
                console.log('Benvenuto');
            }
            else {
                console.log('errato');
            }
        }
    }
)

