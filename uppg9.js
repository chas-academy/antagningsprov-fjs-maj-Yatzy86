

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
    function sort(siffror){
        for (let i = 0; i < siffror.length; i++) {
            const tal = siffror[i];
            if (tal % 2 === 0) {
                console.log(tal + " är jämt");
            } else {
                console.log(tal + " är udda");
            }
        }
    }
    // anropa funktionen och skicka med en array som argument
    const minArray = [1, 2, 3, 4, 5, 6, 7];
    sort(minArray);
  
}
uppg9();

module.exports = { uppg9 };