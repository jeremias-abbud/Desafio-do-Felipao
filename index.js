//Desafio classificador de nível de herói

let nome = "Hulk"
let nivel = ""
let XP = 8000
if(XP < 1000){
    nivel = " Ferro "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 1000 && XP <= 2000){
    nivel = " Bronze "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 200 && XP <= 5000){
    nivel = " Prata "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 6000 && XP <= 7000){
    nivel = " Ouro "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 7000 && XP <= 8000){
    nivel = " Platina "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 8000 && XP <= 9000){
    nivel = " Ascendente "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 9000 && XP <= 1000){
    cinel = " Imortal "
    console.log("O herói " + nome + " está no nível : " + nivel)
}else if(XP > 10000){
    nivel = " Radiante "
    console.log("O herói " + nome + " está no nível : " + nivel)
}
