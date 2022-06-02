"use strict";
(() => {
    const avenger = {
        nombre: 'steve',
        clave: 'capitan america',
        poder: 'inmortal'
    };
    //desestructuracion
    const extraer = ({ nombre, poder }) => {
        // const {
        //     nombre,
        //     clave,
        //     poder
        // }=avenger
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    const avengers = [
        'thor',
        'iron-man',
        'spider-man'
    ];
    const [, , araña] = avengers;
    console.log(araña);
    const extraerarr = ([thor, spider]) => {
        console.log(spider);
    };
    extraerarr(avengers);
})();
