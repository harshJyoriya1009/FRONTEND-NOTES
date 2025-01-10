console.log("HELLO DEV..")

async function getData(){
//  SIMULATE GETTING DATA FROM A SERVER
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 5000);
    })
}

// async function getData(){                                                                       
//   let x=  await fetch('https://jsonplaceholder.typicode.com/todos/1')                 
//   let data = await x.json()                                          
//   // console.log(data)        
//   return 455;      
// }            
                     
// async function main(){
                      
// console.log("Making files")
                           
// console.log("Data intro")
                         
                       
// console.log("Load Data") 
// let data= await getData()
                          
//     console.log(data)
                                
//     console.log("Procces Data")
                              
//     console.log("TASK 2")
                         
// }                        
// main()

// async function postData(url="", data={}) {
//   const response =await fetch (url,{
//       method:"POST",
//       header: {
//           "Content -Type": "application/json",
//       },
//       body: JSON.stringify(data),
//   });
//   return response.json();
// }
// postData("https://example.com/answer", {answer:42}).then((data)=>{
//   console.log(data);
// })


// // data.then((v)=>{

// //     console.log(data);
    
// //     console.log("Procces Data")

// //     console.log("TASK 2")
// // })



