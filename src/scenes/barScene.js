import Player from "./player.js";
import Customer from "./customer.js"
export default class barScene extends Phaser.Scene{
    constructor(customersQuantity){
        console.log("constructor")
        // super(/*customersQuantity,*/ {key: "BarScene"});
        super({key: 'barScene'});
        // this.customerSpawn = [{x :300 , y: 600}]
        // this.customerDestiny = [{x: 300, y: 250}]
        // this.playerSpawn = [{x: 500, y:200} ]
        // console.log("constructor termina")
    }
    preload(){
        console.log("preload barScene")
    }
    create(){
        //Se agregan fisicas a la escena
        this.physics.world.setBounds(0, 0, this.sys.game.config.width, this.sys.game.config.height);
        
        //intancia el player
        this.player = new Player(this, 300, 300);
        //se agrega player a escena
        
        //algo que espere cierto tiempo entre costumers o para texto de tutorial
        this.generateRandomCustomer()
        
        console.log("create barScene")
    }
    update(){
        this.player.update();
        this.customer.update();
        //this.customer.update();
    }
    generateRandomCustomer(){
        this.customerType = Phaser.Math.Between(0, 3);

        //Asignacion  de dialogos en base al customer
        this.customerDialog = this.generateRandomDialog() + (4 * this.customerType);
        this.customer = new Customer(this, this.x, this.y, this.customerType, this.destinoY)
    }
    generateRandomDialog(){
        return Phaser.Math.Between(1, 4);
    }
}
