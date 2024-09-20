let varv = prompt ("Mis on sinu lemmikvärv?")
console.log(varv)

let vastusElement = document.querySelectior(#"vastus")
console.log(vastusElement)
vastusElement.innerHTML = "<div><" + "Minu lemmikvärv ei ole " + varv + "</div>"

let hinnang = "Minu lemmikvärv ei ole" + " " + varv + 

if (varv == "valge") {
    hinnang = "minu lemmikvärv on ka valge"
}
vastusElement.innerHTML += "<div>" + hinnang + "</div>"