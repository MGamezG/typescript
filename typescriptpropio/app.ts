(function(){//patron modulo, solo se para prevenir ciertos errores
    // function saludar( nombre:string ) {
    //     //:tipovariable, permite que la propedad sea de un valor espesiico
    //     // si no tine asiganada una propiedad, signifia que es de tipo Any
    //     console.table( 'Hola,; ' + nombre ); // Hola Logan
    // }
    
    
    // const wolverine = {
    //     nombre: 'Logan' // propiedad: constante es un objeto literal
    // };
    
    
    // saludar( wolverine.nombre );
    var mensaje='hola';
    if(true){
        var mensaje='adios';
    }
    //var; permite redefinir variables en cualquier ambito
    //
    let mensaje2='hola'
    if(true){
        let mensaje2='adios';
    }
    //let; let es una variabele que solo vive en un ambito
    //no puede ser modificado o redefinido en otro
    // no puedes redeclarar la variable

    const mensjae3='hola'
    const URL_SERVICIO='hola'//si estan en mayusculas significan que son un tipo de dato global que no cabiara a lo largo de la aplicacion
    //si el nunca se va a modificar la propiedad, se utiliza const  
    console.log (mensaje, mensaje2)
})();



// con el comando tsc --version, se crea el archivo tsconfig.json, el cual permite ver como funciona el typescript

// con el comando tsc -w /tsc --watch, el typescript cambia al modo de observador
// esto permita que todos los cambios en el ts, sean compilados y traducidos a un js


