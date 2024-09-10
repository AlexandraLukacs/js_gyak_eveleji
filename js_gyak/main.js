import { kutyaLISTA } from "./adatok.js"
import Kartyak from "./view/Kartyak.js"

const kivalasztottKutyaLista=[]
const taroloElem=$(".tartalom")
const kivElem=$(".kivalasztott")

new Kartyak(kutyaLISTA, taroloElem)

//tegyük bele a kiválasztott kutya adatait a kivalasztottKutyaListaba

//itt feliratkozunk a Kartya osztályban létrehozott saját eseményükre
$(window).on("kivalaszt", (event)=>{
    console.log(event.detail)
    kivalasztottKutyaLista.push(event.detail)
    console.log(kivalasztottKutyaLista)
    new Kartyak(kivalasztottKutyaLista,kivElem)
})