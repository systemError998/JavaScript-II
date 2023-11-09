

let addTodo = function(bottone) {
    bottone.preventDefault()
    let ul = document.querySelector("#toDoList") //Seleziono la lista dove lavorare
    let input = document.querySelector("input") //Seleziono input
    if (input.value.trim().length != "") {   //se il testo è vuoto 
        let listItem = document.createElement("li")  //creo elemento lista
        listItem.innerText = input.value     //come testo nella lista metto quello dell'input
        ul.appendChild(listItem)             //appendo il listitem alla lista
        let cestina = document.createElement("button")  //creo bottone
        listItem.appendChild(cestina)        //lo appendo affianco al list item
        cestina.innerText = "Delete"        
        cestina.addEventListener("click", () => {
            listItem.remove()
        })
        listItem.addEventListener("click", () =>{
            if (listItem.style.textDecoration === "line-through") {
                listItem.style.textDecoration = "none"
            } else {
                listItem.style.textDecoration = "line-through"
            }
            
        })
    } else { alert("Inserisci un testo por favor") }
    input.value= ""
}

let button = document.querySelector("form button")
button.addEventListener("click", addTodo)




