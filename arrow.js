//solving the normal function problem using arrow function
//this is the major different the normal function and arrow function
class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    setPlacementAge(minPlacementAge){
        console.log(this);  
        return(minMarks)=>{
            console.log('inside the egligibleForCurrentCompany function '+this);
            if(this.marks>minMarks && this.age>minPlacementAge){
                console.log(this.name+ 'ready for placement');
            }else{
                console.log(this.name+'not ready for placement');
            }
        }
    }
}


const sam=new Student('Sam',25,75);
const mahi=new Student('Mahi',12,35);

sam.setPlacementAge(18)(40);