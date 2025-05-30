

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
const personer = [
    { name: "Anna", age: 25 },
    { name: "Erik", age: 32 },
    { name: "Sara", age: 45 },
    { name: "Jonas", age: 29},
    { name: "Lina", age: 38},
];

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
function skrivUtOver30(personArray) {
    for (let i = 0; i < personArray.length; i++) {
        if (personArray[i].age > 30) {
            console.log(personArray[i].name);
        }
    }
}
// anropa funktionen och skicka med arrayen som argument
skrivUtOver30(personer);

}
uppg8();

module.exports = { uppg8 };