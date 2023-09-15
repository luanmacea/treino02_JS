const botao = document.getElementById('botao')
const conteudo = document.querySelector('.conteudo')
const CEP = document.getElementById('cep')

function limparCampo(lugar) {
  lugar.value = ""
  console.log(lugar)
}

botao.addEventListener('click', function () {
  const cep = CEP.value

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(r => r.text())
      .then((body) => {
        if (body.erro) {
          console.log("cep invalido")
        } else {
          console.log(body)
          conteudo.innerHTML = body
        }
        limparCampo(cep)
      })
      .catch(rejeitada => {
        console.log(rejeitada)
        console.log("codigo errado ou cep nao online")
      })
  } else {
    console.log("cep sem digitos o suficiente")
  }
})


const bit = document.querySelector('.bitcoin')

const bitcoin = new Promise((resolve) => {
  setInterval(() => {
    fetch('https://blockchain.info/ticker')
    .then(r => r.json())
    .then((data) => {
      valor = data.BRL.buy
      console.log(valor)
      bit.innerHTML = valor
    })
  }, 1000 * 15)
})

const chuck = document.getElementById('chuck')
const botao2 = document.getElementById('botao2')

botao2.addEventListener('click', function () {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then((body) => {
    console.log(body.value)
    chuck.innerHTML = body.value
  })
})