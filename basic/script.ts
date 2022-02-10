let person: {
    name: string;
    age: number;
    jobTitle: string;
    printMsg: Function
} = {
    name: "Ivan",
    age: 29,
    jobTitle: "Web Dev",
    printMsg: function(){
        return `My name is ${this.name},i am ${this.age} years old and i work as a(n) ${this.jobTitle}`
    }
}
// const doc = (document.getElementById("test") as HTMLElement);
// doc.innerHTML = person.msg();
document.write(person.printMsg());

// class person {
//     name: string;
//     age: number;
//     jobTitle: string;
//     // printMsg: Function
//     constructor (name:string,age:number,jobTitle:string){
//         this.name = name;
//         this.age = age;
//         this.jobTitle = jobTitle;
//     }
//  } 
// class worker extends person {
// salary: number;
// location: string;
// constructor (name:string,age:number,jobTitle:string,salary:number,location:string){
//     super(name,age,jobTitle);
//     this.salary=salary;
//     this.location=location;
//    }
// printFullinfo(){return `Person name is ${this.name} his/her age is ${this.age} and he/she works as ${this.jobTitle} and he/she get ${this.salary} and works in ${this.location}`;}
// // printFullinfo();
// }

// let worker1 = new worker ("Anna",30,"Back End Dev",2000,"Austria");

// const doc = (document.getElementById("test") as HTMLElement);
// doc.innerHTML = worker1.printFullinfo();

// // console.log(printFullinfo())

