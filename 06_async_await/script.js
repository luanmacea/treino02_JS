// ---------------------USANDO ASYNC AWAIT--------------------------

// async function puxarDados() {
//   const responseDados = await fetch('./dados.json')
//   const dados = await responseDados.json()
//   console.log(dados)

//   document.body.innerHTML = dados.aula
// }

// puxarDados()


// ---------------------USANDO TRY E CATCH--------------------------


// async function puxarDados() {
//   try {
//     const responseDados = await fetch('./dados.json')
//     const dados = await responseDados.json()
//     console.log(dados)

//     document.body.innerHTML = dados.aula
//   } catch (error) {
//     console.log(error)
//   }
// }

// puxarDados()


// ---------------------AWAIT AO MESMO TEMPO--------------------------


async function puxarDados() {
  const responseDados = fetch('./dados.json')
  const responseClientes = fetch('./clientes.json')

  const jsonDados = await (await responseDados).json()
  const jsonClientes = await (await responseClientes).json()
  
  console.log(jsonDados)
  console.log(jsonClientes)

}

puxarDados()

async function puxarClientes() {
  // console nao ira esperar
  await new Promise(resolve => {
    setTimeout(() => {
      console.log("Esperando")
      resolve()
    }, 1000)
  })
  console.log("acabou")
}
puxarClientes()