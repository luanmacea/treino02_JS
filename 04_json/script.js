// --------------------USANDO JSON--------------------------

fetch('./dados.json')
.then(res => res.json())
.then(json => {
  json.forEach(materia => {
    // console.log(materia.id)
  })
})

// ----------------------USANDO PARSE E STRINGFY-------------------
// parse transforma em json enquanto strinfy transforma em string
fetch('./dados.json')
.then(res => res.text())
.then(json => {
  // console.log(json)
  const jsonFinal = JSON.parse(json)
  // console.log(jsonFinal)
})

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "1"
}

const string = JSON.stringify(configuracoes)
console.log(string)

// ----------------------PASSANDO PRO LOCALSTORAGE-------------------

localStorage.config = string

console.log(JSON.parse(localStorage.config))