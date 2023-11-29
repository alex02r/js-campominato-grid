Ciao ragazzi,
Esercizio di oggi: Griglia Campo Minato
nome repo: js-campominato-grid
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata (click su un pulsante... cosa dovrà essere chiamata? Quindi cosa dobbiamo definire prima?).
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
BONUS
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
SUPER BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
In allegato esempi di layout da avere come guida nel caso non abbiate idee sullo stile grafico.




**SOLUZIONE creare una griglia 10x10**
1 - aggiungere in html un bottone che permette all'utente di generare la griglia.
2 - aggiungere lo scheletro della griglia in html
3 - generare la griglia
    3.1 - creare una funzione che genera le celle createCell()
        3.1.1 - inizializziamo una costane a cui assegnamo la creazione dell'elemento div.
        3.1.2 - Alla costante aggiungiamo una classe (dove andiamo a definire le css i parametri della cella).
        3.1.3 - come return abbiamo la costante.
    3.2 - creare una funzione che aggiunge le celle nella griglia generateGrid(numCell, element)
        3.2.1 - ciclo for (let i=0; i < numCell; i++)
            3.2.2 - inizializziamo una variabile a cui assegnamo la funzione createCell();
            3.2.3 - a element applichiamo la funzione appendChild(variabile) per creare la cella;
4 - inizializziamo una costante a cui assegnamo l'elemento html che deve contenere la griglia.
5 - Chiamiamo la funzione per creare la griglia e gli passiamo il numero di celle e la variabile creata prima
generateGrid(100, variabile);