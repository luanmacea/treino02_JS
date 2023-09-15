
// --------------------CONHECENDO O FETCH E FAZENDO INJECTION--------------------

// // faz uma promisse para pegar um conteudo txt
// const sobre = fetch('./sobre.html')

// const div = document.createElement('div')

// //faz com que a promisse seja transformada em texto
// sobre.then(r =>  r.text())
// .then((body) => {
//   div.innerHTML = body
//   const titulo = div.querySelector('h1')
//   document.querySelector('h1').innerHTML = titulo.innerHTML
//   console.log(titulo)
// })


// ---------------------USANDO JSON--------------------------


// // faz uma promisse para pegar um conteudo txt
// const cep = fetch('https://viacep.com.br/ws/01001000/json/')


// //faz com que a promisse seja transformada em texto
// cep.then(r =>  r.json())
// .then((body) => {
//   const conteudo = document.querySelector('.conteudo')
//   console.log(body)
//   console.log(body.bairro)
//   conteudo.innerHTML = body.bairro
  
// })


// ---------------------USANDO BLOB (usado para imagens)--------------------------


// // faz uma promisse para pegar um conteudo txt
// const imagem = fetch('./assets/BEM-VINDO.gif')

// //faz com que a promisse seja transformada em texto
// imagem.then(r =>  r.blob())
// .then((body) => {
//   const blobUrl = URL.createObjectURL(body)
//   console.log(blobUrl)
//   const imagemDom = document.querySelector('img')
//   imagemDom.src = blobUrl
// })


// ---------------------USANDO CLONE--------------------------


// // faz uma promisse para pegar um conteudo txt
// const imagem = fetch('https://viacep.com.br/ws/01001000/json/')

// //faz com que a promisse seja transformada em texto
// imagem.then(r =>  {
//   const r2 = r.clone()
//   r.text().then((text) => {
//     console.log(text)
//   })
//   r2.json().then((json) => {
//     console.log(json)
//   })
//   console.log(r)
// })
// .then((body) => {
//   console.log(body)
// })



// ---------------------LIDANDO COM ERROS--------------------------


// // faz uma promisse para pegar um conteudo txt
// const imagem = fetch('./docs.txt')

// //faz com que a promisse seja transformada em texto
// imagem.then(response => {
//   console.log(response.url)
//   if(response.status === 404) {
//     console.log('Arquivo nao encontrado')
//   }
// })

