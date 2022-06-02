"use strict";
(() => {
    const enviarMision = (Xmen) => {
        console.log(`enviando a ${Xmen.name} a la mision`);
    };
    const regresarMision = (Xmen) => {
        console.log(`regresar a ${Xmen.name} de la mision`);
    };
    const ciclops = {
        name: 'erick',
        edad: 27
    };
    enviarMision(ciclops);
    regresarMision(ciclops);
})();
