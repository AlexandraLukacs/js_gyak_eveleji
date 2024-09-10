export default class Kartya{
    //adatagok
    #obj={} //privát adattag -> #
    #szuloElem;
    //construktor
    constructor(obj, szuloElem){
        this.#obj=obj
        this.#szuloElem=szuloElem
        this.kutyaKiir()
        //gombelem a Kartya saját adattagja lesz
        this.gombElem=$(".kivalaszt:last")
        //console.log(this.gombElem)
        this.esemenyKezelo()
    }
    //tagfüggvények
    kutyaKiir(){
        //egyetlen egy kutya kiírása
        this.#szuloElem.append(`
            <div class = "card">
                <div class = "card-body-lg-4 col-md-6">
                    <h3 class = "card-title">${this.#obj.nev}</h3>
                    <p>kor: ${this.#obj.kor}</p>
                    <p>neme: ${this.#obj.nem}</p>
                    <button class="btn btn-success kivalaszt">kiválaszt</button>
                </div>
            </div>
            `)
    }

    //gombesemények kezelése
    esemenyKezelo(){
        this.gombElem.on("click",()=>{
            console.log(this)
            //létrehozunk egy aját eseményt
            const e=new CustomEvent("kivalaszt",{detail:this.#obj})
            window.dispatchEvent(e)
        })
    }

    //nyílt függvény esetén a this arra az osztály példányra mutat amelyik az adott nyíltfüggvényt körbefogja
}
