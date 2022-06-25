"use strict";
(() => {
    class Avenger {
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
        constructor(name, team, nameReal, isCanFight, winFight) {
            this.name = name;
            this.team = team;
            this.nameReal = nameReal;
            this.isCanFight = isCanFight;
            this.winFight = winFight;
        }
    }
    const hulk = new Avenger('hulk', 'capi');
    console.log(hulk);
})();
