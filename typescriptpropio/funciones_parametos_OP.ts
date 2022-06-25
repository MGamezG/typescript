(function(){
    function activar(
    quien:string/* argumento oligatorio*/, 
    objeto ?:string,
    momento:string='tarde' /*argumento opcional*/

){
       if(objeto){
        console.log(`${quien} ${objeto} a ${quien} en la ${momento}`)
       } else{
        console.log(`${quien}  a ${quien} en la ${momento}`)
       }

    }
    activar('miguel', 'saludo');
  })();