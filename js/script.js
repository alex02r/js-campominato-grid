/*
    SOLUZIONE creare una griglia 10x10;
    1 - aggiungere in html un bottone che permette all'utente di generare la griglia.
    2 - aggiungere lo scheletro della griglia in html
    3 - generare la griglia
        3.1 - creare una funzione che genera le celle createCell()
            3.1.1 - inizializziamo una costane a cui assegnamo la creazione dell'elemento div.
            3.1.2 - Alla costante aggiungiamo una classe (dove andiamo a definire le css i parametri della cella).
            3.1.3 - come return abbiamo la costante.
        3.2 - creare una funzione che aggiunge le celle nella griglia generateGrid(numCell, element)
            3.2.1 - ciclo for (let i=0; i<numCell; i++)
                3.2.2 - inizializziamo una variabile a cui assegnamo la funzione createCell();
                3.2.3 - a element applichiamo la funzione appendChild(variabile) per creare la cella;
    4 - inizializziamo una costante a cui assegnamo l'elemento html che deve contenere la griglia.
    5 - Chiamiamo la funzione per creare la griglia e gli passiamo il numero di celle e la variabile creata prima
        generateGrid(100, variabile);
*/

//funzione per creare la cella 
function createCell() {
    //aggiungiamo uun div con classe "cell" nell'html
    const elemento = document.createElement('div');
    elemento.classList.add('cell');

    return elemento;
}

//funzione che crea la griglia
function generateGrid(CellforRow, element) {
    //calcoliamo che la griglia deve essere un quadrato di n * n
    //dove n è dato dal numero di celle per riga
    let numCell = CellforRow * CellforRow;
    //inizializziamo un for di scrittura
    for (let i = 0; i < numCell; i++) {
        //creiamo la cella
        let cell = createCell();
        //la aggiungiamo a element
        cell.innerText = i+1;
        element.appendChild(cell);
    }
    /*    -----  PROBLEMA  ------- */
    //caclolare la dimensione della width della griglia
    element.style.setProperty('width', `calc(100px * ${CellforRow})`);
    element.style.setProperty('height', `calc(100px * ${CellforRow})`);
    /* --------------------------- */

}

const grid = document.getElementById('grid');
//chiamiamo la funzione per creare la griglia
const paly = document.getElementById('play');

paly.addEventListener('click', function(){
    //quando clicchiamo su play si deve creare la griglia
    grid.innerHTML = "";
    const select = document.getElementById('difficulty');
    let difficulty = select.value;
    let cell_row = 0;
    switch (difficulty) {
        case "1":
            //difficoltà facile
            //10 caselle per 10 righe
            cell_row = 10;
            break;
        case "2":
            //difficoltà normale
            //9 caselle per 9 righe
            cell_row = 9;
            break;
        case "3":
            //difficoltà facile
            //7 caselle per 7 righe
            cell_row = 7;
            break;
        default:
            //di defoult è facile
            cell_row = 10;
    }
    generateGrid(cell_row, grid);
});