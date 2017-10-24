// /// <reference path="../tsDefinitions/phaser.d.ts" />
module JuegoCostanera{
    export class Personaje extends Phaser.Sprite{
        
        puntos: number;
        vidas: number;
        orientacion: string;
        puntosBonus: number;
    
        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y, frame);
            
            this.height = 200;
            this.width = 100;
            game.physics.enable(this,Phaser.Physics.ARCADE);
            this.body.collideWorldBounds = true;
            this.body.gravity.y = 500;
            this.body.setSize(1351, 2331);

            this.setOrientacion('right');        

            this.setPuntos(0);
            this.setPuntosB(0);
            this.setVidas (3);
            game.add.existing(this);

        }

        getPuntosB(){
            return this.puntosBonus;
        }
    
        setPuntosB(value:number){
            this.puntosBonus = value;
        }

        getPuntos(){
            return this.puntos;
        }
    
        setPuntos(value:number){
            this.puntos = value;
        }

        getVidas(){
            return this.vidas;
        }
    
        setVidas(value:number){
            this.vidas = value;
        }

        setOrientacion(value: string){
            this.orientacion = value;
        }
    
        getOrientacion(){
            return this.orientacion;
        }
    }
}