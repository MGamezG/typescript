"use strict";
(function () {
    function activar(quien /* argumento oligatorio*/, objeto, momento = 'tarde' /*argumento opcional*/) {
        if (objeto) {
            console.log(`${quien} ${objeto} a ${quien} en la ${momento}`);
        }
        else {
            console.log(`${quien}  a ${quien} en la ${momento}`);
        }
    }
    activar('miguel', 'saludo');
})();
