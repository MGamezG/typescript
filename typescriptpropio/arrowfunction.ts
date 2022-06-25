(()=>{
    // let miFuncion=function(a:String){
    //     return a.toUpperCase(); // pasar a mayusculas
    // };

    // // let miFuncionf= (a:String)=>{ // tiene la articularidad de que si solo hay una linea de codio en su interior y es un return, se pueden quitar{} 
    // //     return a;
    // // };
    
    // let miFuncionf= (a:String)=> a.toUpperCase();

    // console.log(miFuncion('normal'));
    // console.log(miFuncionf('flecha'));

    // const sumarN=function(a:number,b:number){
    //     return a+b;
    // }
    // console.log("Normal"+" "+sumarN(3,5));

    // const sumarF= (a:number, b:number)=>a+b;

    // console.log("Flecha"+" " +sumarF(3,20));

    const hulk={
        nombre:'hulk',
        smash(){
            setTimeout(()=>{
                console.log(`${this.nombre}  smash!!`)
            },5000); //callback a una funcion en determiado tiempo
          //  console.log(`${this.nombre}  smash!!`)
        }
    }
    hulk.smash();
  })();