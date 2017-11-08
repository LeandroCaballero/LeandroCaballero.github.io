var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Bonus = /** @class */ (function (_super) {
        __extends(Bonus, _super);
        function Bonus() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Bonus;
    }(Phaser.Sprite));
    JuegoCostanera.Bonus = Bonus;
})(JuegoCostanera || (JuegoCostanera = {}));
// /// <reference path="../tsDefinitions/phaser.d.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Personaje = /** @class */ (function (_super) {
        __extends(Personaje, _super);
        function Personaje(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            _this.height = 200;
            _this.width = 100;
            game.physics.enable(_this, Phaser.Physics.ARCADE);
            _this.body.collideWorldBounds = true;
            _this.body.gravity.y = 500;
            _this.body.setSize(1351, 2331);
            _this.setOrientacion('right');
            _this.setPuntos(0);
            _this.setPuntosB(0);
            _this.setVidas(3);
            game.add.existing(_this);
            return _this;
        }
        Personaje.prototype.getPuntosB = function () {
            return this.puntosBonus;
        };
        Personaje.prototype.setPuntosB = function (value) {
            this.puntosBonus = value;
        };
        Personaje.prototype.getPuntos = function () {
            return this.puntos;
        };
        Personaje.prototype.setPuntos = function (value) {
            this.puntos = value;
        };
        Personaje.prototype.getVidas = function () {
            return this.vidas;
        };
        Personaje.prototype.setVidas = function (value) {
            this.vidas = value;
        };
        Personaje.prototype.setOrientacion = function (value) {
            this.orientacion = value;
        };
        Personaje.prototype.getOrientacion = function () {
            return this.orientacion;
        };
        return Personaje;
    }(Phaser.Sprite));
    JuegoCostanera.Personaje = Personaje;
})(JuegoCostanera || (JuegoCostanera = {}));
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Piedra = /** @class */ (function (_super) {
        __extends(Piedra, _super);
        function Piedra(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var piedra = game.add.sprite(x, y, frame);
            _this.setPiedra(piedra);
            _this.getPiedra().name = frame;
            game.physics.enable(_this.getPiedra(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getPiedra().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.width, game.world.bottom - 100, 5);
            _this.setEmitterPiedras(emitter);
            _this.getEmitterPiedras().makeParticles(frame, null, 1, true);
            _this.getEmitterPiedras().setYSpeed(-100, 0);
            _this.getEmitterPiedras().setXSpeed(-1000, -500);
            _this.getEmitterPiedras().gravity.y = 0;
            _this.getEmitterPiedras().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            return _this;
        }
        Piedra.prototype.setEmitterPiedras = function (value) {
            this.emitterPiedras = value;
        };
        Piedra.prototype.getEmitterPiedras = function () {
            return this.emitterPiedras;
        };
        Piedra.prototype.setPiedra = function (value) {
            this.piedra = value;
        };
        Piedra.prototype.getPiedra = function () {
            return this.piedra;
        };
        return Piedra;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Piedra = Piedra;
})(JuegoCostanera || (JuegoCostanera = {}));
// import {Bonus} from './Bonus'
var JuegoCostanera;
(function (JuegoCostanera) {
    var Fruta = /** @class */ (function (_super) {
        __extends(Fruta, _super);
        function Fruta(game, x, y, frame) {
            var _this = _super.call(this, game, x, y, frame) || this;
            var fruta = game.add.sprite(x, y, frame);
            _this.setFruta(fruta);
            _this.getFruta().name = frame;
            game.physics.enable(_this.getFruta(), Phaser.Physics.ARCADE);
            //  This adjusts the collision body size.
            _this.getFruta().body.setSize(10, 10, 0, 0);
            var emitter = game.add.emitter(game.world.centerX, game.world.top, 5);
            _this.setEmitterFrutas(emitter);
            _this.getEmitterFrutas().width = game.world.width;
            _this.getEmitterFrutas().makeParticles(frame, null, 1, true);
            _this.getEmitterFrutas().setYSpeed(-100, 500);
            _this.getEmitterFrutas().setXSpeed(-5, 5);
            _this.getEmitterFrutas().start(false, 1600, 1, 0);
            //Para agregar el objeto al juego
            game.add.existing(_this);
            ;
            return _this;
        }
        Fruta.prototype.setEmitterFrutas = function (value) {
            this.emitterFrutas = value;
        };
        Fruta.prototype.getEmitterFrutas = function () {
            return this.emitterFrutas;
        };
        Fruta.prototype.setFruta = function (value) {
            this.fruta = value;
        };
        Fruta.prototype.getFruta = function () {
            return this.fruta;
        };
        return Fruta;
    }(JuegoCostanera.Bonus));
    JuegoCostanera.Fruta = Fruta;
})(JuegoCostanera || (JuegoCostanera = {}));
/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Piedra.ts" />
/// <reference path="./Fruta.ts" />
/// <reference path="./Bonus.ts" />
var JuegoCostanera;
(function (JuegoCostanera) {
    var Costanera = /** @class */ (function () {
        function Costanera(ancho, alto) {
            this.setGame(new Phaser.Game(ancho, alto, Phaser.CANVAS, 'content', {
                preload: this.preload,
                create: this.create,
                update: this.update,
                setGame: this.setGame,
                getGame: this.getGame,
                setAncho: this.setAncho,
                getAncho: this.getAncho,
                setAlto: this.setAlto,
                getAlto: this.getAlto,
                setPersonaje: this.setPersonaje,
                getPersonaje: this.getPersonaje,
                setPiedra: this.setPiedra,
                getPiedra: this.getPiedra,
                setFruta: this.setFruta,
                getFruta: this.getFruta,
                setCursores: this.setCursores,
                getCursores: this.getCursores,
                setSaltarBtn: this.setSaltarBtn,
                getSaltarBtn: this.getSaltarBtn,
                collisionPiedra: this.collisionPiedra,
                collisionFruta: this.collisionFruta,
                listener: this.listener,
                listenerJump: this.listenerJump,
                listenerLeft: this.listenerLeft,
                listenerRight: this.listenerRight,
                getDobleSalto: this.getDobleSalto,
                setDobleSalto: this.setDobleSalto,
                setBajarBtn: this.setBajarBtn,
                getBajarBtn: this.getBajarBtn,
                getTextoPuntos: this.getTextoPuntos,
                setTextoPuntos: this.setTextoPuntos,
                getTextoVidas: this.getTextoVidas,
                setTextoVidas: this.setTextoVidas,
                setJump: this.setJump,
                getJump: this.getJump,
                setLeft: this.setLeft,
                getLeft: this.getLeft,
                setRight: this.setRight,
                getRight: this.getRight,
                goFull: this.goFull
            }));
        }
        //set y get
        Costanera.prototype.setGame = function (game) {
            this.game = game;
        };
        Costanera.prototype.getGame = function () {
            return this.game;
        };
        Costanera.prototype.setAncho = function (ancho) {
            this.ancho = ancho;
        };
        Costanera.prototype.getAncho = function () {
            return this.ancho;
        };
        Costanera.prototype.setAlto = function (alto) {
            this.alto = alto;
        };
        Costanera.prototype.getAlto = function () {
            return this.alto;
        };
        Costanera.prototype.setPersonaje = function (personaje) {
            this.personaje = personaje;
        };
        Costanera.prototype.getPersonaje = function () {
            return this.personaje;
        };
        Costanera.prototype.setPiedra = function (value) {
            this.piedra = value;
        };
        Costanera.prototype.getPiedra = function () {
            return this.piedra;
        };
        Costanera.prototype.setFruta = function (value) {
            this.fruta = value;
        };
        Costanera.prototype.getFruta = function () {
            return this.fruta;
        };
        Costanera.prototype.setCursores = function (cursores) {
            this.cursores = cursores;
        };
        Costanera.prototype.getCursores = function () {
            return this.cursores;
        };
        Costanera.prototype.setJump = function (value) {
            this.jump = value;
        };
        Costanera.prototype.getJump = function () {
            return this.jump;
        };
        Costanera.prototype.setLeft = function (value) {
            this.left = value;
        };
        Costanera.prototype.getLeft = function () {
            return this.left;
        };
        Costanera.prototype.setRight = function (value) {
            this.right = value;
        };
        Costanera.prototype.getRight = function () {
            return this.right;
        };
        Costanera.prototype.setSaltarBtn = function (saltarBtn) {
            this.saltarBtn = saltarBtn;
        };
        Costanera.prototype.getSaltarBtn = function () {
            return this.saltarBtn;
        };
        Costanera.prototype.getDobleSalto = function () {
            return this.dobleSalto;
        };
        Costanera.prototype.setDobleSalto = function (valor) {
            this.dobleSalto = valor;
        };
        Costanera.prototype.setBajarBtn = function (valor) {
            this.bajarBtn = valor;
        };
        Costanera.prototype.getBajarBtn = function () {
            return this.bajarBtn;
        };
        Costanera.prototype.getTextoPuntos = function () {
            return this.textoPuntos;
        };
        Costanera.prototype.setTextoPuntos = function (value) {
            this.textoPuntos = value;
        };
        Costanera.prototype.getTextoVidas = function () {
            return this.textoVidas;
        };
        Costanera.prototype.setTextoVidas = function (value) {
            this.textoVidas = value;
        };
        Costanera.prototype.preload = function () {
            // add our logo image to the assets class under the
            // key 'logo'. We're also setting the background colour
            // so it's the same as the background colour in the image
            this.getGame().load.image('piedra', 'assets/piedra.png');
            this.getGame().load.image('bonus', 'assets/manzana.png');
            this.getGame().load.image('player', 'assets/phaser-dude.png');
            this.getGame().load.image('costanera', "assets/costanera.jpg");
            this.getGame().load.image('gameover', "assets/gameover.png");
            //Botones
            this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png', 64, 64);
            this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png', 96, 64);
            this.getGame().load.spritesheet('buttonjump', 'assets/button-round.png', 96, 96);
        };
        Costanera.prototype.create = function () {
            //Seteamos la imagen del juego en la posicion '0,0'
            //y el ancho y alto de la misma según el tamaño de la ventana actual
            var logo = this.getGame().add.sprite(this.getGame().world.centerX, this.getGame().world.centerY, 'costanera');
            logo.x = 0;
            logo.y = 0;
            logo.height = this.getGame().height;
            logo.width = this.getGame().width;
            this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
            this.getGame().time.desiredFps = 30;
            this.getGame().physics.arcade.gravity.y = 250;
            //Personaje
            var personaje = new JuegoCostanera.Personaje(this.getGame(), this.getGame().world.centerX, this.getGame().world.top, 'player');
            this.setPersonaje(personaje);
            //piedra
            var piedra = new JuegoCostanera.Piedra(this.getGame(), 300, 50, 'piedra');
            this.setPiedra(piedra);
            this.getGame().physics.enable(this.getPiedra(), Phaser.Physics.ARCADE);
            //Fruta
            var fruta = new JuegoCostanera.Fruta(this.getGame(), 300, 50, 'bonus');
            this.setFruta(fruta);
            fruta.name = 'bonus';
            this.getGame().physics.enable(fruta, Phaser.Physics.ARCADE);
            //Click event
            logo.inputEnabled = true;
            logo.events.onInputDown.add(this.listener, this);
            this.setCursores(this.getGame().input.keyboard.createCursorKeys());
            this.setSaltarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.SPACEBAR));
            this.setBajarBtn(this.getGame().input.keyboard.addKey(Phaser.Keyboard.B));
            //  Puntos
            var scoreString = 'Puntos: ';
            var scoreText = this.getGame().add.text(10, 10, scoreString + this.getPersonaje().getPuntos(), { font: '34px Arial', fill: '#fff' });
            this.setTextoPuntos(scoreText);
            //  Vidas
            var vidasString = 'Vidas: ';
            var vidasText = this.getGame().add.text(this.getGame().world.width - 140, 10, vidasString + this.getPersonaje().getVidas(), { font: '34px Arial', fill: '#fff' });
            this.setTextoVidas(vidasText);
            var buttonjump = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttonjump', null, this, 0, 1, 0, 1); //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
            buttonjump.fixedToCamera = true; //our buttons should stay on the same place  
            buttonjump.events.onInputOver.add(this.listenerJump, this, 0, true);
            buttonjump.events.onInputOut.add(this.listenerJump, this, 0, false);
            buttonjump.events.onInputDown.add(this.listenerJump, this, 0, true);
            buttonjump.events.onInputUp.add(this.listenerJump, this, 0, false);
            //Boton izquierda
            var buttonleft = this.getGame().add.button(30, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonleft.fixedToCamera = true;
            buttonleft.events.onInputOver.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputOut.add(this.listenerLeft, this, 0, false);
            buttonleft.events.onInputDown.add(this.listenerLeft, this, 0, true);
            buttonleft.events.onInputUp.add(this.listenerLeft, this, 0, false);
            //Boton derecha
            var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
            buttonright.fixedToCamera = true;
            buttonright.events.onInputOver.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputOut.add(this.listenerRight, this, 0, false);
            buttonright.events.onInputDown.add(this.listenerRight, this, 0, true);
            buttonright.events.onInputUp.add(this.listenerRight, this, 0, false);
        };
        Costanera.prototype.update = function () {
            this.getGame().physics.arcade.collide(this.getPiedra().getEmitterPiedras(), this.getPersonaje(), this.collisionPiedra, null, this);
            this.getGame().physics.arcade.collide(this.getFruta().getEmitterFrutas(), this.getPersonaje(), this.collisionFruta, null, this);
            this.getPersonaje().body.velocity.x = 0;
            if (this.getCursores().left.isDown || this.getLeft()) {
                this.getPersonaje().body.velocity.x = -500;
            }
            else if (this.getCursores().right.isDown || this.getRight()) {
                this.getPersonaje().body.velocity.x = 500;
            }
            if ((this.getSaltarBtn().isDown || this.getJump()) && (this.getPersonaje().body.onFloor())) {
                this.getPersonaje().body.velocity.y = -400;
                this.setDobleSalto(1);
                this.getSaltarBtn().isDown = false;
            }
            if ((this.getSaltarBtn().isDown || this.getJump()) && this.getDobleSalto() == 1) {
                this.getPersonaje().body.velocity.y = -400;
                this.setDobleSalto(2);
                this.getSaltarBtn().isDown = false;
            }
            if (this.getBajarBtn().isDown && (this.getPersonaje().body || this.getPersonaje().body.touching.down)) {
                this.getPersonaje().body.velocity.y = 800;
            }
            if (this.getPersonaje().getVidas() == 0) {
                this.getPersonaje().body.collideWorldBounds = false;
                var gameOverText = this.getGame().add.image(this.getGame().world.centerX - 130, this.getGame().world.centerY - 125, 'gameover');
            }
            if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse) {
                this.setRight(false);
                this.setLeft(false);
                this.setJump(false);
            }
        };
        Costanera.prototype.collisionPiedra = function (piedra, personaje) {
            piedra.kill();
            personaje.kill();
            //VIDAS
            this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
            this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
            this.getPersonaje().setPuntosB(0);
        };
        Costanera.prototype.collisionFruta = function (fruta, personaje) {
            personaje.kill();
            //PUNTOS
            this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
            this.getPersonaje().setPuntosB(this.getPersonaje().getPuntosB() + 20);
            this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
            if (this.getPersonaje().getPuntosB() == 200) {
                this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
                this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
                this.getPersonaje().setPuntosB(0);
            }
        };
        Costanera.prototype.goFull = function () { this.getGame().scale.startFullScreen(false); };
        Costanera.prototype.listener = function () {
            this.getPersonaje().revive();
        };
        Costanera.prototype.listenerJump = function (key, arg, arg2) {
            this.setJump(arg2);
        };
        Costanera.prototype.listenerLeft = function (key, arg, arg2) {
            this.setLeft(arg2);
        };
        Costanera.prototype.listenerRight = function (key, arg, arg2) {
            this.setRight(arg2);
        };
        return Costanera;
    }());
    JuegoCostanera.Costanera = Costanera;
    // when the page has finished loading, create our game
    window.onload = function () {
        var game = new Costanera(window.innerWidth, window.innerHeight);
    };
})(JuegoCostanera || (JuegoCostanera = {}));
