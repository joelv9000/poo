class Pokemon{

    name ="";
    type="";
    evolutions=[];
/*
    constructor(){

    }

    constructor(name){
        this.name = name;
    }

    constructor(name ='Charmander',type){
        this.name = name;
        this.type = type;  
    }*/

    constructor(name='charmander',type= 'Fuego' ,evolutions =[]){
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
    }

    attack(){
        return `${this.name}; esta atacando `;
    }

    evolve(evolution = 0){
        const EVOLVE = this.evolutions[evolution]||"";
        let message = "No puedo evolucionar";

        if(EVOLVE){
            message= `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name= EVOLVE;
        }

        return message;


    }
}

const charmander = new Pokemon('Charmander','Fuego',['Charmaleon','Charizar']);

//charmander.evolve();
//charmander.evolve(10);

console.log (charmander.name);
console.log (charmander.attack());
console.log (charmander.evolve());
console.log (charmander.attack());
console.log (charmander.evolve(1));
console.log (charmander.attack(1));
console.log (charmander.name);