import { kutyaLISTA } from "../adatok.js"
//import { kutyaKiir } from "./fv.js"
import Kartya from "../Kartya.js"

// kutyák adatait megjelenítenénk a tartalom divben külön divekben, egymás mellett az egyes kutyák adatait

//hozzunk létre változókat
const cim="Minden amit  kutyáról tudni kell"
//cim="Ez egy másikk alcím"
let nev="Jenő"
nev="Béla"
//címet írjuk ki a headerbe a meglévő cím alá
//megfogjuk a html elemet
const cimElem=$("header")
console.log(cimElem)
//beleírunk/hozzáfűzünk
cimElem.append(`<p>${cim}</p>`)

/*const kutya1={
    nev:"Dézi",
    kor:12,
    nem:"nőstény"
}*/

/*kutya1.nev="Morzsa"
console.log(kutya1)*/

//console.log(kutyaLISTA[0].nev)

/*function kutyakiir() {
    //egyetlen egy kutya kiírása
    const taroloELEM=$(".tartalom")
    taroloELEM.append(`
        <div>
            <h3>${kutyaLISTA[0].nev}</h3>
            <p>${kutyaLISTA[0].kor}</p>
            <p>${kutyaLISTA[0].nem}</p>
        </div>
        `)
}*/

const taroloElem=$(".tartalom")

/*kutyaLISTA.forEach((elem)=>{
    console.log(elem)
    new Kartya(elem, taroloElem)
})*/

