// window.history.pushState(null, null, "sobre.html");

// window.addEventListener("popstate", () => {
//   console.log("popstate");
// })

const links = document.querySelectorAll('a')

function handleClick(event) {
  event.preventDefault()
  console.log(event.target)
  fetchPage(event.target.href)
  window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url){
  document.querySelector('.conteudo').innerHTML = 'Carregando...'
  const pageResponse = await fetch(url)
  const pageText = await pageResponse.text()
  replaceContent(pageText)
}

function replaceContent(newText){
  const newHtml = document.createElement('body')
  newHtml.innerHTML = newText

  const oldContent = document.querySelector('.conteudo')
  const newContent = newHtml.querySelector('.conteudo')


  oldContent.innerHTML = newContent.innerHTML
  document.title = newHtml.querySelector('title').innerHTML
}

window.addEventListener('popstate', () => {
  console.log(window.location.href)
  fetchPage(window.location.href)
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})