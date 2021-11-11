/**
 * Descrizione:
Includere Vue nel proprio progetto.
Doc Vue:  https://vuejs.org/v2/guide/
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const app = new Vue({

    el: '#root',

    data: {
        title: 'Hello World',
        myClasses: 'main-title',
        image: './img/hello-world.png',
    },
});