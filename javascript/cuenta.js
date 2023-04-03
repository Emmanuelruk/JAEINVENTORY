// Funcion Guardar Dato.
 
var nombre = document.getElementById('nombre');
var Direccion = document.getElementById('Direccion');
var telefono = document.getElementById('telefono');
var correo = document.getElementById('correo');

var datosUser = [];
/*  
    nombre--> 0 
    direccion-->1
    telefono-->2
    cooreo-->3

*/


function saveData() {
    datosUser.push(nombre.value, Direccion.value, telefono.value, correo.value);

    

    // for (i in datosUser) {
    //     console.log(datosUser[i]);
    // }



    // for (let i =0 ;i<4 ;i++){
    //     datosUser
    // }


}

alert(datosUser);


// Funcion Validar Datos.

// Remplazar.
























