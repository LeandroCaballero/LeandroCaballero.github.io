/// <reference path="../tsDefinitions/phaser.d.ts" />
/// <reference path="./Personaje.ts" />
/// <reference path="./Piedra.ts" />
/// <reference path="./Fruta.ts" />
/// <reference path="./Bonus.ts" />

module JuegoCostanera {
	export class Costanera{
		game:Phaser.Game;
		ancho: number;
		alto:number;
		personaje: Personaje;
		piedra: Piedra;
		fruta: Fruta;
		cursores:Phaser.CursorKeys;
		saltarBtn:Phaser.Key;
		textoVidas: Phaser.Text;
		textoPuntos: Phaser.Text;
		dobleSalto:number;
		bajarBtn:Phaser.Key;
		jump: boolean;
		left:boolean;
		right:boolean;

		//set y get
		setGame(game: Phaser.Game ){
			this.game = game;
		}

		getGame (){
			return this.game;
		}

		setAncho(ancho: number ){
			this.ancho = ancho;
		}

		getAncho (){
			return this.ancho;
		}

		setAlto(alto: number ){
			this.alto = alto;
		}

		getAlto (){
			return this.alto;
		}

		setPersonaje(personaje: Personaje ){
			this.personaje = personaje;
		}

		getPersonaje ():Personaje{
			return this.personaje;
		}

		setPiedra(value:Piedra){
			this.piedra = value;
		}

		getPiedra ():Piedra{
			return this.piedra;
		}

		setFruta(value: Fruta){
			this.fruta = value;
		}

		getFruta (){
			return this.fruta;
		}

		setCursores(cursores: Phaser.CursorKeys ){
			this.cursores = cursores;
		}

		getCursores (){
			return this.cursores;
		}

		setJump(value: boolean ){
			this.jump = value;
		}

		getJump(){
			return this.jump;
		}

		setLeft(value: boolean ){
			this.left = value;
		}

		getLeft(){
			return this.left;
		}

		setRight(value: boolean ){
			this.right = value;
		}

		getRight(){
			return this.right;
		}

		setSaltarBtn(saltarBtn: Phaser.Key ){
			this.saltarBtn = saltarBtn;
		}

		getSaltarBtn (){
			return this.saltarBtn;
		}

		getDobleSalto(){
			return this.dobleSalto
		}
	
		setDobleSalto(valor){
			this.dobleSalto=valor;
		}
		
		setBajarBtn(valor: Phaser.Key ){
			this.bajarBtn = valor;
		}
	
		getBajarBtn (){
			return this.bajarBtn;
		}
	

		getTextoPuntos(){
			return this.textoPuntos;
		}

		setTextoPuntos(value:Phaser.Text){
			this.textoPuntos = value;
		}

		getTextoVidas(){
			return this.textoVidas;
		}

		setTextoVidas(value:Phaser.Text){
			this.textoVidas = value;
		}

		constructor(ancho: number,alto:number)
		{
			this.setGame(new Phaser.Game( ancho, alto, Phaser.CANVAS, 'content', { 
				preload:this.preload, 
				create:this.create, 
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
				goFull:this.goFull
			} ));
		}

		preload()
		{ 
			// add our logo image to the assets class under the
			// key 'logo'. We're also setting the background colour
			// so it's the same as the background colour in the image
			this.getGame().load.image('piedra', 'assets/piedra.png');
			this.getGame().load.image('bonus', 'assets/manzana.png');
			this.getGame().load.image('player', 'assets/phaser-dude.png');
			this.getGame().load.image( 'costanera', "assets/costanera.jpg" );
			this.getGame().load.image('gameover', "assets/gameover.png" );

			//Botones
			this.getGame().load.spritesheet('buttonvertical', 'assets/button-vertical.png',64,64);
			this.getGame().load.spritesheet('buttonhorizontal', 'assets/button-horizontal.png',96,64);
			this.getGame().load.spritesheet('buttonjump', 'assets/button-round.png',96,96);
		}

