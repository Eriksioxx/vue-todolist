console.log('JS OK!');

const tasks = [
    {
        text: 'Alzarmi dal letto',
        done: true
    },
    {
        text: 'Lavare i denti',
        done: false
    },
    {
        text: 'Preparare la colazione',
        done: true
    },
    {
        text: 'Portare fuori il cane',
        done: true
    },
    {
        text: 'Prepararsi mentalmente',
        done: false
    },
    {
        text: 'Entrare a lezione Boolean',
        done: true
    },
];

/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
Buon lavoro e buon divertimento!
*/

const app = new Vue({
    el: '#todo-app',
    data: {
        tasks,
        newTask: 'Inserisci testo'
    },
    methods: {
        taskClicked(index) {
            this.tasks[index].done = true;
        },
        deleteTask(index) {
            console.log(`filtro tasks in modo da avere solo i task con indice diverso da ${index}`)
            const filteredArray = this.tasks.filter(
                (item, i) => {
                    return index !== i;
                }
            )
            console.table(filteredArray);
            this.tasks = filteredArray;
        },
        addTask() {

            const newTask = {
                text: this.newTask,
                done: false
            }

            this.tasks.push(newTask);
            this.newTask = '';

        }
    }

})