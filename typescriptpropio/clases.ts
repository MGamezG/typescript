(()=>{
    class Avenger{ //sige el camelcase
        /*name:string;
        team:string;
         nameReal:string;
        isCanFight:boolean;
        winFight:number;
        */
        
        /*constructor(name:string,
            team:string,
            nameReal:string,
            isCanFight:boolean,
            winFight:number){
            this.name=name;
            this.team=team;
            this.nameReal=nameReal;
            this.isCanFight=isCanFight;
            this.winFight=winFight;
        }*/

        constructor (public name:string,
                     public team:string,
                     public nameReal?:string,
                     public isCanFight?:boolean,
                     public winFight?:number
                     ){
                     }
    }

    const hulk:Avenger=new Avenger('hulk','capi' );

    console.log(hulk);
})();