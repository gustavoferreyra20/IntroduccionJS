class Persona { 
    constructor(nombre, edad) {
         this.nombre = nombre;
         this.edad = edad; 
        }

        presentarse() {
            return "Hola soy "+this.nombre+" y tengo "+this.edad+" años.";
        }
    }

var persona = new Persona("Gustavo", 19);
console.log(persona.presentarse());