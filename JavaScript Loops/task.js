//1//
for(let i=1; i<=10;i++){
     document.writeln(i);
}
document.writeln("<br>");
//2//

let i=1;
while(i<=10){
     document.writeln(i);
    i++
}
document.writeln("<br>");

// //3//
let number=[1,2,3,4,5];
for(i=0;i<5;i++){
    document.writeln(number[i]);
}
document.writeln("<br>");

//4//
for(let n=0;n<=10;n++){
    if(n % 2==0){
     document.writeln(n);
    }
}
document.writeln("<br>");
 
//5//
var Sum=0;
for(i=1;i<=10;i++){
    Sum=Sum+i;}
    document.writeln(Sum);
document.writeln("<br>");

//6//

let num=[1,2,3,4,5];
let largest=num[0];
for(i=0;i<5;i++){
    if(num[i]>largest){
    largest=num[i] }
     } 
     document.writeln(largest) ;  
    document.writeln("<br>");

 //7// 
 let num1 =[5,4,3,2,1];
 let smallest=num[0];

for( let i=0;i<5;i++){
    if(num[i]<smallest){
    smallest=num[i] }
     } 
     document.writeln(smallest) ;  
    document.writeln("<br>");

 //11//
 
 
 let array =[1,2,3,4,5];
 let sum=0;
 for( let r=0;r<5;r++){
   sum=sum+array[r];}
    let Avarage=sum/5;
    document.writeln(Avarage);
 
   document.writeln("<br>");


 //12//
 var factorial=1;
  for(let i=1;i<=5;i++)
    {factorial=factorial*i;}
    document.writeln(factorial);
    document.writeln("<br>");


//13// 

 
    
    // for(let i = 2; i <=20; i++) {
    //     if (i % i === )  
    // document.write(i);}
 



 //14// 
 let x=5;
 for( let y=1;y<=10;y++){
  let multiple =y*x;
  document.writeln(x, '*' ,y, "=", multiple +" , ");
 }document.writeln("<br>");



//15//
let k = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i+=2) {
  document.writeln(k[i]);
}document.writeln("<br>")


//16//
  let valu=[1,2,3,4,5];
for(let i=5;i>0;i--){
   document.writeln(i)}
   document.writeln("<br>")


//17//
let v=[1,2,3,4,5]
let start=[3,4,5,6,7,8];
for(const v of start){
    if(v<=5){
  document.writeln(v)}}
    document.writeln("<br>")

//18//
let D=[1,2,3,4,5];
let d=4;
for(let i=0;i<5;i++){
    if(D[i]==d){
      document.write(false);
      document.writeln("<br>")  
    }
}
//19//
frequency=0;
let H=[1, 2, 1, 3, 2, 1];
 for(i=0;i<=5;i++){
    if(H[i]==1)
     frequency+=1}
  document.write(frequency);
  document.writeln("<br>")

//20//
let b=1;
let a=0;
sum=0
for(let i=2;i<=8;i++){   
document.write(a);
sum=a+b;
a=b;
b=sum;}





    
   
    






