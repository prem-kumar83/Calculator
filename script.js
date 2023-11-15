let input= document.getElementById('userinput');
let btns= document.querySelectorAll('button');

let result= " ";
let array1= Array.from(btns);
array1.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=')
        {
            result=eval(result);
            input.value=result;
        }
        else if(e.target.innerHTML=='AC'){
            result="";
            input.value=result;
        }
        else if(e.target.innerHTML=='DEL'){
            result=result.substring(0, result.length-1);
            input.value=result;
        }
        else{
            result +=e.target.innerHTML;
            input.value=result;
    
        }
       
    })
})
