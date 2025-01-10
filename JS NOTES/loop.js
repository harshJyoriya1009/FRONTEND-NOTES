console.log("Hello India");

let a = 1;
for (let i = 0; i < 100; i++) {              //For loop
    console.log(a + i);
}

let obj = {
    name: "Harsh",
    company: "Trading center",
    Salary: 500000
}

for (const key in obj) {              //For in loop
    const element = obj[key]
    console.log(key, element)

}

for (const c of "Harshu") {        //For of loop
    console.log(c)
}


let i = 0;
while (i <= 5) {             //While loop
    console.log(i)
    i++;
}
i = 0;
do {
    console.log(i);     // Do while loop
    i++;
} while (i < 10)