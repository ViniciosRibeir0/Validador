var cpf ='37375374880'

if(ValidarCpf(cpf)){
    console.log('Cpf Válido')
}else{
    console.log('Cpf Inválido')
}



function ValidarCpf(cpf){
var soma = 0
var resto
    for(i = 1; i<=9; i++)

soma = soma +    parseInt(cpf.substring(i-1, i))*(11-i)


resto = (soma*10) % 11
if(resto == 10 || resto == 11)
    resto = 0


if(resto != cpf.substring(9,10)) return false
    
soma = 0
for(i = 1; i<=10; i++)

soma = soma +    parseInt(cpf.substring(i-1, i))*(12-i)


resto = (soma*10) % 11
if(resto == 10 || resto == 11)
    resto = 0


if(resto != cpf.substring(10,11)) return false


return true


   

}


