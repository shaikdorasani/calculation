let operator='';
let firstnumber='';
let secondnumber='';
function AppendNumber(num){
    if(operator===''){
        firstnumber+=num;
        document.getElementById('result').value=firstnumber;
    }
    else{
        secondnumber+=num;
        document.getElementById('result').value=secondnumber;
    }
}
function calculate(){
    let result;
    switch(operator){
        case'+':
        result=parseInt(firstnumber) + parseInt(secondnumber);
        break;
        case'-':
        result=parseInt(firstnumber) - parseInt(secondnumber);
        break;
        case'*':
        result=parseInt(firstnumber) * parseInt(secondnumber);
        break;
        case'/':
        result=parseInt(firstnumber) / parseInt(secondnumber);
        break;
    }
    document.getElementById('result').value=result;
}
function SetOperator(op){
operator=op;
}
function clearresult(){
    operator='';
    firstnumber='';
    secondnumber='';
document.getElementById('result').value='';
}