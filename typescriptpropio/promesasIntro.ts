(()=>{
    console.log('nicio');
    
    const promesa1= new Promise((resolve, reject) => { //las promesas siempre esperan 2 argumentos: resolve, retornar cuando todo esta bien; reject, rtorna si esta mal
        setTimeout(()=>{
           // resolve('se termino el timeOut');
           reject('se termino el timeout');
        },1000)
        
    });

    //promesa1.then(mesnaje=>console.log(mesnaje)); //es para ejecutar el resolve, si todo esta bien  
    promesa1.catch(err=>console.warn(err)); //cath funciona para atrapar el mesaje de error

    console.log('fin');
})();