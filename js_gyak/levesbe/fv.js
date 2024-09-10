export function kutyaKiir(kutya) {
    //egyetlen egy kutya kiírása
    const taroloELEM=$(".tartalom")
    taroloELEM.append(`
        <div class = "card">
            <div class = "card-body-lg-4 col-md-6">
                <h3 class = "card-title">${kutya.nev}</h3>
                <p>kor: ${kutya.kor}</p>
                <p>neme: ${kutya.nem}</p>
                <button class="btn btn-success">kiválaszt</button>
            </div>
        </div>
        `)
}