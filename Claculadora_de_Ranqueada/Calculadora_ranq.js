function SaldoHeroi(vitorias, derrotas){
  // Função para obter o saldo do herói a partir do número de vitórias e derrtos
  return vitorias - derrotas
}

function ClassificacaoHeroi(saldo){
  // Classificar heroi de acordo com seu saldo
  if(saldo <= 10){
    return "Ferro"
  } else if(saldo <= 20){
    return "Bronze"
  } else if(saldo <= 40){
    return "Prata"
  } else if(saldo <= 60){
    return "Ouro"
  } else if(saldo <= 90){
    return "Diamante"
  } else if(saldo <= 120){
    return "Lendário"
  }else
  return "Imortal"
}
SaldoRanqueada = SaldoHeroi(40,5)

console.log(`O saldo do herói é ${SaldoRanqueada} e ele está no nível ${ClassificacaoHeroi(SaldoRanqueada)}`)
