const prompt = require('prompt-sync')();

let nickHero = prompt("Qual o nome do Herói?");
let xp = parseInt(prompt("Quanto de XP você tem?"));

if (isNaN(xp)) {
    console.log("Por favor, insira um valor numérico para XP.");
} else {
    let nivel;
    
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nickHero} está no nível de ${nivel}`);
}