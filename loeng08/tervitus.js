let nimi = prompt("Sisesta enda nimi")
console.log(nimi)

let tervitusElement = document.querySelector("#tervitus")
console.log(tervitusElement)
tervitusElement.innerHTML = "<h2>" + "Tere, " + nimi "</h2>"
tervitusElement.innerHTML = "<div>" + "tähtede arv sinu nimes: " + nimi.length "</div>"