let result = document.getElementById('input-text');

let calculate=(number)=>{
    result.value += number
}

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Enter the valid result");
    }
}


