class Pokedex{
    getinfo(name){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
            .then((data) => data.json())
            .then((data) => {
                //DESESTRUCTURACION
                const [DATA=null] = data;
                const MESSAGE = DATA ||`el pokemon ${name} no existe`;

                console.log(MESSAGE.evolution);
            })
    }
}

const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander");