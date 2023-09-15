export default function initFetch(){

}

async function fetchAnimais(url){
  const animaisResponse = await fetch(url)
  const animaisJSON = await animaisResponse.json()

  console.log(animaisJSON)
}

fetchAnimais('animais.json')