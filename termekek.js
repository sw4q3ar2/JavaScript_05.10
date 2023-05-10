import Termek from "./termek.js";
class Termekek{
    #adatLista = [];
    #kedvencekLista = [];
    constructor(adatLista) {
        this.#adatLista = adatLista;
        for (let index = 0; index < adatLista.length; index++) {
            const termek = new Termek();
        }
    }
}
