
// compatibilidade = % = tanto de tanto 2/4 ou 50%
// recomendacao = o que falta "ciano","vermelho"


let tenho = ["azul","amarelo","laranja","violeta"]

let precisa = ["amarelo","ciano","vermelho", "azul"]

//os que faltam

let resultado = []
for(let item of precisa){
    if(!tenho.includes(item)){
        resultado.push(item)
    }
}



let falta = precisa.filter((item)=>{
    return !tenho.includes(item)
})

let possui = precisa.filter((item)=>{
    return tenho.includes(item)
})
let qtdPossui = possui.length
let qtdTotal = precisa.length

let porcentagem = (qtdPossui / qtdTotal) * 100 

