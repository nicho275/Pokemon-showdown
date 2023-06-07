//-------------------------------CLASSES-------------------------------------------
window.onload = function hola() { 
    function dano(pokemon, movimiento, tipo_de_ataque, tipo_de_defensa, pokemon_enemigo){
        let danoAdquirido;
        if(tipo_de_ataque == 0 && tipo_de_defensa == 0){
            danoAdquirido = 0.01*85*(((0.2*pokemon.nivel+1)*pokemon.ataque*movimiento.potencia)/25+pokemon_enemigo.defensa); 
        }else if(tipo_de_ataque == 0 && tipo_de_defensa == 1){
             danoAdquirido = 0.01*85*(((0.2*pokemon.nivel+1)*pokemon.ataque*movimiento.potencia)/25+pokemon_enemigo.defensa_especial); 
        }else if(tipo_de_ataque == 1 && tipo_de_defensa == 0){
             danoAdquirido = 0.01*85*(((0.2*pokemon.nivel+1)*pokemon.ataque_especial*movimiento.potencia)/25+pokemon_enemigo.defensa); 
        }else if(tipo_de_ataque == 1 && tipo_de_defensa == 1){
             danoAdquirido = 0.01*85*(((0.2*pokemon.nivel+1)*pokemon.ataque_especial*movimiento.potencia)/25+pokemon_enemigo.defensa_especial); 
        }
        return danoAdquirido;
    
    }
class Entrenador{

    constructor(nombre,origen, medallas, equipo = [], IA){

        this.nombre = nombre;
        this.origen = origen;
        this.medallas = medallas;
       this.equipo = equipo;
        this.IA = IA;
    }

    batalla(entrenador, entrenador_enemigo,index,indexMalo){



        if(entrenador.IA == 0){
        function movimiento(poke){
            let cadena1 = "Escoge el numero de los siguientes movimientos:";
            let  n = 1;
            poke.movimientos.forEach(element => {
            cadena1 += ("\n"+n+"."+ element.nombre);
            n++;
    });
            return cadena1;
        }

        let indice;
        do{
         indice = prompt(movimiento(entrenador.equipo[index]));
            
            if(indice < 1 || indice > entrenador.equipo[index].movimientos.length ||isNaN(indice)){

                alert("No se encontraron los movimientos que desea buscar, vuelva a intentarlo");

            }else if(!isNaN(indice)){
                indice = parseInt(indice);
                break;
            }
        }while(true);
        let movimientoindice = entrenador.equipo[index].movimientos[indice-1];
        alert(entrenador.nombre + " ha decidido utilizar el movimiento " + movimientoindice.nombre);
        console.log(entrenador.nombre + " ha decidido utilizar el movimiento " + movimientoindice.nombre);
        let defensa_enemigo_especial;
        let ataque_especial;

        //SACAR LA DEFENSA ESPECIAL
        if(entrenador_enemigo.equipo[indexMalo].defensa_especial != 0){

            defensa_enemigo_especial = Math.round(Math.random());
            if(defensa_enemigo_especial == 1){
            entrenador_enemigo.equipo[indexMalo].defensa_especial = 0;
            alert(entrenador_enemigo.nombre +" a decidido usar su defensa especial");
            console.log(entrenador_enemigo.nombre+ " a decidido usar su defensa especial");
            }
        }else{
            defensa_enemigo_especial = 0;
        }

        //SACAR EL ATAQUE EESPECIAL
        if(entrenador.equipo[index].ataque_especial != 0){

        do{

        ataque_especial = prompt("Decides utilizar tu ataque especial?\nSelecciona '0' para NO y '1' para SI");
        if(ataque_especial != 0 && ataque_especial != 1){
            alert("Unicamente se acceptan caracteres de '0' y '1', vuelva a intentarlo");
        }
        ataque_especial = parseInt(ataque_especial);

        }while(ataque_especial != 0 && ataque_especial != 1);
        
        if(ataque_especial == 1){
            entrenador.equipo[index].ataque_especial = 0;
            alert(entrenador.nombre +" a decidido usar su ataque especial");
            console.log(entrenador.nombre+ " a decidido usar su ataque especial");
        }

        }else{
            ataque_especial = 0;
        }
        //DANAR
        entrenador_enemigo.equipo[indexMalo].vida -= dano(entrenador.equipo[index],movimientoindice,ataque_especial, defensa_enemigo_especial,entrenador_enemigo.equipo[indexMalo]);
        alert( entrenador_enemigo.equipo[indexMalo].nombre + " de " +entrenador_enemigo.nombre + " ha recibido " + dano(entrenador.equipo[index],movimientoindice,ataque_especial, defensa_enemigo_especial,entrenador_enemigo.equipo[indexMalo])
         + " de daño, ahora tiene " + entrenador_enemigo.equipo[indexMalo].vida + " de vida");
         console.log(entrenador_enemigo.equipo[indexMalo].nombre + " de " +entrenador_enemigo.nombre + " ha recibido " + dano(entrenador.equipo[index],movimientoindice,ataque_especial, defensa_enemigo_especial,entrenador_enemigo.equipo[indexMalo])
         + " de daño, ahora tiene " + entrenador_enemigo.equipo[indexMalo].vida + " de vida");



         //ES UNA IA


        }else if(entrenador.IA == 1){

          let movimientoindice = entrenador.equipo[index].movimientos[Math.round(Math.random()*3)];
          alert(entrenador.nombre + " ha decidido utilizar el movimiento " + movimientoindice.nombre);
        console.log(entrenador.nombre + " ha decidido utilizar el movimiento " + movimientoindice.nombre);

        //ATAQUE ESPECIAL

        let defensa_enemigo_especial;
        let ataque_especial;

         if(entrenador.equipo[index].ataque_especial != 0){

            ataque_especial = Math.round(Math.random());
            if(ataque_especial == 1){
            entrenador.equipo[index].ataque_especial = 0;
            alert(entrenador.nombre +" a decidido usar su ataque especial");
            console.log(entrenador.nombre+ " a decidido usar su ataque especial");
            }
        }else{
            ataque_especial = 0;
        }

        //DEFENSA ESPECIAL

        if(entrenador_enemigo.equipo[indexMalo].defensa_especial != 0){

            do{
    
            defensa_enemigo_especial = prompt("Decides utilizar tu defensa especial?\nSelecciona '0' para NO y '1' para SI");
            if(defensa_enemigo_especial != 0 && defensa_enemigo_especial != 1){
                alert("Unicamente se acceptan caracteres de '0' y '1', vuelva a intentarlo");
            }
            defensa_enemigo_especial = parseInt(defensa_enemigo_especial);
    
            }while(defensa_enemigo_especial != 0 && defensa_enemigo_especial != 1);
            
            if(defensa_enemigo_especial == 1){
                entrenador_enemigo.equipo[indexMalo].defensa_especial = 0;
                alert(entrenador_enemigo.nombre +" a decidido usar su defensa especial");
                console.log(entrenador_enemigo.nombre+ " a decidido usar su defensa especial");
            }
    
            }else{
                defensa_enemigo_especial = 0;
            }


             //DANAR
        entrenador_enemigo.equipo[indexMalo].vida -= dano(entrenador.equipo[index],movimientoindice,ataque_especial, defensa_enemigo_especial,entrenador_enemigo.equipo[indexMalo]);
        alert( entrenador_enemigo.equipo[indexMalo].nombre + " de " +entrenador_enemigo.nombre + " ha recibido " + dano(entrenador.equipo[index],movimientoindice,ataque_especial, defensa_enemigo_especial,entrenador_enemigo.equipo[indexMalo])
         + " de daño, ahora tiene " + entrenador_enemigo.equipo[indexMalo].vida + " de vida");
         console.log(entrenador_enemigo.equipo[indexMalo].nombre + " de " +entrenador_enemigo.nombre + " ha recibido " + dano(entrenador.equipo[index],movimientoindice,ataque_especial, defensa_enemigo_especial,entrenador_enemigo.equipo[indexMalo])
         + " de daño, ahora tiene " + entrenador_enemigo.equipo[indexMalo].vida + " de vida");



        }

    }
}


class Pokemon{

    constructor(nombre, nivel,vida,ataque, ataque_especial,defensa,defensa_especial,velocidad,elemental,elemental_secundario, movimientos){
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        this.ataque = ataque;
        this.ataque_especial = ataque_especial;
        this.defensa = defensa;
        this.defensa_especial = defensa_especial;
        this.velocidad = velocidad;
        this.elemental = elemental;
        this.elemental_secundario = elemental_secundario; 
        this.movimientos = movimientos;
    }

}

class Movimiento{

    constructor(nombre,potencia, probabilidad, elemental, tipo){
        this.nombre = nombre;
        this.potencia = potencia;
        this.probabilidad = probabilidad;
        this.elemental = elemental;
        this.tipo = tipo;

    }
}

function ImprimirPokemones(cadena, i = 0){
    let cadena1 = "Escoge el numero de los siguientes pokemons para la batalla:";
    let  n = 1;
    cadena.forEach(element => {
        cadena1 += ("\n"+n+"."+ element.nombre);
        n++;
    });
    if(i == 0){
    cadena1+= "\nPon '0' si ya terminaste.";
    }
    return cadena1;
}

//-------------------OBJETOS-----------------------------------------

// PIKACHU
let movimiento1 = new Movimiento("Impactrueno",10, 80, "Eléctrico", "Fisico");
let movimiento2 = new Movimiento("Triple Rayo",20, 80,"Electrico","Fisico");
let movimiento3 = new Movimiento("Golpe de Cola",5, 70, "Normal","Fisico");
let movimiento4 = new Movimiento("Electrochoque",40,60, "Electrico", "Especial");
let movimientos = [movimiento1,movimiento2, movimiento3, movimiento4];
let Pikachu = new Pokemon("Pikachu",Math.round(Math.random()* 100 + 1), Math.round(Math.random()* 1000 + 100), 15,30 ,25, 40, 100, "Electrico","Bicho", movimientos);
// MAGIKARP
movimiento1 = new Movimiento("Salpicon",10, 80, "Agua", "Fisico");
movimiento2 = new Movimiento("Rayos Marinos",20, 80,"Agua","Fisico");
movimiento3 = new Movimiento("Golpe de Coleta",5, 70, "Normal","Fisico");
movimiento4 = new Movimiento("Chispas Acuaticas",40,60, "Electrico", "Especial");
movimientos = [movimiento1,movimiento2, movimiento3, movimiento4];
let Magikarp = new Pokemon("Magikarp",Math.round(Math.random()* 100 + 1), Math.round(Math.random()* 1000 + 100), 100,100 ,100, 100, 2000, "Agua","Tierra", movimientos);
// CHARIZARD
movimiento1 = new Movimiento("Llama Ardiente",10, 80, "Fuego", "Fisico");
movimiento2 = new Movimiento("Achicharronamiento",20, 80,"Fuego","Fisico");
movimiento3 = new Movimiento("Golpe de Coleta",5, 70, "Normal","Fisico");
movimiento4 = new Movimiento("Furia de Dragon",40,60, "Dragon", "Especial");
movimientos = [movimiento1,movimiento2, movimiento3, movimiento4];
let Charizard = new Pokemon("Charizard",Math.round(Math.random()* 100 + 1), Math.round(Math.random()* 1000 + 100), 30, 35 , 30, 40, 235, "Fuego","Dragon", movimientos);
// DIGLETT

movimiento1 = new Movimiento("Terremoto",10, 80, "Tierra", "Fisico");
movimiento2 = new Movimiento("Ataque Subterraneo",20, 80,"Tierra","Fisico");
movimiento3 = new Movimiento("Golpe Bajo Tierra",5, 70, "Normal","Fisico");
movimiento4 = new Movimiento("Escavadora Comelona",40,60, "Planta", "Especial");
movimientos = [movimiento1,movimiento2, movimiento3, movimiento4];
let Diglett = new Pokemon("Diglett",Math.round(Math.random()* 100 + 1), Math.round(Math.random()* 1000 + 100), 25,30 ,50, 100, 190, "Tierra","Planta", movimientos);
//ARCEUS
movimiento1 = new Movimiento("Fallo de Fabrica",10, 80, "Hada", "Fisico");
movimiento2 = new Movimiento("Llama Celestial",20, 80,"Hada","Fisico");
movimiento3 = new Movimiento("Golpe de Creacion",5, 70, "Normal","Fisico");
movimiento4 = new Movimiento("Separacion de Nucleos",40,60, "Volador", "Especial");
movimientos = [movimiento1,movimiento2, movimiento3, movimiento4];
let Arceus = new Pokemon("Arceus",Math.round(Math.random()* 100 + 1), Math.round(Math.random()* 1000 + 100), 50,60,40,45,300, "Hada","Volador", movimientos);
//Egotap
movimiento1 = new Movimiento("Bombardeo antiperfeccion",10, 80, "Hada", "Fisico");
movimiento2 = new Movimiento("Mirada de Pobreza",20, 80,"Hada","Fisico");
movimiento3 = new Movimiento("Golpe de Lujuria",5, 70, "Normal","Fisico");
movimiento4 = new Movimiento("Deslumbramiento Aturdidor",40,60, "Hada", "Especial");
movimientos = [movimiento1,movimiento2, movimiento3, movimiento4];
let Egotap = new Pokemon("Egotap",Math.round(Math.random()* 100 + 1), Math.round(Math.random()* 1000 + 100), 60,70 ,60, 70, 1, "Hada","Tierra", movimientos);



let pokemons = [Pikachu,Magikarp, Charizard, Diglett, Arceus, Egotap];
let pokebolas = [];



    let  nombre = prompt("Cual es tu nombre? entrenador");
    let origen = prompt("Cual es tu origen?");
    let medallas = prompt("Cuantas medallas tienes?");
    let x = 1;
    do{
        
        let indice_string = prompt(ImprimirPokemones(pokemons));
        if(indice_string == "0"){
            break;
        }
        if(!(isNaN(indice_string))){
            let indice = parseInt(indice_string);
            if(indice > pokemons.length || indice < 0){alert("El numero no esta en el rango admitido, vuelva a intentarlo")}else{x++;
                pokebolas.push(pokemons[indice-1]);
                pokemons.splice(indice-1, 1);
            }
            
        }else{
            alert("Este no es un numero, vuelve a intentarlo");
        }
    }while(x<7);

 let entrenador = new Entrenador(nombre, origen, medallas,pokebolas,0);
 console.log("Se presenta el entrenador " + entrenador.nombre);
 alert("Se presenta el entrenador " + entrenador.nombre);

 pokemons = [Pikachu,Magikarp, Charizard, Diglett, Arceus, Egotap];
pokebolas = [];
x = 1;
do{
    let indice = Math.round(Math.random()*(7-x));
    pokebolas.push(pokemons[indice]);
    pokemons.splice(indice,1);
    x++;

}while(x<5);

let sixto = new Entrenador("Sixto","Su Casa",10,pokebolas,1); 
console.log("Se presenta el entrenador Sixto");
alert("Se presenta el entrenador " + sixto.nombre);
//PELEA

alert(entrenador.nombre + " y " + sixto.nombre + " se han retado a un duelo");
console.log(entrenador.nombre + " y " + sixto.nombre + " se han retado a un duelo");


do{
let index;
let bandera = 0;
let indexMalo;

    do{
       
 index = prompt(ImprimirPokemones(entrenador.equipo,1));
if(index > entrenador.equipo.length || index < 1){alert("El numero no esta en el rango admitido, vuelva a intentarlo")}else{
    break;
}
    }while(true);
    index = parseInt(index);
    index -= 1;
     indexMalo = Math.round(Math.random() * (sixto.equipo.length-1));
    console.log(indexMalo); //IGNORAR ESTO, quien sabe porque, si lo quito, no funciona ._.
    

    alert("El entrenador " + entrenador.nombre + " a elegido a " + entrenador.equipo[index].nombre );
    console.log("El entrenador " + entrenador.nombre + " a elegido a " + entrenador.equipo[index].nombre);
    alert("El entrenador " + sixto.nombre + " a elegido a " + sixto.equipo[indexMalo].nombre);
    console.log("El entrenador " + sixto.nombre + " a elegido a " + sixto.equipo[indexMalo].nombre);

    do{
        entrenador.batalla(entrenador, sixto, index, indexMalo);
        if(sixto.equipo[indexMalo].vida <= 0){
            alert(sixto.equipo[indexMalo].nombre +" de "+ sixto.nombre + " ha sido derrotado");
        console.log(sixto.equipo[indexMalo].nombre +" de "+ sixto.nombre + " ha sido derrotado");
        alert(entrenador.equipo[index].nombre + " de " + entrenador.nombre +" ha sido el ganador");
        console.log(entrenador.equipo[index].nombre + " de " + entrenador.nombre +" ha sido el ganador");
            sixto.equipo.splice(indexMalo,1);
            bandera =1;
        }else{
            bandera = 0;
        }
        if(bandera != 1){
        sixto.batalla(sixto, entrenador, indexMalo, index);
        if(entrenador.equipo[index].vida <= 0){

            alert(entrenador.equipo[index].nombre +" de "+ entrenador.nombre + " ha sido derrotado");
            console.log(entrenador.equipo[index].nombre +" de "+ entrenador.nombre + " ha sido derrotado");
            alert(sixto.equipo[indexMalo].nombre + " de " + sixto.nombre +" ha sido el ganador");
            console.log(sixto.equipo[indexMalo].nombre + " de " + sixto.nombre +" ha sido el ganador");
            entrenador.equipo.splice(index,1);
            bandera = 1;
        }else{
            bandera =0;
        }

        }

    }while(bandera != 1);

    

    



}while(sixto.equipo.length != 0 && entrenador.equipo.length != 0);

if(sixto.equipo.length == 0){
    alert("SIXTO HA SIDO ELIMINADO, SE HA QUEDADO SIN POKEMONS EN SU MOCHILA");
    alert(entrenador.nombre + " HA GANADO ESTE COMBATE RECIBE UNA MEDALLA");
    entrenador.medallas++;
    alert(entrenador.nombre + " AHORA TIENE " + entrenador.medallas + " MEDALLAS");

    console.log("SIXTO HA SIDO ELIMINADO, SE HA QUEDADO SIN POKEMONS EN SU MOCHILA");
    console.log(entrenador.nombre + " HA GANADO ESTE COMBATE RECIBE UNA MEDALLA");
    console.log(entrenador.nombre + " AHORA TIENE " + entrenador.medallas + " MEDALLAS");
}else{

    alert(entrenador.nombre + " HA SIDO ELIMINADO, SE HA QUEDADO SIN POKEMONS EN SU MOCHILA");
    alert("SIXTO HA GANADO ESTE COMBATE RECIBE UNA MEDALLA");
    sixto.medallas++;
    alert("SIXTO AHORA TIENE " + sixto.medallas + " MEDALLAS");

    console.log(entrenador.nombre + " HA SIDO ELIMINADO, SE HA QUEDADO SIN POKEMONS EN SU MOCHILA");
    console.log("SIXTO HA GANADO ESTE COMBATE RECIBE UNA MEDALLA");
    console.log("SIXTO AHORA TIENE " + sixto.medallas + " MEDALLAS");
}




}