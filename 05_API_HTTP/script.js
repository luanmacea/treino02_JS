const url = 'https://jsonplaceholder.typicode.com/posts/2'
const options = {
  method: 'HEAD',
}
const conteudo = document.querySelector('.conteudo')

fetch(url, options)
.then(response => {
  console.log(response.headers.get('Cache-Control'))
})

