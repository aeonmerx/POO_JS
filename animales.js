// PROGRAMACIÓN ORIENTADA A OBJETOS EN JAVASCRIPT USANDO GIT BASH Y NODE JS PARA EJECUTARLO
// ANIMALES
var comida = {
carne: 400,
maiz: 500,
fresas: 400,
zanahorias: 200,
alpiste: 100,
}
class Animal{
constructor(raza,peso,altura,dieta){
this.raza = raza ;
this.peso = peso ;
this.altura = altura;
this.dieta = dieta;
}
comercarne(cantidad){
if (comida.carne >= cantidad)
comida.carne -=  cantidad;
}
comermaiz(cantidad){
if (comida.maiz >= cantidad)
comida.maiz -= cantidad ; 
}
comerzanahorias(cantidad){
if(comida.zanahorias >= cantidad)
comida.zanahorias -= cantidad;
}

}
class Planta{
constructor(especie,color){
this.especie = especie;
this.color =  color;
}
regarPlanta(){
var especie =  this.especie;
if(especie === this.especie )
console.log("La temperatura de riego se ajusta a la", this.especie,"y empieza en 10 segundos");
else
console.log("La planta no existe en nuestra lista");
}
}
console.log(Animal);
var leon = new Animal("Leon",78,1.24,"Carne");
var pato = new Animal("Pato",45,0.9,"Maiz");
var  cocodrilo =  new Animal("Cocodrilo",200,4,2,"Carne");
console.log("La dieta del",leon.raza, "es:", leon.dieta);
console.log("La dieta del", pato.raza, "es:", pato.dieta);
console.log("La dieta del", cocodrilo.raza,"es",cocodrilo.dieta);
console.log("La cantidad de carne es: ", comida.carne, " kg " );
console.log("La cantidad de maiz es" , comida.maiz, "kg");
leon.comercarne(90);
pato.comermaiz(40);
cocodrilo.comercarne(300);
console.log("La cantidad de carne después que el león y el cocodrilo comieron es: ", comida.carne , " kg " );
console.log("Despues quel pato comió hay", comida.maiz,"kg ");
leon.comercarne(10);
console.log("Queda",comida.carne,"kg");
if (comida.carne === 0 ){
comida.carne =  comida.carne + 20000;
console.log("Se llenó la nevera de carne");
console.log("Ahora tenemos de nuevo" ,comida.carne, "KG de carne.");
}
var conejo = new Animal("Conejo",20,0.5,"Zanahorias");
console.log("Total de zanahorias",comida.zanahorias);
console.log("El conejo esta comiendo");
conejo.comerzanahorias(12);
console.log("Ahora el Total de zanahorias:", comida.zanahorias);

//// PLANTAS  ////////


const  palma = new Planta("Palma","Café");
const  cedro = new Planta("Cedro","Verde");
const cerezo = new Planta("Cerezo","Rojo");
cedro.regarPlanta();

