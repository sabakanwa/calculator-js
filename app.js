function getnum(num){
    document.getElementById('result').value +=num;
}
function getResult(){
    document.getElementById('result').value = eval(document.getElementById('result').value);
}
function clearall(){
    document.getElementById('result').value ='';
}
function removeNum(){
    var x = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,x.length-1);
}