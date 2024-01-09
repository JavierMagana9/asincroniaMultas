const id=2
let nombre;
let nota;

const arrayAlumnos=[
  {id:1,nombre:'Pepe'},
  {id:2,nombre:'Ana'},
  {id:3,nombre:'Juan'},
  {id:4,nombre:'Pepi'},
  {id:5,nombre:'bea'}	
];


const arrayNotas=[
  {id:1,nota:8},
  {id:2,nota:7},
  {id:5,nota:9},
];

const arrayBecas=[
  {id:1,beca:'si'},
  {id:2,beca:'no'},
  {id:5,beca:'si'},
]


const getAlumno=(id)=>{
  const nombre=arrayAlumnos.find((item)=>item.id===id)?.nombre
  console.log(item)
  return new Promise((resolve,reject)=>{
      if(nombre) resolve(nombre);
		else reject(`El alumno con id ${id} no existe`)
  })
}


const getNota=(id)=>{
   const nota=arrayNotas.find((item)=>item.id===id)?.nota
   return new Promise((resolve,reject)=>{
	if(nota) resolve(nota)
	else reject(`el alumno con id ${id} no tiene nota`)
   })

}

const getBeca=(id)=>{	
  const beca=arrayBecas.find((item)=>item.id===id)?.beca
    return new Promise((resolve,reject)=>{
	  if(beca=='si') resolve(beca)
	   else reject(`el alumno con id ${id} no tiene beca`)
  })
}




getAlumno(id)
	.then((respuesta)=>{
		nombre=respuesta
		return getNota(id);
	})
	.then((respuesta)=>{
		nota=respuesta
		return getBeca(id);
	})
	.then((respuesta)=>{
		console.log(`El alumno ${nombre} con id ${id} tiene una nota de ${nota} y ${respuesta} está becado`)
	})
	.catch((error)=>{console.log(error)})
