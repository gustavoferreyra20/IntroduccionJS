class Persona { 
    constructor(nombre, edad) {
         this.nombre = nombre;
         this.edad = edad; 
        }

        presentarse() {
            return "Hola soy "+this.nombre+" y tengo "+this.edad+" años.";
        }
    }

class Profesor extends Persona {
    
    constructor(nombre, edad){
        super(nombre, edad);
        this.estudiantes = []
    }

    addEstudiante(estudiante){
        this.estudiantes.push(estudiante);
        this.estudiantes[this.estudiantes.length - 1].setProfesor(this);
    }

    enseñando(){
        console.log("Mis alumnos son: ");
        this.estudiantes.forEach(element => {
            console.log(element.nombre);
        });
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
        console.log("Mi profesor es: "+this.profesor.nombre);
    }

}

var estudiante1 = new Estudiante("Raul", 78);
var estudiante2 = new Estudiante("Gustavo", 19);

var profesor = new Profesor("Juan", 32);

profesor.addEstudiante(estudiante1);
profesor.addEstudiante(estudiante2);

profesor.enseñando();
estudiante1.estudiando();

