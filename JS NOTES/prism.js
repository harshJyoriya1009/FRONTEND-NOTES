// console.log("Harsh is Handsome")
// console.log("Atif is also Handsome")

// setTimeout(() => {
//     console.log("May be both are equal handsome")
// }, 2000);

// console.log("The End")

// const fn = () => {
//     console.log("NOTHING");

// }
// ---------------------------------------------------------------------------------------------------------------------------------

// const callback = (arg, fn) => {
//     console.log(arg);
//     fn();

// }

// const loadScript =  (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("HARSHHHHHH......",fn)
//     document.head.append(sc);

// }
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);


console.log("Welcome to promises");


let prom1 = new Promise((resolve, reject) => {

    let a=Math.random();
    if(a>0.5){
        reject("No random number is accepting or supporting you");
    }
    else{

        setTimeout(() => {
            console.log("I am done");
            resolve("HARSHU");
        }, 3000);
    }
    }) 

let prom2 = new Promise((resolve, reject) => {

    let a=Math.random();
    if(a>0.5){
        reject("No random number is accepting or supporting you");
    }
    else{

        setTimeout(() => {
            console.log("I am done");
            resolve("HARSHU where are you");
        }, 4000);
    }
    })
    
// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err)
// })


let p3=Promise.race([prom1, prom2])

p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
