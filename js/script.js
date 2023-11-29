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

