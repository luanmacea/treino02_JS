
//  -----------------------APRENDENDO COMO FAZER PROMISES-----------------------

// const promesa = new Promise((resolve, reject) => {
//   let condicao = true;

//   if (condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Andre", idade: 28 });
//     }, 1000);
//   } else {
//     reject(Error("Um erro aconteceu na promisse kadsaisda"));
//   }
// });

// const retorno = promesa
// .then(resolucao => {
//   setTimeout(() => {

//     resolucao.profissao = "Programador";
//     console.log(resolucao)

//   }, 1000);
//   return resolucao;
// })
// .then(resolucao => {
//   console.log(resolucao);
// }, rejeitada => {
//   console.log(rejeitada);
//   console.log(Error, "deu ruim garai kkkk")
// })
// .finally((resolucao) => {
//   console.log("Fim")
// })

// console.log(retorno);


// -----------------------APRENDENDO TIPOS DE PROMISES-----------------------


// const dados = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Dados carregados")
//   }, 1000)
// })

// const login = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Login realizado")
//   }, 1500)
// })

// // const carregouTudo = Promise.all([dados, login]);
// const carregouTudo = Promise.race([dados, login]);

// carregouTudo.then(resolucao => {
//   console.log(resolucao);
// })


// -----------------------APRENDENDO TIPO DE FETCH API-----------------------