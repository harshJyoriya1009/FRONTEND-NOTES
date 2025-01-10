console.log("Hello world!!!!")


async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
function sum(a,b,c){
    return a+b+c
}

(async function main() {

    // let a= await sleep();
    // console.log(a);
    // let b= await sleep();
    // console.log(b)

    // let [x, y, ...rest] = [5, 7, 3,6 ,8 ,3 ,6 ,9 ,0]
    // console.log(x, y, rest)

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 7
    // }
    // let { a, b } = obj
    // console.log(a, b)
    
    let arr=[3,5,7,6]
    console.log(arr[0]+ arr[1]+ arr[2])
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))
})()



