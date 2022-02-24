function myback(name,good){
    good(name);
}

// const names=['tom','kom','jerry','perry'];
// const names={name:'falto',phone:'01475223355',color:'red',price:552565,};
function good(names){
    console.log(names,'good night');
}
function goodMorning(names){
    console.log(names,'good morning');
}
myback('ato kothin koris na vai',good);
myback('ato kothin koris na vai',goodMorning);