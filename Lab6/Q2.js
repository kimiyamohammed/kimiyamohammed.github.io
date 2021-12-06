function printNumbers(from,to){
    console.log('Question 2: ')
    let timerId = setInterval(function(){
        console.log(from);
        alert(from);       
        from++;
        if(from === to){
            clearInterval(timerId);
        }
    }, 1000);
    
}
printNumbers(11,15);