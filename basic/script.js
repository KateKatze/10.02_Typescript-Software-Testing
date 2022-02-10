"use strict";
let person = {
    name: "Ivan",
    age: 29,
    jobTitle: "Web Dev",
    printMsg: function () {
        return `My name is ${this.name},i am ${this.age} years old and i work as a(n) ${this.jobTitle}`;
    }
};
// const doc = (document.getElementById("test") as HTMLElement);
// doc.innerHTML = person.msg();
document.write(person.printMsg());
