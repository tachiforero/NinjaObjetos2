class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }

    sayName(){
        console.log (this.nombre)
    }

    showStats(){
        console.log (this.nombre, this.fuerza, this.velocidad, this.salud)
    }

    drinkShake (){
        console.log (this.salud+10)
    }
}

const ninja1 = new Ninja("Hyabusa","hipertenso");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor (nombre){
    super (nombre)
    this.salud = 200 
    this.velocidad = 10
    this.fuerza = 10
    this.sabiduria = 10
    }

    speakWisdom(){
        super.drinkShake ()
        console.log ("soy sabio")
    }
}
const sensei1 = new Sensei ("esperanza");
sensei1.speakWisdom();
sensei1.showStats();





