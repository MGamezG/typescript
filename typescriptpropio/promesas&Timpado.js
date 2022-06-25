"use strict";
(() => {
    const retirarDinero = (montoDinero) => {
        let dineroActual = 10000;
        return new Promise((resolve, reject) => {
            if (montoDinero > dineroActual) {
                reject('es mas dinero');
            }
            else {
                dineroActual -= montoDinero;
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(montoActual => console.log(`me queda : ${montoActual}`))
        .catch(err => console.warn(err));
});
