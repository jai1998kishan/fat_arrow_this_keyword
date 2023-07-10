
//this refere to current object which is calling the function


class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }

    setPlacementAge(minPlacementAge){
        console.log(this);   //refere student object
        return function egligibleForCurrentCompany(minMarks){
            console.log('inside the egligibleForCurrentCompany function '+this); //undefined      this what is the problem with normal function
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