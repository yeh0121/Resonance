document.onreadystatechange=function(){
    console.log(document.readyState);
    if(document.readyState=="complete"){
        $("#preloader").delay(250).fadeOut();
        $("#status").delay(500).fadeOut();
    }
}    
