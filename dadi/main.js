const domComputer = Math.floor((Math.random() * 6) + 1);
console.log(domComputer);

const domPlayer = Math.floor((Math.random() * 6) + 1);
console.log(domPlayer);

if (domPlayer > domComputer){
    console.log('vince il Player');
}
else if(domComputer > domPlayer) {
    console.log('Vince il Computer');
} 
else if (domComputer == domPlayer) {
    console.log ('pareggio');
}
else {
    console.log('Qualcosa non va :|');
}