console.log ("Tere")

let varvid = [
    "white",
    "black",
    "yellow",
    "darkgreen",
    "beige"
]
function loeNimi(){
    let sisestusElement = document.getElementById("sisendNimi")
    tervitus(sisestusElement.value) 
}

function valjasta(sisend) {
    document.getElementById("valjund").innerHTML += "<div>" + sisend +  "</div>"
}

function tervitus(nimi){
    if (nimi !== undefined) {
    valjasta ("Tere! " + nimi)
} else {
    valjasta ("Tere tundmatu")
}
 }

function valjastaVarvid(){
for (let i=0; i < varvid.length; i++) {
    let varv = "<span style= 'color:" + varvid[i] + "'>" + varvid[i] + "</span>"
    valjasta(varv)
}
}


tervitus("Mati")
tervitus("Kati")
tervitus()

valjastaVarvid()