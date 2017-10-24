// import {Bonus} from './Bonus'
module JuegoCostanera {
    export class Piedra extends Bonus {
        emitterPiedras: Phaser.Particles.Arcade.Emitter
        piedra: Phaser.Sprite
        
        constructor(game: Phaser.Game, x: number, y: number,frame: string) {
            super(game, x, y, frame);

            var piedra = game.add.sprite(x,y, frame)
			this.setPiedra(piedra);
			this.getPiedra().name = frame;
			game.physics.enable(this.getPiedra(), Phaser.Physics.ARCADE);
			//  This adjusts the collision body size.
			this.getPiedra().body.setSize(10, 10, 0, 0);
                            
            var emitter = game.add.emitter(game.world.width,game.world.bottom - 100, 5);
			this.setEmitterPiedras(emitter);
			this.getEmitterPiedras().makeParticles(frame,null,1,true);
			this.getEmitterPiedras().setYSpeed(-100, 0);
			this.getEmitterPiedras().setXSpeed(-1000, -500);
			this.getEmitterPiedras().gravity.y = 0;
			this.getEmitterPiedras().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(this);

        }

        setEmitterPiedras(value: Phaser.Particles.Arcade.Emitter){
            this.emitterPiedras = value;
        }

        getEmitterPiedras(){
            return this.emitterPiedras;
        }

        setPiedra(value: Phaser.Sprite){
            this.piedra = value;
        }

        getPiedra(){
            return this.piedra;
        }
    }
}