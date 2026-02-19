
let asideElem = document.getElementById("szamok")
let articleElem = document.getElementById("tablazat")

export function eredmenyMeghatarozasa(inputMezo, kiirasHelye){
    let ertek = inputMezo.value
    let kiirt = "Válassz értéket (1-5)"

    switch (Number(ertek)) {
        case 1:
            kiirt = "elégtelen"
            break;
        case 2:
            kiirt = "elégséges"
            break;
        case 3:
            kiirt = "közepes"
            break;
        case 4:
            kiirt = "jó"
            break;
        case 5:
            kiirt = "jeles"
            break;                                                
    }

    kiirasHelye.innerHTML = kiirt;
}

export function szamGeneralas(){
    let szamLista = []
    let szam = 0

    for (let index = 0; index < 12; index++) {
        szam = Math.floor(Math.random()*111-10)
        szamLista.push(szam)
    }

    console.log(szamLista)

    return szamLista
}

export function szamKiiras(szamLista) {
    let kod = ""
    for (let index = 0; index < szamLista.length; index++) {
        let szam = szamLista[index];
        kod += `<div>${szam}</div>`
    }
    asideElem.innerHTML = kod
}

export function tablazatMegjelenites(adatListaHasznal) {
    let kod = `
                <table>
                    <tr>
                        <th>Név</th>
                        <th>Átlag</th>
                    </tr>
    `
        
        for (let index = 0; index < adatListaHasznal.length; index++) {
            kod += `
                    <tr>
                        <td>${adatListaHasznal[index].nev}</td>
                        <td>${adatListaHasznal[index].atlag}</td>
                    </tr>
                `
        }


    kod += `</table>`
    articleElem.innerHTML = kod
}