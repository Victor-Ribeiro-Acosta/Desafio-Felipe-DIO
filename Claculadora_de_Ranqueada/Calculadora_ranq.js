function SaldoJogador(vitorias, derrotas){
  return vitorias - derrotas
}

function ClassificacaoJogador(saldo){
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
SaldoRanqueada = SaldoJogador(40,5)

console.log(`O saldo do herói é ${SaldoRanqueada} e ele está no nível ${ClassificacaoJogador(SaldoRanqueada)}`)
