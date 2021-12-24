function auto(marca, modelo, anno){
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
}
//autos = ["auto1","auto2","auto3","auto4","auto5","auto6","auto7","auto8","auto9","auto10"];
marcas = ["m1", "m2", "m3","m4","m5","m6","m7", "m8","m9", "m10"];
modelos = ["mod1", "mod2", "mod3","mod4","mod5","mod6","mod7", "mod8","mod9", "mod10"];
annos = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < marcas.length; i++){
    for(var j = 0; j < modelos.length; j++){
        for(var k = 0; k < annos.length; k++){
            var autoNuevo = new auto(marcas[i],modelos[j], annos[k]);
            if(marcas.indexOf(marcas[i]) === modelos.indexOf(modelos[j]) &&  modelos.indexOf(modelos[j]), annos.indexOf(annos[k]) ){
                console.log(marcas.indexOf(marcas[i]), modelos.indexOf(modelos[j]), annos.indexOf(annos[k]));
            }  
        }
    }   
}
