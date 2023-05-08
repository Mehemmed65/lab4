let a=+(prompt("Birinci ədəd: "));
let b=+(prompt("ikinci ədəd: "));
let cem=0;
let hasil=1;


while(a<=b){
cem+=a;
hasil*=a;
a++;
}

alert("cəm: "+cem+" hasil: "+hasil);