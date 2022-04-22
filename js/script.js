// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
const gridContainer = document.querySelector(".grid-container");
gridContainer.innerHTML = "";
console.log(gridContainer);

const playButton = document.querySelector("button");
playButton.addEventListener("click", function () {
    for (let i = 1; i <= 100; i++) {
        const gridNumber = i;
        // console.log(gridNumber);
    
    
        //2. Creare un elemento html
        const newElement = document.createElement("div");
        // console.log(newElement);
    
        //3. Aggiungere lo span al div creato pocanzi
        newElement.innerHTML = `<span>${gridNumber}</span>`;
    
        //4. Assegnare la classe grid-box
        newElement.classList.add("grid-box");

        // aggiungo all'elmento appena creato la gestione del click
        
        newElement.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    
        // appendo questo elemnto al contenitore
        gridContainer.append(newElement);
    
       
    }
});
