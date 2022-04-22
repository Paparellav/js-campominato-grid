// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

//1. Generare un ciclo che stampa dei numeri da 1 a 100.
let gridNumber;
let newElement;

const gridContainer = document.querySelector(".grid-container");
for (let i = 1; i <= 100; i++) {
    gridNumber = i;
    // console.log(gridNumber);

    //2. Creare un elemento html
    newElement = document.createElement("div");
    // console.log(newElement);

    //3. Aggiungere lo span al div creato pocanzi
    newElement.innerHTML = `<span>${gridNumber}</span>`;

    //4. Assegnare la classe grid-box
    newElement.classList.add("grid-box");

    // appendo questo elemnto al contenitore
    gridContainer.append(newElement);

    // aggiungo all'elmento appena creato la gestione del click
    const thisElement = newElement;
    console.log(thisElement);
    thisElement.addEventListener("click", function() {
        console.log(this);
        this.classList.toggle("active");
    });
}