		create()
		{
			//Seteamos la imagen del juego en la posicion '0,0'
		    //y el ancho y alto de la misma según el tamaño de la ventana actual
			var logo = this.getGame().add.sprite( this.getGame().world.centerX, this.getGame().world.centerY, 'costanera' );
			logo.x = 0;
			logo.y = 0;
			logo.height = this.getGame().height;
			logo.width = this.getGame().width;

			this.getGame().physics.startSystem(Phaser.Physics.ARCADE);
			this.getGame().time.desiredFps = 30;
			this.getGame().physics.arcade.gravity.y = 250;

			//Personaje
			var personaje = new Personaje(this.getGame(),this.getGame().world.centerX, this.getGame().world.top, 'player');
			this.setPersonaje(personaje);
		
			//piedra
			var piedra = new Piedra(this.getGame(),300, 50, 'piedra');
			this.setPiedra(piedra);
			this.getGame().physics.enable(this.getPiedra(), Phaser.Physics.ARCADE);

			//Fruta
			var fruta = new Fruta(this.getGame(),300, 50, 'bonus');
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

			var buttonjump = this.getGame().add.button(this.getGame().world.width - 140, this.getGame().world.height - 140, 'buttonjump', null, this, 0, 1, 0, 1);  //game, x, y, key, callback, callbackContext, overFrame, outFrame, downFrame, upFrame
			buttonjump.fixedToCamera = true;  //our buttons should stay on the same place  
			buttonjump.events.onInputOver.add(this.listenerJump,this,0,true);
			buttonjump.events.onInputOut.add(this.listenerJump,this,0,false);
			buttonjump.events.onInputDown.add(this.listenerJump,this,0,true);
			buttonjump.events.onInputUp.add(this.listenerJump,this,0,false);
			
			//Boton izquierda
			var buttonleft = this.getGame().add.button(30, this.getGame().world.height	- 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
			buttonleft.fixedToCamera = true;
			buttonleft.events.onInputOver.add(this.listenerLeft,this,0,true);
			buttonleft.events.onInputOut.add(this.listenerLeft,this,0,false);
			buttonleft.events.onInputDown.add(this.listenerLeft,this,0,true);
			buttonleft.events.onInputUp.add(this.listenerLeft,this,0,false);
		
			//Boton derecha
			var buttonright = this.getGame().add.button(190, this.getGame().world.height - 140, 'buttonhorizontal', null, this, 0, 1, 0, 1);
			buttonright.fixedToCamera = true;
			buttonright.events.onInputOver.add(this.listenerRight,this,0,true);
			buttonright.events.onInputOut.add(this.listenerRight,this,0,false);
			buttonright.events.onInputDown.add(this.listenerRight,this,0,true);
			buttonright.events.onInputUp.add(this.listenerRight,this,0,false);

		}

		update () 
		{
			this.getGame().physics.arcade.collide(this.getPiedra().getEmitterPiedras(),this.getPersonaje(),this.collisionPiedra,null, this);
			this.getGame().physics.arcade.collide(this.getFruta().getEmitterFrutas(),this.getPersonaje(),this.collisionFruta,null, this);

			this.getPersonaje().body.velocity.x = 0;
			if (this.getCursores().left.isDown || this.getLeft())
			{
				this.getPersonaje().body.velocity.x = -500;
				
			}
			else if (this.getCursores().right.isDown || this.getRight()){
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
			if (this.getBajarBtn().isDown && (this.getPersonaje().body || this.getPersonaje().body.touching.down))
			{
				this.getPersonaje().body.velocity.y = 800;
			}

			if (this.getPersonaje().getVidas() == 0){
				
				this.getPersonaje().body.collideWorldBounds = false;				
				
				var gameOverText = this.getGame().add.image(this.getGame().world.centerX-130,this.getGame().world.centerY-125,'gameover');			
			
			}

			if (this.getGame().input.totalActivePointers == 0 && !this.getGame().input.activePointer.isMouse){ this.setRight(false); this.setLeft(false); this.setJump(false)} 
		}

		

		collisionPiedra (piedra, personaje) 
		{
			piedra.kill();
			personaje.kill();

			//VIDAS
			this.getPersonaje().setVidas(this.getPersonaje().getVidas() - 1);
			this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();	
			this.getPersonaje().setPuntosB(0);
		}

		collisionFruta (fruta, personaje) 
		{
			personaje.kill();
			//PUNTOS
			this.getPersonaje().setPuntos(this.getPersonaje().getPuntos() + 20);
			this.getPersonaje().setPuntosB(this.getPersonaje().getPuntosB() + 20);
			this.getTextoPuntos().text = "Puntos: " + this.getPersonaje().getPuntos().toString();
			
			if(this.getPersonaje().getPuntosB() == 200 ){
				this.getPersonaje().setVidas(this.getPersonaje().getVidas() + 1);
				this.getTextoVidas().text = "Vidas: " + this.getPersonaje().getVidas().toString();
				this.getPersonaje().setPuntosB(0);
			}	
		}
		
		goFull() { this.getGame().scale.startFullScreen(false);}

		listener () 
		{
			this.getPersonaje().revive()
		}

		listenerJump(key,arg,arg2){
			this.setJump(arg2);
		}

		listenerLeft(key,arg,arg2){
			this.setLeft(arg2);
		}

		listenerRight(key,arg,arg2){
			this.setRight(arg2);
		}

	}

	// when the page has finished loading, create our game
	window.onload = () => 
	{
		var game = new Costanera(window.innerWidth,window.innerHeight);
	}

}