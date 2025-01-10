// The magical sorting hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JS fuction that takes an array of student name and assigns them to one of the foure houses (Mercury (length less than 6), Venus(length less then 8), Jupiter (length less than 12), or Mars (greater less than 12)) based on the length of their names.

let students=["Harsh", "Atif", "Aditi", "Manu", "Shubhi", "Prohit", "Dev", "Sachin", "Rahul", "Shivam", "Sachin", "jagdishSharma"]

let houses=[]
 
for (const student of students) {
    if(student.length<6){
        houses.push("Mercury")
    }
    else if(student.length<8){
        houses.push("Venus")
    }
    else if(student.length<12){
        houses.push("Jupiter")
    }
    else {
        houses.push("Mars")
    }
    
}
console.log(houses)

