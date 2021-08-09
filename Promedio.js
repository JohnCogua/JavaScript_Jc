

function calcularpromedio (lista) { 
    //let sumalista = 0;
    //for (let i = 0; i < lista.length; i++){
    //    sumalista = sumalista + lista[i];
    //};

    const sumalista = lista.reduce(
        function (valoracumulado = 0, nuevoelemento) {
            return valoracumulado + nuevoelemento;
        }
    )

    promediolista = sumalista/lista.length;
    return promediolista;
};


const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}


console.log(mode(NUMBERS)); //5
