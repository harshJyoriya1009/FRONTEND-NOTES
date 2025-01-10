let obj = {
    a: 1,
    b: "Harshu"
}
console.log(obj);

//----------------------------------PROTOTYPE
// let animal = {
//     eats: true,
//     earth:"yes",
//     tupes:"Many"
// }
// let rabbit = {
//     jump: true
// }

// rabbit.__proto__ = animal;

// animal.__proto__ = rabbit;


// class Animal {
//     constructor(name) {
//         this.name = name;
//         console.log("Hey whatsapp Bro.........")
//     }
//     eats() {
//         console.log("I am eating")
//     }
//     jumps() {
//         console.log("I want to jump")
//     }
// }

// class Dogs extends Animal{
//     constructor(name) {
//         super(name)
//         // this.name = name;
//         console.log("Hey whatsapp Bro......... and he is the dog of miss beautiful")
//     }

//     roar(){
//         console.log("NO")
//     }
//     walk(){
//         console.log("When there owner said")
//     }
// }


// let a = new Animal("LION");
// console.log(a);
// let b= new Dogs("SIMMBA");
// console.log(b)



class Animal {
    constructor(name){
        this.name= name
        console.log("I am Animal")
    }
    eats(){
        console.log("Mein kha raha hoon")
    }
    jumps(){
        console.log("Mein khood raha honnn...")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("I am Lion")
    }
    roar(){
        console.log("I can roar also")
    }
    diet(){
        console.log("I am canivores")
    }
    jumps(){
        super.jumps()
        console.log("Mein khood raha honnn...yoyoyoyoo")
    }
}

let a= new Animal("Every Animal");
console.log(a)

let l =new Lion("Lion");
console.log(l)