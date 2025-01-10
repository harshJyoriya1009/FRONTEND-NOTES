async function getData(){
 SIMULATE GETTING DATA FROM A SERVER
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(455);
        }, 5000);
    })
}
