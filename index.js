import { adatLista } from "./adat.js";
import { eredmenyMeghatarozasa, szamKiiras, tablazatMegjelenites } from "./fuggvenyek.js";
import { szamGeneralas } from "./fuggvenyek.js";

let inputMezo = document.getElementById("ertekeles")
let kiirasHelye = document.getElementById("eredmeny")
let szamolGomb = document.getElementById("gomb")

szamolGomb.addEventListener("click",kiir)

function kiir(){
    eredmenyMeghatarozasa(inputMezo, kiirasHelye)
}

let szamLista = szamGeneralas();
szamKiiras(szamLista);

let adatListaHasznal = adatLista
tablazatMegjelenites(adatListaHasznal);