//Elementos a capturar: quiero el boton para
const formulario = document.querySelector('#formulario')
const datosTabla = document.querySelector('#datosTabla')
const rellenar = document.querySelector('#rellenar')
const boton = document.querySelector('#button')

//elementos que tengo que pintar
const arrayDatos = [
    {
        matricula: "853-V",
        modelo: "modelo1",
        propietario: "Pedro"
    },
    {
        matricula: "421-J",
        modelo: "modelo2",
        propietario: "Jorge"
    },
    {
        matricula: "666-B",
        modelo: "modelo3",
        propietario: "Belen"
    }

]

const arrayMultas = [
    {
        matricula: "853-V",
        multa: ["multa1", "multa2"]
    },
    {
        matricula: "8421-J",
        multa: ["multa1"]
    },
    {
        matricula: "666-B",
        multa: []
    }
]
//Eventos, cuando se realizaran las funciones

formulario.addEventListener("submit", (ev) => {
    ev.preventDefault();
   const texto = rellenar.value
   //console.log(texto)
   buscaMatricula(texto)
})


/*funciones: 
-quiero que en rellenar se comprueben los datos -quiero pintar en una frase si existe la matricula pero no tiene multas o pintar ver si existe la matricula
-pintar los datos si coincide la matricula
*/
const validaRellenar = () => {
    //regexp
    

    //buscaMatricula()
}

const pintaDatos = () => {
}

const buscaMatricula = (texto) => {
    
    const laMatricula = arrayDatos.find((item) => item.matricula == texto)?.matricula 

    return new Promise((resolve, reject) => {
        if (laMatricula) {
            resolve(laMatricula)
            
        } 
        else {
            reject(`No hay ninguna matricula ${texto}`)
        }
    })

}



const pintaFrase = () => {
    
}

validaRellenar()
//console.log(buscaMatricula())


buscaMatricula(texto)
    .then((respuesta) => {
        console.log("dentro then", respuesta)
    })
    .catch((error) => {
        console.log("dentro error",error)
    })


