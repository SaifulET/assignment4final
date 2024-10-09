function show(){
    console.log(show.age);
}
show();
show.age=200;
show.age=100;
show();
const add=(num1,num2,num3=1)=>{
    return num1 + num2 + num3;
}
const result=add(5,10,10);
const resul=add(10,4);
console.log(result);
console.log(resul);