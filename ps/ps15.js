let DATA = "secret information";
class User{
    constructor(name,email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log("data=",DATA);
        
    }

}

class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "new value";
    }
}

let student1 = new User("kishan","kishan1@gmail.com");
let student2 = new User("pandey","pandey1@gmail.com");

let amdmin1 = new Admin("admin","admin@gmail.com");