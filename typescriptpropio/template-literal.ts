(function(){

    function getedad(){
        return 5+6+3;
    }
    const nombre='miguel';
    const apellido="gamez";
    const edad=23;

    // const salida= nombre +" "+ apellido+" "+edad;

    
    // template litrales
    //  const salida=`\n${nombre} ${apellido} (${edad+5})`; // `` backtick, ofrece posibilidadesde de hacer strings multilinea
    const salida=`\n${nombre} ${apellido} (${getedad()})`;
     //\n son saltos de linea
     console.log(salida);
  })();