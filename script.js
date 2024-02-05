async function busca() {
  let id = prompt("Numero pokemon (1 a 151")
  if (id != null) {


    var url = "https://pokeapi.co/api/v2/pokemon/" + id
    var response = await fetch(url)
    var data = await response.json()

    var nome = data.name
    document.getElementById("pokename").innerHTML = name
    console.log(nome);
    var sprite = data.sprites.front_default
    document.getElementById("pokeimg").src = sprite

    url = "https://pokeapi.co/api/v2/pokemon-species/" + id
    response = await fetch(url)
    data = await response.json()
    var sobre = data.flavor_text_entries[0].flavor_text
    document.getElementById("pokesobre").innerHTML = sobre
    console.log(desc)
  }
}
