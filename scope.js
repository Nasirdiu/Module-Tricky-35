function local(a,b){
    const sum=a+b;
    // console.log(sum);
    return sum;
}

const result=local(50,30);
//block  var diea korle kaj hba let const dila vtor a consol .log korte hba.
/* function local(a,b){
    const sum=a+b;
    if(sum>9){
        let mod='happy';
        
    }
    console.log(mod);
    return sum;
}

const results=local(50,30); */

//Gobal scope
function local(a,b){
    const sum=a+b;
    if(sum>9){
        let  mod='happy';
         mod='tapi';  
    }
    console.log(mod);
    return sum;
}
const results=local(50,30);
