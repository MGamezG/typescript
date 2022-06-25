(()=>
{
    const avenger= {
        nombre:'steve',
        clave:'capitan america',
        poder:'inmortal'
    }
    //desestructuracion
    

    const extraer=({nombre,poder}:any)=>{
        // const {
        //     nombre,
        //     clave,
        //     poder
        // }=avenger
        console.log(nombre);
        console.log(poder);

    }
    extraer(avenger);

    const avengers:string []=[
        'thor', 
        'iron-man',
        'spider-man'
    ]

    const [ , , araña]=avengers;
   
    console.log(araña)

    const extraerarr=([thor,spider]:string[])=>{
        console.log(spider);
    }

    extraerarr(avengers);


  
}
)();