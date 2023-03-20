let res = document.getElementById('res')

let pais = ['Chile','Bolívia','Brasil','Argentina','Paraguai']
let cidades = new Array('Tijucas','Itajaí','São José')

// console.log(pais[2])
// console.log(cidades[2])


pais.unshift('Colombia')
pais.push('Uruguai')
console.log(pais)
console.log(cidades)

function inserir (){

    res.innerHTML += pais +'<br>'
    res.innerHTML += cidades + '<br>'
}


                                                    