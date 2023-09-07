
let xp = 1000   // Informando o nível de experiencia de seu herói
let nivel = ""

if(xp <= 1000){
  nivel = "Ferro"
} else if(xp <= 2000){
  nivel = "Bronze"
} else if(xp <= 3000){
  nivel = "Prata"
} else if(xp <= 5000){
  nivel = "Ouro"
} else if(xp <= 7000){
  nivel = "Platina"
} else if(xp <= 10000){
  nivel = "Imortal"
} else {
  nivel = "Lendario"
}

console.log("Seu herói é do nível " + nivel)