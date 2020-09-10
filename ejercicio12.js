class Persona { 
    constructor(nombre, edad) {
         this.nombre = nombre;
         this.edad = edad; 
        }

        presentarse() {
            return "Hola soy "+this.nombre+" y tengo "+this.edad+" años.";
        }
    }

class Estudiante extends Persona{

    constructor(nombre, edad){
        super(nombre, edad);
    }

    setProfesor(profesor){
        this.profesor = profesor;
    }

    estudiando(){
        console.log("Mi profesor es: "+this.profesor);
    }

}

var estudiante = new Estudiante("Gustavo", 19);

estudiante.setProfesor("juan")
estudiante.estudiando();

