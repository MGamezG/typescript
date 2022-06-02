(()=>{
    interface Xman{
        name:string;
        edad:number;
        poder?:string;
    }   //son las reglas que deben cumplir el objeto

    const enviarMision=(Xmen:Xman)=>{
        console.log(`enviando a ${Xmen.name} a la mision`);
    }
    const regresarMision=(Xmen:Xman)=>{
        console.log(`regresar a ${Xmen.name} de la mision`);
    }

    const ciclops:Xman={
        name:'erick',
        edad:27
    }
    enviarMision(ciclops);
    regresarMision(ciclops);

})();