(()=>{
    const sumar =(a:number, b:number):number=>a+b;
    const nombre =():string =>'hola hola';

    const obtenerSalario=():Promise<string>=>{
        return new Promise((resolve, reject) => {
            resolve('1');
        });
    }

    obtenerSalario().then(a=>console.log(a))
})();