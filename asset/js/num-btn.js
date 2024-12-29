function minus(index){
    var num=Number(document.getElementsByClassName("num-text")[index].value);
    if (num>1){
        num-=1;
        document.getElementsByClassName("num-text")[index].value=num;
    }
}
function add(index){
    var num=Number(document.getElementsByClassName("num-text")[index].value);
    if (num<30){
        num+=1;
        document.getElementsByClassName("num-text")[index].value=num;
    }
}